import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ServicesService } from 'src/app/services/services.service';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [ LoginComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [ServicesService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a form to use for login', () => {
    const elementForm = fixture.debugElement.nativeElement.querySelector('form');
    expect(elementForm).toBeTruthy();
  });

  it('if password and email are empty, showPasswordMessage should return true', () => {
    // const elementForm = fixture.debugElement.nativeElement.querySelector('form');
    expect(component.showPasswordMessage()).toBeFalse();
  })
  // Buscar como probar que cuando ponen un correo y password en los elementos y se hace subtmit, si se llama la función que hace la petición a la API.
  // como simular un click, un submit (simular un evento)
});
