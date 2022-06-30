import React ,{ useState} from 'react';
import EditableLabel from 'react-inline-editing';
import InlineEdit from '../inlineEdit';
import TodoForm from '../todoForm';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const TodoList = (props) => {
    const [todo, setTodo] = useState([])
    // console.log('props', props);

    const {todos, onInsert, onDelete, onEdit} = props



    /**
     * Update the todo list  
     */


    function _handleFocus(e){ 
        console.log('Handle focus', e)
    }

    function _handleFocusOut(text) {
        debugger
        console.log('Left editor with text: ' + text);
        console.log('todo', todo)
        onEdit(todo)
    }

        return (  
        <>
        <h1>Todo List comp</h1>
        <div className="container">
               <h2>add task</h2>
               <TodoForm 
                    onInsert={onInsert}/>
                <h2>Todo List</h2>
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
                                        {/* <EditableLabel text={t.title} 
                                            name="title"
                                            onFocus={_handleFocus}
                                            // onFocusOut={_handleFocusOut}
                                            onFocusOut={() =>{
                                                console.log('save', t)
                                            }} */}

                                            <InlineEdit value={t.title} setValue={()=>onEdit(t)} 
                                        />                            
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
                                        {/* <FontAwesomeIcon icon={['fas', 'fa-trash-alt']} /> */}
                                        {/* <i className="far fa-trash-alt" ></i> */}
                                        
                                        <span onClick={()=>onDelete(t.id)}>
                                            Delete
                                        </span>
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