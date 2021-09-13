import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { PomeshkannyaComponent } from './pomeshkannya/pomeshkannya.component';
import { UviytyComponent } from './uviyty/uviyty.component';
import { ZareyestruvatysComponent } from './zareyestruvatys/zareyestruvatys.component';
import { GolovnaComponent } from './golovna/golovna.component';
import { ProductpageComponent } from './product/components/productpage/productpage.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UserkabinetComponent } from './userkabinet/userkabinet.component';
import { AdminkabinetComponent } from './adminkabinet/adminkabinet.component';
import { PropositionComponent } from './proposition/proposition.component';
import {ProductResolveService} from './product/services/product-resolve.service';
import { AddpropositionsComponent } from './addpropositions/addpropositions.component';






@NgModule({
  declarations: [
    AppComponent,
    PomeshkannyaComponent,
    UviytyComponent,
    ZareyestruvatysComponent,
    GolovnaComponent,
    AddproductComponent,
    UserkabinetComponent,
    AdminkabinetComponent,
    PropositionComponent,
    ProductpageComponent,
    AddpropositionsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'pomeshkannya', component: PomeshkannyaComponent,
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule), resolve: {productsData: ProductResolveService}},
      {path: 'uviyty', component: UviytyComponent},
      {path: 'zareyestruvatys', component: ZareyestruvatysComponent},
      {path: '', component: GolovnaComponent},
      {path: 'productpage', component: ProductpageComponent},
      {path: 'addproduct', component: AddproductComponent},
      {path: 'userkabinet', component: UserkabinetComponent},
      {path: 'adminkabinet', component: AdminkabinetComponent,
      loadChildren : () => import('./adminkabinet/productblock.module').then(n => n.ProductblockModule)},
      {path: 'proposition', component: PropositionComponent},
      {path: 'addProposition', component: AddpropositionsComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
