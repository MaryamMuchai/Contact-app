import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Addcontact from "./Addcontact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact);
  }

  return (
  <div className='ui container'>
    <Header />
    <Addcontact addContactHandler = {addContactHandler} />
    <ContactList contacts={contacts}/>
  </div>
  );
}

export default App;
