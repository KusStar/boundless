
export default { 
  state: {
    time: '0',
    scene: {
      id: -1,
      text: ''
    }
  } as System
}

export const actions = {
  onScene:  ({ system }: State, id: number) => {
    return {
      system: {
        ...system,
        scene: {
          id,
          text: 'Package'
        }
      }
    }
  }
}

export interface InjectedSystemProps {
  system: System,
  onScene: (id: number) => void
}
