import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter-action';
// import { IncrementAction} from '../store/counter-action';

@Component({
  selector: 'app-counter-controller',
  standalone: true,
  imports: [],
  templateUrl: './counter-controller.component.html',
  styleUrl: './counter-controller.component.scss'
})
export class CounterControllerComponent {

  constructor(private store:Store){}

// --------------------------------------------
  // increment(){
  //   this.store.dispatch(increment())
  // }
// --------------------------------------------

// --------------------------------------------
  // action added
  increment(){
    this.store.dispatch(increment({value:1}))
  }
// --------------------------------------------


// --------------------------------------------
// decrement action created         ------------4--------------------
decrement(){
  this.store.dispatch(decrement({value:1}))
}
// --------------------------------------------


}
