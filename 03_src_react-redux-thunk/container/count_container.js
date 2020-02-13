import Count from '../components/count'
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../redux/count_create_reducers'

// function mapStateProps(state){
//     return (state)=>({count:state})
// }

// function toDispatch(dispatch){
//     return {
//         increment:(value)=>{dispatch(createIncrementAction(value))},
//         decrement:(value)=>{dispatch(createDecrementAction(value))},
//         incrementAsync:(value,delay)=>{dispatch(createIncrementAsyncAction(value,delay))},
//     }
// }

export default connect(
    (state)=>({count:state}),
    {
        increment: createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
    )(Count)