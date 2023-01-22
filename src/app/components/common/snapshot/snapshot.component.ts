import { Component } from '@angular/core';
import { Statistics } from 'app/Interfaces/interfaces';
import { DataService } from 'app/services/data.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent  {
  isShow:boolean=false
  private highlightStatistics = new BehaviorSubject<Statistics[]>([]);
  public highlightStatistics$ = this.highlightStatistics.asObservable();

  constructor(public dataService: DataService) {

  }


}
