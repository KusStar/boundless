import dayjs from 'dayjs'
import { objectSum, playerEffectedResult } from '@utils/helpers'
import { INITIAL_SYSTEM_STATE } from '@utils/constants'

export default { 
  state: INITIAL_SYSTEM_STATE
}

export const actions = {
  onScene:  ({ system }: State, id: number) => {
    return {
      system: {
        ...system,
        scene: {
          id,
        }
      }
    }
  },
  updateTime: ({ system, player }: State) => {
    const old = dayjs(system.time)
    const newTime = old.add(60, 'minute').unix() * 1000
    const effect = playerEffectedResult(system.time, newTime, player.mood)
    const effected = objectSum(player, effect)
    return {
      system: {
        ...system,
        time: newTime
      },
      player: effected
    }
  }
}

export interface InjectedSystemProps {
  system: System,
  onScene: (id: number) => void
  updateTime: () => void
}
