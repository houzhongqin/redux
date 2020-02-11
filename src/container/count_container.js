import Count from '../components/count'
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction} from '../redux/count_create_reducers'

function mapStateProps(state){
    return {count:state}
}

function toDispatch(dispatch){
    return {
        increment:(value)=>{dispatch(createIncrementAction(value))},
        decrement:(value)=>{dispatch(createDecrementAction(value))},
    }
}

export default connect(mapStateProps,toDispatch)(Count)