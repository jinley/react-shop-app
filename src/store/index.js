import React from 'react'

export const store = configureStore({
    reducer: {
        userSlice,
    },
});

const index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default index
