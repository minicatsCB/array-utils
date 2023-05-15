import mitt from "mitt";

const EVENTS = {
    OnSuccess: 'on-success',
    OnError: 'on-error',
    OnModelChanged: 'update:modelValue'
};

const eventBus = mitt();

export { eventBus, EVENTS }