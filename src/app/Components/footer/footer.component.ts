import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule, } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faPinterest = faPinterest;
  currentYear: number = new Date().getFullYear(); 
}
