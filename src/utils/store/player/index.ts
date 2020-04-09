
export default { 
  state: {
    name: '王二',
    health: 100,
    energy: 100,
    mood: 100,
    food: 100,
    money: 100,
    mask: 100,
  } as Player
}

export const actions = {
  changeName: (state: State, name: string) => {
    return { 
      player: {
        ...state.player,
        name
      }
     }
  }
}

export interface InjectedPlayerProps {
  player: Player
  changeName: (name: string) => void
}
