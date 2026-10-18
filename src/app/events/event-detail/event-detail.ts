import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { EventS } from '../../services/eventS';

@Component({
  selector: 'app-event-detail',
  imports: [],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail {



  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router)
  private readonly eventsService = inject(EventS);

  //snapshot : lecture figée au moment de la creation du composant
  id=this.route.snapshot.paramMap.get('id');
  event= this.eventsService.events().find(e=>e.id=== Number(this.id))

backToList(){
      this.router.navigate(['/events']);
}
goToFirstEvent() {
    this.router.navigateByUrl('/events/1');
  }


}
