import React from 'react'
import { CardFooter } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Tasklist({ tasks ,deletetask,setediting,markcomplete}) {
    return (
        <div>
            {tasks.map(task =>
                <Card style={{ width: '18rem', textAlign: "center" ,background:task.iscomplete===true?"green":"red"}}>

                    <Card.Body>
                        <Card.Title>{task.name}</Card.Title>
                        <Card.Text>
                            {task.description}
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                        <button onClick={()=>deletetask(task.id)}>DELETE</button>
                        <button onClick={()=>setediting(task)}>EDIT</button>
                        <button onClick={()=>markcomplete(task.id)}>{task.iscomplete?"INCOMPLETE":"COMPLETE"}</button>
                    </Card.Footer>

                </Card>
            )}
        </div>
    )
}

export default Tasklist