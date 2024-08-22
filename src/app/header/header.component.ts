import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-solid-svg-icons';
import { faHandsPraying} from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

 
  constructor() { }
   currEle:any;
  ngOnInit(): void {
    debugger;
    this.currEle=$("#home");
  }
  showNavOptions(){
    
    document.getElementById('mobNavList')?.classList.add("show");
    document.getElementById('mobNavList')?.classList.remove("hide");
    
    document.getElementById('nav-icon')?.classList.add("hide");
    document.getElementById('nav-icon')?.classList.add("show");

  }

  activateAbout(){
    debugger;
    if(this.currEle!=document.getElementById('about-1')){
      document.getElementsByClassName("active")[0].classList.remove("active");
      debugger;
      this.currEle.find("fa-icon").css("color","#FFF");
      this.currEle.find("p").css("color","#FFF");
      this.currEle.css("color","#FFF");
      this.currEle=$("#about-1");
      this.currEle.addClass("active");
      $("#about-1").find("fa-icon").css("color","darkorange");
      $("#about-1").find("p").css("color","darkorange");
      
    }
  }
  activateProjects(){
    debugger;
    if(this.currEle!=document.getElementById('projects-1')){
      document.getElementsByClassName("active")[0].classList.remove("active");
      this.currEle.find("fa-icon").css("color","#FFF");
      this.currEle.find("p").css("color","#FFF");
      this.currEle.css("color","#FFF");
      this.currEle=$("#projects-1");
      this.currEle.addClass("active");
      $("#projects-1").find("fa-icon").css("color","darkorange");
      $("#projects-1").find("p").css("color","darkorange");
    }
  }
  activateConnect(){
    debugger;
    if(this.currEle!=document.getElementById('connect-1')){
      document.getElementsByClassName("active")[0].classList.remove("active");
      this.currEle.find("fa-icon").css("color","#FFF");
      this.currEle.find("p").css("color","#FFF");
      this.currEle.css("color","#FFF");
      this.currEle=$("#connect-1");
      this.currEle.addClass("active");
      $("#connect-1").find("fa-icon").css("color","darkorange");
      $("#connect-1").find("p").css("color","darkorange");
    }
  
  }
  activateHome(){
    debugger;
    if(this.currEle!=document.getElementById('home')){
      document.getElementsByClassName("active")[0].classList.remove("active");
      this.currEle.find("fa-icon").css("color","#FFF");
      this.currEle.find("p").css("color","#FFF");
      this.currEle=$("#home");
      this.currEle.addClass("active");
      $("#home").css("color","darkorange");
      $("#home").find("fa-icon").css("color","darkorange");
    }
  }
  home = faHome
  person = faUser
  projects = faLaptopCode
  contacts = faContactCard
  handsFolded = faHandsPraying
  navIcon = faList
  connect = faUsers
}
