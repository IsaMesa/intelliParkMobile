import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener 3 datos en la información del parqueadero', () => {
    expect(component.parkingInfo.length).toBe(3);
  });

  it('debe mostrar la tarjeta "Información del parqueadero" en pantalla', () => {
    const element: HTMLElement = fixture.nativeElement;
    const card = element.querySelector('.parking-info-card');

    expect(card).toBeTruthy();
    expect(card?.textContent).toContain('Información del parqueadero');
    expect(element.querySelectorAll('.parking-info-card ion-item').length).toBe(3);
  });
});