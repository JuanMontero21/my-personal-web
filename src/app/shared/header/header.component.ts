import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showNavFlag = true;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    setTimeout(()=>{
      this.showNavFlag = !this.showNavFlag;
    }, 400)
  }

}
