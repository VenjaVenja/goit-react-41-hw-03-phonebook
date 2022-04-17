import propTypes from "prop-types";
import { Contact } from "components/Contact/Contact";
import { ContactListEl, ContactListItem } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactListEl>
        {contacts.map(({ id, name, number}) =>
        (<ContactListItem key={id}>
            
            <Contact
                contactId={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact} />
            
            </ContactListItem>
        ))}
        </ContactListEl>
    )
};

ContactList.propTypes = {
    contacts: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
    })),
    onDeleteContact: propTypes.func.isRequired,
};