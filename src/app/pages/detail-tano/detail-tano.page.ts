import { Component, OnInit } from '@angular/core';
import { TanoDataService } from '../../services/tano-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-tano',
  templateUrl: './detail-tano.page.html',
  styleUrls: ['./detail-tano.page.scss'],
})
export class DetailTanoPage implements OnInit {

  private tano;

  constructor(private route: ActivatedRoute, private tanoDataService: TanoDataService) { 
    
  }

  ionViewWillEnter(){
    let tanoId = this.route.snapshot.paramMap.get('id');
    this.tano = this.tanoDataService.getTano(tanoId);
  }

  ngOnInit() {
    
  }
}
