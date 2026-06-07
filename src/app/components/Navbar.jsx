"use client"
// import React from 'react';
// import { Navbar } from "@heroui-pro/react";
import { Button } from "@heroui/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

                <Link href="/" className="text-2xl font-bold text-green-600">
                    QurbaniHat
                </Link>


                <div className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/"
                        className="font-medium text-gray-700 transition hover:text-green-600"
                    >
                        Home
                    </Link>

                    <Link
                        href="/all-animals"
                        className="font-medium text-gray-700 transition hover:text-green-600"
                    >
                        All Animals
                    </Link>
                </div>


                <div className="hidden items-center gap-4 md:flex">
                    <Link href="/auth/signin">
                        <Button className="rounded-lg bg-green-800">
                            Login
                        </Button>
                    </Link>

                    <Link href="/auth/signup">
                        <Button className="rounded-lg border-2 border-green-800 bg-white text-green-800">
                            Register
                        </Button>
                    </Link>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="border-t bg-white md:hidden">
                    <div className="flex flex-col gap-4 px-4 py-4">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="font-medium text-gray-700"
                        >
                            Home
                        </Link>

                        <Link
                            href="/all-animals"
                            onClick={() => setIsOpen(false)}
                            className="font-medium text-gray-700"
                        >
                            All Animals
                        </Link>

                        <Link
                            href="/auth/signin"
                            onClick={() => setIsOpen(false)}
                        >
                            <Button className="w-full rounded-lg bg-green-800">
                                Login
                            </Button>
                        </Link>

                        <Link
                            href="/auth/signup"
                            onClick={() => setIsOpen(false)}
                        >
                            <Button className="w-full rounded-lg border-2 border-green-800 bg-white text-green-800">
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );

};

export default Navbar;


{/* <div className="flex flex-wrap gap-3">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="danger-soft">Danger Soft</Button>
</div> */}