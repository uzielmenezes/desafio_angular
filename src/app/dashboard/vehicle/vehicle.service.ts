import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicles } from 'src/app/models/vehicle.model';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private httpClient: HttpClient) {}

  getVehicle(): Observable<any[]> {
    return this.httpClient.get<Vehicles>(`${API}/vehicle`);
  }
}
