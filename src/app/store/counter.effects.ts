import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from './counter.action';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectCount } from './counter.selectors';

@Injectable()
export class CounterEffect {
  //   saveCount = createEffect(
  //     () =>
  //       this.actions$.pipe(
  //         ofType(increment, decrement),
  //         tap((action) => {
  //           console.log(action);
  //           localStorage.setItem('count', action.value.toString());
  //         })
  //       ),
  //     { dispatch: false }
  //   );

  //   constructor(private actions$: Actions) {}


//   -------------------------------------------------
// using store data in effect ------------------------------------7---------------------------
//   saveCount = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(increment, decrement),
//         withLatestFrom(this.store.select(SelectCount)),
//         tap(([action,count]) => {
//           console.log(action);
//           console.log(count)
//           localStorage.setItem('count', count.toString());
//         })
//       ),
//     { dispatch: false }
//   );
//   constructor(private actions$: Actions, private store:Store<{counter:number}>) {}
//   -------------------------------------------------


//   -------------------------------------------------
// second action ------------------------------------8---------------------------

loadCount= createEffect(
    ()=>
        this.actions$.pipe(
            ofType(init),
            switchMap(()=>{
                const storedCount= localStorage.getItem('count');
                if(storedCount){
                    return of(set({value:+storedCount}));
                }
                 return of(set({value:0}));
            })
        )
)

saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(SelectCount)),
        tap(([action,count]) => {
          console.log(action);
          console.log(count)
          localStorage.setItem('count', count.toString());
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private store:Store<{counter:number}>) {}
//   -------------------------------------------------
  
  
}