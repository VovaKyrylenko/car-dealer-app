import { FetchMakesResponse, MakesAndYears } from '@/types/types';
import { createUrl } from '@/utils/create-url';

export const fetchMakesAndYears = async (): Promise<MakesAndYears> => {
  try {
    const currentYear = new Date().getFullYear();
    const url = createUrl('/GetMakesForVehicleType/car?format=json');
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching makes and years: ${response.statusText}`);
    }

    const data: FetchMakesResponse = await response.json();

    const makes = data.Results.map((make) => make.MakeId);
    const years = Array.from(
      { length: currentYear - 2015 + 1 },
      (_, i) => 2015 + i
    );

    return { makes, years };
  } catch (error) {
    console.error('Failed to fetch makes and years:', error);
    return { makes: [], years: [] };
  }
};
