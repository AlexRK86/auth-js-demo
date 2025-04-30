import { signIn, auth } from "@/services/auth";
import Button from "@mui/material/Button";

export default async function Home() {
  const session = await auth();
  console.log("session", session);
  return (
    <div>
      <div>Next App</div>
      <form
        action={async () => {
          "use server";
          await signIn("keycloak");
        }}
      >
        <Button variant="contained" type="submit">
          Signin with Keycloak
        </Button>
      </form>
    </div>
  );
}
