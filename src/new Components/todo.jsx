import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {useState} from 'react';

function Todo() {
    const [todo, setTodo] = useState({task:"", dateTime:""})
    const [listTask, setListTask] = useState([])

    const handleChangeTodo =(e)=>{
        setTodo(oldValue =>(
            {...oldValue,
            [e.target.name]:e.target.value
        }
        ))
    }
    const handleClickAdd = (e)=>{
        e.preventDefault()
        console.log(todo);
        setListTask(oldValue =>(
            [...oldValue, todo]
        ))
        console.log(listTask)
    }

    const deleteItem = (e)=>{
        
    }
    
  return (
    <div className="bg-dark text-light ">
      <div className="p-4 d-flex justify-content-center align-items-center">
        <div className="">
          <h3 className="text-center p-4 mb-3">To-Do List</h3>
          <div className="bg-light p-4 rounded-3">
            <div>
              <form action="">
                <div className="row">
                  <div className="col-5 p-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What do you want to do ?"
                      value={todo.task}
                      name="task"
                      onChange={handleChangeTodo}
                    />
                  </div>
                  <div className="col-5 p-1">
                    <input
                      type="datetime-local"
                      id=""
                      className="form-control"
                      value={todo.dateTime}
                      name="dateTime"
                      onChange={handleChangeTodo}
                    />
                  </div>
                  <div className="col-2 p-1">
                    <button
                      className="btn btn-primary w-100"
                      onClick={handleClickAdd}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div  className="bg-light p-4 rounded-3 mt-5 scroll">
            {listTask.map((item) => (
                <div className="shadow row text-dark mb-4 rounded-3">
                  <div className='p-3 col-4'>{item.task}</div>
                  <div className='p-3 opacity-50 col-5'>{item.dateTime}</div>
                  <div className='p-3 col-1'><button className='bg-light text-danger p-1 pe-2 ps-2 rounded-5 border-0' onClick={deleteItem}><img src="./delete.png" alt="" width="18px" /></button></div>
                  <div className='p-3 col-1'><button className='bg-light text-success p-1 pe-2 ps-2 rounded-5 border-0'><img src="./selected.png" alt="" width="18px" /></button></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo