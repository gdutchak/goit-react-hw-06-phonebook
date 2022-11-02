import { FormContacts } from './FormContacts/FormContacs';
import { Filter } from "./Filter/Filter";
import { ListContacts } from "./ListContacts/ListContacts";

export function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Phonebook</h1>
      <FormContacts ></FormContacts>
      <Filter></Filter>
      <h2>Contacts</h2>
      <ListContacts ></ListContacts>
    </div >
  )
}
















