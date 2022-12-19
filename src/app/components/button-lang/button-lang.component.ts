import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-lang',
  templateUrl: './button-lang.component.html',
  styleUrls: ['./button-lang.component.sass']
})

export class ButtonLangComponent {


  
   @Input() translates!: { content: string; image: string; metodo: () => void };

   @Output() changeLang = new EventEmitter();
 
   handleClick(): void {
     this.changeLang.emit(this.translates.content);
   }

}
