// import dns from 'node:dns'
// dns.setServers(["8.8.8.8","8.8.4.4"])

import { NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";
import { auth } from "./lib/auth";
import { headers } from "next/headers";


export async function proxy(request) {

  

   const session = await auth.api.getSession({
        headers: request.headers
    })

    console.log(session , 'session')
  

  if(session){
    return NextResponse.next()
  }
  else {
   
     return NextResponse.redirect(new URL('/login', request.url))
  }
 
}

export const config = {
  matcher: [ '/animals/:path+'],
}