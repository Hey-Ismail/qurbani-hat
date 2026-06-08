import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { notFound, redirect } from "next/navigation";
import animalsData from "../../data/db.json";
import { getServerSession } from "@/lib/session";

const AnimalDetailsPage = async ({ params }) => {
    const session = await getServerSession();
    const { ID } = await params;
    const animal = animalsData.animals.find(
        ({ id }) => String(id) === ID
    );

    if (!session?.user) {
        redirect(`/auth/signin?redirect=/all-animals/${ID}`);
    }

    if (!animal) {
        notFound();
    }

    return (
        <section className="bg-green-50/60 px-4 py-10 sm:py-14">
            <div className="mx-auto max-w-5xl">
                <div className="overflow-hidden rounded-[28px] border border-green-100 bg-white shadow-sm">
                    <div className="grid gap-0 lg:grid-cols-[420px_1fr]">
                        <div className="relative bg-green-100">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                width={420}
                                height={420}
                                className="h-[320px] w-full object-cover lg:h-full"
                            />
                            <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-green-800">
                                {animal.category}
                            </span>
                        </div>

                        <div className="flex min-h-full flex-col p-6 sm:p-8">
                            <div className="border-b border-gray-100 pb-6">
                                <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-700">
                                    {animal.type}
                                </p>
                                <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                    {animal.name}
                                </h1>
                                <p className="mt-2 text-base text-gray-500">
                                    {animal.breed}
                                </p>
                                <p className="mt-5 text-3xl font-bold text-green-700">
                                    BDT {animal.price.toLocaleString()}
                                </p>
                            </div>

                            <div className="grid gap-x-8 gap-y-5 py-6 sm:grid-cols-2">
                                <div>
                                    <p className="text-sm text-gray-500">Breed</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">{animal.breed}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">{animal.location}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Weight</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">{animal.weight} KG</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Age</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">{animal.age} Years</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Category</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">{animal.category}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Type</p>
                                    <p className="mt-1 text-base font-semibold text-gray-900">{animal.type}</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-sm text-gray-500">Description</p>
                                <p className="mt-2 leading-7 text-gray-700">
                                    {animal.description}
                                </p>
                            </div>

                            <div className="mt-auto flex justify-end pt-8">
                                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                    <Link href={`/all-animals/${ID}/book`}>
                                        <Button className="w-full rounded-xl bg-green-700 px-6 text-white hover:bg-green-800 sm:w-auto">
                                            Buy Now
                                        </Button>
                                    </Link>
                                    <Link href="/all-animals">
                                        <Button className="w-full rounded-xl border border-green-700 bg-white px-6 text-green-700 hover:bg-green-50 sm:w-auto">
                                            Back to Animals
                                        </Button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnimalDetailsPage;
