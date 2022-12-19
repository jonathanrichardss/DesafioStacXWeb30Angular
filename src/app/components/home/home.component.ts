import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  @Input() textolist!: string[];

  @Input() selected!: string;

  lang = [
    {
      en: "Hello, my name is Jonathan Richard and I am a Front-End Developer, Technologies that I have experience:",
      pt: "Olá, meu nome é Jonathan Richard e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
      es: "Hola, mi nombre es Jonathan Richard y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:"
    },
  ];

  translates = [
    {
      content: "Português",
      image: "../../../assets/public/icons/brazil.png",
      metodo: () => (this.selected = this.lang[0].pt)
    },
    {
      content: "Espanhol",
      image: "../../../assets/public/icons/spain 2.png",
      metodo: () => (this.selected = this.lang[0].es)
    },
    {
      content: "Inglês",
      image: "../../../assets/public/icons/united-states.png",
      metodo: () => (this.selected = this.lang[0].en, console.log('entrou no metodo'))
    },
  ];

  onChangeLang($event: string) {
    if ($event == "Português") {
      this.translates[0].metodo();
    } else if ($event == "Espanhol") {
      this.translates[1].metodo();
    } else {
      this.translates[2].metodo();
    }
  }

}
