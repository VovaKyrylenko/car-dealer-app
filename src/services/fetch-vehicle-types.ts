import { FetchMakesResponse, VehicleMake } from '@/types/types';
import { createUrl } from '@/utils/create-url';

export const fetchVehicleTypes = async (): Promise<VehicleMake[]> => {
  try {
    const url = createUrl('/GetMakesForVehicleType/car?format=json');
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching vehicle types: ${response.statusText}`);
    }

    const data: FetchMakesResponse = await response.json();
    return data.Results;
  } catch (error) {
    console.error('Failed to fetch vehicle types:', error);
    return [];
  }
};
