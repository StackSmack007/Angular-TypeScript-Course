import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICause } from 'src/app/Interfaces/Icause';
import { ICauseMini } from 'src/app/Interfaces/icauseMini';

@Component({
  selector: 'don-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {
  public causes: ICauseMini[];
  constructor(route: ActivatedRoute) {
    this.causes = route.snapshot.data["causes"];
  }

  ngOnInit() {
  }

}
