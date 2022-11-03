import { Input, Label } from 'components/FormContacts/FormContact.styled';
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "redux/store";

export const Filter = () => {
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch();
    const searchContact = e => dispatch(addFilter(e.currentTarget.value))

    return (
        <Label>Find contacts by name
            <Input type="text" name='filter' onInput={searchContact} value={filter} />
        </Label>
    )
}