import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

objArray = [
{id:1, name : "marley",age : "50",hobby : "reggae"},
{id:2, name : "jackson",age : "40",hobby : "popmusic"},
{id:3, name : "weeknd",age : "30",hobby : "international"},
{id:4, name : "beyonce",age : "35",hobby : "dancemusic"},
{id:5, name : "orelsan",age : "25",hobby : "rap"}
]

onremovePeople(event:any){
  this.objArray=this.objArray.filter((person)=>person.id!==event)
}

}
