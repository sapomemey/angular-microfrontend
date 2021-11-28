export class EventBus {
  private static instance: EventBus;
  private eventTarget: EventTarget;
  private message: { [key: string]: any } = {};

  private constructor() {
    this.eventTarget = document.appendChild(document.createComment('event-bus'));
  }

  static getInstance() {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }

    return EventBus.instance;
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

    return this.eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
  }

  private saveMessage(type: string, detail: any) {
    this.message[`${type}`] = detail;
  }

  private emitLastMessage(type: string) {
    const detail = this.message[`${type}`];

    if (this.existsMessage(type)) {
      this.eventTarget.dispatchEvent(new CustomEvent(type, { detail }));
    }
  }

  private existsMessage(type: string) {
    return !!this.message[`${type}`];
  }
}