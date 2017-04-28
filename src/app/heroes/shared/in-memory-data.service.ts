import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Nice', power: 'Really smart' },
      { id: 12, name: 'Narco', power: 'Super flexible' },
      { id: 13, name: 'Bombasto', power: 'Super hot' },
      { id: 14, name: 'Celeritas', power: 'Super hot' },
      { id: 15, name: 'Magneta', power: 'Super flexible' },
      { id: 16, name: 'RubberMan', power: 'Super flexible' },
      { id: 17, name: 'Dynama', power: 'Super hot' },
      { id: 18, name: 'Dr IQ', power: 'Really smart' },
      { id: 19, name: 'Magma', power: 'Weather changer' },
      { id: 20, name: 'Tornado', power: 'Weather changer' }
    ];

    return { heroes };
  }
}
