import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { colors } from './data';
import { Color } from './bootstrap.model';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  colors: Color[];

  alertClosed = false;
  alertClose = false;
  closed = false;

  // Button Group Data
  model = {
    left: true,
    middle: false,
    right: false
  };

  btnmodel = {
    first: true,
    second: false,
    third: false,
    forth: false
  };

  btngroup = {
    first: true,
    second: false,
    third: false,
    drop: false
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Components', path: '/' }, { label: 'Bootstrap UI', active: true }];

    this._fetchData();
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content);
  }

  /**
   * Open extra large modal
   * @param extraLargeDataModal extra large modal data
   */
  extraLargeModal(extraLargeDataModal: any) {
    this.modalService.open(extraLargeDataModal, { size: 'xl' });
  }
  /**
   * Open Large modal
   * @param largeDataModal large modal data
   */
  largeModal(largeDataModal: any) {
    this.modalService.open(largeDataModal, { size: 'lg' });
  }

  /**
   * Open small modal
   * @param smallDataModal small modal data
   */
  smallModal(smallDataModal: any) {
    this.modalService.open(smallDataModal, { size: 'sm' });
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any) {
    this.modalService.open(centerDataModal, { centered: true });
  }

  /**
   * Open scroll modal
   * @param scrollDataModal scroll modal data
   */
  scrollModal(scrollDataModal: any) {
    this.modalService.open(scrollDataModal, { scrollable: true });
  }

  /**
   *  Open error modal
   * @param errorModalData error modal data
   */
  erroModal(errorModalData: any) {
    this.modalService.open(errorModalData, { centered: true });
  }

  /**
   * fetches the bootstrap data
   */
  private _fetchData() {
    this.colors = colors;
  }
}
