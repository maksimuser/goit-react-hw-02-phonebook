import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  findName = name => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name === name);
  };

  addNewContact = ({ name, number }) => {
    const checkName = this.findName(name);

    if (checkName) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleFilter = this.getVisibleContact();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          onVisibleFilter={visibleFilter}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
