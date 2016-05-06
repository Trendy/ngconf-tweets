import { Component } from '@angular/core';
import { TweetComponent } from './tweet';
import { TweetService } from './tweet/tweet.service';

@Component({
  moduleId: module.id,
  selector: 'ngconf-tweets-app',
  templateUrl: 'ngconf-tweets.component.html',
  styleUrls: ['ngconf-tweets.component.css'],
  directives: [TweetComponent],
  providers: [TweetService]
})
export class NgconfTweetsAppComponent {
  title = 'ngconf-tweets works!';
  private tweets;
  constructor(private tweetService: TweetService){
    tweetService.getTweetForHashtag()
    .subscribe((tweets)=>{
      this.tweets = tweets.json().statuses;
      console.log(this.tweets);
    });
  }
}
