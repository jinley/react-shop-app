// redux toolkit으로 

import { createSlice } from '@reduxjs/toolkit'; // createSlice: 액션과 리듀서를 한 곳에 모아 전달
import { CategoriesName } from './categories.type'; 

const initialState = CategoriesName.All; // 초기값을 All로 설정 from categories.type

/* 
action (dispatch) → reducer → store 순서로 전달, 리듀서가 주문(action)을 확인 후 store 상태를 업데이트
*/

export const categoriesSlice = createSlice({
    name: 'category', // slice name
    initialState, // initial state of slice
    reducers: {
        // action creator
        setActiveCategory: (_, action) => // action creator: type('_'), action // 타입은 현재 상태를 나타냄
        action.payload,  // action 객체의 payload 값
    },
});


// 생성된 슬라이스의 액션 생성자와 리듀서를 내보냄
export const {setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;