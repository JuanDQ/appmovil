import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregareditorialPage } from './agregareditorial.page';

describe('AgregareditorialPage', () => {
  let component: AgregareditorialPage;
  let fixture: ComponentFixture<AgregareditorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregareditorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregareditorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
