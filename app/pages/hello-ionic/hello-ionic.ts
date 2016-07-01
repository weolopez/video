import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild('audio0') audio0: any;
  @ViewChild('audio1') audio1: any;
  @ViewChild('background') background: any;
  time: number = 0;
  audio0Duration: number;
  audio1Duration: number;
  backgroundDuration: number;
  currentAudio: any;
  
  constructor() {

  }
  ngAfterViewInit() {
    var page = this;


    let audio = this.background.nativeElement;
    audio.ontimeupdate = () => {
      console.log("timeupdate: " + audio.currentTime);
      page.audio0Duration = page.audio0.nativeElement.duration;
      page.audio1Duration = page.audio1.nativeElement.duration;
      page.backgroundDuration = page.background.nativeElement.duration;

      page.time = audio.currentTime;
      if (page.time > 2) {
        page.currentAudio = page.audio0.nativeElement;
        page.currentAudio.play();
      } 

    }
    audio.onpause = () => {
      page.currentAudio.pause();
    }
    audio.onended = () => {
      console.log("song ended");
      //get handle to selected song NOT working as "this" refers to the audio object
    }
  }
}
