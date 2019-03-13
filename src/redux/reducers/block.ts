import * as constants from '../actionTypes'
import { BlockAction } from '../actions/block'
import { BlockState } from '../states/block'

const initialState: BlockState = {
  topList: null,
  latest: null,
  item: null,
  list: {
    pageNum: 1,
    pageSize: 10,
    blockFrom: '',
    blockTo: '',
    total: 0,
    list: null
  }
}

function insertAndRemove(list: any, element: any) {
  var result = list || []
  result = [element].concat(result)
  // while(result.length>10){
  //   result.pop();
  // }
  return result.slice(0, 10)
}

export default function(state: BlockState = initialState, action: BlockAction) {
  switch (action.type) {
    case constants.GET_TOP_BLOCKS:
      return {
        ...state,
        topList: action.data,
        latest: action.data ? action.data[0] : null
      }
    case constants.GET_BLOCK_ITEM:
      return {
        ...state,
        item: action.data
      }
    case constants.GET_BLOCK_LIST:
      return {
        ...state,
        list: action.data
      }
    // case constants.GET_LATEST_BLOCK:
    //   return {
    //     ...state,
    //     latest: action.data,
    //   }
    case constants.APPEND_LATEST_BLOCK:
      return {
        ...state,
        latest: action.data,
        topList: insertAndRemove(state.topList, action.data)
      }
    default:
      return state
  }
}
