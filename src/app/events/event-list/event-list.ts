import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventS } from '../../services/eventS';
import { EventM } from '../../models/event-m';

@Component({
  selector: 'app-event-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  searchText = signal('');
  maxPrice = signal<number | null>(null);
  fromDate = signal('');

  /*private readonly eventsService = inject(EventS);
 events = this.eventsService.events;
  vatRate = signal(0.19);

  totalPlaces() {

  }

  reserve(id: number) {

  }

  // Recherche + filtres
  filteredEvents() {

    const text = this.searchText().trim().toLowerCase();
    const max = this.maxPrice();
    const from = this.fromDate();

    const list = this.events().filter((e: { title: string; location: string; price: number; date: string }) =>

      // Recherche par titre OU localisation
      (
        e.title.toLowerCase().includes(text) ||
        e.location.toLowerCase().includes(text)
      )

      &&

      // Filtre prix maximum
      (max === null || e.price <= max)

      &&

      // Filtre date
      (from === '' || e.date >= from)
    );

    return list; // IMPORTANT
  }

  resetFilters() {
    this.searchText.set('');
    this.maxPrice.set(null);
    this.fromDate.set('');
  }

  reset() {
    this.resetFilters();
  }*/

  eventService = inject(EventS);
  eventsConsom = signal<EventM[]>([]);
  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe((data) => {
      this.eventsConsom.set(data);
      console.log(this.eventsConsom);
    });
  }
}
