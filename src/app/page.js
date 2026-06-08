import Link from "next/link";
import { Button } from "@heroui/react";
import AnimalCard from "./components/AnimalCard";
import animalsData from "./data/db.json";

const featuredAnimals = animalsData.animals.slice(0, 4);

const qurbaniTips = [
  {
    title: "Check Health First",
    description: "Choose animals with clear eyes, active movement, and healthy feeding habits before making any booking.",
  },
  {
    title: "Compare Weight and Price",
    description: "Review estimated live weight, breed quality, and market price together so you do not overpay.",
  },
  {
    title: "Confirm Seller Trust",
    description: "Prefer verified sellers and ask about feeding, vaccination, and transport arrangements in advance.",
  },
];

const topBreeds = [
  {
    name: "Friesian",
    type: "Cow",
    summary: "Popular for large size, strong body frame, and premium buyer demand.",
  },
  {
    name: "Black Bengal",
    type: "Goat",
    summary: "Well-known in Bangladesh for meat quality, affordability, and wide availability.",
  },
  {
    name: "Sahiwal",
    type: "Cow",
    summary: "A dependable premium breed with healthy build and strong market appeal.",
  },
  {
    name: "Dorper",
    type: "Sheep",
    summary: "Favored for fast growth, solid structure, and good overall condition.",
  },
];

export default function Home() {
  return (
    <div>
      <main>
        <section className="bg-linear-to-b from-green-50 to-white">
          <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 py-12 text-center">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Find Your Perfect Qurbani Animal With
              <span className="text-green-600"> Confidence</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              Browse healthy and verified cattle, goats, and sheep from trusted sellers across Bangladesh. Compare animals, view details, and book your preferred livestock with ease.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/all-animals">
                <Button className="bg-green-700 px-8 py-6 text-white hover:bg-green-800">
                  Browse Animals
                </Button>
              </Link>

              <Link href="/auth/signup">
                <Button className="border-2 border-green-700 bg-white px-8 py-6 text-green-700 hover:bg-green-50">
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-green-700">500+</h3>
                <p className="text-gray-600">Listed Animals</p>
              </div>

              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-green-700">200+</h3>
                <p className="text-gray-600">Verified Sellers</p>
              </div>

              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-green-700">1000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-green-700">
                Featured Animals
              </h2>
              <p className="mt-2 text-gray-600">
                Explore some popular animals available now.
              </p>
            </div>

            <Link href="/all-animals">
              <Button className="border-2 border-green-700 bg-white text-green-700 hover:bg-green-50">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredAnimals.map((animalData) => (
              <AnimalCard key={animalData.id} animalData={animalData} />
            ))}
          </div>
        </section>

        <section className="bg-green-50 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-green-700">
                Qurbani Tips
              </h2>
              <p className="mt-2 text-gray-600">
                A few simple things to check before you book an animal.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {qurbaniTips.map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-xl border bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                  <p className="mt-3 text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-green-700">
                Top Breeds
              </h2>
              <p className="mt-2 text-gray-600">
                Popular breeds buyers usually look for during Qurbani season.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {topBreeds.map((breed) => (
                <div
                  key={breed.name}
                  className="rounded-xl border bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-medium text-green-700">{breed.type}</p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">{breed.name}</h3>
                  <p className="mt-3 text-gray-600">{breed.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
