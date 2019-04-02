import React, { Component } from 'react';

import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props){
    super(props)   //确保了 this.props 在构造函数执行完毕之前已被赋值。
    this.state = {
      newTodo: 'test',
      todoList: [
        {id:1, title:'第一个待办'},
        {id:2, title:'第二个待办'},
      ]
    }
  }
  render() {
    
    let todos = this.state.todoList.map((item,index)=>{
      return ( //为什么要加括号
        <li>
          <TodoItem todo={item}/>
        </li>)
    })
    return (
      <div className="App">
       <h1>我的待办</h1>
       <div className="inputWrapper">
        <TodoInput content={this.state.newTodo}/>
       </div>
       <ol>
        {todos}
       </ol> 
          
        
      </div>
    )
  }
}

export default App;
