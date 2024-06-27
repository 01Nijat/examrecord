import { Component, OnInit } from '@angular/core';
import { SagirdService } from '../../services/sagird.service';

@Component({
  selector: 'app-sagird-list',
  templateUrl: './sagird-list.component.html',
  styleUrls: ['./sagird-list.component.css']
})
export class SagirdListComponent implements OnInit {
  sagirdler: any;

  constructor(private sagirdService: SagirdService) { }

  ngOnInit(): void {
    this.loadSagirdler();
  }

  loadSagirdler() {
    this.sagirdService.getSagirdler().subscribe(data => {
      this.sagirdler = data;
    });
  }
}
