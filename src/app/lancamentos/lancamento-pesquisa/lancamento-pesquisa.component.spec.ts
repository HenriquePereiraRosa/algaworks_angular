import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoPesquisaComponent } from './lancamento-pesquisa.component';

describe('LancamentosPesquisaComponent', () => {
  let component: LancamentoPesquisaComponent;
  let fixture: ComponentFixture<LancamentoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
