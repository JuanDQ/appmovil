import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditorialPage } from './editorial.page';

describe('EditorialPage', () => {
  let component: EditorialPage;
  let fixture: ComponentFixture<EditorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
