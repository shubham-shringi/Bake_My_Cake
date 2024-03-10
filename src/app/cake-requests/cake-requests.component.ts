import { Component, ViewChild } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeRequest } from '../models/cakeRequest';
import { CakeRequestService } from '../services/cake-request.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-cake-requests',
  templateUrl: './cake-requests.component.html',
  styleUrls: ['./cake-requests.component.css'],
})
export class CakeRequestsComponent {
  displayedColumns: string[] = [
    'deliveryDate',
    'customerName',
    'email',
    'phone',
    'pincode',
    'houseNumber',
    'city',
    'state',
    'cakeName',
    'quantity',
    'price',
    'totalPrice',  

  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  
  cakeRequests: CakeRequest[] = [];
  dataSource: any;

  constructor(private cakeRequestService: CakeRequestService) {}

  ngOnInit(): void {
    this.cakeRequestService.getAllCakeRequests().subscribe({
      next: (data) => {
        this.cakeRequests = data;
        this.dataSource = new MatTableDataSource(this.cakeRequests);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


