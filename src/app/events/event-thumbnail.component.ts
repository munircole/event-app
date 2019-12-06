import { Component, Input} from '@angular/core'
import {IEvent } from './shared/event.model'

@Component({
    selector: 'event-thumbnail',
    template:`
       <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
          <h2>{{event.name | uppercase}}</h2>
          <div>Date: {{event.date | date}}</div>
          <div>Time: {{event.time}}</div>
          <div>Price: {{event.price | currency:'USD'}}</div>
          <div>
          <span>Location: {{event.location.address}}</span>
          <span>&nbsp;</span>
          <span>{{event.location.city}}, {{event.location.country}}</span>
          </div>
       </div>

    `,
    styles:[`
       .thumbnail{min-height: 230px}
    `]
})
export class EventThumbnailComponent {
   @Input() event:IEvent

}