import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projetos-detalhe',
  templateUrl: './projetos-detalhe.component.html',
  styleUrls: ['./projetos-detalhe.component.scss']
})
export class ProjetosDetalheComponent implements OnInit {

  public detalhes = { id: 0, description:'', projectInfo:''};
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let description = this.route.snapshot.paramMap.get(('desc'));
    let projectInfo = this.route.snapshot.paramMap.get(('info'));
    this.detalhes.id = id;
    this.detalhes.description = description;
    this.detalhes.info = projectInfo;
  }

}
