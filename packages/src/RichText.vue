<template>
  <div class="dl-rich-text">
    <div ref="dom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import quillBetterTable from 'quill-better-table'
import 'quill-better-table/dist/quill-better-table.css'
import ImageResize from 'quill-image-resize-module'

Quill.register(
  {
    'modules/better-table': quillBetterTable
  },
  true
)

Quill.register('modules/imageResize', ImageResize)

export default defineComponent({
  name: 'DlRichText',
  emits: ['change'],
  setup(props, ctx) {
    let quill: any = null

    const dom = ref()

    // 创建
    const createQuillEntity = () => {
      quill = new Quill(dom.value, {
        theme: 'snow',
        modules: {
          table: false,
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              ['blockquote', 'code-block'],

              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
              [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
              [{ direction: 'rtl' }], // text direction

              [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],

              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              [{ font: [] }],
              [{ align: [] }],
              ['image'],
              ['clean'],
              [{ table: 'TD' }]
            ],
            handlers: {
              table: function () {
                this.quill.getModule('better-table').insertTable(2, 3)
              }
            } as any
          },
          'better-table': {
            operationMenu: {
              items: {
                insertColumnRight: {
                  text: '右侧插入列'
                },
                insertColumnLeft: {
                  text: '左侧插入列'
                },
                insertRowUp: {
                  text: '上方插入行'
                },
                insertRowDown: {
                  text: '下方插入行'
                },
                mergeCells: {
                  text: '合并单元格'
                },
                unmergeCells: {
                  text: '取消合并单元格'
                },
                deleteColumn: {
                  text: '删除列'
                },
                deleteRow: {
                  text: '删除行'
                },
                deleteTable: {
                  text: '删除表格'
                }
              },
              color: {
                colors: ['green', 'red', 'yellow', 'blue', 'white'],
                text: '单元格背景色:'
              }
            }
          },
          imageResize: {
            displaySize: true
          },
          keyboard: {
            bindings: quillBetterTable.keyboardBindings
          }
        }
      })
      quill.on('text-change', function () {
        ctx.emit('change', quill.root.innerHTML)
      })
    }

    // 设置内容
    const setHtml = (str: string) => {
      if (quill) {
        quill.root.innerHTML = str
      }
    }

    // 获取内容
    const getHtml = () => {
      if (quill) {
        return quill.root.innerHTML
      }
      return null
    }

    onMounted(() => {
      createQuillEntity()
    })

    return {
      dom,
      setHtml,
      getHtml
    }
  }
})
</script>

<style lang="scss">
.dl-rich-text {
  height: 100%;
  display: flex;
  flex-direction: column;
  .ql-container {
    height: 0;
    flex: 1;
  }
}
</style>
