## 1. 安装依赖：

```bash
#docx文档预览组件
npm install @vue-office/docx vue-demi@0.14.6

#excel文档预览组件
npm install @vue-office/excel vue-demi@0.14.6

#pdf文档预览组件
npm install @vue-office/pdf vue-demi@0.14.6
```

> vue2.6版本或以下还需要额外安装 @vue/composition-api
> `npm install @vue/composition-api`

## 2. 使用示例：

```js
<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col justify-center items-center bg-[#fff]">
      <div class="flex items-center w-1200px tab-box">
        <el-tabs v-model="activeName" class="custom-tabs">
          <el-tab-pane label="用户协议" name="1"> </el-tab-pane>
          <el-tab-pane label="隐私政策及授权使用协议" name="2"> </el-tab-pane>
        </el-tabs>
      </div>
      <div class="content w-full" v-show="activeName === '1'">
        <vue-office-docx :src="src" />
      </div>
      <div class="content w-full" v-show="activeName === '2'">
        <vue-office-docx :src="src" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VueOfficeDocx from "@vue-office/docx";
import "@vue-office/docx/lib/index.css";

const activeName = ref("1");
const src = ref("");

onMounted(() => {
  getUrl();
});
const getUrl = async () => {
  try {
    const response = await fetch("/agreement.docx");
    if (!response.ok) throw new Error("Network response was not ok");
    const arrayBuffer = await response.arrayBuffer();
    src1.value = arrayBuffer;
  } catch (error) {
    console.error("Failed to fetch the document:", error);
  }
};
</script>

<style scoped>
.tab-box:deep(.el-tabs__header) {
  margin: 0;
}
.tab-box:deep(.el-tabs__item) {
  height: 58px;
}
.content:deep(.docx-wrapper) {
  background: #f9fafb;
}
.content:deep(.docx-wrapper > section.docx) {
  box-shadow: none;
  background: #f9fafb;
  padding: 0 !important;
  width: 1200px !important;
}
.content:deep(.docx-wrapper > section.docx p) {
  background: #f9fafb !important;
}
</style>
```

> 文档地址可以使用网络地址，比如 https://\*\*\*.docx；
> 也可以文件上传时预览，此时可以获取文件的ArrayBuffer或Blob

## 3. 相关链接：

[GitHub地址](https://github.com/501351981/vue-office#readme "GitHub地址")
[npm地址](https://www.npmjs.com/package/@vue-office/docx "npm地址")
[效果预览](https://501351981.github.io/vue-office/examples/dist/#/docx "效果预览")
