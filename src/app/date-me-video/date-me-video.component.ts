import { NgModule, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {YouTubePlayer, YouTubePlayerModule} from '@angular/youtube-player';

let apiLoaded = false;

@Component({
  selector: 'app-date-me-video',
  templateUrl: './date-me-video.component.html',
  styleUrls: ['./date-me-video.component.scss']
})
export class DateMeVideoComponent implements OnInit, AfterViewInit {
  @ViewChild('youtubePlayer') player: YouTubePlayer | undefined;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.player?.stateChange.subscribe(state => {
      if (this.player?.getPlayerState() === 0) {
        this.router.navigate(['/date']);
      }
    })
  }

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
