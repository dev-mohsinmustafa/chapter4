import { configureStore } from "@reduxjs/toolkit";


// important
import accountReducer from "../redux/slices/accountSlice";
import bonusReducer from "../redux/slices/bonusSlice";

// additional
import rewardReducer from "../redux/reducers/reward";

import { adminApi } from "../redux/api/adminSlice";


// ab yaha reducers chahyen
const store = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer,

        // additional 
        reward: rewardReducer,

        // [] is leye lagey kyo ke jab ap key dete ho to square[] dene se he usme value ati hai
        // warna key hamesha 1 string mane jati hai
        [adminApi.reducerPath]: adminApi.reducer,
    },

    // is me 1 new chez middleware be add kren jo isme khud he hoty hain
    // add krne ka tareqa

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    // getDefaultMiddleware mtlb already jitne be existing middleware hain wo ajyenge
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(adminApi.middleware),


})


export default store;