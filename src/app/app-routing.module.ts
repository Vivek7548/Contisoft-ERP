// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HeroComponent } from './sections/hero/hero.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookDemoComponent } from './book-demo/book-demo.component';
import { PanVerificationComponent } from './pan-verification/pan-verification.component';
import { AdharVerificationComponent } from './adhar-verification/adhar-verification.component';
import { AdressVerificationComponent } from './adress-verification/adress-verification.component';
import { CkycVerificationComponent } from './ckyc-verification/ckyc-verification.component';
import { PassportVerificationComponent } from './passport-verification/passport-verification.component';
import { ESignVerificationComponent } from './e-sign-verification/e-sign-verification.component';
import { PepApiComponent } from './pep-api/pep-api.component';
import { SanctionApiComponent } from './sanction-api/sanction-api.component';
import { InternantionalVendorComponent } from './internantional-vendor/internantional-vendor.component';
import { CourtandcriminalApiComponent } from './courtandcriminal-api/courtandcriminal-api.component';
import { MsmeApiComponent } from './msme-api/msme-api.component';
import { FinancialriskApiComponent } from './financialrisk-api/financialrisk-api.component';
import { CersaiAutomationComponent } from './cersai-automation/cersai-automation.component';
import { EsbtrEstampComponent } from './esbtr-estamp/esbtr-estamp.component';
import { BankaccountApiComponent } from './bankaccount-api/bankaccount-api.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default
  { path: 'home', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book-demo', component: BookDemoComponent },

  { path: 'product', component: ProductComponent },
  { path: 'pan-verification', component: PanVerificationComponent },
  { path: 'address-verification', component: AdressVerificationComponent },
  { path: 'ckyc-verification', component: CkycVerificationComponent },
  { path: 'passport-verification', component: PassportVerificationComponent },
  { path: 'esignature-verification', component: ESignVerificationComponent },
  { path: 'aadhaar-verification', component: AdharVerificationComponent },
  { path: 'pep-api', component: PepApiComponent },
  { path: 'sanction-api', component: SanctionApiComponent },
  { path: 'international-vendor', component: InternantionalVendorComponent },
  { path: 'courtandcriminal-api', component: CourtandcriminalApiComponent },
  { path: 'msme-api', component: MsmeApiComponent },
  { path: 'financialrisk-api', component: FinancialriskApiComponent },
  { path: 'cersai-automation', component: CersaiAutomationComponent },
  { path: 'esbtr-estamp', component: EsbtrEstampComponent },
  { path: 'bankaccount-api', component: BankaccountApiComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
