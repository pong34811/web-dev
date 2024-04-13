import { auth, authMiddleware } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";

export default authMiddleware({    
    publicRoutes: ['/']    
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};