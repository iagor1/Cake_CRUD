import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cake } from 'src/app/models/cake';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-edit',
  templateUrl: './cake-edit.component.html',
  styleUrls: ['./cake-edit.component.css']
})
export class CakeEditComponent implements OnInit {
  @Input() cake?: Cake;
  @Output() cakesUpdated = new EventEmitter<Cake[]>();


  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {
  }

  updateCake(cake: Cake) {
    this.cakeService.updateCake(cake).subscribe((cakes: Cake[]) => this.cakesUpdated.emit(cakes));
  }
  deleteCake(cake: Cake) {
    this.cakeService.deleteCake(cake).subscribe((cakes: Cake[]) => this.cakesUpdated.emit(cakes));
  }
  createCake(cake: Cake) {
    this.cakeService.createCake(cake).subscribe((cakes: Cake[]) => this.cakesUpdated.emit(cakes));
  }
}
