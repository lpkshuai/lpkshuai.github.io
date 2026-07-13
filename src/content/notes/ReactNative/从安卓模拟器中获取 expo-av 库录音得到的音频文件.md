---
slug: react-native-expo-av
title: 从安卓模拟器中获取 expo-av 库录音得到的音频文件
category: ReactNative
type: snippet
description: 从安卓模拟器中获取 expo-av 库录音得到的音频文件 file:///data/user/0/mo.com.nccl.xxx/cache/Audio。
status: published
tags: RN, Expo, Audio
updatedAt: 2023-09-23
---

**在使用 `expo-av` 录制音频时，录制结束通过 `recording.getURI()` 可以获取得到的音频文件的地址。**
![image](/notes/react-native/rn-expo-av-recording.png)
**想要获取该文件可以通过发送请求的方式：**

```js
const uri = recording.getURI();
let response = await fetch(uri);
let blob = await response.blob();
```

**如果想直接根据文件路径找到这个文件：**

1. 首先打开 `Android Studio` ，打开 `Device Manager` ，找到对用的模拟器，点击文件夹图标打开 `Device Explorer` ，找到 `data/data` 文件夹。

![image](/notes/react-native/rn-expo-av-recording-file-1.png) 2. 将data文件夹拉到最底部，找到对应的项目文件夹 `mo.com.nccl.xxxx` ：

![image](/notes/react-native/rn-expo-av-recording-file-2.png) 3. 展开该文件夹下的 `cache/Audio` ，即可找到录制的音频文件：

![image](/notes/react-native/rn-expo-av-recording-file-3.png)
