import "server-only";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export const getServerSession = async () => {
    const requestHeaders = await headers();

    return auth.api.getSession({
        headers: requestHeaders,
    });
};
