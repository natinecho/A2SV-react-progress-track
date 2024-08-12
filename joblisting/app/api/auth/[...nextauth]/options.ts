import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn, signOut } from "next-auth/react";

const userRole = "user"; 

interface credentialsValue{
    email:string,
    password:string
}


export const Options = {
    providers: [
        GoogleProvider({
            profile(profile) {
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),

        CredentialsProvider({
            name: "credentials",
            credentials: {
              email: { type: "email", },
              password: { type: "password" }
            },
            async authorize(credentials:{email:string , password:string},req) {
                    const res =  await fetch("https://akil-backend.onrender.com/login",{
                    method:"POST",
                    body:JSON.stringify(credentials),
                    headers:{
                        "Content-Type": "application/json",
                    }})
                    const user =  await res.json()

                console.log(res)
                if(res.ok && user){
                    user.role = "varified"
                    return user
                }
                return null
            }
          })
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT, user?: any }) {
            if (user) {
                token.role = user.data.role;
                token.id = user.data.id;
                token.name = user.data.name;
                token.accessToken = user.data.accessToken
            }
            return token;
        },
        async session({ session, token }: { session: Session, token: JWT }) {
            if (session?.user) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.accessToken = token.accessToken;
            }
            return session;
        }
    },

    pages:{
        signIn:"/singIn",
    }

};
