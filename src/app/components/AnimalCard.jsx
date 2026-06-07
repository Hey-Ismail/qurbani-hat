// import React from 'react';
import { Button } from "@heroui/react";
import Link from "next/link";
const AnimalCard = ({ animalData }) => {

    const {
        id,
        name,
        breed,
        price,
        weight,
        age,
        location,
        image,
        category,
    } = animalData;
    return (
        <div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm w-auto hover:shadow-lg">


                <div className="relative">
                    <img
                        src={image}
                        alt={name}
                        className="h-60 w-full object-cover"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5">

                    <h2 className="text-xl font-bold text-gray-900">
                        {name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {breed}
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                        📍 {location}
                    </p>

                    {/* Info */}
                    <div className="mt-4 grid grid-cols-2 gap-3">

                        <div className="rounded-lg bg-green-50 p-3 text-center">
                            <p className="text-xs text-gray-500">
                                Weight
                            </p>
                            <p className="font-semibold text-green-700">
                                {weight} KG
                            </p>
                        </div>

                        <div className="rounded-lg bg-green-50 p-3 text-center">
                            <p className="text-xs text-gray-500">
                                Age
                            </p>
                            <p className="font-semibold text-green-700">
                                {age} Years
                            </p>
                        </div>

                    </div>


                    <div className="mt-5 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500">
                                Price
                            </p>

                            <p className="text-xl font-bold text-green-700">
                                BDT {price.toLocaleString()}
                            </p>
                        </div>

                        <Link href={`/animals/${id}`}>
                            <Button className="bg-green-700 text-white hover:bg-green-800 rounded-xl">
                                View Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;