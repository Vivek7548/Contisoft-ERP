import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Contisoft_project';

  ngOnInit() {
    window.addEventListener('load', () => {
      const loader = document.getElementById('pageLoader');
      if (loader) {
        setTimeout(() => {
          loader.classList.add('hidden');
        }, 1500);
      }
    });

    if (document.readyState === 'complete') {
      const loader = document.getElementById('pageLoader');
      if (loader) {
        setTimeout(() => {
          loader.classList.add('hidden');
        }, 1500);
      }
    }
  }
}
