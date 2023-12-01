import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) { }

  goToPerfil(): void{
    const perfil = window.location.href= "https://www.linkedin.com/in/ivan-cairoli-0a5698120"
    window.open(perfil)
  }
}
