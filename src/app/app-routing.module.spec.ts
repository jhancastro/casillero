import { Router } from "@angular/router";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import{routes} from './app-routing.module'
import { AppComponent } from "src/app/app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatDialog } from "@angular/material/dialog";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeComponent } from "@home/home.component";

describe('app-routing.module', () => {
  let router: Router;
  let dialogSpy : jasmine.SpyObj<MatDialog>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule ,HttpClientTestingModule
      ],
      declarations: [HomeComponent, AppComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy }
],
schemas:[NO_ERRORS_SCHEMA]
    });

    router = TestBed.get(Router);

    TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));
});