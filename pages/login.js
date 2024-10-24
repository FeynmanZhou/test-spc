import Head from "next/head";
import Link from "next/link";
import Brand from "@/components/ui/Brand";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { GoogleIcon } from "@/components/Icons";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - HiTalker</title>
      </Head>
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-800">
          <div className="text-center">
            <Brand className="mx-auto w-32" />
            <div className="mt-5 space-y-2">
              <h1 className="text-2xl font-bold sm:text-3xl">Log in to your account</h1>
              <p className="">
                Don't have an account?{" "}
                <Link
                  href="/#pricing"
                  className="font-medium text-blue-500 hover:text-blue-600 duration-150"
                >
                  Get access
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={e => e.preventDefault()} className="mt-8 space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <Input
                type="email"
                required
                className="w-full mt-2 text-gray-300 bg-gray-100 focus:bg-gray-200 focus:border-gray-100"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <Input
                type="password"
                required
                className="w-full mt-2 text-gray-300 bg-gray-100 focus:bg-gray-200 focus:border-gray-100"
              />
            </div>
            <Button className="w-full text-gray-800 bg-blue-500 hover:bg-blue-300 ring-offset-2 focus:ring rounded-lg">
              Sign in
            </Button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-800 rounded-lg text-sm font-medium bg-gray-800/40 hover:bg-blue-500 ring-blue-300 focus:ring duration-150"
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
