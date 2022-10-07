import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {
  title = 'Objetivo';
  title2 = 'Conhecimentos Técnicos' ;
  title3 = 'Curso em Andamento';
  title4 = 'Experiências Profissionais e Acadêmicas';
  constructor() { }

  ngOnInit(): void {
  }

}
