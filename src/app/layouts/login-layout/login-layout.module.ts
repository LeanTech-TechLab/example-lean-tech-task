import { NgModule } from "@angular/core";
import { LoginLayoutComponent } from "./login-layout.component";
import { AngularMaterialModule } from "@shared/angular-material/angular-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoginRoutingModule,
    CommonModule,
  ],
})
export class LoginLayoutModule {}
