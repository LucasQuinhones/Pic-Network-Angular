import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignupComponent,
        HomeComponent
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        VmessageModule, 
        RouterModule,
        HomeRoutingModule
    ],
    providers: [SignUpService]
})

export class HomeModule {

}