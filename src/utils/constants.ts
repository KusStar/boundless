const MOOD_LIMIT = 100;

const EMPTY_OBJECT = Object.create(null)

const INITIAL_SYSTEM_STATE: System = {
  time: 1579820400000, // 2019-12-24 07:00:00
  scene: {
    id: -1,
  },
  currentModal: ''
}

const INITIAL_PLAYER_STATE: Player = {
  name: '王二',
  health: 100,
  energy: 100,
  mood: 100,
  food: 100,
  money: 100,
  mask: 100,
}

const MOBILE_MEDIA_QUERY = '(max-width: 444px)'

const TABLET_MEDIA_QUERY = '(min-height: 1024px)'

export {
  MOOD_LIMIT,
  EMPTY_OBJECT,
  INITIAL_SYSTEM_STATE,
  INITIAL_PLAYER_STATE,
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY
}