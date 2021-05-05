import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId:
        "295726433247-r6nval576epuudm3c2g03900i0qlgl02.apps.googleusercontent.com",
      clientSecret: "Jam1d-m11JCdl_MvsoB5mrIA",
    }),
  ],
});
