import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarlibroPage } from './agregarlibro.page';

describe('AgregarlibroPage', () => {
  let component: AgregarlibroPage;
  let fixture: ComponentFixture<AgregarlibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarlibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarlibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
