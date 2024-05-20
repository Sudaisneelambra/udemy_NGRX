// --------------------------------------------

import { createSelector } from "@ngrx/store"

// creating selector --------------------5------------------------
export const SelectCount= (state:{counter:number})=> state.counter
export const selectDoubleCount= createSelector(
    SelectCount,
    (state)=>state*2
)
// --------------------------------------------
