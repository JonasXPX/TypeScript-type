import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    let words = value.split(' ');
    for(var i = 0; i < words.length; i++) {
      let word = words[i];
      if(i > 0 && this.isPreposition(word))
        words[i] = word.toLowerCase();
      else 
        words[i] = this.toTitleCase(word); 
    }
    return words.join(' ');
  }

  private toTitleCase(value: string): string {
        return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }

  private isPreposition(value: string): boolean {
    let prepositions = [
      'the',
      'of'
    ];

    return prepositions.includes(value.toLowerCase());
  }

}
