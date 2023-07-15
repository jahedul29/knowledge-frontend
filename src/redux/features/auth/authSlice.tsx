import { RootState } from '@/redux/store';
import { IUser } from '@/types/User';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface IAuthState {
  user: IUser | null;
  accessToken: string;
}

// Define the initial state using that type
const initialState: IAuthState = {
  user: null,
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      (state.user = null), (state.accessToken = '');
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
