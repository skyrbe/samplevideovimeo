import { Component, NgModule,OnInit,AfterViewInit } from '@angular/core';
/* npm install npm install @vimeo/player*/
import Player from '@vimeo/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'app';


  constructor(){}

    ngOnInit() {

    }

    ngAfterViewInit(){
      /* The ID should match the one present in the accompanying HTML*/
      const player = new Player('videoPlayer', {
          id: 19231868,
          width: 640
      });

      player.on('play', function() {
          console.log('played the video!');
      });

      player.on('pause', function() {
          console.log('paused the video!');
      });

      /* To check auto events */
      window.setTimeout(() => {
        player.pause();
      },5000);
    }



    ngOnDestroy() {
    }
}
