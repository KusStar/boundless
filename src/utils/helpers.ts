import timeFormatter from '@utils/time-formatter'
import { MOOD_LIMIT, EMPTY_OBJECT } from '@utils/constants'

const compose = (...args: object[]) => {
  return args.reduce((acc: object, arg: object) => 
    ( {...acc, ...arg} ), EMPTY_OBJECT )
}

const objectSum = (source: StringKeyObject, target: StringKeyObject) => {
  const keys = Object.keys(source)
  if (keys.length < 1) return source

  for (let key of keys) {
    for (let [k, v] of Object.entries(target)) {
      if (k === key) {
        source[key] += v
      }
    }
  }

  return source
}

const isGameOver = (player: Player) => {
  const {
    health,
    energy,
  } = player
  let isOver = true
  let type = ''

  switch (true) {
    case health <= 0:
      type = 'health'
      break;
    case energy <= 0:
      type = 'energy'
      break;
    default:
      isOver = false
      break;
  }

  return {
    isOver,
    type
  }
}

/**
 * @private
 * @param mood 
 */
const weighedMoodEffect = (mood: number) => {
  return (2 - mood / MOOD_LIMIT);
}

const playerEffectedResult = (prev: number, next: number, mood: number) => {
  const prevPeriod = timeFormatter.period(prev)
  const nextPeriod = timeFormatter.period(next)
  const weight = weighedMoodEffect(mood)
  return prevPeriod !== nextPeriod 
    ? {
        energy: -5 * weight,
        mood: -2
      } 
    : EMPTY_OBJECT
}

export {
  compose,
  objectSum,
  isGameOver,
  playerEffectedResult
}
