import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
 
  @Input("isFavorite") isSelected: boolean;
  @Output('change') click = new EventEmitter();

  @Input() count: number = 0;

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log(eventArgs);
  } 
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}