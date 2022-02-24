import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styles: [`:host {
    background-color: #106cc8;
    color: rgba(255, 255, 255, 0.87);
    display: block;
    height: 48px;
    padding: 0 16px;
  }

  h1 {
    display: inline;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 0.1px;
    line-height: 48px;
  }

  .more {
    background: url("/assets/svg/more.svg");
    float: right;
    height: 24px;
    margin-top: 12px;
    width: 24px;
  }
  .tittle{
    display: inline;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 0.1px;
    line-height: 48px;
    margin-left: 0%;
  }
  .danger{
    font-size: 20px;
    margin-left: 85%;
  }`]
})
export class ToolbarComponent implements OnInit {

  constructor(
    protected readonly router: Router,
  ) { }

  ngOnInit() {
  }

  public logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
  }


}
