import React, { Component } from 'react'

export default class Person extends Component {
    add =()=>{
        let username = this.refs.username.value
        let age = this.refs.age.value
        console.log(this.props)
        this.props.addPersons({type:username,age:age})
        this.refs.username.value = ''
        this.refs.age.value = ''
    }
    render() {
        return (
            <div>
                <h2>当前人数为: {this.props.persons.length}上方组件的数据为 xxx</h2>
                <input type="text" placeholder="姓名" ref="username"/>
                <input type="text" placeholder="年龄" ref="age"/>
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                       this.props.persons.map((personObj,index)=>{
                         return <li key={index}>
                             姓名:{personObj.type}&nbsp;&nbsp;&nbsp;&nbsp;
                             年龄:{personObj.age}
                             </li>
                       }) 
                    }
                </ul>
            </div>
        )
    }
}
