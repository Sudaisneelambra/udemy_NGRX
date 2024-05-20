import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControllerComponent } from './counter-controller/counter-controller.component';
import { Store } from '@ngrx/store';
import { init } from './store/counter.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterOutputComponent,
    CounterControllerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ngrx-udemy';


  ngOnInit(): void {
    this.store.dispatch(init())
  }

  constructor(private store:Store){}
}
