import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow'
import { TaskBanner } from './components/TaskBanner'
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'

//require('./conecction')

function App() {

  const [userName, setUserName] = useState('user');
  const [taskItems, setTaskItems] = useState([
    { name: 'Task One', time: 'time', done: false, delete: false}
  ])

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName('Sebas Example')
      setTaskItems([
        { name: 'Add Tasks', time: 'time', done: false, delete: false },
      ]);
      setShowCompleted(true);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = taskName => {
    let today = new Date()
    today = today.toDateString() + ''
    if (!taskItems.find(t => t.name === taskName) && taskItems.name !== '') {
      setTaskItems([...taskItems, { name: taskName, time: today, done: false }])
    }else{
      alert('task alredy created')
    }
  };

  const toggleTask = task => (
    setTaskItems(taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))
  );

  const removeTask = task => {
    if(window.confirm('Are you sure you want to delete it?')){
      setTaskItems(taskItems.filter(t =>(t.name !== task.name)))
    }
  };

  const taskTableRows = (doneValue) => (
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} time={task.time} removeTask={removeTask} />
      ))
  );

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems}/>
      <TaskCreator callback={createNewTask} />
 
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th width="150">Created at</th>
            <th width="100">Done</th>
            <th width="100">Remove</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl
          description="Completed Tasks"
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}
        />
      </div>
      {showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th width="150">Created at</th>
              <th width="100">Done</th>
              <th width="100">Remove</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(true)}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
