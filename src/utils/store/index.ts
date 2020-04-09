import createStore from 'unistore'
import devtools from 'unistore/devtools'
import player from './player'

const initialState = {
  player: player.state
}

const store = process.env.NODE_ENV === 'production' 
  ? createStore(initialState) 
  : devtools(createStore(initialState));

export default store
