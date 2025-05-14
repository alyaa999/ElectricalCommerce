import { Component } from '@angular/core';
import { DataCount } from '../../../Interfaces/AllDataCount/DataCount';
import { GetAllDatCountService } from '../../../Service/get-all-dat-count.service';


@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  data: DataCount =
    {
      ordersCount: 0,
      productsCount: 0,
      brandsCount: 0,
      typesCount: 0,
      usersCount: 0
    }

  constructor(private count: GetAllDatCountService) { }

  ngOnInit(): void {
    this.count.getAllDataCount().subscribe((res) => {
      this.data = res;
    });
  }

}
