import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgconfTweetsAppComponent } from '../app/ngconf-tweets.component';

beforeEachProviders(() => [NgconfTweetsAppComponent]);

describe('App: NgconfTweets', () => {
  it('should create the app',
      inject([NgconfTweetsAppComponent], (app: NgconfTweetsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngconf-tweets works!\'',
      inject([NgconfTweetsAppComponent], (app: NgconfTweetsAppComponent) => {
    expect(app.title).toEqual('ngconf-tweets works!');
  }));
});
