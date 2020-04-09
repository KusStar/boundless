
export default { 
  state: {
    time: '0',
    scene: {
      id: 0,
      text: ''
    }
  } as System
}

export const actions = {
}

export interface InjectedSystemProps {
  system: System
}
