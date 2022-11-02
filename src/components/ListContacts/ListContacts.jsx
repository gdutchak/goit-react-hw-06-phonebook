import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';
import { Item, ButtonList } from './ListContacts.styled';

export const ListContacts = () => {
    let contacts = useSelector((state) => state.contacts);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch()
    if (filter) {
        contacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
    }
    return (<ul>
        {contacts ? contacts.map(({ name, number, id }) => <Item key={id}>{name}: {number}
            <ButtonList type='ButtonList' onClick={() => dispatch(deleteContact(id))}>Delete</ButtonList></Item>) : null}
    </ul>)
}

