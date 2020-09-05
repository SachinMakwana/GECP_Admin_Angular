import { Injectable } from '@angular/core';
declare var jQuery: any;

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  constructor() { }

  //for external js
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

  loadDatatbles() {
    (function ($) {
      $("#example1").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "responsive": true,
      });
    })(jQuery);
  }

  loadSelect2() {
    (function ($) {
      //Initialize Select2 Elements
      $('.select2').select2()

      //Initialize Select2 Elements
      $('.select2bs4').select2({
        theme: 'bootstrap4'
      })
    })(jQuery);
  }

  loadDateMask() {
    (function ($) {
      //Datemask dd/mm/yyyy
      $('.datemask').inputmask('dd/mm/yyyy', {
        'placeholder': 'dd/mm/yyyy'
      })
    })(jQuery);
  }

  loadEditorSummernote() {
    (function ($) {
      $('.textarea').summernote({
        height:150,
        width:1200
      })
    })(jQuery);
  }

  loadDateRangePicker() {
    (function ($) {
      //Date range picker
      $('#reservationdate').datetimepicker({
        format: 'L'
      });
    })(jQuery);
  }
}

