import React, { useState } from 'react';
import Editable from '../com/Editable';

const TodoSingle = (props)=>  {
    const editTODO = (t)=>{
        console.log('edit', t)
        // this.props.history.replace(`/todoform/${t.id}/${t.title}`)
    }
    const {todo, del} = props

    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo);

        const t = todo
       console.log(`props ${t.id}`, props);
    //    console.log('single task', t);
        return (  
            <>
            <tr id={t.id}>
                <td>{t.id}</td>
                <td>
                    {/* {t.title} */}
                    <Editable
                        text={t.title} 
                        placeholder="Write a task name"
                        childRef={`${t.id}-title`}
                        type="input"
                    >
                    <input
                        ref={`${t.id}-title`}

                        type="text"
                        name="task"
                        placeholder="Write a task name"
                        value={t.title}
                        onChange={e => setTask({...task, title: e.target.value})}
                    />
                    </Editable>
                
                </td>
                <td>
                    {/* {t.description} */}
                    <Editable
                    text={t.description}
                    placeholder="Description for the task"
                    type="textarea"
                    childRef={`${t.id}-description`}

                    >
                          <textarea
                            name="description"
                            ref={`${t.id}-description`}
                            placeholder="Description for the task"
                            rows="5"
                            value={t.description}
                            onChange={e => setTask({...task, description: e.target.value})}
                        />
                    </Editable>
                </td>

                <td onClick={()=>editTODO(t)}>ee
                    <i className="fas fa-edit" ></i>
                </td>
                <td>
                    <span onClick={()=>del(t.id)}>
                    dd
                        <i className="far fa-trash-alt" ></i>

                    </span>
                </td>


                
            </tr>

            </>
        );

}
 
export default TodoSingle;