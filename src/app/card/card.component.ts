import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // input decorator to indicate that this properties will be provided by the parent
  @Input() title='';
  @Input() imageUrl='';
  @Input() content='';
  @Input() username='';

  constructor() { }

  ngOnInit(): void {
  }

}
