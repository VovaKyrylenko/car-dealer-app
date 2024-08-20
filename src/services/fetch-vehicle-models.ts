import { FetchModelsResponse, VehicleModel } from '@/types/types';
import { createUrl } from '@/utils/create-url';

export const fetchVehicleModels = async (
  makeId: string,
  year: string
): Promise<VehicleModel[]> => {
  try {
    const url = createUrl(
      `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching vehicle models: ${response.statusText}`);
    }

    const data: FetchModelsResponse = await response.json();

    if (!Array.isArray(data.Results)) {
      throw new Error('Unexpected response format: Results is not an array');
    }

    return data.Results;
  } catch (error) {
    console.error('Failed to fetch vehicle models:', error);
    return [];
  }
};
