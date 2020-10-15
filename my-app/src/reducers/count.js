import { INCREMENT, DECREMENT } from "../actions/index";

//初期値を指定
const initialState = { value: 0 }

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
    
  }
}