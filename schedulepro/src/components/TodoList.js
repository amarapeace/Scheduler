import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import Sidebar from './Sidebar';
import MyCalendar from './MyCalendar';
import "../App.css";


const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [isDone, setIsDone] = useState(false)
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }



    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
      <>
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="mainbar">
            <div className="header text-center">
              <h3>Todo List</h3>
              <button
                className="btn btn-primary mt-2"
                onClick={() => setModal(true)}
              >
                Create Task
              </button>
            </div>
            <div className="task-container" id="tasks">
              {taskList &&
                taskList.map((obj, index) => (
                  <Card
                    taskObj={obj}
                    index={index}
                    isdone={isDone}
                    deleteTask={deleteTask}
                    updateListArray={updateListArray}
                  />
                ))}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
          </div>
        </div>
        <div id="dashboard">Dashboard</div>
        {/* <div id='tasks'>Tasks</div> */}
        <div id="users">Users</div>
        <div id="completedtasks">Completed Tasks</div>
        <div id="calendar" className='calendar'>
          {" "}
          <MyCalendar />
        </div>
      </>
    );
};

export default TodoList;