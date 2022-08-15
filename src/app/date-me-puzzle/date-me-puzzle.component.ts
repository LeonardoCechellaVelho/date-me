import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-me-puzzle',
  templateUrl: './date-me-puzzle.component.html',
  styleUrls: ['./date-me-puzzle.component.scss']
})
export class DateMePuzzleComponent implements OnInit {
  buttonNo!: HTMLElement | null;
  buttonYes!: HTMLElement | null;
  dateMeDiv!: HTMLElement | null;
  condition: number = 0;
  hintText!: string | null;
  buttonTop: string | undefined;
  buttonLeft: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  changeButtonPosition() {
    this.buttonNo = document.getElementById('btn-no');
    this.dateMeDiv = document.getElementById('date-me');

    this.condition = this.condition >= 10 ? 0 : this.condition + 1;
    this.handleCondition(this.condition);

    if (this.dateMeDiv) {
      this.buttonTop = `${ Math.random() * this.dateMeDiv.clientHeight }px`;
      this.buttonLeft = `${ Math.random() * this.dateMeDiv.clientWidth }px`;
      if (this.buttonNo) {
        this.buttonNo.style.top = this.buttonTop;
        this.buttonNo.style.left = this.buttonLeft;
        this.buttonNo.style.position = 'absolute';
      }
    }
    
    
  }

  handleCondition(condition: number) {
    this.buttonYes = document.getElementById('btn-yes');
    switch (condition) {
      case 1:
        this.hintText = 'Tu pensou em clicar no não?'
        break;
      case 2:
        this.hintText = 'Então tu pensou mesmo'
        break;
      case 3:
        if (this.buttonYes) {
          this.buttonYes.style.top = this.buttonTop ? this.buttonTop : '0px';
          this.buttonYes.style.left = this.buttonLeft ? this.buttonLeft : '0px';
          this.buttonYes.style.position = 'absolute';
          this.buttonYes.style.zIndex = '10';
        }
        this.hintText = 'Pronto vou te ajudar, olha o sim aí'
        break;
      case 4:
        this.hintText = 'Tu não viu o "Sim"?'
        break;
      case 5:
        this.hintText = 'Vou ter que sumir com esse botão mesmo'
        break;
      case 6:
        this.hintText = 'Opa kkkkkkk ta lerda'
        break;
      case 7:
        this.hintText = 'Esquece, não tem mais pra onde correr'
        break;
      case 8:
        if (this.buttonYes) {
          this.buttonYes.style.top = '0px';
          this.buttonYes.style.left = '0px';
          this.buttonYes.style.position = 'relative';
          this.buttonYes.style.zIndex = '10';
        }
        this.hintText = 'Pronto, agora só tem a opção correta'
        break;
      default:
        break;
    }
  }

}
