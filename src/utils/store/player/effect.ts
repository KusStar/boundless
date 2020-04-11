import { EffectType } from "@utils/enums"

const getValidValue = (value: number) => {
  switch (true) {
    case value < 0: return 0
    case value > 100: return 100
    default: return value
  }
}

const polish = (player: StringKeyObject) => {
  for (let [key, value] of Object.entries(player)) {
    player[key] = getValidValue(value)
  }
  return player
}

const effectable = (player: Player, type: EffectType) => {
  return player[type] > 0
}

const getEffected = (player: Player, type: EffectType) => {
  if (!effectable(player, type)) return player
  let effected = { ...player }
  switch (type) {
    case EffectType.Mask:
      effected.mask = player.mask - 5
      break
    case EffectType.Money:
      effected.money = player.money - 5
      break
    case EffectType.Food:
      effected.food = player.food - 5
      effected.energy = player.energy + 10
      effected.mood = player.mood + 2
      break
  }
  return polish(effected)
}

export {
  getEffected,
}