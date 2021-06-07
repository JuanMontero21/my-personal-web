import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
              private readonly translateService: TranslateService,
              private readonly title: Title,) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setUpI18n();
  }

  setUpI18n() {
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/es|en/) ? browserLang : 'es');

    this.translateService.get('app.title').subscribe(title => this.title.setTitle(title));
  }
}
