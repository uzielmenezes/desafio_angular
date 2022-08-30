import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { VehiclesDataAPI } from 'src/app/models/vehicleData.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private API = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getVehicles(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.API}/vehicle`)
      .pipe(map((vehicle) => vehicle.vehicles));
  }

  getVehicleData(valor?: any) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<VehiclesDataAPI>(`${this.API}/vehicleData`, { params })
      .pipe(pluck('vehicleData'));
  }
}
