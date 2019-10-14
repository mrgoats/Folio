import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosDetalheComponent } from './projetos-detalhe.component';

describe('ProjetosDetalheComponent', () => {
  let component: ProjetosDetalheComponent;
  let fixture: ComponentFixture<ProjetosDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
