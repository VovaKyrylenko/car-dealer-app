import { Suspense } from 'react';
import { FilterForm } from '@/components/home/filter-form';
import { fetchVehicleTypes } from '@/services/fetch-vehicle-types';
import { Loader } from '@/components/common/loader';

const HomePage = async () => {
  const vehicleTypesData = await fetchVehicleTypes();

  const vehicleTypes = vehicleTypesData.map((type) => ({
    value: type.MakeId,
    label: type.MakeName,
  }));

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2014 },
    (_, i) => 2015 + i
  ).map((year) => ({
    value: year,
    label: year.toString(),
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Car Dealer App</h1>
      <Suspense fallback={<Loader />}>
        <FilterForm vehicleTypes={vehicleTypes} years={years} />
      </Suspense>
    </div>
  );
};

export default HomePage;
