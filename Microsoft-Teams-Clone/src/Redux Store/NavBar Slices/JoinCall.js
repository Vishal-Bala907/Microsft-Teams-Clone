import { createSlice } from "@reduxjs/toolkit";

export const JoinCall = createSlice({
  name: "chat",
  initialState: { joined: false },
  reducers: {
    setJoined: (state) => {
      state.joined = !state.joined;

      // alert(state.joined);
    },
  },
});

export const { setJoined } = JoinCall.actions;
export default JoinCall.reducer;
