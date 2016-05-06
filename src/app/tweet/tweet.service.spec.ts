import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TweetService } from './tweet.service';

describe('Tweet Service', () => {
  beforeEachProviders(() => [TweetService]);

  it('should ...',
      inject([TweetService], (service: TweetService) => {
    expect(service).toBeTruthy();
  }));
});
