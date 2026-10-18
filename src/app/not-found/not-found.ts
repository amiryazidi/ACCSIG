import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  private readonly route = inject(ActivatedRoute);

  // lecture ponctuelle , sans suivi reactif : voir snapshot dans l'encadré
  title = this.route.snapshot.data['title'] ?? 'page introuvable';
}
