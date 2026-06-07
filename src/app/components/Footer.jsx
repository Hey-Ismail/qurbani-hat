import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-10">

                <div className="flex justify-between  flex-col text-center lg:text-left lg:flex-row lg:space-y-0 space-y-3">

                    <div>
                        <h2 className="text-2xl font-bold text-green-300">
                            QurbaniHat
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-green-100">
                            Find healthy and verified livestock from trusted
                            sellers across Bangladesh.
                        </p>
                    </div>



                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-2 text-green-100">
                            <p>Dhaka, Bangladesh</p>
                            <p>support@qurbanihat.com</p>
                            <p>+880 1234-567890</p>
                        </div>

                        <div className="mt-4 flex gap-3 items-center justify-center lg:justify-start ">
                            <Link
                                href="#"
                                className="rounded-full bg-green-800 p-3 hover:bg-green-700"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full bg-green-800 p-3 hover:bg-green-700"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full bg-green-800 p-3 hover:bg-green-700"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="my-6 border-t border-green-800" />

                <div className="flex flex-col items-center justify-between gap-3 text-sm text-green-200 md:flex-row">
                    <p>
                        © 2026 QurbaniHat. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms & Conditions</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}