import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { TestBed, fakeAsync, tick, flush } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HomeComponent } from "@home/home.component";
import { LoginComponent } from "./login.component";

import{routes} from './login-routing.module'
import { AppComponent } from "src/app/app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('login-routing.module', () => {
  let location: Location;
  let router: Router;
  //let fixture : ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule ,HttpClientTestingModule
      ],
      declarations: [HomeComponent, LoginComponent, AppComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

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

  it('navigate to  redirects you to /home', fakeAsync(() => {
    router.navigate(['/home']).then(() => {
      expect(location.path()).toBe('/home');
      flush();
    });
  }));

});