import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upvoteCount'
})
export class UpvoteCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
