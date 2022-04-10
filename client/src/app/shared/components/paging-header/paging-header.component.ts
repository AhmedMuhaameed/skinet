import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss'],
})
export class PagingHeaderComponent implements OnInit {
  @Input() pageNumber: number | undefined = 1;
  @Input() pageSize: number | undefined = 6;
  @Input() totalCount: number | undefined = 6;
  constructor() {}

  ngOnInit(): void {}
}
