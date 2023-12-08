import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.page.html',
  styleUrls: ['./article-modal.page.scss'],
})
export class ArticleModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
