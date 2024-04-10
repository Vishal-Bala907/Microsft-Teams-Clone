import { configureStore } from "@reduxjs/toolkit";
import LoginAndImages from "./LoginAndImages";
import ChatContext from "./ChatContext";
import JoinCall from "./JoinCall";

const LoginAndProfileStore = configureStore({
  reducer: {
    login: LoginAndImages,
    chatcontext: ChatContext,
    joinCall: JoinCall,
  },
});

export default LoginAndProfileStore;
