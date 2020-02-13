import {ADDPERSON} from '../action_types'

export default function (perState=[{type:'lisi',age:19}],action){
    const {type,data} = action
    let newState
    switch (type) {
        case ADDPERSON:
            newState = [data,...perState]
            return newState
        default:
            return perState
    }
}