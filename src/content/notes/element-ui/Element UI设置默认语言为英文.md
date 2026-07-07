---
slug: element-ui-locale-lang-en
title: Element UI设置默认语言为英文
category: Vue
type: snippet
description: Element UI设置默认语言为英文。
status: published
tags: Vue, Element, Snippet
updatedAt: 2023-03-09
---

### 1. 完整引入：

```js
import Vue from "vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";

Vue.use(ElementUI, { locale });
```

### 2. 按需引入：

```js
import Vue from "vue";
import { Button, Select } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

// 设置语言
locale.use(lang);

// 引入组件
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
```

### 3. 文档：

[element官方文档](https://element.eleme.cn/#/zh-CN/component/i18n "官方文档")
