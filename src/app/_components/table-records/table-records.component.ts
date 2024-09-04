import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RecordService } from './record.service'; // ajuste o caminho conforme necessário
import { OperationRecord } from '../../_models/operation-record.model';

@Component({
  selector: 'app-table-records',
  templateUrl: './table-records.component.html',
  styleUrls: ['./table-records.component.css']
})
export class TableRecordsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'operation', 'user', 'amount', 'userBalance', 'operationResponse', 'date'];
  dataSource: MatTableDataSource<OperationRecord> = new MatTableDataSource<OperationRecord>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.loadData(0, 10); // Ajuste a página inicial e o tamanho conforme necessário
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Atualizar a chamada de dados quando o paginator ou sort mudarem
    this.paginator.page.subscribe(() => this.loadData(this.paginator.pageIndex, this.paginator.pageSize));
    this.sort.sortChange.subscribe(() => this.loadData(this.paginator.pageIndex, this.paginator.pageSize));
  }
  
  loadData(page: number, size: number) {
    this.recordService.getRecords(page, size).subscribe(data => {
      this.dataSource.data = data.content;

      if (this.dataSource.paginator) {
        this.dataSource.paginator.length = data.totalElements;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    // Certifique-se de que o filtro está aplicado apenas se houver dados na tabela
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
