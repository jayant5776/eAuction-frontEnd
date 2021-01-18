import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer';
import { BuyerService } from '../buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  buyers: Buyer[];

  constructor(private buyerService: BuyerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBuyers();
  }

  private getBuyers() {
    this.buyerService.getBuyersList().subscribe(data => {
      this.buyers = data;
    });
  }

  buyerDetails(buyerId: number) {
    this.router.navigate(['buyer-details', buyerId]);
  }

  updateBuyer(buyerId: number) {
    this.router.navigate(['update-buyer', buyerId]);
  }

  deleteBuyer(buyerId: number) {
    this.buyerService.deleteBuyer(buyerId).subscribe(data => {
      console.log(data);
      this.getBuyers();
    })
  }
}
