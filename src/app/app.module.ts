import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './Sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './Sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './Sections/section-health/section-health.component';
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
import { ServerComponent } from './server/server.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
