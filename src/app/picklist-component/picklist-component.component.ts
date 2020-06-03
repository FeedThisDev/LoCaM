import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import data from './picklist.json';
// import data from 'json!./assets/arraylist.json';

@Component({
  selector: 'app-picklist-component',
  templateUrl: './picklist-component.component.html',
  styleUrls: ['./picklist-component.component.css']
})
export class PicklistComponentComponent implements OnInit {

  constructor() { }

  picklistData: {}[];

  picklistExport: string;

  ngOnInit(): void {
    this.picklistData = data;

    this.picklistExport = this.generatePicklist();
  }

  drop(event: CdkDragDrop<object[]>) {
    moveItemInArray(this.picklistData, event.previousIndex, event.currentIndex);
    this.picklistExport = this.generatePicklist();
  }


  generatePicklist(): string{
      let result = 'int[] Picklist = { ';
      for (let i = 0; i < this.picklistData.length; i++){
        result += this.picklistData[i]['Id'] + ', ';
      }
      result = result.substring(0, result.length - 2);
      result += ' };';
      return result;
  }

  doLoad(): void{
    const text = (document.getElementById('load-input') as HTMLInputElement).value;
    let substring = text.substring(text.indexOf('{') + 1);
    substring = substring.substring(0, substring.indexOf('}') - 1);
    const splitted = substring.split(',');
    let newPicklist = [];
    for(let i = 0; i < splitted.length; i++){
      console.log("i: " +i);
      console.log("splitted[i]: " + splitted[i]);
      console.log("picklistData[i]: " + this.picklistData.filter(item => item['Id'] === parseInt(splitted[i]))[0]);
      
      newPicklist[i] = this.picklistData.filter(item => item['Id'] === parseInt(splitted[i]))[0];
    }
    this.picklistData = newPicklist;
  }

}
