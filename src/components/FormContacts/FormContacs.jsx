import { useState } from 'react';
import { AddContacts } from 'components/AddContacts/AddContacts';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/store';

export function FormContacts() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const addContactItem = (e) => {
        e.preventDefault();
        let data = {
            id: nanoid(),
            name,
            number,
        }
        dispatch(addContact(data))
        setName('')
        setNumber('')
    }

    return (
        <AddContacts submit={addContactItem} contactName={(e) => { setName(e.currentTarget.value) }} valueName={name} contactNumber={(e) => { setNumber(e.currentTarget.value) }} valueNum={number}></AddContacts>
    )
}

