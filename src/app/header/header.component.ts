import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  constructor() { }

  show: boolean = false;

  ngOnInit() {
  }

  showMenu(){
    if(this.show){
      this.show = false
    }else{
      this.show = true;
    }
  }
}
