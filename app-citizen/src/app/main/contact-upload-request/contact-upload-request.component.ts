import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-contact-upload-request',
  templateUrl: './contact-upload-request.component.html',
  styleUrls: ['./contact-upload-request.component.scss'],
})
export class ContactUploadRequestComponent implements OnInit {
  public autoShareActivated: boolean;

  constructor(
    public modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.autoShareActivated = this.navParams.get('autoShareActivated');
  }

  dismissModal() {
    this.modalCtrl.dismiss({accepts: false});
  }

  acceptUpload() {
    this.modalCtrl.dismiss({accepts: true});
  }
}
