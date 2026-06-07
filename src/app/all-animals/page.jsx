// import React from 'react';
import AnimalCard from "../components/AnimalCard";
import animalsData from "../data/db.json";

const page = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            {/* <h1 className="mb-8 text-3xl font-bold text-green-700 text-center">
                All Animals
            </h1> */}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {animalsData.animals.map((animalData) => (
                    <AnimalCard
                        key={animalData.id}
                        animalData={animalData}
                    />
                ))}
            </div>
        </div>
    );
};

export default page;
