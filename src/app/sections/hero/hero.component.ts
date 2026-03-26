import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as $ from 'jquery';  // ✅ import jQuery
import 'slick-carousel';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

interface JQuery {
  slick(options?: any): JQuery;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {

  // Chatbot
  chatOpen = false;
  messages: { text: string, sender: 'user' | 'bot' }[] = [
    { text: 'Hi! How can I help you today?', sender: 'bot' }
  ];
  inputMessage: string = '';
  @ViewChild('chatContainer') chatContainer!: ElementRef;

  // Performance: IntersectionObserver for deferred rendering
  private heroObserver?: IntersectionObserver;
  private deferredSectionsObserver?: IntersectionObserver;
  private aosInitialized = false;

  // Video Modal
  showVideo = false;
  videoUrl: SafeResourceUrl | undefined;

  constructor(
    private sanitizer: DomSanitizer,
    private ngZone: NgZone,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
  this.title.setTitle('Contact Contisoft | API Marketplace Support');

  this.meta.updateTag({
    name: 'description',
    content: 'Contact Contisoft Technologies for API integration, partnerships, and enterprise solutions.'
  });
}
  // Open/close chat
  toggleChat() {
    this.chatOpen = !this.chatOpen;
    setTimeout(() => this.scrollToBottom(), 0);
  }
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // Send message from input
  sendMessage() {
    if (!this.inputMessage.trim()) return;

    this.messages.push({ text: this.inputMessage, sender: 'user' });
    this.messages.push({ text: 'Thanks for your message!', sender: 'bot' });

    this.inputMessage = '';
    this.scrollToBottom();
  }

  // Quick reply buttons
  handleReply(message: string) {
    this.messages.push({ text: message, sender: 'user' });

    if (message.includes('Book a meeting')) {
      window.location.href = '/book-meeting';
    } else if (message.includes('Get more information')) {
      window.location.href = '/platform-info';
    } else {
      console.log('User wants to explore on their own.');
    }

    this.scrollToBottom();
  }

  private scrollToBottom() {
    if (this.chatContainer) {
      setTimeout(() => {
        this.chatContainer.nativeElement.scrollTop =
          this.chatContainer.nativeElement.scrollHeight;
      }, 0);
    }
  }


  // Book demo button
  bookDemo() {
    window.open('https://Contisoft.com/demo/', '_blank');
  }

  // Video modal
  openVideo() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/bdWqoZU6CgE?autoplay=1'
    );
    this.showVideo = true;
  }

  closeVideo() {
    this.showVideo = false;
  }

  //    features = [
  //  {
  //   title: 'Real-time account ownership verification of new vendors',
  //   description: `Contisoft enables automated account validation within ERP during vendor registration. 
  //   When a new vendor provides its details, Contisoft instantly checks company information, bank data, 
  //   and the correlation between the two. The assessment is delivered directly inside the ERP interface.`,
  //   img: '../../../assets/dashBoard1.png',
  //   link: ''
  // },
  // {
  //   title: "Enhance vendor data analysis with Contisoft's dashboards & exports",
  //   description: `With evaluation records, dashboards, and analytics available on Contisoft’s web app, 
  //   you can quickly track progress, strengthen the P2P process, and validate new vendors in ERP.`,
  //   img: '',
  //   link: ''
  // }

  //   ];



  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          try {
            const $slider = (window as any)['$']?.('.testimonials-slider');
            if ($slider && $slider.slick) {
              $slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                infinite: true,
                lazyLoad: 'ondemand',
                responsive: [
                  { breakpoint: 1024, settings: { slidesToShow: 2 } },
                  { breakpoint: 768, settings: { slidesToShow: 1 } }
                ]
              });
            }
          } catch { }
        }, 100);
      });
    }

    this.initAccordion();
    this.initDeferredAOS();
    this.initHeroCardObserver();
  }

  private initAccordion(): void {
    this.ngZone.runOutsideAngular(() => {
      try {
        const accordionDetails = document.querySelectorAll('.accordion details');
        accordionDetails.forEach((details) => {
          const summary = details.querySelector('summary');
          if (summary) {
            // Use passive listener for better scroll performance
            summary.addEventListener('click', (event: Event) => {
              event.preventDefault();
              const clickedDetails = details as HTMLDetailsElement;
              const wasOpen = clickedDetails.open;

              accordionDetails.forEach((otherDetails) => {
                if (otherDetails !== clickedDetails) {
                  (otherDetails as HTMLDetailsElement).open = false;
                }
              });

              clickedDetails.open = !wasOpen;
            }, { passive: false });
          }
        });
      } catch (e) {
        // Defensive: fail silently if accordion not found
      }
    });
  }

  private initDeferredAOS(): void {
    if (!('IntersectionObserver' in window)) {
      // Fallback: Initialize AOS immediately if IntersectionObserver not supported
      this.initializeAOS();
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      // Sections to defer: Key Features, Hero Card, FAQ
      const deferredSelectors = [
        '.key-features-section',
        '.hero-card-section',
        '.faq-section'
      ];

      const observerOptions: IntersectionObserverInit = {
        rootMargin: '150px 0px', // Start loading 150px before section enters viewport
        threshold: 0.01
      };

      this.deferredSectionsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;

            // Initialize AOS on first section intersection
            if (!this.aosInitialized) {
              this.initializeAOS();
            }

            // Enable animations for this section
            section.classList.add('aos-ready');

            // Refresh AOS to trigger animations
            requestAnimationFrame(() => {
              if (typeof AOS !== 'undefined' && AOS.refresh) {
                AOS.refresh();
              }
            });

            // Stop observing this section once processed
            this.deferredSectionsObserver?.unobserve(section);
          }
        });
      }, observerOptions);

      // Observe all deferred sections
      deferredSelectors.forEach(selector => {
        const sections = document.querySelectorAll(selector);
        sections.forEach(section => {
          this.deferredSectionsObserver?.observe(section);
        });
      });
    });
  }

  private initializeAOS(): void {
    if (this.aosInitialized || typeof window === 'undefined') return;

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        try {
          if (AOS) {
            AOS.init({
              duration: 800,
              once: true
            });
            this.aosInitialized = true;
          }
        } catch { }
      }, 200);
    });
  }

  private initHeroCardObserver(): void {
    try {
      const heroSections = Array.from(document.querySelectorAll('.hero-card-section')) as HTMLElement[];
      if (heroSections.length) {
        const options: IntersectionObserverInit = {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px'
        };

        this.heroObserver = new IntersectionObserver((entries) => {
          this.ngZone.runOutsideAngular(() => {
            entries.forEach(entry => {
              const el = entry.target as HTMLElement;
              if (entry.isIntersecting) {
                el.classList.add('in-view');
              } else {
                el.classList.remove('in-view');
              }
            });
          });
        }, options);

        heroSections.forEach(s => this.heroObserver!.observe(s));
      }
    } catch (e) {
      // Defensive: fail silently
    }
  }

  ngOnDestroy(): void {
    // Cleanup all observers
    if (this.heroObserver) {
      this.heroObserver.disconnect();
    }
    if (this.deferredSectionsObserver) {
      this.deferredSectionsObserver.disconnect();
    }

    // Cleanup slick carousel
    try {
      const slider = (window as any).$('.testimonials-slider');
      if (slider.length && slider.slick) {
        slider.slick('unslick');
      }
    } catch (e) {
      // Fail silently
    }
  }


  faqs = [
    {
      question: 'What is ERP?',
      answer: 'ERP (Enterprise Resource Planning) is a software system that helps organizations manage and integrate core business processes such as finance, procurement, supply chain, HR, and operations within a centralized platform.',
      open: false
    },
    {
      question: 'What is payment fraud?',
      answer: 'Payment fraud refers to any illegal transaction carried out by a cybercriminal or dishonest party to steal funds. Common types include phishing, CEO fraud, invoice fraud, and supplier impersonation.',
      open: false
    },
    {
      question: 'How can payment fraud occur in ERP?',
      answer: 'Payment fraud in ERP can occur if vendor data is manipulated, bank account details are changed without validation, or fraudulent invoices are approved. Weak internal controls and lack of automated validation increase the risk.',
      open: false
    },
    {
      question: 'How is Contisoft integrated into ERP?',
      answer: 'Contisoft is natively integrated into ERP systems through certified connectors. It automates vendor bank account validation directly within the ERP interface, eliminating the need for switching tools and ensuring secure transactions.',
      open: false
    }

  ];

  toggle(index: number, event: Event) {
    event.preventDefault(); // prevent native <details> toggle
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false; // only one open at a time
    });
  }
}