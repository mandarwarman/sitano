import { Component, OnInit } from '@angular/core';
import { PengoDataService } from '../../services/pengo-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pengo-detail',
  templateUrl: './pengo-detail.page.html',
  styleUrls: ['./pengo-detail.page.scss'],
})
export class PengoDetailPage implements OnInit {

  private pengo;
  public pengob;

  constructor(private route: ActivatedRoute, private pengoDataService: PengoDataService) { 
    
  }

  ionViewWillEnter(){
    let pengoId = this.route.snapshot.paramMap.get('id');
    this.pengo = this.pengoDataService.getPengo(pengoId);
    }

  ngOnInit() {
    
  }
}
