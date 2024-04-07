import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : []
}

export const tournamentsSlice = createSlice({
    name : "tournaments",
    initialState,
    reducers : {
        setTournaments : (state) => {
            state.value = state
        }
    }
})

export const { setTournaments } = tournamentsSlice.actions
export default tournamentsSlice.reducer