import React from 'react'

const initialState = localStorage.getItem('user')
  ? JOSN.parse(localStorage.getItem('user') || '')
  : {
    email: '',
    token: '',
    id: '',
  };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            localStorage.setItem('user', JSON.stringify(state));
        },
    },
});

// const user.slice = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

export const { setUser, removeUser } = userSlice.actions; 
export default user.Slice.reducer;
