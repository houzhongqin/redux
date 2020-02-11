
import {INCREMENT,DECREMENT} from './action_types'

export default function(preState=0,action){
    console.log(preState,action)
    let {type,data} = action
    let newState;
    switch (type) {
        //加法
        case INCREMENT:
            newState = preState + data
            return newState
        //减法
        case DECREMENT:
            newState = preState - data
            return newState
        default :
            return preState;
    }
}
