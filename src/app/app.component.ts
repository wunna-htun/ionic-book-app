import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'AllBooks', url: '/allbooks', icon: 'book' },
    { title: 'Reading Books', url: '/readingbooks', icon: 'glasses' },
    { title: 'Plan To Read', url: '/plantoRead', icon: 'document' },
    { title: 'Read', url: '/read', icon: 'document-text' }
  ];

  constructor() {}
}
