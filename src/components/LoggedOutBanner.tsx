import { signIn, useSession } from "next-auth/react";

import { Container } from "./Container";

export const LoggedOutBanner = () => {
  const { data: session } = useSession();

  if (session) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full bg-primary p-4">
      <Container classNames="bg-transparent flex justify-between">
        <p className="text-white">Do not miss out</p>
        You are not logged in.
        <div>
          <button
            className="px-4 py-2 text-white shadow-md"
            onClick={() => void signIn()}
          >
            Login
          </button>
        </div>
      </Container>
    </div>
  );
};
