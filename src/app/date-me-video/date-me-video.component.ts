import {NgModule, Component, OnInit} from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

let apiLoaded = false;

@Component({
  selector: 'app-date-me-video',
  templateUrl: './date-me-video.component.html',
  styleUrls: ['./date-me-video.component.scss']
})
export class DateMeVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}

@NgModule({
  imports: [YouTubePlayerModule],
  declarations: [DateMeVideoComponent],
})
export class YoutubePlayerExampleModule {
}
