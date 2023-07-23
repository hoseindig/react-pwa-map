import { configureStore } from "@reduxjs/toolkit";

import couterReduce from "./counter";
import appData from "./appData";

const store = configureStore({
  reducer: {
    counter: couterReduce,
    appData: appData,
  },
});

export default store;
