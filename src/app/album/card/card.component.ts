import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() album: Album;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  get rating() {
    return new Array(this.album.vote).fill(null);
  }
}
