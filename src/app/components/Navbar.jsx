"use client"

import { Button } from "@heroui/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [isOpen, setIsOpen] = useState(false);
    const userName = user?.name || user?.email?.split("@")[0] || "User";
    const userInitial = userName.charAt(0).toUpperCase();

    const handleLogout = async () => {
        await authClient.signOut();
        setIsOpen(false);
    };

    const userPreview = (
        <div className="flex items-center gap-3">
            {user?.image ? (
                <Image
                    src={user.image}
                    alt={userName}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-green-100"
                />
            ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-800 ring-2 ring-green-100">
                    {userInitial}
                </div>
            )}
            <div className="flex flex-col leading-tight">
                <span className="font-semibold text-gray-900">{userName}</span>
            </div>
        </div>
    );

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
                    {user ? (
                        <>
                            {userPreview}
                            <Button
                                onClick={handleLogout}
                                className="rounded-lg border-2 border-red-200 bg-white text-red-600 hover:bg-red-600 hover:text-white  hover:border-white"
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
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

                        {user ? (
                            <>
                                <div className="rounded-xl border border-green-100 bg-green-50 px-3 py-3">
                                    {userPreview}
                                </div>
                                <Button
                                    onClick={handleLogout}
                                    className="w-full rounded-lg border-2 border-red-200 bg-white text-red-600"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );

};

export default Navbar;


