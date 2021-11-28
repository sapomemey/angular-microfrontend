export class EventBus {
  // private static instance: EventBus;
  private eventTarget: EventTarget;
  private message: { [key: string]: any } = {};

  private constructor() {
    this.eventTarget = document.appendChild(document.createComment('event-bus'));
  }

  static getInstance() {
    if (!(window as any).EventBusInstance) {
      (window as any).EventBusInstance = new EventBus();
    }

    return (window as any).EventBusInstance;
  }

  on(type: string, listener: (event: CustomEvent) => void) {
    this.eventTarget.addEventListener(type, listener as any);

    this.emitLastMessage(type);
  }

  once(type: string, listener: (event: CustomEvent) => void) {
    this.eventTarget.addEventListener(type, listener as any, { once: true });

    this.emitLastMessage(type);
  }

  off(type: string, listener: (event: CustomEvent) => void) {
    this.eventTarget.removeEventListener(type, listener as any);
  }

  emit(type: string, detail?: any) {
    this.saveMessage(type, detail);

    console.log(2, type, this.message);

    return this.eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }

  private saveMessage(type: string, detail: any) {
    this.message[`${type}`] = detail;
  }

  private emitLastMessage(type: string) {
    const detail = this.message[`${type}`];
    console.log(1, type);

    if (this.existsMessage(type)) {
      console.log(1, type);
      this.eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
    }
  }

  private existsMessage(type: string) {
    return !!this.message[`${type}`];
  }
}