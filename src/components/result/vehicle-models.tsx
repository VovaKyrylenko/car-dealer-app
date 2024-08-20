import { fetchVehicleModels } from '@/services/fetch-vehicle-models';
import { VehicleModel } from '@/types/types';

export async function VehicleModels({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) {
  const models = await fetchVehicleModels(makeId, year);

  if (models.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">No Vehicle Models Found</h1>
        <p>No models found for the selected make and year.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">
        Vehicle Models for {models[0].Make_Name} ({year})
      </h1>
      <ul>
        {models.map((model: VehicleModel) => (
          <li key={model.Model_ID} className="p-2 border-b">
            {`${model.Make_Name} ${model.Model_Name}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
