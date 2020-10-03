import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Subject } from 'rxjs';
declare var swal: any;
@Component({
  selector: 'AutoGrid',
  templateUrl: './autogrid.component.html',
  styleUrls: ['./autogrid.component.css'],

})
export class AutoGridComponent {

  constructor(private _router: Router, private _loginService: LoginService) { }
  SortBy: string = "";
  Direction: number = 1;

  Pages: any = [];
  Data: any = [];
  Width: string;
  PaginationPages: any = [];
  @Input() AllowDelete: boolean = true;
  @Input() Columns: any = [];
  @Input() AllowSorting: boolean = true;
  @Input() TotalRows: number = 0;
  @Input() PageSize: number = 0;
  @Input() PageIndex: number = 0;
  @Input() TotalPages: number = 0;
  @Input() SortField: string;
  @Input() SortType: number;
  @Input() EditAllow: boolean = true;
  @Input() DeleteAllow: boolean = true;
  @Input() EditLink: string = "/home";
  @Input() IsDownload: boolean = false;

  public RowDeleted$ = new Subject<any>();
  public PageIndexChanged$ = new Subject<any>();
  public SortChanged$ = new Subject<any>();
  public PageSizeChanged$ = new Subject<any>();
  public FileDownload$ = new Subject<any>();
  public LoadData(_data: any) {
    this.Data = _data;
    console.log(this.Data)
  }
  OnEditRow(Row2Delete: any) {
    var navLink = this.EditLink + "/" + Row2Delete.Id;
    this._router.navigate([navLink]);
  }
  OnDeleteRow(Row2Delete: any, index: any) {
    var that = this;
    swal({
      title: "Are you sure, you want to delete this?",
      text: "You will not be able to recover this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it !",
      cancelButtonText: "No, cancel please !",
      closeOnConfirm: true,
      closeOnCancel: true
    },
      function (isConfirm) {
        if (isConfirm) {
          var deleteObjectWithIndex: any = {};
          deleteObjectWithIndex.RowObject = Row2Delete;
          deleteObjectWithIndex.RowIndex = index;
          that.RowDeleted$.next(deleteObjectWithIndex);
        } else {
        }
      });
  }

  OnDownloadFile(RowToUpload: any) {
    this.FileDownload$.next(RowToUpload);
  }
  OnPageIndexChange(index: number) {
    this.PageIndex = index - 1;
    this.Data = [];
    this.PageIndexChanged$.next(index - 1);
  }
  ngOnInit() {

  }
  ngAfterViewInit() {
  }
  ngOnChanges() {
    this.PaginationPages = [];
    for (let i = 0; i < this.TotalPages; i++) {
      this.PaginationPages.push(i + 1);
    }
  }
  ngOnPagesizeChanged(pagesize: number) {
    this.PageSize = Number(pagesize);
    this.Data = [];
    //this._loginService.SaveLastSelectedPageSize(this.PageSize);
    this.PageSizeChanged$.next(pagesize)
  }
  Sort(key: string, dir: number) {
    if (key === this.SortBy) {
      if (this.Direction == 1) {
        this.Direction = -1;
      }
      else {
        this.Direction = 1;
      }
    }
    else {
      this.SortBy = key;
      this.Direction = dir;
    }
    var sortObjectWithDirection: any = {};
    sortObjectWithDirection.SortField = this.SortBy;
    sortObjectWithDirection.SortType = this.Direction;
    this.SortChanged$.next(sortObjectWithDirection);
  }
}
