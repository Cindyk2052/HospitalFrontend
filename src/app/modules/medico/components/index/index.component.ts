import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.LeerTodo();
  }

  LeerTodo() {
    this.httpService.LeerTodo(10, 0, '')
      .subscribe((respuesta: any) => {
        console.log(respuesta);
      });
  }

}
