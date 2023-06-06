import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {

  @Input()objArray: any[] = [];
  @Output()
  removePeople: EventEmitter<string> = new EventEmitter();

  supprimer(id:any){
    this.removePeople.emit(id);

  
  }
}
