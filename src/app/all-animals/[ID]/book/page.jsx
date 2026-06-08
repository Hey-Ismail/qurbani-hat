import { notFound, redirect } from "next/navigation";
import animalsData from "../../../data/db.json";
import { getServerSession } from "@/lib/session";
import BookingForm from "./BookingForm";

const BookingPage = async ({ params }) => {
    const session = await getServerSession();
    const { ID } = await params;
    const animal = animalsData.animals.find(
        ({ id }) => String(id) === ID
    );

    if (!session?.user) {
        redirect(`/auth/signin?redirect=/all-animals/${ID}/book`);
    }

    if (!animal) {
        notFound();
    }

    return (
        <section className="min-h-[80vh] bg-linear-to-br from-green-50 to-white">
            <BookingForm
                animal={animal}
                defaultName={session.user.name || ""}
                defaultEmail={session.user.email || ""}
            />
        </section>
    );
};

export default BookingPage;
