import React ,{ useState} from 'react';
import ContactForm from '../com/contactForm';
import ContactSingle from '../com/contactSingle';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const ContactList = (props) => {
    const [contact, setContact] = useState([])
    // console.log('props', props);


    const {contacts, onInsert, onDelete, onEdit} = props

        return (  
        <>
        <h1 className='main'>Contact List comp</h1>
        <div className="container">
               <h2>add contact</h2>
               <ContactForm ptitle={'Add Contact'}
                    onInsert={onInsert}/>
                <h2>Contact List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> name </th>
                            <th scope="col">phone </th>
                            <th scope="col">email </th>
                            <th scope="col">...</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            contacts.map( c => {
                            return(
                                <ContactSingle key={c.id} 
                                    contact={c}
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