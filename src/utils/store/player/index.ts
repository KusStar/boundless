import { INITIAL_PLAYER_STATE } from '@utils/constants'
import { getEffected } from './effect'

export default { 
  state: INITIAL_PLAYER_STATE
}

export const actions = {
  changeName: ({ player }: State, name: string) => {
    return { 
      player: {
        ...player,
        name
      }
     }
  },
  effectPlayer: ({ player }: State, type: EffectType) => {
    const effected = getEffected(player, type)
    return {
      player: effected
    }
  }
}

export interface InjectedPlayerProps {
  player: Player
  changeName: (name: string) => void
  effectPlayer: (type: EffectType) => void
}
