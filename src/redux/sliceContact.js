import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    contacts: [],
    filter: ""
}
export const contactSlice = createSlice({
    name: 'contact', initialState,
    reducers: {
        addContact: (state, action) => {
            if (state.contacts.find(({ name }) => name.toLowerCase() === action.payload.name.toLowerCase())) {
                alert(`This name is already in contacts!`)
                return
            } else {
                state.contacts.push(action.payload)

            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(({ id }) => id !== action.payload)
        },
        addFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})