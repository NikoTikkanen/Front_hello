import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useRef, useState } from 'react';




function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();


const inputChanged = (event) => {
  setTodo({ ...todo, [event.target.name]: event.target.value });
 }

const addTodo = () => {
  setTodos([...todos, todo])
 // setTodo({ description: '', date: '', priority: '' });
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


  const pickDate = (date) => {
    setTodo({ ...todo, date: date });
  }


const columns =[
  {field: "description", sortable: true, filter: true},
  {field: "date", sortable: true, filter: true},
  {field: "priority", sortable: true, filter: true,
  cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
]

const [value, setValue] = useState('Home');

const handleChange = (event, value) => {
  setValue(value);
}

return (
  
  <div>
    <Tabs value={value} onChange={handleChange}>
      <Tab value="Home" label="Home" />

      <Tab value="Todo" label="Todolist" />
      
    </Tabs>

    {value === 'Home' && <div>
      <h1>Home</h1>
    <div>Tervetuloa
      </div></div>}
      {value === 'Todo' && <div><h1>Todo</h1>
    
     
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
    <TextField
      label="Description"
      placeholder="Description"
      name="description"
      //onChange={e => setTodo({ ...todo, description: e.target.value })}
      onChange={inputChanged}
      value={todo.description} />


       {/* <TextField
      label= "Date"
      onChange={inputChanged}
      placeholder="Date"
      name="date"
    value={todo.date} /> */}

    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {<DatePicker
                        label="date"
                        format="DD-MM-YYYY"
                        name="date"
                        showTime={false}
                        value={todo.date}
                        //onChange={date => setTodo({ ...todo, date})}
                        onChange={pickDate}
                        
                        />}
</LocalizationProvider>      

    <TextField
      label="Priority"
      placeholder="Priority"
      name="priority"
      value={todo.priority} 
      //onChange={e => setTodo({ ...todo, priority: e.target.value })}
      onChange={inputChanged}
      
      />

    <Button onClick={addTodo} variant="contained">Add Todo</Button>
    <Button onClick={deleteTodo} variant="outlined">Delete</Button>

    </Stack>


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

        </div>}
 
  </div>
);
};
export default Todolist

    





