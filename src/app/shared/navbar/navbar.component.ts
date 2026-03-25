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
  private lastScrollY = 0;

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
    this.closeMobileMenu();
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
    this.isDropdownOpen = false;
    const hamburger = document.querySelector('.hamburger');
    hamburger?.classList.remove('open');
  }

  private isMobileOrTabletView(): boolean {
    return window.innerWidth <= 1024;
  }

  // ================= OUTSIDE CLICK =================
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    const isDropdownClick = target.closest('.dropdown');
    const isNavbarClick = target.closest('.nav');

    if (this.isMobileMenuOpen && this.isMobileOrTabletView() && !isNavbarClick) {
      this.closeMobileMenu();
      this.isDropdownOpen = false;
      return;
    }

    if (this.isDropdownOpen && !this.isMobileMenuOpen && !isDropdownClick) {
      this.isDropdownOpen = false;
    }
  }

  @HostListener('window:scroll')
  handleWindowScroll() {
    if (!this.isMobileMenuOpen || !this.isMobileOrTabletView()) {
      return;
    }

    const currentScrollY = window.scrollY || 0;
    const hamburger = document.querySelector('.hamburger');

    if (currentScrollY <= 0 || currentScrollY < this.lastScrollY) {
      hamburger?.classList.remove('hide-on-scroll');
    } else if (currentScrollY > this.lastScrollY) {
      hamburger?.classList.add('hide-on-scroll');
    }

    this.lastScrollY = currentScrollY;
  }
}
