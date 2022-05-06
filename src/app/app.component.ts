import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Send Data Child to Parent Component';
  data = 10;
  updateChild(){
    // this.data=Math.random()
    this.data= Math.floor(Math.random()*10)
  }
}
