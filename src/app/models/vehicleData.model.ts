export interface VehiclesData extends Array<VehicleData> {}

export interface VehicleData {
  id: number;
  vin: any;
  odometer: any;
  tirePressure: any;
  status: any;
  batteryStatus: any;
  fuelLevel: any;
  lat: any;
  long: any;
}

export interface VehiclesDataAPI {
  vehiclesData: VehiclesData;
}
