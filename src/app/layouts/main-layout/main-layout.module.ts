import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./main-layout.component";
import { AngularMaterialModule } from "@shared/angular-material/angular-material.module";
import { InterceptorService } from "@app-core/http/interceptor.service";
import { MainRoutingModule } from "./main-routing.module";
import { DashboardModule } from "@app-modules/dashboard/dashboard.module";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@NgModule({
  declarations: [MainLayoutComponent, SidenavComponent, ToolbarComponent],
  imports: [
    AngularMaterialModule,
    RouterModule,
    MainRoutingModule,
    CommonModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class MainLayoutModule {}
