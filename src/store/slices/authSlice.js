import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const signInAsync = createAsyncThunk(
  "auth/signIn",
  async (credentials, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = auth.currentUser;
      return user.displayName;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "auth/signUp",
  async (userDetails, { rejectWithValue }) => {
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: userDetails.name });
      return user.displayName;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const signOutAsync = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      await signOut(auth);
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.isAuth = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = false;
        localStorage.setItem("authState", JSON.stringify(state));
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = false;
        localStorage.setItem("authState", JSON.stringify(state));
      })
      .addCase(signOutAsync.fulfilled, (state) => {
        state.user = null;
        state.error = null;
        localStorage.removeItem("authState");
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.error = true;
        }
      );
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
