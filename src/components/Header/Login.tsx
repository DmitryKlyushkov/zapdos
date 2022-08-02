import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FaGoogle, FaYandex } from "react-icons/fa";

const Login = () => {
  const { data, status } = useSession();
  const [showModal, setShowModal] = useState(false);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!data) {
    return (
      <>
        <button
          className="font-bold uppercase text-sm px-6 py-3 rounded shadow border-gray-800 border-2"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Sign In
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-end p-4">
                    <button
                      className="text-3xl text-red-600 font-bold"
                      onClick={() => setShowModal(false)}
                    >
                      x
                    </button>
                  </div>
                  {/*body*/}
                  <div className="p-6 w-[400px] flex flex-col gap-y-2">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 p-3 border-2 border-gray-500"
                      onClick={() => signIn("google")}
                    >
                      <FaGoogle size="1rem" color="red" />
                      Sign up with Google
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 p-3 border-2 border-gray-500"
                      onClick={() => signIn("yandex")}
                    >
                      <FaYandex size="1rem" color="red" />
                      Sign up with Yandex
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }

  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="text-2xl border-2 border-slate-800 rounded-lg p-2"
        onClick={() => signOut()}
      >
        Sing out
      </button>
      <Image
        src={data.user?.image || ""}
        width={50}
        height={50}
        alt="user logo"
        className="rounded-full"
      />
    </div>
  );
};

export default Login;
