import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user:string|null = '';

  ngOnInit(){
      this.user = sessionStorage.getItem('usuario');
  }
}
