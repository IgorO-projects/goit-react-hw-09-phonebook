import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { fetchContacts, deletedContact } from '../../redux/actions/phonebook-operations';
import{ getFilteredContacts } from '../../redux/actions/phonebook-selectors';
// import { Component } from 'react';


export default function ContactList () {
  const renderedContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const deletedContactbyId = useCallback(event => dispatch(deletedContact(event.currentTarget.id)), [dispatch]);
 
  useEffect(()=> { 
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {renderedContacts.map(contact => {
        return (
          <li 
          className={styles.list__item}
          key={contact.id}>
            <span
            className={styles.list__text}
            >{contact.name}: {contact.number}</span>
            <button
            id={contact.id}
            className={styles.list__button}
            type="button"
            onClick={deletedContactbyId}
            >delete</button>
          </li>
        )
      })}
    </ul>
  );
}


// class ContactList extends Component {
  
//   componentDidMount() {
//     this.props.fetchedContacts()
//   }

//   render () {
//     return (
//       <ul className={styles.list}>
//         {this.props.renderedContacts.map(contact => {
//           return (
//             <li 
//             className={styles.list__item}
//             key={contact.id}>
//               <span
//               className={styles.list__text}
//               >{contact.name}: {contact.number}</span>
//               <button
//               id={contact.id}
//               className={styles.list__button}
//               type="button"
//               onClick={this.props.deletedContactbyId}
//               >delete</button>
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   renderedContacts: getFilteredContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   deletedContactbyId: event => {dispatch(deletedContact(event.currentTarget.id))},
//   fetchedContacts: () => {dispatch(fetchContacts())},
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
