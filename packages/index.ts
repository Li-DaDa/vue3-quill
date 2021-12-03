import { App } from 'vue'
import RichText from './src/RichText.vue'

RichText.install = (app: App): void => {
  app.component(RichText.name, RichText)
}

export default RichText
