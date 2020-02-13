import  Person from '../components/person'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../redux/action_creators/person_action_creator'

export default connect(
    (state)=>({
        persons:state.persons,
        number:state.number
    }),
    {addPersons:createAddPersonAction}
)(Person)