import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceRegisterComponent } from './marketplace-register.component';

describe('MarketplaceRegisterComponent', () => {
  let component: MarketplaceRegisterComponent;
  let fixture: ComponentFixture<MarketplaceRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
