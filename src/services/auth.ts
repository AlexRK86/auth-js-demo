import NextAuth from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
  callbacks: {
    async jwt({ token, account, profile }) {
      console.log("token", token);
      console.log("account", account);
      console.log("profile", profile);
      if (account) {
        token.accessToken = account.access_token;
        token.realmAccess = profile?.realm_access;
        token.resourceAccess = profile?.resource_access;
      }
      return token;
    },
    // async session({ session, token }) {
    //   // Передаем роли в session
    //   session.user.realmAccess = token.realmAccess;
    //   session.user.resourceAccess = token.resourceAccess;

    //   // Пример: вытащить конкретные роли
    //   const roles = [
    //     ...(token.realmAccess?.roles || []),
    //     ...(token.resourceAccess?.[process.env.KEYCLOAK_CLIENT_ID]?.roles || []),
    //   ];
    //   session.user.roles = roles;

    //   return session;
    // },
  },
});
