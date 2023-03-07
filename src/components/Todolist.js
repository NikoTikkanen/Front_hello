import React, {useState } from 'react'
import {useRef} from 'react';

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css';


function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();


const inputChanged = (event) => {
  setTodo({ ...todo, [event.target.name]: event.target.value });
}

const addTodo = (event) => {
  setTodos([...todos, todo])
}

const deleteTodo = () => {
  if (gridRef.current.getSelectedNodes().length > 0){
  setTodos(todos.filter((todo, index) =>
  index !== gridRef.current.getSelectedNodes()[0].childIndex
  ))
}
  else {
    alert('Select row first')
  }}

const columns =[
  {field: "description", sortable: true, filter: true},
  {field: "date", sortable: true, filter: true},
  {field: "priority", sortable: true, filter: true,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
]
return (
  <div>
    
    <input type="text"
      onChange={inputChanged}
      placeholder="Description"
      name="description"
      value={todo.description} />

    <input type="text"
      onChange={inputChanged}
      placeholder="Date"
      name="date"
      value={todo.date} />

    <input type="text"
      onChange={inputChanged}
      placeholder="Priority"
      name="priority"
      value={todo.priority} />

    <button onClick={addTodo}>Add Todo</button>
    <button onClick={deleteTodo}>Delete</button>

  <div className="ag-theme-material"
  style={{height:'700px', width: '70%', margin: 'auto'}}>
    <AgGridReact
      ref={gridRef}
      onGridReady={params => gridRef.current = params.api}
      rowSelection="single"
      columnDefs={columns}
      rowData={todos}
      animateRows={true}>
      </AgGridReact>
  </div>

  <table>
    <tbody>
      {
        todos.map((todo,index) => <tr key={index}><td>{todo.description}</td>
        <td>{todo.date}</td><td>{todo.priority}</td></tr>)
      }
    </tbody>
  </table>
  </div>
);
};

export default Todolist;