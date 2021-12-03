# @webdevil/vue3-quill

基于vue3的富文本组件

## 安装

### npm

```js
npm install @webdevil/vue3-quill --save
```

### yarn

```js
yarn add @webdevil/vue3-quill
```

## 使用

```js
<template>
  <div style="height: 500px">
    <dl-quill @change="change" ref="quill" />
  </div>
</template>

import { defineComponent, onMounted } from 'vue'
import DlQuill from '@webdevil/vue3-quill'
import "@webdevil/vue3-quill/lib/index.css"

export default defineComponent({
  components: {
    DlQuill
  },
  setup() {

    const quill = ref()
    
    const change = (content: string) => {
      // console.log(content)
    }

    onMounted(() => {
      quill.value.setHtml('<p>abc</p>')
    })
    
    return {
      quill,
      change
    }
  }
})
```

## 组件方法

| 方法名   |   方法说明    |
| ------- | ------------- |
| setHtml | 设置富文本内容 |
| getHtml | 获取富文本内容 |

## 事件

|  事件  | 说明 |
| ------ | ----|
| change | 富文本变化触发 |

## 源码地址

[github](https://github.com/Li-DaDa/vue3-quill)
