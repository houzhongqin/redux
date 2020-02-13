import React, { Component } from 'react'
import CountContainer from './container/count_container'
import PersonContainer from './container/person_container'
export default class App extends Component {
    render(){
        return (
            <div>
                <CountContainer/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <PersonContainer/>
            </div>
        )
    }
}
