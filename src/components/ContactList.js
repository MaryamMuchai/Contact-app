import React from "react";
import ContactCard from "./ContactCard";
import { link } from "react-router-dom";


const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    // const contacts = [{
    //     id: "1",
    //     name: "MARYA",
    //     email:"marya@gmail.com",
    // }]
    const renderContactList = props.contacts.map((contact) => {
        return ( 
        <ContactCard
        contact={contact} 
        clickHandler={deleteContactHandler} 
        key={contact.id}
        />
        );
    });
    return (
        <div class="main">
            <h2>Contact List
                <link to="/add">
            <button className="ui button blue right">Add Contact</button>
                </link>
            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};
export default ContactList;