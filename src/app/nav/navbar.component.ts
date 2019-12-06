import { Component} from '@angular/core'
import { AuthService } from '../users/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[`
        #nav a{
            font-size:15px
        }
    
    `]

})
export class NavBarComponent{
    constructor(public auth: AuthService){

    }

}