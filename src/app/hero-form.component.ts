import { Component, Output, EventEmitter } from '@angular/core';

import { Hero }             from './hero';
import { HeroService }      from './hero.service';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {
  powers = ['Really smart', 'Super flexible', 'Super hot', 'Weather changer'];
  model = new Hero(21, '', '', '');
  @Output() newHeroAdded = new EventEmitter<Hero>();

  constructor(private heroService: HeroService) {
  }

  add(): void {
    if (!this.model) {
      return;
    }
    this.heroService
      .create(this.model)
      .then(hero => {
        this.newHeroAdded.emit(hero); // tell HeroesComponent to reload list or add new hero
      });
  }
}
