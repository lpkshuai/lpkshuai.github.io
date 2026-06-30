---
slug: moment-get-different-date
title: Moment.js 获取前几天和后几天时间
category: JavaScript
type: snippet
description: Moment.js 获取前几天和后几天时间的方法。
status: published
tags: JavaScript, Frontend, Snippet
updatedAt: 2021-06-12
---

### 1. 获取今天

```js
import moment from "moment";
moment().startOf("day");
```

### 2. 获取本周

```js
import moment from "moment";
moment().startOf("week");
```

### 3. 获取n天前的日期

```js
import moment from "moment";

// subtract向前获取日期
moment().subtract(n, 'days');
// startOf获取当天的00:00:00
moment().subtract(n, 'days').startOf("day").format("YYYY-MM-DD HH:mm:ss");
// endOf获取当天的23:59:59
moment().subtract(n, 'days').endOf("day").format("YYYY-MM-DD HH:mm:ss");
```

### 4. 获取n天后的日期

```js
import moment from "moment";

// add向后获取日期
moment().add(n, 'days');
// startOf获取当天的00:00:00
moment().add(n, 'days').startOf("day").format("YYYY-MM-DD HH:mm:ss");
// endOf获取当天的23:59:59
moment().add(n, 'days').endOf("day").format("YYYY-MM-DD HH:mm:ss");
```
