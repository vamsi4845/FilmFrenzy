import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  } else {
    redirect("/home");
  }
  return (
    <div>
      <h1>{session?.user?.name}</h1>
    </div>
  );
};
export default Home;
