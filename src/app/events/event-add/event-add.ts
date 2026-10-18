import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventM } from '../../models/event-m';
import { Router } from 'express';
import { EventS } from '../../services/eventS';

@Component({
  selector: 'app-event-add',
  imports: [ReactiveFormsModule],
  templateUrl: './event-add.html',
  styleUrl: './event-add.css',
})
export class EventAdd {
  private eventService = inject(EventS);
  private router = inject(Router);

  private formBuilder= inject(FormBuilder);
  eventForm = new FormGroup({
    title: new FormControl('',Validators.required),
    location: new FormControl('', Validators.required),
  });



   eventFormB = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    location: ['', Validators.required],
    date: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0)]],
    nbPlaces: ['', [Validators.required, Validators.min(1)]],
  });

  get title() {
    return this.eventFormB.get('title');
  }

  get description() {
    return this.eventFormB.get('description');
  }

  get location() {
    return this.eventFormB.get('location');
  }
save() {
  const formValue = this.eventFormB.getRawValue();
  const newEvent: EventM = {
    id: this.eventService.events().length + 1,
    title: formValue.title ?? '',
    description: formValue.description ?? '',
    location: formValue.location ?? '',
    date: formValue.date ?? '',
    price: Number(formValue.price),
    nbPlaces: Number(formValue.nbPlaces),
  };

  this.eventService.events().push(newEvent);
  this.router.navigate(['/events']);
}
}
