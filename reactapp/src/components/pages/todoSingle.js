import React, { useState } from 'react';
import EditInp from '../com/editInp';

const TodoSingle = (props)=>  {
    const editTODO = (t)=>{
        // console.log('edit', t)
    }
    const {todo, del, edit} = props
    // console.log('props', props)

    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo);

        const t = todo
    //    console.log(`props ${t.id}`, props);
    //    console.log('single task', t);

        return (  
            <>
            <tr id={t.id}>
                <td>{t.id}</td>
                <td>
                    {/* <EditInlup value={t.title} setValue={() => setTask(...todo, {title: 'xx'})} /> */}
                    <EditInp 
                        value={t.title} 
                        edit={(e) => edit({...t, title: e})}  /> 
                
                </td>
                <td>
                

                    <EditInp 
                        value={t.description}  
                        edit={(e) => edit({...t, description: e})}  /> 

                </td>


                <td>
                    <button  onClick={()=>del(t.id)} className={"btn btn-danger btn-sm"}>
                    &#x2715;
                    </button>
                </td>


                
            </tr>

            </>
        );

}
 
export default TodoSingle;