---
slug: react-native-navigation
title: react-navigation/native 在组件外使用路由跳转功能
category: ReactNative
type: snippet
description: react-navigation/native 在组件外使用路由跳转功能。
status: published
tags: RN, navigation
updatedAt: 2024-05-14
---

首先，创建一个 `NavigationService.js` 文件来管理导航引用。

```JavaScript
// NavigationService.js
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function replace(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name, params }],
    });
  }
}
```

然后在主导航容器组件中，使用 navigationRef。

```JavaScript
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

在外部文件中引入并使用 navigate ，如请求封装文件：

```JavaScript
// request.js
import axios from 'axios';
import { navigate } from './NavigationService';

const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 40105) {
      navigate('Login');
    }
    return Promise.reject(error);
  }
);

export default instance;
```
