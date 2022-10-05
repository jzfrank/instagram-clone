import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        {/* <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://www.pngkey.com/png/detail/115-1158024_instagram-phone-1.png"
          alt="instagram-image"
        /> */}
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt=""
              />
              <p className="font-sm italic my-10 text-center">
                This app is created for learning purpose only.
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// faster than useEffect
export const getServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};

export default signin;
