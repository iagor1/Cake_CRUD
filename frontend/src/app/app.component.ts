import { Component } from '@angular/core';
import { Cake } from './models/cake';
import { CakeService } from './services/cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  cakes: Cake[] = [];
  cakeToEdit?: Cake;
constructor(private cakeService: CakeService) {}

ngOnInit():void {
  this.cakeService.getCakes().subscribe((result:Cake[]) => this.cakes = result);
}
  updateCakeList(cakes: Cake[]) {
  this.cakes = cakes;
  }


  initNewCake() {
  this.cakeToEdit = new Cake();
}
editCake(cake: Cake) {
  this.cakeToEdit = cake;
}
}
