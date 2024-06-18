import axios from 'axios'
import { eventBus } from "./utils/eventBus"

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: typeof axios,
    $eventBus: typeof eventBus
  }
}

export {};