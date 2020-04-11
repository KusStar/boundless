declare interface StringKeyObject {
  [key: string]: any
}

declare interface State {
  system: System
  player: Player
}
declare interface System {
  time: number
  scene: {
    id: number
  }
  currentModal: import("@utils/enums").Modal;
}

declare interface Player extends PlayerEffectableProps {
  name: string
}

declare interface Event {
  // 事件 ID
  id: number
  // 事件名称
  name: string
  // 事件描述、引叙文字
  description: string
  // 事件选项
  options: EventOption[]
}

interface PlayerEffectableProps {
  health: number
  energy: number
  mood: number
  food: number
  money: number
  mask: number
}

interface EventOption {
  id: number
  name: string
  // 与之关联的事件, 可选
  next?: Event
  // 选择后带来的影响
  effect: EventEffect
}

interface EventEffect {
  flag: number
  result: PlayerEffectableProps
}


