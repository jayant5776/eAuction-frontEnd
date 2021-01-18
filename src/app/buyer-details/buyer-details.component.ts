import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer';
import { ActivatedRoute } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {

  buyerId: number
  buyer: Buyer
  constructor(private route: ActivatedRoute, private buyerService: BuyerService) { }

  ngOnInit(): void {
    this.buyerId = this.route.snapshot.params['buyerId'];

    this.buyer = new Buyer();
    this.buyerService.getBuyerById(this.buyerId).subscribe(data => {
      this.buyer = data;
    });
  }
}
