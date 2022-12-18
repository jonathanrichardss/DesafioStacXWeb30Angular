import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.sass']
})
export class ListRenderComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  lista = [1,2,3,4,5]
}
