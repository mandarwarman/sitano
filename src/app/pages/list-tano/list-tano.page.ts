import { Component, OnInit } from '@angular/core';
import { TanoDataService } from '../../services/tano-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-list-tano',
  templateUrl: './list-tano.page.html',
  styleUrls: ['./list-tano.page.scss'],
})
export class ListTanoPage implements OnInit {

  tanoList:any;
  searchTerm: string = '';  
  searchControl: FormControl;   
  searching: any = false;

  constructor(private tanoDataService: TanoDataService, route: ActivatedRoute) { 
    this.searchControl = new FormControl();
  }

  ngOnInit() {
      this.setFilteredItems("");  
      this.searchControl.valueChanges.pipe(debounceTime(700)).subscribe(search => {

        this.searching = false;
        this.setFilteredItems(search);

    });
      
  }
  
  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems(searchTano) {
    this.tanoList = this.tanoDataService.filterTano(searchTano);
  }
}
