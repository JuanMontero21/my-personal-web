import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from 'src/app/config/globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showNavFlag = true;

  constructor(
              public globals: Globals,
              private readonly translate: TranslateService) { }

  ngOnInit(): void {
  }

  showNav() {
    setTimeout(()=>{
      this.showNavFlag = !this.showNavFlag;
    }, 400)
  }

  public useLanguage(language: string) {
    if (!this.globals.langChangedByUser) {
        this.globals.langChangedByUser = true;
    }
    this.translate.use(language);
}

}
