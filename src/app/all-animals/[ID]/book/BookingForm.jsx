"use client";

import { Button, Input, TextArea } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, Zoom } from "react-toastify";

const BookingForm = ({ animal, defaultName, defaultEmail }) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: defaultName,
            email: defaultEmail,
            phone: "",
            address: "",
        },
    });

    const handleBooking = async () => {
        toast.success(`Booking successful for ${animal.name}`, {
            position: "top-center",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
        });

        await new Promise((resolve) => setTimeout(resolve, 1200));
        router.push(`/all-animals/${animal.id}`);
        router.refresh();
    };

    return (
        <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
            <div className="rounded-[28px] border border-green-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="border-b border-gray-100 pb-6">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-700">
                        Booking Form
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-gray-900">
                        Book {animal.name}
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Fill in your details to confirm your interest in this animal.
                    </p>
                </div>

                <form
                    className="mt-8 flex flex-col gap-5"
                    onSubmit={handleSubmit(handleBooking)}
                >
                    <Input
                        {...register("name", { required: "name is required" })}
                        label="Name"
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <Input
                        {...register("email", { required: "email is required" })}
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <Input
                        {...register("phone", { required: "phone is required" })}
                        label="Phone"
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

                    <TextArea
                        {...register("address", { required: "address is required" })}
                        label="Address"
                        minRows={4}
                        placeholder="Enter your address"
                    />
                    {errors.address && <p className="text-red-500">{errors.address.message}</p>}

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            className="w-full rounded-xl bg-green-700 text-white hover:bg-green-800 sm:w-auto"
                        >
                            Confirm Booking
                        </Button>

                        <Button
                            type="button"
                            className="w-full rounded-xl border border-green-700 bg-white text-green-700 hover:bg-green-50 sm:w-auto"
                            onClick={() => router.push(`/all-animals/${animal.id}`)}
                        >
                            Back to Details
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
