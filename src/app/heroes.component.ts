import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;


  constructor(private heroService: HeroService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  delete(heroToBeDeleted: Hero, $event: KeyboardEvent): void {
    $event.stopPropagation(); // don't fire click event of <li>

    this.heroService
      .delete(heroToBeDeleted.id)
      .then(() => {
        this.heroes = this.heroes.filter(hero => hero !== heroToBeDeleted);
        if (this.selectedHero === heroToBeDeleted) {
          this.selectedHero = null;
        }
      });
  }
}
