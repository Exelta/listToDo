import React from "react";
import { useState } from 'react'
import './list.css'

const List = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const deleteItem = (index) => {
    setTaskList(taskList.filter((_, i) => i != index));
  }
  const newTask = (event) => {
    event.preventDefault();
    if (task != '') {
      setTaskList((add) => [...add, task]);
      setTask('');
    }
  }
  return (
    <>
      <div className='list'>
        <form onSubmit={newTask}>
          <input className='taskText' placeholder='Add a task' onChange={(task) => setTask(task.target.value)} value={task} />
        </form>

        {taskList.map((item, index) => (
          <div className='task' key={index}>
            <div className='taskText'>{item}</div>
            <button onClick={() => deleteItem(index)} type='button'>X</button>
          </div>
        ))}

        <div className='taskAmount'>{taskList.length} task</div>
      </div>
      {taskList.length == 0 && (<div className='noTask'>No tasks yet!</div>)}
    </>
  )
}
export default List