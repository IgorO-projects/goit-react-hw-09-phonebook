import axios from 'axios';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deletedContactRequest,
    deletedContactSuccess,
    deletedContactError
} from './phonebook-actions';


export const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest())

    axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error.message)))
}

export const handleContactAdd = contact => dispatch => {
    dispatch(addContactRequest())

    axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)))
};

export const deletedContact = id => dispatch => {
    dispatch(deletedContactRequest())

    axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deletedContactSuccess(id)))
    .catch(error => dispatch(deletedContactError(error.message)))
};