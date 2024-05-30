import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "../../../public/google.svg";
const Login = () => {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold">Log in</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Log in
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2 ">
        New to FilmFrenzy?{" "}
        <Link href="/sign-up" className="text-white hover:underline">
          Sign up now
        </Link>
      </div>
      <div className="flex justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Image src={GoogleIcon} alt="Google icon" className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
export default Login;
