import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.serivce';
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  /**
   * A Subject is a producer of an observable event stream
   * searchTerms produces an Observable of strings, the filter criteria for the name search
   */
  private searchTerms = new Subject<string>();

  constructor(private heroSearchService: HeroSearchService,
              private router: Router) {
  }

  search(term: string): void {
    this.searchTerms.next(term); // push a search term into the observable stream
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)      // wait for 300 ms
      .distinctUntilChanged() // ignore if next search term is same as previous
      .switchMap(term => term // switch to new observable each time the term changes
        ? this.heroSearchService.search(term) // return the http search observable
        : Observable.of<Hero[]>([]))          // or the observable of empty heroes if there was no search term
      .catch(error => {
        console.error(error);
        return Observable.of<Hero[]>([]);
      });
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
