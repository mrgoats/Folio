import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  projetos = [
    {id: 1, name: "Laboratório de Inovação em Software (LIS)", 
      description: "Pesquisa e desenvolvimento de software com foco em inovação envolvendo o estudo e aplicação de métodos, ferramentas e tecnologias inovadoras de tecnologia da informação."}, 
    {id:2, name:"ADP", 
      description:"Soluções de Folha de Pagamento e Gestão de Capital Humano."},
    {id:3, name: "ilegra", description: "Consultoria de design, inovação e software."}, 
    {id:4, name:"N49", description:"Desenvolvimento de e-commerce escalável para qualquer negócio."},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(projeto){
    this.router.navigate(['/projetos', projeto.id]);
  }

}
