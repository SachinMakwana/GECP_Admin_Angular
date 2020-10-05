function loadDatatables() {
    $("#example1").DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "responsive": true,
    });
}

function loadSelect2() {
    //Initialize Select2 Elements
    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    })
}

function loadDateMask() {
    //Datemask dd/mm/yyyy
    $('.datemask').inputmask('dd/mm/yyyy', {
        'placeholder': 'dd/mm/yyyy'
    })
}

function loadEditorSummernote() {
    $('.textarea').summernote()
}

function onlyNumbers(e) {
    if ((e.charCode < 48 || e.charCode > 57)) {
        e.preventDefault();
        return false;
    } else {
        return true;
    }
}

function ValidateAlpha(event) {
    if ((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32))
        return true;

    return false;
}
