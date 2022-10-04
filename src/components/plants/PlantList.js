import React, { useEffect, useState } from "react";

export default function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Plants
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {plants.map((plant) => (
            <div key={plant.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={plant.imageSrc}
                  alt={plant.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={plant.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {plant.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{plant.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {plant.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
