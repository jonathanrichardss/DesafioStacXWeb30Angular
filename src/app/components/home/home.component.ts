import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  content: string = 'joao'
  image: string = ''

  listateste = ['ai', 'meu', 'Deus', 'oq', 'ta', 'acontecendo'];
  
  elemento = ''

  tecList = [
    "Javascript","React",'Vue js','Tailwind CSS','Styled Components','Saas',"Node",'TypeScript',"Angular","Java"
  ];

  lang = [
    {
      en: "Hello, my name is Jonathan Richard and I am a Front-End Developer, Technologies that I have experience:",
      pt: "Olá, meu nome é Jonathan Richard e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
      es: "Hola, mi nombre es Jonathan Richard y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:",
    },
  ];

  translates = [
    {
      name: "Brasil",
      flag: "../../../assets/images/brazil.png",
      metodo: () => (this.selected = this.lang[0].pt),
    },
    {
      name: "Espanhol",
      flag: "../../../assets/images/spain.png",
      metodo: () => (this.selected = this.lang[0].es),
    },
    {
      name: "Inglês",
      flag: "../../../assets/images/united-states.png",
      metodo: () => (this.selected = this.lang[0].en),
    },
  ];

  selected = this.lang[0].pt;

  onChangeLang($event: string) {
    if ($event == "Brasil") {
      this.translates[0].metodo();
    } else if ($event == "Espanhol") {
      this.translates[1].metodo();
    } else {
      this.translates[2].metodo();
    }
  }

}
