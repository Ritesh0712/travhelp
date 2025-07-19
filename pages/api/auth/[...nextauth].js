                    import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (user && user.password === credentials.password) {
          return { id: user._id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  session: { jwt: true },
  secret: process.env.NEXTAUTH_SECRET,
});
