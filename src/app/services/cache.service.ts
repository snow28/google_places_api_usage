import { Injectable } from '@angular/core';
import { enpoints } from '../../api-endpoint';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  ngOnInit() {

  }

  loadEnums() {
    /*
    // Storage logic
    let wasUpdated = false;
    let date = Date.now();
    let storageDate = localStorage.getItem('enumsDataTimeStamp')
    let dateDifferenceMin = (((date - storageDate))/1000) / 60) % 60;
    if (storageDate == null || dateDifferenceMin >= 10) {
        localStorage.setItem('enumsDataTimeStamp', Date.now());
    }
    setTimeout(){function(){
      if (!wasUpdated) {

      }
    },600000}; // 10 minutes
    * */
  }


}
