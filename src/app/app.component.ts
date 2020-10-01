import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flat, FlatsService, FetchFlatsParams } from './services/flats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  flatsSub: Subscription;
  flatsList: Flat[] = [];

  constructor(private flatsService: FlatsService) {}

  ngOnInit(): void {
    this.fetchFlats();
  }

  ngOnDestroy(): void {
    this.flatsSub.unsubscribe();
  }

  fetchFlats(params?: FetchFlatsParams): void {
    this.flatsSub = this.flatsService.fetchFlats(params).subscribe((res) => {
      this.flatsList = res;
    });
  }
}
