import React, {useState} from 'react';

export const TaskCreator = props => {

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        if(newTaskName !== ''){
            props.callback(newTaskName);
            setNewTaskName('');
        }else
            alert('task empty')
    };

    return (
        <div className="my-1">
            <input
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
                placeholder="Add new tasks by writing here"
                />
                <button className="btn btn-primary mt-1" onClick={createNewTask}>
                    Add
                </button>
        </div>
    )
}