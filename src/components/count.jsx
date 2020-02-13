import React, { Component } from 'react'

export default class Count extends Component {
    // state = {
    //     number:0
    // }
    increment = ()=>{
      let {value} = this.refs.count
        // this.props.store.dispatch(createIncrementAction(value*1))
        this.props.increment(value*1)
        
    }

    decrement = ()=>{
        let {value} = this.refs.count
        this.props.decrement(value*1)

        // this.props.store.dispatch(createDecrementAction(value*1))
    }

    incrementOdd = ()=>{
        let {value} = this.refs.count
        let number = this.props.count
        if(number%2 ===1 ){
            this.props.increment(value*1)
       }
    }


    incrementAsync = ()=>{
        let {value} = this.refs.count
        console.log(this.props)
        this.props.incrementAsync(value*1,1000)

    }

    render() {
        return (
            <div>
                <h2>当前得数字是：{this.props.count},下方的数据为:{this.props.persons.length}</h2>
                <select ref="count">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>incrementAsync</button>
            </div>
        )
    }
}
