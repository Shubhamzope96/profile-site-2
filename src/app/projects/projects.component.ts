import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
showMoreDetails(item:any) {
  debugger;
  console.log(item);
  var cart = document.getElementsByClassName("project-cart")[item];
  (<HTMLElement>cart.getElementsByClassName("more-details-Btn")[0]).style.display="none";
  (<HTMLElement>cart.getElementsByClassName("more-info")[0]).style.display="block";
}

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
