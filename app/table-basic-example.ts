import {Component} from '@angular/core';
import DataJson from '../Data.json';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface jsonData {
  Body_Size_Measurements: {
        Right_Arm: {
          wrist_circ:number;
          forearm_circ:number;
          bicep_circ: number,
          volume: number,
          length: number},
      
        Left_Arm: {
          wrist_circ:number;
          forearm_circ:number;
          bicep_circ: number,
          volume: number,
          length: number}
        },
    Biometric_Data :{
          name: String,
          value:number
    }    
    };
    


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  
// ];
const ELEMENT_DATA: jsonData[] = DataJson;
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */