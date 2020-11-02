import { UpvoteCountPipe } from './upvote-count.pipe';

describe('UpvoteCountPipe', () => {
  it('create an instance', () => {
    const pipe = new UpvoteCountPipe();
    expect(pipe).toBeTruthy();
  });
});
