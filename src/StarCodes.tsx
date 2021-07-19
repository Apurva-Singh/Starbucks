import React from "react";

import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const StarCodes: React.FC<Props> = (props) => {

    const {
        handleSubmit,
        getFieldProps,
        touched,
        errors,
        // isValid,
      } = useFormik({
        initialValues: {
            starcodes: "",
       
        },
        validationSchema: yup.object().shape({
          starcodes: yup.string().required(),
        }),
    
        onSubmit: (data) => {
          console.log("form submitting", data);
          setTimeout(() => {
            console.log("submitted successfully");
        
          }, 2000);
        },
      });
    

  return (
    <div className=" flex flex-col  md:w-96 px-2 md:m-auto relative">
      <h1 className="font-semibold text-lg py-8">Star Codes</h1>
      <p>
        Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
        add Stars to your account.
      </p>

<form className="mt-6" action="" method="POST"
onSubmit={handleSubmit}
>
            <div className="mt-10 relative">
              <input 
               {...getFieldProps("starcodes")}
              id="starcodes" type="text" name="starcodes" 
              className="{ peer h-10 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:placeholder-transparent placeholder-gray-50 focus:border-primary-300 }"
              placeholder=" starcodes" />
              <label htmlFor="starcodes" className="absolute left-1 -top-4.5 bg-white text-gray-600 text-sm transition-all placeholder-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary-300 peer-focus:text-sm">Enter your star code</label>
            </div>
            {touched.starcodes && (
                <div className=" text-red-600 text-sm px-4"> {errors.starcodes}</div>
              )}
             <button className="absolute right-0 rounded-full border-2 text-center border-black mt-3 text-sm text-black px-4  py-2">Submit</button>

          </form>
          <p className="text-sm mt-20 ">Have a receipt but don't have a code?</p>
          <p className="text-sm">Go to <span className="text-primary-300 focus:outline-none underline text-sm py-2">starbucks-stars.com</span> to upload your receipt and collect your Stars.</p>
          <div className="my-20">
          <h2 className="text-lg font-semibold">Questions?</h2>
          <p className="text-sm pt-4">We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <span className="text-primary-300 focus:outline-none underline" >right over here</span>
          </p>
          </div>
    </div>
  );
};
StarCodes.defaultProps = {};

export default StarCodes;
