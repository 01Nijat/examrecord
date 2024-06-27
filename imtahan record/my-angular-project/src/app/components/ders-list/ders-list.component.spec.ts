import { Component, OnInit } from '@angular/core';
import { DersService } from '../../services/ders.service';

@Component({
  selector: 'app-ders-list',
  templateUrl: './ders-list.component.html',
  styleUrls: ['./ders-list.component.css']
})
export class DersListComponent implements OnInit {
  dersler: any;

  constructor(private dersService: DersService) { }

  ngOnInit(): void {
    this.loadDersler();
  }

  loadDersler() {
    this.dersService.getDersler().subscribe(data => {
      this.dersler = data;
    });
  }
}
