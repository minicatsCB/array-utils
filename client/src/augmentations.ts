import { eventBus } from "./utils/eventBus"

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $eventBus: typeof eventBus
  }
}

export {};