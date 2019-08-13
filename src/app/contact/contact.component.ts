import { Component, OnInit } from '@angular/core';
import { Visitor } from '../model/visitor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Visitor(1, 'John Smith', '+44 7466 568712', 'john.smith@xyz.co.uk', 'Your message...');

  constructor() { }

  ngOnInit() {
  }

  newVisitorMessage() {
    this.model = new Visitor(2, '', '', '', '');
  }

}
