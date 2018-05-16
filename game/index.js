import { Map } from 'immutable'
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
  console.log('board:', board)
// look at board, break down to possible combos - rows, cols, diags
// run combo through streak func to check if that combo
// streak checks passed in row to see if matches a player
// if no winner, keep playing until all spots filled


// for (let r=0; r<board.length; r++) {
//   // for (let c=0; c<board.length; c++) {
//     streak(board, [0,r], [0,r+1], [0,r+2])
//     // add diags
//   }
// }

  
  streak (board, [0,0], [0,1], [0,2])
  // streak (board, [1,0], [1,1], [1,2])
  // streak (board, [2,0], [2,r+1], [2,r+2])
  // streak (board, [0,0], [r+1,0], [r+2,0])
  // streak (board, [0,1], [r+1,1], [r+2,1])
  // streak (board, [r,2], [r+1,2], [r+2,2])
  // streak (board, [0,0], [1,1], [2,2])
  // streak (board, [2,0], [1,1], [0,2])
}



// hard code diags
// cols, rows with loop

// return streak called on coord.



const streak = (board, firstCoord, ...remainingCoords) => {
  // check each elem of combo with getIn (use the map)
  // check if same player made each move in combos
  // return player if theres winner
  // run getIn on 3 sets of coords
  // return X, O , undefined
  let countX = 0
  let countO = 0

  // if (state.turn === state.board.getIn(firstCoord)) {
  //   return state.turn
  // }

  let currentPlayer;
  // console.log('firstCoord', firstCoord)
let player = board.getIn(firstCoord)
console.log(player)

}

// function turnReducer(turn='X', action) {
//   if(action.type === MOVE) {
//     return turn === 'X' ? 'O' : 'X'
//   }
//   return turn
// }
//
// const boardReducer = (board=Map(), action) => {
//   if(action.type===MOVE) {
//     return board.setIn(action.position, action.player)
//   }
//   return board
// }
//
// export function reducer(state={}, action) {
//   return {
//     board: boardReducer(state.board, action),
//     turn: turnReducer(state.turn, action)
//   }
// }
//
// export default reducer(undefined, {
//   type: MOVE,
//   position: [1,1],
//   player: 'X'
// })




export default function reducer(state = { board, turn: 'X' }, action) {
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


// game.getState()
// { board: Map {
// 1: Map { 1: "X" },
// 0: Map { 0: "O", 2: "O", 1: "O" },
// 2: Map { 2: "X", 0: "X" } },
// turn: 'X' }

// use getIn to grab value at location





// [[0,0], [0,1], [0,2]]
