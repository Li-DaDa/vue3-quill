/* eslint-disable */
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
      install(app: App) : void
  }
  export default component
}

declare module'*.png' {
  const value: string
  export = value
}

declare module'*.jpg' {
  const value: string
  export = value
}

declare module'*.jpeg' {
  const value: string
  export = value
}

declare module 'quill' {
  export default any
}

declare module 'quill-better-table' {
  export default any
}

declare module 'quill-image-resize-module' {
  export default any
}
