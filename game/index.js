import {Map} from 'immutable'
import { createStore } from "redux"

let board = Map()

const MOVE = 'MOVE'

export const move = (turn, position) => {
  // console.log('this is the turn/position: ', turn, position)
  return {
    type: MOVE,
    position: position,
    turn: turn
  }
}

export const winner = (board) => {
  
}

export default function reducer(state = { board, turn: 'X' }, action) {
  console.log('here', state.turn)
  switch (action.type) {
    case MOVE:
    return {
      board: state.board.setIn(action.position, state.turn),
      turn: state.turn === 'X' ? state.turn = 'O' : state.turn = 'X'
    }
    default:
    return state
  }
}

// const gameReducer = (state = {board, turn: player}, action) => {
//   switch(action.type) {
//     case 'MOVE'
//       return { }
//     default:
//       return state
//   }
// }


