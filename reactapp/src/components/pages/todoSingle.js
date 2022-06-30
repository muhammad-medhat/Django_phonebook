import React from 'react';

const TodoSingle = (props)=>  {
    const editTODO = (t)=>{
        console.log('edit', t)
        // this.props.history.replace(`/todoform/${t.id}/${t.title}`)
    }
    const {todo, del} = props
        const t = todo
       console.log(`props ${t.id}`, props);
    //    console.log('single task', t);
        return (  
            <>
            <tr id={t.id}>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.description}</td>

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