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
      $('.breadcrumb').css({'margin-left':'50px', 'width':'100%'});
      $('.breadcrumb').removeClass('openMenu')
      var menuOpen = $('.subMenu-children').hasClass('open');
      if(menuOpen){
        $('.breadcrumb').css({'margin-left':'350px', 'width':'84%'})
      }else{
        $('.breadcrumb').css({'margin-left':'50px', 'width':'76%'})
      }
    }else{
      this.show = true;
      $('.breadcrumb').css({'margin-left':'200px', 'width':'89%'})
      $('.breadcrumb').addClass('openMenu')
      var menuOpen = $('.subMenu-children').hasClass('open');
      if(menuOpen){
        $('.breadcrumb').css({'margin-left':'500px', 'width':'76%'})
      }
    }
  }
}
