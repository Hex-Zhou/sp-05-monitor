import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { BackPack } from "src/app/_astrix/shared/common/backpack.class";
import { iSite } from "./../../../../shared/models/site.model";
import { DynamicTableComponent } from "./components/dynamic-table/dynamic-table.component";
import { ModalEditComponent } from "./components/modal-edit/modal-edit.component";
import { PageSiteListStatusService } from "./services/page-site-list-status.service";
@Component({
  selector: "app-page-site-list",
  templateUrl: "./page-site-list.component.html",
  styleUrls: ["./page-site-list.component.scss"],
})
export class PageSiteListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("dynamic", { read: ViewContainerRef })
  private viewRef: ViewContainerRef;
  //
  subs: Subscription[] = [];
  siteList: iSite[] = [];
  //
  constructor(private cdr: ChangeDetectorRef, private status: PageSiteListStatusService, private modalServ: NgbModal) {}
  ngOnDestroy(): void {
    this.subs.forEach(e => e.unsubscribe());
  }
  ngOnInit(): void {
    this._listenSiteList();
    this.status.nextSiteList$ByAPI();
  }
  ngAfterViewInit(): void {
    this._setTableView();
  }
  //
  openModal() {
    const options = BackPack.configs.ngbModal.form;
    this.modalServ.open(ModalEditComponent, options);
  }
  //
  private _listenSiteList() {
    const sub = this.status.getSiteList$().subscribe(list => {
      this.siteList = list || [];
      if (this.viewRef) this._setTableView();
    });
    this.subs.push(sub);
  }
  //
  private _setTableView() {
    this.viewRef.clear();
    const comRef = this.viewRef.createComponent(DynamicTableComponent);
    comRef.instance.list = this.siteList;
    this.cdr.detectChanges();
  }
}
