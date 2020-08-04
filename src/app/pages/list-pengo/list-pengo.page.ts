import { Component, OnInit } from '@angular/core';
import { PengoDataService } from '../../services/pengo-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-list-pengo',
  templateUrl: './list-pengo.page.html',
  styleUrls: ['./list-pengo.page.scss'],
})
export class ListPengoPage implements OnInit {
  pengoList:any;
  searchTerm: string = '';  
  searchControl: FormControl;   
  searching: any = false;

  constructor(private pengoDataService: PengoDataService, route: ActivatedRoute) { 
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

  setFilteredItems(searchPengo) {
    this.pengoList = this.pengoDataService.filterPengo(searchPengo);
  }
}
