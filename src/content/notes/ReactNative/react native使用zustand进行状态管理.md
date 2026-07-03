---
slug: react-native-zustand
title: react native使用zustand进行状态管理
category: ReactNative
type: snippet
description: react native使用zustand进行状态管理简要步骤记录。
status: published
tags: RN, zustand
updatedAt: 2023-10-11
---

## 1. 安装：

```shell
# NPM
npm install zustand

# Yarn
yarn add zustand
```

## 2. 创建store：

```js
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  str: "",
  addCount: () => set((state) => ({ count: state.count + 1 })),
  setStr: (newStr) => set(() => ({ str: newStr })),
}));

export default useStore;
```

## 3. 组件内使用：

```js
import { Button, View, Text } from "react-native";
import { useStore } from "./store";
export default function Page() {
  const count = useStore((state) => state.count);
  const str = useStore((state) => state.str);
  const addCount = useStore((state) => state.addCount);
  const setStr = useStore((state) => state.setStr);

  const clickHandle = () => {
    addCount();
    setStr("a new string");
  };
  return (
    <View>
      <Text>{count}</Text>
      <Text>{str}</Text>
      <Button onPress={clickHandle} title="Click Button" color="#841584">
        点击
      </Button>
    </View>
  );
}
```

## 4. 外部文件中使用并获取更新状态

通过getState方法获取数据，通过subscribe方法订阅监听数据变更

```js
import { useStore } from "./store";
const count = useStore.getState().count;
useStore.subscribe((newState) => {
  console.log(newState.count);
});
```

## 5. 更多

[官方网址](https://zustand-demo.pmnd.rs/ "官方网址")
[文档地址](https://docs.pmnd.rs/zustand/getting-started/introduction "文档地址")
