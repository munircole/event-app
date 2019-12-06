import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent} from './events/event-thumbnail.component';
import { NavBarComponent} from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { EventDetailsComponent} from "./events/event details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { appRoutes } from "./routes";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator} from "./events/event details/event-route-activator.service";
import { EventListResolver } from "./events/event-list-resolver.service";
import { AuthService } from "./users/auth.service";
import { CreateSessionComponent } from "./events/event details/create-session.component";
import { SessionListComponent } from "./events/event details/session-list.component";
import { CollapsibleWellComponent} from "./common/collapsible-well.component";
import { DurationPipe } from "./events/shared/duration.pipe"


@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
    


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')

  return true

}