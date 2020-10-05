import { Injectable } from '@angular/core';
import IMask from 'imask';
declare var jQuery: any;
declare var $: any;

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

  loadDatatbles(id: string) {
    (function ($) {
      $("#" + id).DataTable({
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

  destroyDatatbles(id: string) {
    (function ($) {
      $("#" + id).DataTable().destroy();
    })(jQuery);
  }

  loadSelect2(id: string) {
    (function ($) {
      //Initialize Select2 Elements
      return $("." + id).select2()

      //Initialize Select2 Elements
      /*$('.select2bs4').select2({
        theme: 'bootstrap4'
      })*/
    })(jQuery);
  }

  loadEditorSummernote(id: string) {
    (function ($) {
      $('#' + id).summernote({
        height: 150
      })
    })(jQuery);
  }

  getSummernoteCode(id: string) {
    let code = $('#' + id).summernote('code');
    return code;
  }

  setSummernoteCode(id: string, code: string) {
    $('#' + id).summernote('code', code);
  }

  setSummernoteParseHTML(id: string, HTMLstring: string) {
    $('#' + id).summernote('pasteHTML', HTMLstring);
  }

  resetSummernote(id: string) {
    (function ($) {
      $('#' + id).summernote('code', '');
    })(jQuery);
  }

  resetFileInput(id: string) {
    (function ($) {
      return $("#" + id).val(null);
    })(jQuery);
  }

  loadDatePicker(id: string) {
    (function ($) {
      //Date range picker
      $('#' + id).datetimepicker({
        format: 'L'
      });
    })(jQuery);
  }


   loadDateMask() {
    (function ($) {
      var inputElements = document.querySelectorAll("input[data-format]");
      inputElements.forEach(input => {
        let m = new (IMask as any)(input, {
          mask: input.getAttribute("data-format")
        });
      });   
    });
  }
}

