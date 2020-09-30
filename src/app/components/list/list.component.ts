import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from 'src/app/services/flats.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() flatsList: Flat[];
}
