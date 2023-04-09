import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, AngularMaterialModule, SignupRoutingModule],
})
export class SignupModule {}
