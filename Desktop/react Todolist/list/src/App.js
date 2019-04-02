import React, { Component } from 'react';
import 'normalize.css'
import './reset.css'
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props){
    super(props)   //确保了 this.props 在构造函数执行完毕之前已被赋值。
    this.state = {
      newTodo: '',
      todoList: [
        
      ]
    }
  }
  render() {
    
    let todos = this.state.todoList.map((item,index)=>{
      return ( //为什么要加括号
        <li key={index} >
          <TodoItem todo={item}/>
        </li>)
    })
    console.log(todos)

    return (
      <div className="App">
       <h1>我的待办</h1>
       <div className="inputWrapper">
       <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} />
       </div>
       <ol>
        {todos}
       </ol> 
          
        
      </div>
    )
  }
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
}
}

export default App;

let id = 0

function idMaker(){
  id += 1
  return id
}

