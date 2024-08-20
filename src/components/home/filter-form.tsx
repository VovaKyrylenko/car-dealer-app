'use client';

import { useState } from 'react';
import { Dropdown } from './dropdown';
import Link from 'next/link';

interface FilterFormProps {
  vehicleTypes: { value: number; label: string }[];
  years: { value: number; label: string }[];
}

export const FilterForm = ({ vehicleTypes, years }: FilterFormProps) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState<
    string | number
  >('');
  const [selectedYear, setSelectedYear] = useState<string | number>('');

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Dropdown
        label="Vehicle Type"
        options={vehicleTypes}
        value={selectedVehicleType}
        onChange={(e) => setSelectedVehicleType(e.target.value)}
      />
      <Dropdown
        label="Model Year"
        options={years}
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      />
      <Link href={`/result/${selectedVehicleType}/${selectedYear}`} passHref>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          disabled={!selectedVehicleType || !selectedYear}
        >
          Next
        </button>
      </Link>
    </div>
  );
};
