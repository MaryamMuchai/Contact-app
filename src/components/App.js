import React from 'react';
import './App.css';
import Header from "./Header";
import Addcontact from "./Addcontact";
import ContactList from "./ContactList";


function App() {

  const contacts = [
  {
    id: "1",
    name: "Marya",
    email: "marya@gmail.com",
  },
  {
    id: "2",
    name: "Maryam",
    email: "marya2gmail.com",
  },
];
  return (
  <div className='ui container'>
    <Header />
    <Addcontact />
    <ContactList contacts={contacts}/>
  </div>
  );
}

export default App;
