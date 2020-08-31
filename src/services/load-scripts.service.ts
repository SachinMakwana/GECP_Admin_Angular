import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  constructor() { }

  loadScripts() {
    const dynamicScripts = [
      '../assets/dist/js/custom.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  loadCss() {
    const dynamicScripts = [
      '../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css',
      '../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('link');
      node.rel = 'stylesheet';
      node.href = dynamicScripts[i];
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
