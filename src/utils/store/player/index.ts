import { INITIAL_PLAYER_STATE } from '@utils/constants'

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
}

export interface InjectedPlayerProps {
  player: Player
  changeName: (name: string) => void
}
