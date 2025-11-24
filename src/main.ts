import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Initialize AOS (Animate On Scroll)
import * as AOS from 'aos';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    // Initialize AOS after Angular app is bootstrapped
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  })
  .catch(err => console.error(err));
