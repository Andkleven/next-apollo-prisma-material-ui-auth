import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

import { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.PROVIDER_GITHUB_ID,
      clientSecret: process.env.PROVIDER_GITHUB_SECRET,
    }),
    // Providers.Email({
    //   server: {
    //     host: process.env.PROVIDER_SMTP_HOST,
    //     port: Number(process.env.PROVIDER_SMTP_PORT),
    //     auth: {
    //       user: process.env.PROVIDER_SMTP_USER,
    //       pass: process.env.PROVIDER_SMTP_PASSWORD,
    //     },
    //   },
    //   from: process.env.PROVIDER_SMTP_FROM,
    // }),
  ],
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
  secret: process.env.AUTH_SECRET,
};
