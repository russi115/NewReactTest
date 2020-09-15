import React from 'react';

export const TaskBanner = props => (
    <h4 className="bg-primary text-white test-center p-4">
        {props.userName} Tareas ({props.taskItems.filter(t => !t.done).length} tareas por hacer)
    </h4>
)