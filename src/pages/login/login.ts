import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})

export class LoginPage {
    constructor(
        private navController: NavController
    ) {}
}