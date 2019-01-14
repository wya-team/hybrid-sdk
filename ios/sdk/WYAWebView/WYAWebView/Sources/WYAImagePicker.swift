//
//  ImagePicker.swift
//  Alamofire
//
//  Created by 李世航 on 2018/8/16.
//

import AVFoundation
import Photos
import UIKit

class ImagePicker: NSObject, AVCaptureFileOutputRecordingDelegate {
    var videoPath: String?

    lazy var captureSession: AVCaptureSession = {
        let session = AVCaptureSession()
        /// 设置分辨率
        if session.canSetSessionPreset(AVCaptureSession.Preset(rawValue: "1280x720")) {
            session.sessionPreset = AVCaptureSession.Preset(rawValue: "1280x720")
        }

        if session.canAddInput(backCameraInput!) {
            session.addInput(backCameraInput!)
        }

        if session.canAddInput(audioMicInput!) {
            session.addInput(audioMicInput!)
        }

        if session.canAddOutput(captureMovieFileOutput) {
            session.addOutput(captureMovieFileOutput)
        }

        if session.canAddOutput(imageOutPut) {
            session.addOutput(imageOutPut)
        }
        videoConnection.videoOrientation = .portrait
        return session
    }() // 负责输入和输出设备之间的连接会话,数据流的管理控制

    lazy var previewLayer: AVCaptureVideoPreviewLayer = {
        let perview = AVCaptureVideoPreviewLayer(session: captureSession)
        perview.videoGravity = .resizeAspectFill
        return perview
    }() // 捕获到的视频呈现的layer

    lazy var backCameraInput: AVCaptureDeviceInput? = {
        let back: AVCaptureDeviceInput
        let camera = self.backCamera()
        do {
            try back = AVCaptureDeviceInput(device: camera!)
            return back
        } catch {
            print(error)
            return nil
        }

    }() // 后置摄像头输入

    lazy var frontCameraInput: AVCaptureDeviceInput? = {
        let front: AVCaptureDeviceInput
        let camera = self.frontCamera()
        do {
            try front = AVCaptureDeviceInput(device: camera!)
            return front
        } catch {
            print(error)
            return nil
        }
    }() // 前置摄像头输入

    lazy var audioMicInput: AVCaptureDeviceInput? = {
        let mic = AVCaptureDevice.default(for: .audio)
        let audioMic: AVCaptureDeviceInput
        do {
            try audioMic = AVCaptureDeviceInput(device: mic!)
            return audioMic
        } catch {
            print(error)
            return nil
        }
    }() // 麦克风输入

    lazy var videoConnection: AVCaptureConnection = {
        let video = self.captureMovieFileOutput.connection(with: .video)
        if (video?.isVideoStabilizationSupported)! {
            video?.preferredVideoStabilizationMode = .auto
        }
        return video!
    }() // 视频录制连接

    lazy var captureMovieFileOutput: AVCaptureMovieFileOutput = {
        let output = AVCaptureMovieFileOutput()
        return output
    }() // 视频输出流

    lazy var imageOutPut: AVCaptureStillImageOutput = {
        let imageOutPut = AVCaptureStillImageOutput()
        return imageOutPut
    }() // 照片输出流

    /// 启动录制功能
    public func startRecordFunction() {
        captureSession.startRunning()
    }

    /// 关闭录制功能
    public func stopRecordFunction() {
        captureSession.stopRunning()
    }

    /// 开始录制
    public func startCapture() {
        if captureMovieFileOutput.isRecording {
            return
        }
        // 需要指定写入视频路径
        let filePath = URL(fileURLWithPath: "视频路径")
        captureMovieFileOutput.startRecording(to: filePath, recordingDelegate: self as AVCaptureFileOutputRecordingDelegate)
    }

    /// 停止录制
    public func stopCapture() {
        if captureMovieFileOutput.isRecording {
            captureMovieFileOutput.stopRecording()
        }
    }

    func startTakingPhoto(handle: @escaping (_ image: UIImage) -> Void) {
        let videoConnection = imageOutPut.connection(with: .video)
        if videoConnection == nil {
            return
        }
        imageOutPut.captureStillImageAsynchronously(from: videoConnection!) { imageDataSampleBuffer, _ in
            if imageDataSampleBuffer == nil {
                return
            }
            let imageData = AVCaptureStillImageOutput.jpegStillImageNSDataRepresentation(imageDataSampleBuffer!)
            let imagee = UIImage(data: imageData!)
            handle(imagee!)
        }
    }

    /// 开启闪光灯
    public func openFlashLight() {
        // 改变会话的配置前一定要先开启配置，配置完成后提交配置改变
        captureSession.beginConfiguration()
        let backCamera = self.backCamera()
        if backCamera?.torchMode == AVCaptureDevice.TorchMode.off {
            do {
                try backCamera?.lockForConfiguration()
            } catch {
                print(error)
            }
            backCamera?.torchMode = .on
            backCamera?.flashMode = .on
            backCamera?.unlockForConfiguration()
        }
        captureSession.commitConfiguration()
        startRecordFunction()
    }

    /// 关闭闪光灯
    public func closeFlashLight() {
        // 改变会话的配置前一定要先开启配置，配置完成后提交配置改变
        captureSession.beginConfiguration()
        let backCamera = self.backCamera()
        if backCamera?.torchMode == AVCaptureDevice.TorchMode.on {
            do {
                try backCamera?.lockForConfiguration()
            } catch {
                print(error)
            }
            backCamera?.torchMode = .off
            backCamera?.flashMode = .off
            backCamera?.unlockForConfiguration()
        }
        captureSession.commitConfiguration()
        startRecordFunction()
    }

    /// 切换前后置摄像头
    ///
    /// - Parameter isFront: <#isFront description#>
    public func changeCameraInputDeviceisFront(isFront: Bool) {
        startRecordFunction()
        captureSession.beginConfiguration()
        if isFront {
            captureSession.removeInput(backCameraInput!)
            if captureSession.canAddInput(frontCameraInput!) {
                captureSession.addInput(frontCameraInput!)
            }
        } else {
            captureSession.removeInput(frontCameraInput!)
            if captureSession.canAddInput(backCameraInput!) {
                captureSession.addInput(backCameraInput!)
            }
        }
        captureSession.commitConfiguration()
        startRecordFunction()
    }

    func backCamera() -> AVCaptureDevice? {
        let device = cameraWithPosition(position: .back)
        return device
    }

    func frontCamera() -> AVCaptureDevice? {
        let device = cameraWithPosition(position: .front)
        return device
    }

    func cameraWithPosition(position: AVCaptureDevice.Position) -> AVCaptureDevice? {
        // 返回和视频录制相关的所有默认设备
        let devices = AVCaptureDevice.devices(for: .video)
        // 遍历这些设备返回跟position相关的设备
        for device in devices {
            if device.position == position {
                return device
            }
        }
        return nil
    }

    func fileOutput(_ output: AVCaptureFileOutput, didFinishRecordingTo outputFileURL: URL, from connections: [AVCaptureConnection], error: Error?) {
        // 视频录制完成
    }

    /// 保存图片至本地
    ///
    /// - Parameter image: 图片
    func saveImageWithImage(image: UIImage) {
    }
}

extension ImagePicker {
    /// 判断相机是否可用
    ///
    /// - Returns: bool
    public func isAvailableWithCamera() -> Bool {
        return isAvailableWithDeviveMediaType(mediaType: .video)
    }

    /// 判断麦克风是否可用
    ///
    /// - Returns: bool
    public func isAvailableWithMic() -> Bool {
        return isAvailableWithDeviveMediaType(mediaType: .audio)
    }

    func isAvailableWithDeviveMediaType(mediaType: AVMediaType) -> Bool {
        let status = AVCaptureDevice.authorizationStatus(for: .video)
        if status == .denied || status == .restricted {
            return false
        } else {
            return true
        }
    }
}
