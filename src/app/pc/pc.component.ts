import { Component, OnInit } from '@angular/core';
import { Ipc } from '../ipc';
import { Ordinateur } from '../ordinateur';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
syst = ["windows 7", "windows 10", "OSX", "MacOS Sierra", "Andorid", "iOS"];

  constructor() { }
 pc = new Ordinateur();
 PCS:Array<Ipc>=[];


  ngOnInit(): void {
  }
addPC(){
  let pc2 = new Ordinateur();
  Object.assign(pc2,this.pc);
  this.PCS.push(pc2);
}





}
