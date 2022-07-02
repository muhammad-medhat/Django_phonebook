import React, { useState } from 'react';
import EditInlup from './editInp';

const ContactSingle = (props)=>  {
    const editcontact = (t)=>{
        // console.log('edit', t)
    }
    const {contact, del, edit} = props
    // console.log('props', props)

    const [isEditing, setIsEditing] = useState(false);
    const [ setcontact] = useState(contact);

        const t = contact
    //    console.log(`props ${t.id}`, props);
    //    console.log('single contact', t);

        return (  
            <>
            <tr id={t.id}>
                <td>{t.id}</td>
                <td>
                    {/* <EditInlup value={t.title} setValue={() => setcontact(...contact, {title: 'xx'})} /> */}
                    <EditInlup 
                        value={t.title} 
                        edit={(e) => edit({...t, title: e})}  /> 
                
                </td>
                <td>
                

                    <EditInlup 
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
 
export default ContactSingle;