//
//  WYAPhotoModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
import WYAKit



// MARK: photo 模块
extension WYAWebViewManager{

    /// photo方法配置表
    func photoDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(getPictureWithParams(outParams:)), forKey: "get")

        params.updateValue(#selector(saveMediaToAlbumWithParams(outParams:)), forKey: "save")

        return params
    }

    @objc func getPictureWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController

        let model = getModel(outParams["params"] as! [String: Any]) as GetPictureModel
        switch model.sourceType {
        case "camera":
            var camera: WYACameraViewController?
            var orientation: WYACameraOrientation?

            if model.direction! {
                orientation = .front
            } else {
                orientation = .back
            }

            if model.mediaValue == "pic" {
                camera = WYACameraViewController(type: .image, cameraOrientation: orientation!)
            } else if model.mediaValue == "video" {
                camera = WYACameraViewController(type: .video, cameraOrientation: orientation!)
            } else {
                camera = WYACameraViewController(type: .all, cameraOrientation: orientation!)
            }

            if model.videoQuality == "low" {
                camera?.preset = .low
            } else if model.videoQuality == "medium" {
                camera?.preset = .medium
            } else if model.videoQuality == "high" {
                camera?.preset = .high
            }

            camera?.saveAblum = model.saveToPhotoAlbum!
            camera?.albumName = model.groupName

            camera?.takePhoto = { image, url in
                var data: Data?
                if model.encodingType == "png" {
                    let img = UIImage.wya_ImageCompressFitSizeScale(image!, targetSize: CGSize(width: model.targetWidth!, height: model.targetHeight!))

                    data = UIImagePNGRepresentation(img!)

                } else if model.encodingType == "jpg" {
                    let img = UIImage.wya_ImageCompressFitSizeScale(image!, targetSize: CGSize(width: model.targetWidth!, height: model.targetHeight!))
                    data = UIImageJPEGRepresentation(img!, CGFloat(model.quality! / 100))
                }

                if model.destinationType == "url" {
                    if model.saveToPhotoAlbum == false {
                        self.listenAction(developParams["actionID"] as! String, [
                            "status": "0",
                            "msg": "参数不匹配",
                            "data": NSNull()
                            ])
                    } else {
                        self.listenAction(developParams["actionID"] as! String,
                                          [
                                            "status": "1",
                                            "msg": "调用成功",
                                            "data": [
                                                "list":
                                                    ["url": url]
                                            ]
                            ])
                    }
                } else if model.destinationType == "base64" {
                    let base = data?.base64EncodedString()
                    self.listenAction(developParams["actionID"] as! String,
                                      [
                                        "status": "1",
                                        "msg": "调用成功",
                                        "data": [
                                            "list":
                                                ["base64": base]
                                        ]
                        ])
                }
            }
            camera?.takeVideo = { url in
                self.listenAction(developParams["actionID"] as! String,
                                  [
                                    "status": "1",
                                    "msg": "调用成功",
                                    "data": [
                                        "list":
                                            ["url": url]
                                    ]
                    ])
            }
            DispatchQueue.main.async {
                rootVC.present(camera!, animated: true, completion: nil)
            }

            break
        case "album":
            var photoBrowser: WYAPhotoBrowser?

            if model.mediaValue == "pic" {
                photoBrowser = WYAPhotoBrowser(maxCount: 1, photoBrowserType: .photo)
            } else if model.mediaValue == "video" {
                photoBrowser = WYAPhotoBrowser(maxCount: 1, photoBrowserType: .video)
            }
            photoBrowser?.callBackBlock = { images in
                var items = [[String: Any]]()
                for image in images {
                    var item = [String: Any]()

                    if image is UIImage {
                        let img = UIImage.wya_ImageCompressFitSizeScale(image as? UIImage, targetSize: CGSize(width: model.targetWidth!, height: model.targetHeight!))

                        var data: Data?
                        if model.encodingType == "png" {
                            data = UIImagePNGRepresentation(img!)
                        } else if model.encodingType == "jpg" {
                            data = UIImageJPEGRepresentation(img!, CGFloat(model.quality! / 100))
                        }
                        let base64 = data?.base64EncodedString()
                        item["base64"] = base64
                    } else if image is URL {
                        item["url"] = (image as! URL).absoluteString
                    }
                    items.append(item)
                }

                self.listenAction(developParams["actionID"] as! String, [
                    "status": "1",
                    "msg": "调用成功",
                    "data": ["list": items]
                    ])
            }

            DispatchQueue.main.async {
                rootVC.present(photoBrowser!, animated: true, completion: nil)
            }

            break
        default:
            break
        }
    }


    @objc func saveMediaToAlbumWithParams(outParams: [String: Any]) {
        let param = outParams["params"] as! [String: Any]
        let url = param["url"] as! String
        let type = param["mediaType"] as! String

        let tool = WYACameraTool(cameraOrientation: .front)
        tool?.albumName = param["groupName"] as? String
        switch type {
        case "pic":
            let data = try? Data(contentsOf: URL(string: url)!)
            tool?.savePhtots(with: UIImage(data: data!), videoUrl: nil, callBack: { _, _ in

            })
            break
        case "video":

            let downloader = WYADownloader.shared()

            let model = WYADownloadModel()
            model.urlString = "https://vd1.bdstatic.com/mda-hgvt5nvfzpftdxcs/sc/mda-hgvt5nvfzpftdxcs.mp4"
            model.addObserver(self, forKeyPath: "downloadState", options: .new, context: nil)
            downloader.wya_DownloadTask(with: model) { _, result in
                print(result)
            }
            self.callback = { () in
                DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
                    let data = try! Data(contentsOf: URL(fileURLWithPath: model.destinationPath))
                    print(data)
                    tool?.savePhtots(with: nil, videoUrl: URL(fileURLWithPath: model.destinationPath), callBack: { _, _ in

                    })
                }
            }

            break
        default:
            break
        }
    }

}

extension WYAWebViewManager {
    /// 保存网络视频到本地相册
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey: Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == "downloadState" {
            let prog = change![.newKey] as! WYADownloadState.RawValue
            if prog == 4 {
                self.callback()
            }
        }
    }
}
