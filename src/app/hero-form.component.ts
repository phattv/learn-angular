import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {
  powers = ['Really smart', 'Super flexible', 'Super hot', 'Weather changer'];
  model = new Hero();
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }

  newHero(): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService
      .create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
}
