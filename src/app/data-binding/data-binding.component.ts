import { Component, OnInit, APP_ID } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
 

})
export class DataBindingComponent implements OnInit {


  url: string = 'http://maidno.dev';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;


  getValor(){
    return 1;

  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){ 
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
