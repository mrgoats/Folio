import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projetos-detalhe',
  templateUrl: './projetos-detalhe.component.html',
  styleUrls: ['./projetos-detalhe.component.scss']
})
export class ProjetosDetalheComponent implements OnInit {

  public detalhes;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.detalhes = id;
  }

}
