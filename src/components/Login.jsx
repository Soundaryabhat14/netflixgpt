import { useState } from "react";
import Header from "./Header";
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(false)

    const toggleSignForm = () =>{
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div >
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_small.jpg 959w"
          alt=""
          aria-hidden="true"
          class="default-ltr-iqcdef-cache-19j6xtr"
        ></img>
      </div>

     <form className="w-3/12 bg-black/70 p-10 rounded-lg  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <h1 className="font-bold text-3xl text-white mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
{!isSignInForm && (<input
    type="text"
    placeholder="Full Name"
    className="p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
  />)}
  <input
    type="text"
    placeholder="Email Address"
    className="p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
  />

  <input
    type="password"
    placeholder="Password"
    className="p-3 mb-4 w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
  />

  <button className="p-3 w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded mt-2 transition cursor-pointer">
    {isSignInForm ? "Sign In" : "Sign Up"}
  </button>
  <p className="text-white py-4 cursor-pointer" onClick={toggleSignForm}>{isSignInForm ? "New to Netflix?SignUp Now" : "Already registered? Sign In now.."}</p>

      </form>
    </div>
  );
};

export default Login;
