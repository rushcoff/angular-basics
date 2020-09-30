import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat, FlatsService, FetchFlatsParams } from './services/flats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  flatsList: Observable<Flat[]>;

  constructor(private flatsService: FlatsService) {
    this.fetchFlats();
  }

  fetchFlats(params?: FetchFlatsParams): void {
    this.flatsList = this.flatsService.fetchFlats(params);
  }
}
