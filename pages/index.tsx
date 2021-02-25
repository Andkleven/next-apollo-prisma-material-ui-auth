import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

const IndexPage = () => {
  const [session, loading] = useSession();
  if (loading) {
    return (
      <div className="flex justify-center mt-8 text-center">
        <div className="flex-auto">
          <div className="text-lg mb-2">Loading...</div>
        </div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="flex justify-center mt-8 text-center">
        <div className="flex-auto">
          <Image
            // @ts-ignore
            src={session.user.image}
            // @ts-ignore
            alt={session.user.email ?? session.user.name}
            width="60"
            height="60"
            className="h-16 w-16 rounded-full mx-auto mb-2"
          />
          <div className="text-lg mb-2">
            Hello, {session.user.email ?? session.user.name}
          </div>
          <button className="btn-green" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center mt-8 text-center">
        <div className="flex-auto">
          <div className="text-lg mb-2">You are not logged in!</div>
          <button className="btn-green" onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      </div>
    );
  }
};

export default IndexPage;
