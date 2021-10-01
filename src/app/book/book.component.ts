import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }



  async clickedStar() {
    const toast = await this.toastController.create({
      message: 'Add To Reading Plan',
      duration: 2000
    });
    toast.present();
  }

  async addnote() {
    const toast = await this.toastController.create({
      message: 'Your note have been saved.',
      duration: 2000
    });
    toast.present();
  }



}
