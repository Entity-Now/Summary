# ADB (Android Debug Bridge) 命令大全

Android 调试桥 (adb) 是一种功能多样的命令行工具，可让您与设备进行通信。

## 1. 基础连接命令
- `adb devices`: 查看当前连接的设备列表。
- `adb get-state`: 获取设备状态 (device, recovery, unknown, offline)。
- `adb kill-server`: 终止 adb 服务。
- `adb start-server`: 启动 adb 服务。
- `adb -s <serial_number> <command>`: 对指定序列号的设备执行命令。

## 2. 无线连接 (ADB over WiFi)
1. 将设备通过 USB 连接到电脑。
2. `adb tcpip 5555`: 设置设备监听端口。
3. 断开 USB 连接。
4. `adb connect <device_ip_address>:5555`: 连接到设备。
5. `adb disconnect`: 断开连接。

## 3. 文件操作
- `adb push <local> <remote>`: 将文件/目录从电脑推送到设备。
- `adb pull <remote> <local>`: 将文件/目录从设备拉取到电脑。
- `adb shell ls /sdcard/`: 查看设备文件目录。

## 4. 应用管理
- `adb install <path_to_apk>`: 安装 APK。
- `adb install -r <path_to_apk>`: 覆盖安装。
- `adb uninstall <package_name>`: 卸载应用。
- `adb uninstall -k <package_name>`: 卸载应用但保留数据和缓存。
- `adb shell pm list packages`: 列出所有已安装的包名。
  - `-s`: 只列出系统应用。
  - `-3`: 只列出第三方应用。
  - `-f`: 显示关联的 APK 文件路径。
- `adb shell pm path <package_name>`: 查看应用的安装路径。
- `adb shell pm clear <package_name>`: 清除应用数据和缓存。

## 5. 交互与调试
- `adb shell`: 进入设备的 shell 模式。
- `adb logcat`: 查看实时日志。
  - `adb logcat *:E`: 只查看错误级别日志。
  - `adb logcat -c`: 清除旧日志。
- `adb shell dumpsys activity top`: 查看当前栈顶 Activity。
- `adb shell am start -n <package>/<activity>`: 启动指定 Activity。
- `adb shell am force-stop <package>`: 强制停止应用。
- `adb shell input text <text>`: 模拟输入文本。
- `adb shell input tap <x> <y>`: 模拟点击。
- `adb shell input keyevent <keycode>`: 模拟按键（如 26 为电源键，66 为回车）。

## 6. 系统与信息
- `adb shell getprop ro.product.model`: 获取设备型号。
- `adb shell getprop ro.build.version.release`: 获取 Android 版本。
- `adb shell wm size`: 查看屏幕分辨率。
- `adb shell wm density`: 查看屏幕密度。
- `adb shell screencap /sdcard/screen.png`: 屏幕截图。
- `adb shell screenrecord /sdcard/demo.mp4`: 录制屏幕。

## 7. 刷机相关
- `adb reboot`: 重启设备。
- `adb reboot recovery`: 重启到 Recovery 模式。
- `adb reboot bootloader`: 重启到 Fastboot 模式。
- `adb sideload <ota.zip>`: 线刷固件包。
