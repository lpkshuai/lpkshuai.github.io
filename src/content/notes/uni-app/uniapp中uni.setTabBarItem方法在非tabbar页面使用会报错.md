---
slug: uni-app-setTabBarItem-error
title: uniapp中uni.setTabBarItem方法在非tabbar页面使用会报错
category: UniApp
type: debugging
description: uniapp中uni.setTabBarItem方法在非tabbar页面使用会报错问题记录。
status: published
tags: UniApp, I18n, 小程序
updatedAt: 2024-11-12
---

### 背景：

uniapp在开发小程序多语言切换功能时，使用`uni.setTabBarItem`方法切换tabbar语言时报错，查阅文档发现微信小程序该功能只能在tabbar页面或其子页面中使用，不能在其他页面直接使用。

### 解决：

在tabbar页面中使用onShow方法监听切换语言设置，部分代码示例如下：

```jsx
<script setup>
import { onShow } from '@dcloudio/uni-app';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

onShow(() => {
  updateTabBarText();
});

const updateTabBarText = () => {
  uni.setTabBarItem({
    index: 0,
    text: t('tabBar.index')
  });
  uni.setTabBarItem({
    index: 1,
    text: t('tabBar.my')
  });
};
</script>
```
