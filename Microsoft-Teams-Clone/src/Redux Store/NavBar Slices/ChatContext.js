import { createSlice } from "@reduxjs/toolkit";

export const ChatContext = createSlice({
  name: "chat",
  initialState: { chatId: "null", user: {}, playVideo: true },
  reducers: {
    changeUser: (state, action) => {
      const currentUser = JSON.parse(sessionStorage.getItem("profile"));
      const selectedUser = action.payload;
      console.log(selectedUser);
      // if (type === "CHANGE_USER") {
      state.user = selectedUser;
      state.chatId =
        currentUser.uid > selectedUser.uid
          ? currentUser.uid + selectedUser.uid
          : selectedUser.uid + currentUser.uid;
      console.log(currentUser.uid);
      console.log(selectedUser.uid);
      // }
      // console.log("STATE ", state.chatId);
    },

    toggleVideoPlay: (state) => {
      state.playVideo = !state.playVideo;
      // alert(state.playVideo);
    },
  },
});

export const { changeUser, toggleVideoPlay } = ChatContext.actions;
export default ChatContext.reducer;
