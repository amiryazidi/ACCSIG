import { inject, Injectable, signal } from '@angular/core';
import { EventM } from '../models/event-m';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventS {

  private http=inject(HttpClient)
   private apiUrl = 'http://localhost:3000/events';

    getEvents() {
    return this.http.get<EventM[]>(this.apiUrl);
  }


    addEvent(event: Omit<EventM, 'id'>) {
    return this.http.post<EventM>(this.apiUrl, event);
  }


   // DELETE : supprimer un événement
  deleteEvent(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // PUT : modifier un événement
  updateEvent(id: string, event: EventM) {
    return this.http.put<EventM>(
      `${this.apiUrl}/${id}`,
      event
    );
  }
}
