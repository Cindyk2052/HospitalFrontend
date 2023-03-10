import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private httpCliente: HttpClient
  ) {

  }

  LeerTodo(cantidad: number, pagina: number, textoBusqueda: string) {

    let parametros = new HttpParams();

    parametros = parametros.append('cantidad', cantidad);
    parametros = parametros.append('pagina', pagina);
    parametros = parametros.append('textoBusqueda', textoBusqueda);

    return this.httpCliente.get('http://localhost:3859/api/medico', {params: parametros} );
  }

}
