import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  newsletterEmail: string = '';
  isDropdownOpen = false;
  isMobileMenuOpen = false;

  // Newsletter Subscription
  subscribeNewsletter() {
    if (this.newsletterEmail) {
      console.log('Subscribed Email:', this.newsletterEmail);
      alert(`✅ Thank you for subscribing: ${this.newsletterEmail}`);
      this.newsletterEmail = '';
    } else {
      alert('⚠️ Please enter a valid email address.');
    }
  }

  // ================= DROPDOWN =================
  toggleDropdown(event?: Event) {
    if (event) event.stopPropagation(); // prevent outside click trigger
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openDropdown(event?: Event) {
    if (event) event.stopPropagation();
    this.isDropdownOpen = true;
  }

  closeDropdownManually() {
    this.isDropdownOpen = false;
    this.isMobileMenuOpen = false;
  }

  // ================= MOBILE MENU =================
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    const hamburger = document.querySelector('.hamburger');
    hamburger?.classList.toggle('open');

    if (!this.isMobileMenuOpen) {
      this.isDropdownOpen = false;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    const hamburger = document.querySelector('.hamburger');
    hamburger?.classList.remove('open');
  }

  // ================= OUTSIDE CLICK (Desktop only) =================
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    const isDropdownClick = target.closest('.dropdown');

    if (this.isDropdownOpen && !this.isMobileMenuOpen && !isDropdownClick) {
      this.isDropdownOpen = false;
    }
  }
}
