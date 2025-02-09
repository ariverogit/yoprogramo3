import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {
  islogged = false;
  constructor(private router:Router,private tokenService:TokenService) {}

  ngOnInit():void {
    if(this.tokenService.getToken()){
      this.islogged=true;
    }else{
      this.islogged=false;
    }
  }

  onLogout():void {
    this.tokenService.logout();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }

}
