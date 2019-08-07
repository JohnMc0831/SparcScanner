import '@ionic/pwa-elements';
import { Component } from '@angular/core';
import { Capacitor, Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { SafeResourceUrl } from '@angular/platform-browser';
const { Camera } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  picSource: SafeResourceUrl;

  constructor() {
    const isCameraAvailable = Capacitor.isPluginAvailable('Camera');
    if (!isCameraAvailable) {
      alert('No camera available!');
    } else {
      alert('Camera ready!');
    }
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // Can be set to the src of an image now
    this.picSource = image.webPath;
  }
}
