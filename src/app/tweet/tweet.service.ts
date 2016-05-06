import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TweetService {

  constructor(private http: Http) {

  }

  getTweetForHashtag(hashtag: string='#ngconf'){
    return this.http.get('http://localhost:8000/getTweets');
  }

}
