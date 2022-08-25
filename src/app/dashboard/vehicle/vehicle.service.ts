import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private API = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getVehicles(): Observable<any> {
    return this.httpClient
      .get<any>(this.API + '/vehicle')
      .pipe(map((vehicle) => vehicle.vehicles));
  }

  getVehicleData(vehicleId: number): Observable<any> {
    return this.httpClient.get<any>(this.API + '/vehicledata/' + vehicleId);
  }
}
