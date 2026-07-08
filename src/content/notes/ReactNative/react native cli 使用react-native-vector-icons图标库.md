---
slug: react-native-vector-icons
title: react native cli 使用react-native-vector-icons图标库
category: ReactNative
type: guide
description: react native cli 使用react-native-vector-icons图标库的步骤。
status: published
tags: RN, icons
updatedAt: 2024-03-15
---

### 1. 安装

```bash
npm install --save react-native-vector-icons
```

### 2. 修改配置

[详见该说明](https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#android-setup "详见该说明")

> 安卓且使用 Gradle：修改`android/app/build.gradle`文件，
> 添加`apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")`。
> ![image](/notes/react-native/rn-vector-icons-gradle-config.png)

### 3. 使用图标

```js
import Icon from "react-native-vector-icons/Ionicons";

function ExampleView(props) {
  return <Icon name="ios-person" size={30} color="#4F8EF7" />;
}
```

> 图标库的图标来自不同渠道，使用时引入对应的模块即可：
> 如：
> `Ionicons`下的图标，就引入`import Ionicons from 'react-native-vector-icons/Ionicons';`
> 使用：`<Ionicons name="ios-person" size={30} color="#4F8EF7" />`
> `AntDesign`下的图标，就引入`import AntDesign from 'react-native-vector-icons/AntDesign';`
> 使用：`<AntDesign name="ios-person" size={30} color="#4F8EF7" />`
> ![image](/notes/react-native/rn-vector-icons-import-doc-1.png)
> 图标集合列举：
> ![image](/notes/react-native/rn-vector-icons-import-doc-2.png)

### 4. 官网

[react-native-vector-icons GitHub地址](https://github.com/oblador/react-native-vector-icons "react-native-vector-icons GitHub地址")
[官网图标地址](https://oblador.github.io/react-native-vector-icons/ "官网图标地址")
[ios中配置字体icon](https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06 "ios中配置字体icon")
