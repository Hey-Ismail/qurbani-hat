"use client";

import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";

const SignInPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const handleSignInForm = (data) => {
        // console.log(data);
    }

    // console.log(watch('email'));
    // console.log(watch('password'));

    return (
        <div className="flex min-h-[80vh] items-center justify-center bg-linear-to-br from-green-50 to-white px-4">

            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

                <h1 className="mb-2 text-center text-3xl font-bold">
                    Login
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Welcome back to <span className="text-green-700">Qurbani Hat</span>
                </p>

                <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(handleSignInForm)}>

                    <Input className="rounded-lg "
                        {...register("email", { required: "please enter correct email" })}
                        type="email"
                        placeholder="Enter your email"

                    />
                    {errors.email && <p className="text-red-500"> {errors.email.message}</p>}
                    <Input className="rounded-lg "
                        {...register("password", { required: "password is required" })}
                        type="password"
                        placeholder="Enter your password"
                    // startContent={<Lock size={18} />}
                    // radius="lg"
                    />
                    {
                        errors.password && <p className="text-red-500"> {errors.password.message}</p>
                    }

                    <Button
                        type="submit"
                        className="h-12 w-full bg-green-700 text-white"
                        radius="lg"
                    >
                        Login
                    </Button>
                </form>

                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200"></div>
                    <span className="text-sm text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>

                <Button
                    variant="bordered"
                    className="h-12 w-full"
                    radius="lg"
                >
                    Continue with<span className="hover:text-green-700">Google</span>
                </Button>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Dont have an account?{" "}
                    <Link
                        href="/auth/signup"
                        className="font-semibold text-green-700"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </div >
    );
}

export default SignInPage;