import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit{

  @ViewChild("myVideo") myVideo!:ElementRef


  ngAfterViewInit(){
    this.myVideo.nativeElement.muted = true
  console.log(this.myVideo.nativeElement.play())
  }
  

}
