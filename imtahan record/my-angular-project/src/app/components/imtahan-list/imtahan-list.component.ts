import { Component, OnInit } from '@angular/core';
import { ImtahanService } from '../../services/imtahan.service';

@Component({
  selector: 'app-imtahan-list',
  templateUrl: './imtahan-list.component.html',
  styleUrls: ['./imtahan-list.component.css']
})
export class ImtahanListComponent implements OnInit {
  imtahanlar: any;

  constructor(private imtahanService: ImtahanService) { }

  ngOnInit(): void {
    this.loadImtahanlar();
  }

  loadImtahanlar() {
    this.imtahanService.getImtahanlar().subscribe(data => {
      this.imtahanlar = data;
    });
  }
}
