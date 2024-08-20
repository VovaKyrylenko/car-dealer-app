export interface VehicleMake {
  MakeId: number;
  MakeName: string;
}

export interface VehicleModel {
  Model_ID: string;
  Model_Name: string;
  Make_ID: string;
  Make_Name: string;
}

export interface FetchMakesResponse {
  Results: VehicleMake[];
}

export interface FetchModelsResponse {
  Results: VehicleModel[];
}

export interface Params {
  makeId: string;
  year: string;
}

export interface MakesAndYears {
  makes: number[];
  years: number[];
}
