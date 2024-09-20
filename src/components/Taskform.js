import React, { useState } from 'react'

function Taskform({ addtask ,editing,edittask}) {
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const submit = (event) => {
        event.preventDefault()
        if (name != "" && description != "") {
            const task = { name, description, id: Date.now(), iscomplete: false }
          
             editing ? edittask(task,editing.id):addtask(task)



        }
        else {
            alert("Both fields are required")
        }
    }
    return (
        <div>
            <form>
                <input onChange={(event => setname(event.target.value))} type='text' placeholder='task name' defaultValue={editing?.name} />
                <input onChange={(event => setdescription(event.target.value))} type='text' placeholder='task description' defaultValue={editing?.description}/>
                <button onClick={submit}>{!editing? "Add Task":"update task"}</button>

            </form>
        </div>
    )
}

export default Taskform