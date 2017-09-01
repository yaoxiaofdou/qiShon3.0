import { CHANGE_COLOR } from '../action/index';

// 默认值
const initialState = {
    themeColor: 'red'
}

const colorReducer = (state = initialState,action) => {
    switch(action.type){
        case CHANGE_COLOR:
            return {...state, themeColor: action.themeColor}
        default:
            return state
    }
}
export default colorReducer;