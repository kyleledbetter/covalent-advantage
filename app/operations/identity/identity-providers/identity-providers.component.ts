import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPageChangeEvent } from '@covalent/core/paging';

@Component({
  selector: 'covalent-operations-identityproviders',
  templateUrl: './identity-providers.component.html',
  styleUrls: ['./identity-providers.component.css'],
})
export class OperationsIdentityProvidersComponent {
  eventPageSize: IPageChangeEvent;
  pageSize: number = 100;

  changePageSize(event: IPageChangeEvent): void {
    this.eventPageSize = event;
  }
}
