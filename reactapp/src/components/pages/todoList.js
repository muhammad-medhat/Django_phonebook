import React ,{ useState} from 'react';
import TodoForm from '../com/todoForm';
import TodoSingle from './todoSingle';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const TodoList = (props) => {
    const [todo, setTodo] = useState([])
    // console.log('props', props);


    const {todos, onInsert, onDelete, onEdit} = props

        return (  
        <>
        <h1 className='main'>Todo List comp</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                    {
                            todos.map( t => {
                            return(
                                <TodoSingle key={t.id} 
                                    todo={t}
                                    del={onDelete}
                                    edit={onEdit}
                                />

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