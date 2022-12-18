import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-lang',
  templateUrl: './button-lang.component.html',
  styleUrls: ['./button-lang.component.sass']
})

export class ButtonLangComponent implements OnInit {


   // Iremos receber a propriedade de item passada como props para o botao e tipar a mesma
   @Input() translates!: { content: string; image: string; metodo: () => void };

   @Output() changeLang: EventEmitter<any> = new EventEmitter();
 
   handleClick(): void {
     //Passando um certo dados do item (filho ) para o pai (App)
     this.changeLang.emit(this.translates.content);

   }

   ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
