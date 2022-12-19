import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'desafioweb30stackxangular';

  tecList = ['Javascript','React','Vue js','Tailwind CSS','Styled Components','Saas','Node','TypeScript','Angular','Java']

  lang = [
    {
      en: "Hello, my name is Jonathan Richard and I am a Front-End Developer, Technologies that I have experience:",
      pt: "Olá, meu nome é Jonathan Richard e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
      es: "Hola, mi nombre es Jonathan Richard y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:",
    },
  ];


  selected = this.lang[0].pt;


}

