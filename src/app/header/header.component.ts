import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  constructor() { }

  show: boolean = false;

  ngOnInit() {
  }

  expandMenu(){
    if(this.show){
      this.show = false
      $('.breadcrumb-bar').css({'margin-left':'50px', 'width':'100%'});
      $('.breadcrumb-bar').removeClass('openMenu')
      var menuOpen = $('.subMenu-children').hasClass('open');
      if(menuOpen){
        $('.breadcrumb-bar').css({'margin-left':'300px', 'width':'84%'})
      }else{
        $('.breadcrumb-bar').css({'margin-left':'50px', 'width':'76%'})
      }
    }else{
      this.show = true;
      $('.breadcrumb-bar').css({'margin-left':'200px', 'width':'89%'})
      $('.breadcrumb-bar').addClass('openMenu')
      var menuOpen = $('.subMenu-children').hasClass('open');
      if(menuOpen){
        $('.breadcrumb-bar').css({'margin-left':'450px', 'width':'76%'})
      }
    }
  }
}
