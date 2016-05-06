import { Component, OnInit, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'tweet',
  templateUrl: 'tweet.component.html',
  styleUrls: ['tweet.component.css'],
  inputs: ['tweetData']
})
export class TweetComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {

  }

}
