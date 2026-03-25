import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { BookDemoComponent } from './book-demo/book-demo.component';
import { PanVerificationComponent } from './pan-verification/pan-verification.component';
import { AdressVerificationComponent } from './adress-verification/adress-verification.component';
import { CkycVerificationComponent } from './ckyc-verification/ckyc-verification.component';
import { AdharVerificationComponent } from './adhar-verification/adhar-verification.component';
import { ESignVerificationComponent } from './e-sign-verification/e-sign-verification.component';
import { PassportVerificationComponent } from './passport-verification/passport-verification.component';
import { PepApiComponent } from './pep-api/pep-api.component';
import { SanctionApiComponent } from './sanction-api/sanction-api.component';
import { CourtandcriminalApiComponent } from './courtandcriminal-api/courtandcriminal-api.component';
import { FinancialriskApiComponent } from './financialrisk-api/financialrisk-api.component';
import { EsbtrEstampComponent } from './esbtr-estamp/esbtr-estamp.component';
import { BankaccountApiComponent } from './bankaccount-api/bankaccount-api.component';
import { InternantionalVendorComponent } from './internantional-vendor/internantional-vendor.component';
import { MsmeApiComponent } from './msme-api/msme-api.component';
import { CersaiAutomationComponent } from './cersai-automation/cersai-automation.component';   // 👈 import here
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ContactComponent,
    FooterComponent,
    BookDemoComponent,
    PanVerificationComponent,
    AdressVerificationComponent,
    CkycVerificationComponent,
    AdharVerificationComponent,
    ESignVerificationComponent,
    PassportVerificationComponent,
    PepApiComponent,
    SanctionApiComponent,
    CourtandcriminalApiComponent,
    FinancialriskApiComponent,
    EsbtrEstampComponent,
    BankaccountApiComponent,
    InternantionalVendorComponent,
    MsmeApiComponent,
    CersaiAutomationComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule , HttpClientModule        // 👈 add here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
