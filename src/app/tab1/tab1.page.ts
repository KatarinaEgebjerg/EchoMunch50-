import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  user: any;

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.authService.currentUser.subscribe((data) => {
      this.user = data;
    });
  }
  async logout() {
    await this.authService.logout();
    this.navCtrl.navigateBack('/login');
  }
}
