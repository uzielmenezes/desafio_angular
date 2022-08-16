import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleData } from 'src/app/models/vehicleData.model';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class VehicleDataService {
  constructor(private httpClient: HttpClient) {}

  getVehiclesData(): Observable<VehicleData[]> {
    return this.httpClient.get<VehicleData[]>(`${API}/vehicle`);
  }
}
