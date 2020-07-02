import { Component , OnInit , ViewChild , Input } from '@angular/core';
import { NgbTabChangeEvent , NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {GooglePlaceDirective} from "ngx-google-places-autocomplete";
import {Address} from "ngx-google-places-autocomplete/objects/address";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.sass']
})
export class SearchboxComponent implements OnInit {
  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  public inputAddressFrom: any;
  public inputAddressTo: any;
  public options = {
    types: [],
    componentRestrictions: { }
  };
  public activeShipmentItemType = 1; // 1 = parcel , 2 = envelope , 3 = pallet

  public qtyValue: any;
  public weightValue: any;
  public lengthValue: any;
  public widthValue: any;
  public heightValue: any;

  private API_URL = 'http://3.20.160.167:8083/api/Ver1/CompareRates';
  public showDataPopup = false;
  public dataResponse: any;
  public htmlDataResponse;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  public handleAddressChangeFrom(address: Address) {
    this.inputAddressFrom = address;
  }

  public handleAddressChangeTo(address: Address) {
    this.inputAddressTo = address;
  }

  public sendParcel() {
    let requestObject = {
      "action": "CompareRates",
      "shippingTypeId": 2,
      "courierId": 2,
      "unitOfMeasurement": "cm_kg",
      "Shipper": {
        "country": "",
        "state": "",
        "city": "",
        "street": "",
        "postalCode": ""
      },
      "Recipient": {
        "country": "",
        "state": "",
        "city": "",
        "street": "",
        "postalCode": ""
      },
      "Packages": [
        {
          "quantity": this.qtyValue,
          "weight": this.weightValue,
          "height": this.heightValue,
          "length": this.lengthValue,
          "width": this.widthValue,
          "description": "what ever"
        }
      ],
      "EstimatedDeliveryDate": {
        "pickupDate": "",
        "pickupTime": "",
        "deliveryDate" : "",
        "deliveryTime": ""
      }
    };
    this.inputAddressFrom.address_components.forEach(item => {
      if (item.types[0] === 'country') {
        requestObject.Shipper.country = item.short_name;
      }
      if (item.types[0] === 'locality') {
        requestObject.Shipper.city = item.long_name;
      }
      if (item.types[0] === 'route') {
        requestObject.Shipper.street = item.long_name;
      }
      if (item.types[0] === 'postal_code') {
        requestObject.Shipper.postalCode = item.long_name;
      }
    });
    this.inputAddressTo.address_components.forEach(item => {
      if (item.types[0] === 'country') {
        requestObject.Recipient.country = item.short_name;
      }
      if (item.types[0] === 'locality') {
        requestObject.Recipient.city = item.long_name;
      }
      if (item.types[0] === 'route') {
        requestObject.Recipient.street = item.long_name;
      }
      if (item.types[0] === 'postal_code') {
        requestObject.Recipient.postalCode = item.long_name;
      }
    });
    console.log(requestObject);
    this.http.post<void>(this.API_URL, requestObject || {}).subscribe(( value: any ) => {
      console.log(value);
      this.showDataPopup = true;
      this.dataResponse = value;
      this.htmlDataResponse = JSON.stringify(value, null, 4);
    });
  }


}
