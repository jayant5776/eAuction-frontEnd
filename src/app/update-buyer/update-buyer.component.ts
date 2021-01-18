import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer';
import { BuyerService } from '../buyer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-buyer',
  templateUrl: './update-buyer.component.html',
  styleUrls: ['./update-buyer.component.css']
})
export class UpdateBuyerComponent implements OnInit {

  buyerId : number;
  buyer: Buyer = new Buyer();

  constructor(private buyerservice: BuyerService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.buyerId = this.route.snapshot.params['buyerId'];
  
      this.buyerservice.getBuyerById(this.buyerId).subscribe(data => {
        this.buyer = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.buyerservice.updateBuyer(this.buyerId, this.buyer).subscribe( data =>{
        this.goToBuyerList();
      }
      , error => console.log(error));
    }

  goToBuyerList() {
    this.router.navigate(['buyers']);
  }
}
