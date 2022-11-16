import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: null,
    isModalShow: false,
    view: 'game',
    playerChoice: undefined,
    houseChoice: undefined,
    score: 0,
}

export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        setIsModalShow: (state, action) => {
            state.isModalShow = action.payload
        },
        setView: (state, action) => {
            state.view = action.payload
        },
        setPlayerChoice: (state, action) => {
            state.playerChoice = action.payload
        },
        setHouseChoice: (state, action) => {
            state.houseChoice = action.payload
        },
        setScore: (state, action) => {
            state.score = action.payload
        },
        addScore: (state) => {
            state.score++
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    },
})

export const { setView, setIsModalShow, setPlayerChoice, setHouseChoice, setScore, addScore, setStatus } = gameSlice.actions;

export const selectView = (state) => state.gameSlice.view;
export const selectIsModalShow = (state) => state.gameSlice.isModalShow;
export const selectPlayerChoice = (state) => state.gameSlice.playerChoice;
export const selectHouseChoice = (state) => state.gameSlice.houseChoice;
export const selectScore = (state) => state.gameSlice.score;
export const selectStatus = (state) => state.gameSlice.status;

export default gameSlice.reducer;

