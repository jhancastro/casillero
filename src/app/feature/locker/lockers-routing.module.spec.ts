import { Router } from "@angular/router";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import{routes} from './lockers-routing.module'
import { AppComponent } from "src/app/app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LockerComponent } from "./components/locker/locker.component";
import { SaveComponent } from "./components/save/save.component";
import { MatDialog } from "@angular/material/dialog";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('login-routing.module', () => {
  let router: Router;
  let dialogSpy : jasmine.SpyObj<MatDialog>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule ,HttpClientTestingModule
      ],
      declarations: [LockerComponent, SaveComponent, AppComponent],
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