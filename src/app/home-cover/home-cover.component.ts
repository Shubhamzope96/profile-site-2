import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cover',
  templateUrl: './home-cover.component.html',
  styleUrls: ['./home-cover.component.css']
})
export class HomeCoverComponent implements OnInit {

  constructor() { }
closeNavOption(){
  document.getElementById('mobNavList')?.classList.remove("show");
  document.getElementById('nav-icon')?.classList.add("show");
  document.getElementById('nav-icon')?.classList.remove("hide");
}

  ngOnInit(): void {
  }

}
