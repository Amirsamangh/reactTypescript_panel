import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = { showSidebar: boolean };

const initialState: initialStateType = { showSidebar: false };

const uiManagerSlice = createSlice({
    name: 'ui-manager',
    initialState: initialState,
    reducers: {
        setShowSidebar: (state: initialStateType, action: PayloadAction<boolean>) => {
            state.showSidebar = action.payload
        }
    }
})

const uiManagerReducer = uiManagerSlice.reducer

export default uiManagerReducer;

export const { setShowSidebar } = uiManagerSlice.actions