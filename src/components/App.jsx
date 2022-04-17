import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { SectionWraper } from "./Section/Section";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    // console.log('App was mount')
    
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    // console.log(parsedContacts)

    if (parsedContacts)
    {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App was update')
    // console.log(this.state.contacts)
    // console.log(prevState.contacts)

    if (this.state.contacts !== prevState.contacts) {
      // console.log('State was changed')
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  heandleAddContact = ({ name, number }) => {
    // console.log(data)
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
        contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ) {
        return alert(`${name} is already in contacts`);
    }
    
    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
  };

  heandleChangeFilter = event => {
    const { value } = event.currentTarget;

    this.setState({ filter: value });
  };

  filteredContactList = () => {
    const { filter, contacts } = this.state;
    const normilizValue = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizValue))
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId),
    }));
  };
  
  render() {
    // console.log(this.state.contacts)

    const { heandleAddContact, deleteContact, heandleChangeFilter, filteredContactList} = this;
    const { filter } = this.state;
    const { length } = this.state.contacts;

    // console.log(length)

    return (
      <SectionWraper>
        <h1>Phonebook</h1>
        <ContactForm
        onSubmit={heandleAddContact}/>
        
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChangeFilter={heandleChangeFilter} />
        
        {length > 0 ? <ContactList
          contacts={filteredContactList()}
          onDeleteContact={deleteContact} />
         : alert `Contact list is empty`
          }
        
      </SectionWraper>
    )
  }
}