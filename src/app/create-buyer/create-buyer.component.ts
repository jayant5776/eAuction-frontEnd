import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer';
import { BuyerService } from '../buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-buyer',
  templateUrl: './create-buyer.component.html',
  styleUrls: ['./create-buyer.component.css']
})
export class CreateBuyerComponent implements OnInit {

  buyer: Buyer = new Buyer();

  constructor(private buyerservice: BuyerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBuyer() {
    this.buyerservice.createBuyer(this.buyer).subscribe(data => {
      console.log(data);
      this.goToBuyerList();
    },
      error => console.log(error));
  }

  goToBuyerList() {
    
  }

  onSubmit() {
    console.log(this.buyer);
    this.saveBuyer();
    this.router.navigate(['buyers']);
  }
}
