import React from 'react';


export default function Todolist(props) {


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Kuvaus</th>
                        <th>Pvm</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.description}</td>
                                <td>{todo.date}</td>
                                <td><button onClick={() => props.handleDeleteTodo(index)}>Valmis</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}