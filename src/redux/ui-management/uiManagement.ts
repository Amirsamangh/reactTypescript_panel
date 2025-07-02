import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeType = 'dark' | 'light'

type initialStateType = { showSidebar: boolean , theme: ThemeType };

const initialState: initialStateType = { showSidebar: false , theme: localStorage.getItem('theme') as ThemeType || 'light' };

const uiManagerSlice = createSlice({
    name: 'ui-manager',
    initialState: initialState,
    reducers: {
        setShowSidebar: (state: initialStateType, action: PayloadAction<boolean>) => {
            state.showSidebar = action.payload
        },
        toggleTheme: (state: initialStateType) =>{
            const newTheme = state.theme === "light" ? 'dark' : 'light'
            state.theme = newTheme
            localStorage.setItem('theme' , newTheme)
        },
        setTheme: (state: initialStateType , action: PayloadAction<ThemeType>)=>{
            state.theme = action.payload
            localStorage.setItem('theme' , action.payload)
        }
    }
})

const uiManagerReducer = uiManagerSlice.reducer

export default uiManagerReducer;

export const { setShowSidebar , toggleTheme , setTheme } = uiManagerSlice.actions