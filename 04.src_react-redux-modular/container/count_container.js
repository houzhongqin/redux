import Count from '../components/count'
import {connect} from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../redux/action_creators/count_action_creator'

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
    (state)=>({count:state.number}),
    {
        increment: createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
    )(Count)