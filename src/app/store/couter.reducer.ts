import {  Action, createReducer, on } from "@ngrx/store";
import { CounterAction, INCREMENT, IncrementAction } from "./counter-action";
// import { increment } from "./counter-action";

const initialState=0;

// --------------------------------------------
// export const counterReducer= createReducer(
//     initialState,
//     on(increment,(state)=> state+1)
// )
// --------------------------------------------

// --------------------------------------------
// create action
// export const counterReducer= createReducer(
//     initialState,
//     on(increment,(state,action)=> state+action.value)
// )
// --------------------------------------------


// handling action with out using create reducer
// --------------------------------------------
// export function counterReducer(state=initialState,action:any){ 
//     if(action.type==='[Counter] Increment'){
//         return state+action.value;
//     }
//     return state
// }
// --------------------------------------------

// --------------------------------------------
// action treat a class
export function counterReducer(state=initialState,action:CounterAction | Action){ 
    if(action.type===INCREMENT){
        return state+(action as IncrementAction).value;
    }
    return state
}
// --------------------------------------------


