import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeType = 'dark' | 'light'

type initialStateType = { showSidebar: boolean , theme: ThemeType };

const initialState: initialStateType = { showSidebar: false , theme: "light" };

const uiManagerSlice = createSlice({
    name: 'ui-manager',
    initialState: initialState,
    reducers: {
        setShowSidebar: (state: initialStateType, action: PayloadAction<boolean>) => {
            state.showSidebar = action.payload
        },
        toggleTheme: (state: initialStateType) =>{
            state.theme = state.theme === "light" ? 'dark' : 'light'
        },
        setTheme: (state: initialStateType , action: PayloadAction<ThemeType>)=>{
            state.theme = action.payload
        }
    }
})

const uiManagerReducer = uiManagerSlice.reducer

export default uiManagerReducer;

export const { setShowSidebar , toggleTheme , setTheme } = uiManagerSlice.actions