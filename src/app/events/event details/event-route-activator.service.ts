import {Router, ActivatedRouteSnapshot, CanActivate,} from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor (private eventservice:EventService, private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !!this.eventservice.getEvent(+route.params['id'])

        if (!eventExists)
            this.router.navigate(['/error404'])
        return eventExists


    }

}