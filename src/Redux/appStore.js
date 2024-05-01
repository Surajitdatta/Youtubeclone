import {configureStore} from "@reduxjs/toolkit"

import Contentslice from "./Contentslice"
import Cartslice from "./Cartslice"
import Searchslice from "./Searchslice"
import Changesearchslice from "./Changesearchslice";
import Emailslice from "./emailSlice";
import Listslice from "./Listslice";
export const appStore = configureStore({
    reducer:{
        userContent : Contentslice,
        userCart : Cartslice,
        userSearch : Searchslice,
        userChangesearchslice : Changesearchslice,
        userEmail : Emailslice ,
        userListslice: Listslice
    }
}

)