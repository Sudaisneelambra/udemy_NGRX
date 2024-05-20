import { Action, createAction, props } from "@ngrx/store";

// --------------------------------------------
// export const increment = createAction(
//     '[Counter] Increment',
// );
// --------------------------------------------


// --------------------------------------------
// action added
export const increment = createAction(
    '[Counter] Increment',
    props<{value:number}>()
);
// --------------------------------------------


// --------------------------------------------
// action like a class
// export const INCREMENT='[Counter] Increment'
// export class IncrementAction implements Action{
//     readonly type = INCREMENT;
//     constructor (public value:number){
//     }
// }
// export type CounterAction= IncrementAction
// --------------------------------------------


// --------------------------------------------
// creating Decrement Action   ------------4--------------------
export const decrement= createAction(
    '[Counter] decrement',
    props<{value:number}>()
)
// --------------------------------------------


