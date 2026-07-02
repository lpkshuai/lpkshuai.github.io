---
slug: vue3-echarts-packaged
title: Vue3 + echarts 统一封装
category: Echarts
type: snippet
description: 记录 vue3 中，echarts 封装成公共方法。
status: published
tags: Vue，Echarts
updatedAt: 2023-02-23
---

### 1. 新建 _echartsLib.js_ 文件，统一导入需要的组件

```js
import * as echarts from "echarts/core";

import { SVGRenderer, CanvasRenderer } from "echarts/renderers";

import { BarChart, LineChart, PieChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
  TimelineComponent,
} from "echarts/components";

echarts.use([
  BarChart,
  LineChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
  DataZoomComponent,
  TimelineComponent,
  CanvasRenderer
]);

export default echarts;
```

### 2. 新建 _newChart.js_ 文件封装用法

```js
import { nextTick, onMounted, onUnmounted, unref, getCurrentInstance } from "vue";
import echarts from "./echartsLib.js";
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";

export default function newChart(
  elRef,
  autoChartSize = false,
  animation = false,
  theme = "default"
) {
  // 设置渲染模式
  echarts.use(CanvasRenderer);

  // echart实例
  let chartInstance = null;

  // 初始化图表
  const initCharts = () => {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    chartInstance = echarts.init(el, theme);
  };

  const setOption = (option) => {
    nextTick(() => {
      if (!chartInstance) {
        initCharts();
        if (!chartInstance) return;
      }

      chartInstance.setOption(option);
      hideLoading();
    });
  };

  // 获取echart实例
  function getInstance() {
    if (!chartInstance) {
      initCharts();
    }
    return chartInstance;
  }

  function resize() {
    chartInstance?.resize();
  }

  // 监听元素大小
  function watchEl() {
    // 添加过渡
    if (animation) {
      elRef.value.style.transition = "width 1s, height 1s";
    }
    const resizeObserver = new ResizeObserver((entries) => resize());
    resizeObserver.observe(elRef.value);
  }

  // 显示加载
  function showLoading() {
    if (!chartInstance) {
      initCharts();
    }
    chartInstance?.showLoading();
  }
  // 隐藏加载
  function hideLoading() {
    if (!chartInstance) {
      initCharts();
    }
    chartInstance?.hideLoading();
  }

  // 只有在组件实例存在时才使用生命周期钩子
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      window.addEventListener("resize", resize);
      if (autoChartSize) watchEl();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });
  }

  return {
    setOption,
    getInstance,
    showLoading,
    hideLoading,
  };
}

```

### 3. 使用

```jsx
<div ref="myChart"></div>

import newChart from "@/utils/newChart";
import { reactive, onMounted, ref } from "vue";

const myChart = ref(null);
const { setOption } = newChart(myChart, true, true);
let option = {}

onMounted(() => {
  setOption(option);
});
```
