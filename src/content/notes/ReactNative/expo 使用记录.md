---
slug: react-native-expo-use
title: expo 使用记录
category: ReactNative
type: guide
description: expo 一些使用过程中的调试或配置等记录。
status: published
tags: RN, Expo
updatedAt: 2025-04-29
---

# 一、调试：

### 1. React DevTools

> 通过在启动 Expo 的终端中按Shift+m打开。

![image](/notes/react-native/rn-expo-devtools.png)

### 2. Developer menu(开发者菜单)

> 开启方式：
> 模拟器：`CTRL` + `m` / `cmd⌘` + `m`
> 手机：摇晃设备

![image](/notes/react-native/rn-expo-developer-menu.png)

### 3. React Native Debugger

> 不支持使用 Hermes 的 app

### 4. Flipper

# 构建

```sh
eas build --profile development --platform android
// 本地构建
eas build --profile development --platform android --local
```

# 打包

1. 配置eas.json

```json
{
  "cli": {
    "version": ">= 5.2.0",
    "promptToConfigurePushNotifications": false,
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      },
      "android": {
        "env": {
          "ANDROID_SDK_ROOT": "/Users/xiaozhi/Library/Android/sdk"
        },
        "buildType": "apk",
        "gradleCommand": ":app:assembleDebug"
      }
    },
    "preview": {
      "android": {
        "env": {
          "ANDROID_SDK_ROOT": "/Users/xiaozhi/Library/Android/sdk"
        },
        "buildType": "apk"
      },
      "ios": {
        "credentialsSource": "local"
      },
      "distribution": "internal"
    },
    "production": {
      "android": {
        "buildType": "app-bundle",
        "env": {
          "ANDROID_SDK_ROOT": "/Users/xiaozhi/Library/Android/sdk"
        }
      },
      "ios": {
        "credentialsSource": "local"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

> preview和production中buildType为apk打包出的文件是.apk文件，app-bundle打包出的文件是谷歌应用商店使用的.aab文件。
>
> ### [eas.json相关详细配置](https://docs.expo.dev/eas/json/ "eas.json相关详细配置")
>
> 2. 设置版本号
>    每次打包上传版本号要求递增

```sh
eas build:version:set -p android
```

3. 打包

```sh
eas build --local -p android --profile preview
```

> --local 代表本地打包，去掉则会在expo平台线上打包；
> -p 代表平台
> --profile 代表使用eas.json中的build中配置的不同类型（preview/production/其它）

4. ios版本指令基本相同，-p设置为ios
   如果要提交线上打包文件到应用商店

```sh
eas submit -p ios
```

# 其它

### 1. 更新SDK版本

```sh
npx expo install expo@latest
#或
npx expo install expo@^52.0.0
```

升级依赖项

```sh
npx expo install --fix
```

> [Upgrade Expo SDK](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/ "Upgrade Expo SDK")
