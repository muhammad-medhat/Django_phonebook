import React ,{ useState} from 'react';
import EditableLabel from 'react-inline-editing';

const TodoList = (props) => {
    const [todo, setTodo] = useState([])
    console.log('props', props);

    const {todos, onInsert, onDelete, onEdit} = props

 
    const handleChange = (e) =>{
        let st = {...todo}
        st[e.currentTarget.name] = e.currentTarget.value
        setTodo(st)
        console.log('OnChange', st);
    }

        return (  
        <>
        <h1>Todo List Page</h1>
        <div className="container">
               <h2>add task</h2>

            <form className='border' >    
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Task Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        placeholder="name@example.com"
                        value={todo.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" 
                        id="content" 
                        name="content" 
                        rows="3"  
                        value={todo.description}                           
                        onChange={handleChange}></textarea>
                </div>        
                <button className="btn btn-primary"
                    onClick={()=>onInsert(todo)}
                    >Add New Task </button>
            </form>



        <h2>tasks</h2>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">description </th>
                <th scope="col">...</th>
                <th scope="col">...</th>
                </tr>
            </thead>
            <tbody>
            {
                    todos.map( t => {
                    return(
                        <tr key={t.id}>

                            <td>{t.id}</td>
                            <td>
                                {t.title}
                            </td>
                            <td>
                                {t.description}
                            </td>
                            <td>
                                <input className="form-check-input" type="checkbox" value={t.done} id="flexCheckDefault" />
                            </td>
                            <td>
                                <i className="fas fa-edit" onClick={()=>onEdit(t)}></i>
                            </td>
                            <td>
                                <i className="far fa-trash-alt" onClick={()=>onDelete(t)}></i>
                            </td>
                            {/* <SingleTask
                                {...props}
                                onDeleteTodo={()=>this.handleDelete(t)}
                                todo={t} /> */}
                        </tr>
                    )

                })
            }
            </tbody>
            </table>
        </div>
     
        </>
    );
    
}
export default TodoList;