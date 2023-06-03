import { Component } from '@angular/core';
import {  faCoffee, faDashboard, faHand, faSignOut} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  //faDeconnexion = faDeconnexion;
  faDashboard = faDashboard;
  faHand = faHand;
  faCoffee = faCoffee;
  faSignOut = faSignOut;
 
}
