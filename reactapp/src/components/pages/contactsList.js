import React ,{ useState} from 'react';
import ContactForm from '../com/ContactForm';
import ContactSingle from '../com/contactSingle';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const ContactList = (props) => {
    const [Contact, setContact] = useState([])
    // console.log('props', props);


    const {Contacts, onInsert, onDelete, onEdit} = props

        return (  
        <>
        <h1>Contact List comp</h1>
        <div className="container">
               <h2>add task</h2>
               <ContactForm 
                    onInsert={onInsert}/>
                <h2>Contact List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> name </th>
                            <th scope="col">email </th>
                            <th scope="col">phone </th>
                            <th scope="col">...</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Contacts.map( c => {
                            return(
                                <ContactSingle key={c.id} 
                                    Contact={c}
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
export default ContactList;