import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-iterator',
  templateUrl: './list-iterator.component.html',
  styleUrls: ['./list-iterator.component.sass']
})
export class ListIteratorComponent {

 @Input() textolist!: string[];

}
