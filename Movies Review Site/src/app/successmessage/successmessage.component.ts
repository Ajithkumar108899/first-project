import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successmessage',
  templateUrl: './successmessage.component.html',
  styleUrls: ['./successmessage.component.css']
})
export class SuccessmessageComponent implements OnInit{
  isOpen = false; 
  constructor() { }

  ngOnInit(): void {
  }
  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

}
