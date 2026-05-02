import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function PATCH(req) {
  const session = await auth.api.getSession({ 
    headers: await headers() 
  });
  
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { name, image, phone } = await req.json();

  // Better Auth এর built-in update function
  await auth.api.updateUser({
    body: { name, image, phone },
    headers: await headers()
  });

  return Response.json({ success: true });
}