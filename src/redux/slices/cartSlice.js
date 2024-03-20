import  {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers : {
        addItem: (state,action)=>{
            state.push(action.payload);
        },
        removeItem: (state,action)=>{
            const {id} = action.payload;
            return state.filter((ele)=> ele.id !== id);
            
        }

    }
})

export const {addItem} = cartSlice.actions;
export const {removeItem} = cartSlice.actions;


export default cartSlice.reducer;