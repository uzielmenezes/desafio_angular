import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { VehiclesAPI } from 'src/app/models/vehicle.model';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private httpClient: HttpClient) {}

  getVehicles(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<VehiclesAPI>(`${API}/vehicle`, { params })
      .pipe(map((resp) => resp.vehicles));
  }
}
