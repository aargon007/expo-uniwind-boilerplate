import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { TUser } from '@/src/types/user';

type TState = {
    user: null | TUser;
    access_token: string | null;
    refresh_token: string | null;
};

const initialState: TState = {
    user: null,
    access_token: null,
    refresh_token: null,
};

//carts slice
export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.access_token = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refresh_token = action.payload;
        },
        logoutUser: state => {
            state.user = null;
            state.access_token = null;
            state.refresh_token = null;
        },
    },
});

export const {
    setUser,
    setToken,
    setRefreshToken,
    logoutUser
} = accountSlice.actions;

export default accountSlice.reducer;


// Thunk functions. call in a useeffect
// export const getTransactions = createAsyncThunk('reportSlice/getTransactions', async (_, { getState }) => {
//     const state = getState() as RootState;
//     const transactions = state.carts.transactions;
//     const user = state.account.user;
//     return { transactions, user };
// });

// // report slice
// export const reportSlice = createSlice({
//     name: 'report',
//     initialState,
//     reducers: {},
//     extraReducers: builder => {
//         builder.addCase(getTransactions.fulfilled, (state, action) => {
//             // state came from getTransactions thunk function
//         });
//         // builder.addCase('transactions', (state, action) => {
//         //     const valueA = transactionsFromCart(action.payload.getState());
//         //     console.log(valueA);

//         // });
//     },
// });
