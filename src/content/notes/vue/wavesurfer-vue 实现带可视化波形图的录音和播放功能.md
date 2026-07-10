---
slug: vue-wavesurfer-audio
title: wavesurfer-vue实现带可视化波形图的录音和播放功能
category: Vue
type: snippet
description: vue 中使用 wavesurfer-vue 实现带可视化波形图的录音和播放功能。
status: published
tags: Vue, wavesurfer
updatedAt: 2025-06-03
---

## 1. 安装：

使用npm

```bash
npm i @meersagor/wavesurfer-vue
```

使用yarn

```bash
yarn add @meersagor/wavesurfer-vue
```

## 2. 录音：

效果：
![image](/notes/vue/wavesurfer-audio-record.png)
代码：

```jsx
<template>
  <div class="audio-box">
    <div>
      <div ref="containerRef"></div>
    </div>
    <div class="flex justify-between">
      <p>{{ currentTime }}</p>
      <button v-if="showAudioRecordButton" @click="startAudioRecordHandler">
        开始
      </button>
      <div v-else>
        <button @click="pauseRecording" class="mr-20px">
          {{ isPauseResume ? "暂停" : "继续" }}
        </button>
        <button @click="stopHandler">停止</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWaveSurferRecorder } from "@meersagor/wavesurfer-vue";
import { computed, ref } from "vue";

// 录音------------------------------------------
const showAudioRecordButton = ref(true);
const containerRef = ref(null);
const options = computed(() => ({
  height: 48,
  waveColor: "#66667D",
  progressColor: "#6A24FF",
  barGap: 5,
  barWidth: 5,
  barRadius: 8,
  cursorWidth: 0,
  url: "https://revews-bucket.s3.ap-southeast-1.amazonaws.com/a06mmMU3sgnzuUkH4OiHvyuUgCFdLSnJaDLBao7y.webm",
}));
const {
  pauseRecording,
  startRecording,
  stopRecording,
  currentTime,
  isPauseResume,
} = useWaveSurferRecorder({
  containerRef,
  options: options.value,
  recordPluginOptions: {
    continuousWaveform: true,
  },
});
const startAudioRecordHandler = () => {
  startRecording();
  showAudioRecordButton.value = false;
};
const stopHandler = async () => {
  const blob = await stopRecording();
  console.log("blob =====", blob);
  showAudioRecordButton.value = true;
};
</script>

<style scoped>
.audio-box {
  height: 136px;
  background: linear-gradient(145deg, #ffffff 0%, #ffffff 100%);
  box-shadow: 0px 4px 20px 0px rgba(88, 125, 255, 0.1);
  border-radius: 12px;
  box-sizing: border-box;
}
</style>
```

## 3. 播放：

效果：
![image](/notes/vue/wavesurfer-audio-play.png)
代码：

```jsx
<template>
  <div class="audio-box">
    <WaveSurferPlayer
      :options="options"
      @timeupdate="(time) => timeUpdateHandler(time)"
      @ready="(duration) => readyHandler(duration)"
      @waveSurfer="(ws) => readyWaveSurferHandler(ws)"
    />
    <div class="flex justify-between">
      <p>{{ currentTime }}</p>
      <img
        class="cursor-pointer"
        src="@/assets/images/play.png"
        alt="play"
        @click="waveSurfer?.playPause()"
      />
      <p>{{ totalDuration }}</p>
    </div>
  </div>
</template>

<script setup>
import { WaveSurferPlayer } from "@meersagor/wavesurfer-vue";
import { reactive, ref, onMounted } from "vue";

// 播放------------------------------------------
const options = ref({
  height: 48,
  waveColor: "gray",
  progressColor: "#5996FF",
  barGap: 5,
  barWidth: 5,
  barRadius: 8,
  duration: 80,
  url: "https://revews-bucket.s3.ap-southeast-1.amazonaws.com/a06mmMU3sgnzuUkH4OiHvyuUgCFdLSnJaDLBao7y.webm",
});
const currentTime = ref("00:00");
const totalDuration = ref("00:00");
const waveSurfer = ref(null);
const formatTime = (seconds) =>
  [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(":");
const timeUpdateHandler = (time) => {
  currentTime.value = formatTime(time);
};
const readyHandler = (duration) => {
  totalDuration.value = formatTime(duration);
};
const readyWaveSurferHandler = (ws) => {
  waveSurfer.value = ws;
};
</script>

<style scoped>
.audio-box {
  height: 136px;
  background: linear-gradient(145deg, #ffffff 0%, #ffffff 100%);
  box-shadow: 0px 4px 20px 0px rgba(88, 125, 255, 0.1);
  border-radius: 12px;
  box-sizing: border-box;
}
</style>

```

> 更多options配置项可查看官方文档 [点击此处](https://wavesurfer.xyz/docs/types/wavesurfer.WaveSurferOptions "点击此处")

## 4. 链接：

[wavesurfer-vue GitHub地址](https://github.com/meer-sagor/wavesurfer-vue "wavesurfer-vue GitHub地址")
[官方文档地址](https://docs-wavesurfer.meersagor.com/ "官方文档地址")
[wavesurfer.js地址](https://wavesurfer.xyz/ "wavesurfer.js地址")
