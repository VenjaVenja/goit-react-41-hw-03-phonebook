import { Component } from 'react';
import { Form, Label, Text, Input, AddContactBtn } from './ContactForm.styled';
import propTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  heandleInputhange = (event) => {
    const {name, value} = event.currentTarget;
   
    this.setState({[name]: value})
  };

  heandleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state)
    this.reset()
    console.log(this.state);
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    const { heandleInputhange, heandleSubmit } = this;
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={heandleSubmit}>
          <Label>
            <Text>Name</Text>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={heandleInputhange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder='Full name'
            />
          </Label>

          <Label>
            <Text>Phone</Text>
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={heandleInputhange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder='+XX-(XXX)-XXX-XX-XX'
            />
          </Label>
          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </Form>
      </>
    );
  }
};

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

