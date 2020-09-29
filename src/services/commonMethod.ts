import { Injectable } from '@angular/core';
import IMask from 'imask';
declare var jQuery: any;
declare var $: any;

@Injectable({
  providedIn: 'root'
})

export class CommonMethodService {

  async base64ToBlob(base64string : string) {
    //const base64Data = base64string;
    const base64 = await fetch(base64string);
    //const base64Response = await fetch(`data:image/jpeg;base64,${base64Data}`);
    const blob = await base64.blob();
    return blob;
  }

}

