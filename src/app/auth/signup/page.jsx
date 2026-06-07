"use client";

import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { User } from "lucide-react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleRegisterForm = (data) => {
        // console.log(data);
    };

    // console.log(watch("name"));
    // console.log(watch("email"));
    // console.log(watch("photoUrl"));
    // console.log(watch("password"));

    return (
        <div className="min-h-[80vh] bg-linear-to-br from-green-50 to-white flex items-center justify-center px-4">

            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <User className="h-8 w-8 text-green-700" />
                    </div>

                    <h1 className="mt-4 text-3xl font-bold">
                        Create Account
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Join Qurbani Hat and get started
                    </p>
                </div>

                {/* Form */}
                <form
                    className="mt-8 space-y-5 flex flex-col "
                    onSubmit={handleSubmit(handleRegisterForm)}
                >

                    <Input
                        type="text"
                        className="rounded-lg "
                        {...register("name", { required: "name is required" })}
                        placeholder="Enter your name"
                    />
                    {
                        errors.name && <p className="text-red-500"> {errors.name.message}</p>
                    }

                    <Input
                        className="rounded-lg "
                        {...register("email", { required: "please enter correct email" })}
                        type="email"
                        placeholder="Enter your email"
                    />
                    {
                        errors.email && <p className="text-red-500"> {errors.email.message}</p>
                    }

                    <Input
                        type="text"
                        className="rounded-lg "
                        {...register("photoUrl", { required: "photo url is required" })}
                        placeholder="Photo URL"
                    />
                    {
                        errors.photoUrl && <p className="text-red-500"> {errors.photoUrl.message}</p>
                    }

                    <Input className="rounded-lg "
                        {...register("password", { required: "password is required" })}
                        type="password"
                        placeholder="Password"
                    />
                    {
                        errors.password && <p className="text-red-500"> {errors.password.message}</p>
                    }

                    <Button
                        type="submit"
                        className="w-full bg-green-700 text-white h-12 text-base font-semibold"
                    // radius="lg"
                    >
                        Register
                    </Button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200"></div>
                    <span className="text-sm text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>

                {/* Google */}
                <Button
                    variant="bordered"
                    className="w-full h-12"
                    radius="lg"
                >
                    Continue with Google
                </Button>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                        href="/auth/signin"
                        className="font-semibold text-green-700 hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default RegisterPage;
