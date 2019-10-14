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
      description: "Pesquisa e desenvolvimento de software com foco em inovação envolvendo o estudo e aplicação de métodos, ferramentas e tecnologias inovadoras de tecnologia da informação.",
      projectInfo: "Diversos projetos em parceria com a HP. Projeto principal: Crialab. Foco em aprendizado e prática de técnicas de Design Thinking alinhados com o Desenvolvimento de software. Minha principal contribuição foi a pesquisa com usuários, testes com usuários e desenvolvimento de um aplicativo de realidade aumentada com HTML, CSS e JavaScript."
    }, 
    {id:2, name:"ADP", 
      description:"Soluções de Folha de Pagamento e Gestão de Capital Humano.",
      projectInfo: 'Aplicação web para uso interno dos colaboradores. Minha principal contribuição foi criação de testes unitários com Karma e Jasmine, desenvolvimento de novas funcionalidades, análise e criação de wireframes de interface gráfica e programação de UI com HTML, CSS e AngularJS.'
    },
    {id:3, name: "ilegra", description: "Consultoria de design, inovação e software.",
      projectInfo: 'Aplicação de uso interno para cliente da área financeira. A solução proposta se baseava em uma aplicação web local com foco em visualização de dados e análise financeira. Minha principal contribuição neste projeto foi a estruturação do código e arquitetura do sistema, desenvolvimento de novas funcionalidades e UI. As tecnologias utilizadas foram HTML, CSS e AngularJS.'
    }, 
    {id:4, name:"N49", description:"Desenvolvimento de e-commerce escalável para qualquer negócio.",
      projectInfo: "Desenvolvimento de UI para a plataforma de e-commerce, layouts responsivos para os sites das lojas, novos componentes e análise. Minha principal contribuição foi na criação e suporte dos sites. O front-end das páginas SPA utilizam React e, em alguns casos, JQuery. Observação: atividades realizades como freelancer e conforme demanda."
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(projeto){
    this.router.navigate(['/projetos', projeto.id, {desc: projeto.description, info: projeto.projectInfo}]);
  }

}
