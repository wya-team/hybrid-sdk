#
# Be sure to run `pod lib lint WYAWebView.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'WYAWebView'
  s.version          = '0.1.0'
  s.summary          = 'A short description of WYAWebView.'

# This description is used to generate tags and improve search results.
#   * Think: What does it do? Why did you write it? What is the focus?
#   * Try to keep it short, snappy and to the point.
#   * Write the description between the DESC delimiters below.
#   * Finally, don't worry about the indent, CocoaPods strips it!

  s.description      = 'hybrid-sdk'

  s.homepage         = 'https://github.com/wya-team/hybrid-sdk'
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'wya-team' => 'zrd@weiyian.com' }
  s.source           = { :git => 'https://github.com/wya-team/hybrid-sdk.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/<TWITTER_USERNAME>'

  s.ios.deployment_target = '8.0'
  s.static_framework = true
  s.source_files = 'ios/sdk/WYAWebView/WYAWebView/**/*.{h,m,swift}'
  
  s.resources = 'pre-build/*.js'
  
  s.resource_bundles = {
    'WYAWebView' => ['WYAWebView/Assets/WYAWebView.bundle/*']
  }

  # s.public_header_files = 'Pod/Classes/**/*.h'
  # s.frameworks = 'UIKit', 'MapKit'
  s.dependency 'Alamofire', '~> 4.7'
  s.dependency 'MJRefresh'
  s.dependency 'SnapKit'
  # s.dependency 'ReachabilitySwift'
end
