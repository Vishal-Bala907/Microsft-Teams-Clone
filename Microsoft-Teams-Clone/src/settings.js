import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const APP_ID = "0f1288d9be9e452a91a26d0adc1106a5";

const TOKEN =
  "007eJxTYNh/oETZ7pbsbfGdHE2BQtK72A+/89n4xz5a7FyPRrmP138FBoM0QyMLixTLpFTLVBNTo0RLw0QjsxSDxJRkQ0MDs0TTv7yiaQ2BjAw14hysjAwQCOKzMOQmZuYxMAAA16IdEg==";

// configuration details
export const config = { mode: "rtc", codec: "vp8", APP_ID, TOKEN };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
