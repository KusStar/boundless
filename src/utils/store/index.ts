import createStore from 'unistore'
import devtools from 'unistore/devtools'
import player from './player'
import system from './system'

const initialState = {
  player: player.state,
  system: system.state,
}

const store = process.env.NODE_ENV === 'production' 
  ? createStore(initialState) 
  : devtools(createStore(initialState));

export default store
