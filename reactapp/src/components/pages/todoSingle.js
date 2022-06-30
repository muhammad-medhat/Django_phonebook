import React, { useState } from 'react';

const TodoSingle = (props)=>  {
    const editTODO = (t)=>{
        console.log('edit', t)
        this.props.history.replace(`/todoform/${t.id}/${t.title}`)
    }
    const {todo, onDelete} = props
        const t = todo
       console.log(`props ${t.id}`, props);
    //    console.log('single task', t);
        return (  
            <>
            <tr id={t.id}>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.description}</td>

                <td>ee
                    <i className="fas fa-edit" onClick={()=>editTODO(t)}></i>
                </td>
                <td>dd
                    {/* <i className="far fa-trash-alt" onClick={onDelete(t)}></i> */}
                </td>


                
            </tr>

            </>
        );

}
 
export default TodoSingle;