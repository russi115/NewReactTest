import React, { useState } from 'react';
/*import logo from './logo.svg';
import './App.css';
*/

function App() {

  const [userName, setUserName] = useState('Sebas');
  const [taskItems, serTaskItems] = useState([
    { name: 'Task One', done: false },
    { name: 'Task two', done: false },
    { name: 'Task Three', done: true },
    { name: 'Task For', done: false },
  ])

  const taskTableRows = () => {
    return taskItems.map(task => (
      <tr key={task.name}>
        <td>{task.name}</td>
      </tr>
    ))
  }

  return (
    <div>
      <h1>Hello</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
