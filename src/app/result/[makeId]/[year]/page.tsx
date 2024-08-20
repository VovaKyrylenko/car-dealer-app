import { Suspense } from 'react';
import { fetchMakesAndYears } from '@/services/fetch-makes-and-years';
import { Params } from '@/types/types';
import { Loader } from '@/components/common/loader';
import { VehicleModels } from '@/components/result/vehicle-models';

export default function ResultPage({ params }: { params: Params }) {
  const { makeId, year } = params;

  if (!makeId || !year) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Invalid parameters</h1>
        <p>Please provide a valid make and year.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      {/* @ts-expect-error Server Component */}
      <VehicleModels makeId={makeId} year={year} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  try {
    const { makes, years } = await fetchMakesAndYears();

    if (!Array.isArray(makes) || !Array.isArray(years)) {
      console.error('Invalid makes or years data');
      return [];
    }

    const paths = makes.flatMap((makeId) =>
      years.map((year) => ({
        makeId: makeId.toString(),
        year: year.toString(),
      }))
    );
    return paths;
  } catch (error) {
    console.error('Error fetching makes and years:', error);
    return [];
  }
}
