// import React from 'react';
"use client";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import animalsData from "../data/db.json";

const Page = () => {
    const [sortOrder, setSortOrder] = useState("");

    const sortedAnimals = [...animalsData.animals].sort((a, b) => {
        if (sortOrder === "low") {
            return a.price - b.price;
        }

        if (sortOrder === "high") {
            return b.price - a.price;
        }

        return 0;
    });
    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            {/* <h1 className="mb-8 text-3xl font-bold text-green-700 text-center">
                All Animals
            </h1> */}
            <div className="mb-6 flex justify-end">
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="rounded-lg border px-4 py-2"
                >
                    <option value="">Sort By Price</option>
                    <option value="low">Low → High</option>
                    <option value="high">High → Low</option>
                </select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedAnimals.map((animalData) => (
                    <AnimalCard
                        key={animalData.id}
                        animalData={animalData}
                    ></AnimalCard>
                ))}
            </div>
        </div>
    );
};

export default Page;
