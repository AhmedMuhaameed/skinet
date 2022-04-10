import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number | undefined;
  @Input() pageSize: number | undefined;
  @Output() pageChanged = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onPageChange(event:any){
    this.pageChanged.emit(event.page);
  }
}
