import React, {Fragment, useState} from "react";
import {ExclamationIcon, XIcon} from "@heroicons/react/outline";

import {Transition, Dialog} from '@headlessui/react';

interface Props{

 title?: string;
 description?: string;
 okText?: string;
 cancelText?: string;

}

const ComfirmationDialog: React.FC<Props>=({title, description, okText, cancelText})=>{
    const [isDialogBoxOpen, setIsDialogBoxOpen]= useState(false);
    
    return(
        <div className="p-5 bg-gray-200">

            <button  className="focus:outline-none m-auto flex border-2 rounded-md bg-red-100 border-red-500 p-4" onClick={ () => setIsDialogBoxOpen(true)}>
                To Confirm
            </button>


           <Transition.Root show={isDialogBoxOpen} as={Fragment}
      
> 
    <Dialog open={isDialogBoxOpen} onClose={setIsDialogBoxOpen}>
      <Transition.Child as={Fragment}
      enter="ease-in-out transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-50"
      entered="opacity-50"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-50"
      leaveTo="opacity-0"
        >
    <Dialog.Overlay className="fixed inset-0 z-10 bg-black  "></Dialog.Overlay>
    </Transition.Child>

    <Transition.Child as={Fragment}
      enter=" transition-transform duration-300"
      enterFrom="translate-y-full"
      enterTo="translate-y-0"
      leave="transition-transform duration-300"
      leaveFrom="translate-x-0"
      leaveTo="translate-y-full"> 
    
    <div className=" w-80 h-80 rounded-md m-auto bg-white fixed top-0 bottom-0 right-0 left-0 z-40 transform">
        <div className=" relative">
    <button className=" fixed right-2 top-2 focus:outline-none focus:opacity-50" onClick={ () => setIsDialogBoxOpen(false)} ><XIcon className="w-4 h-4" /></button>
         <div className="flex flex-col items-center">
         <ExclamationIcon className="text-red-600 w-20 h-20 m-auto pt-4" />
         <h1 className="text-gray-500 pt-4 text-2xl">{title}</h1>
        {description && <p className="text-center text-sm text-gray-400 p-2">{description}</p>}
        <div className="flex flex-row p-4">
            <button onClick={ () => setIsDialogBoxOpen(false)} className="bg-gray-400 p-2 rounded-md text-center text-white w-20 focus:outline-none focus:opacity-50">{cancelText}</button>
            <button onClick={ () => setIsDialogBoxOpen(false)} className="bg-red-500 p-2 rounded-md text-center text-white w-20 ml-3 focus:outline-none focus:opacity-50">{okText}</button>
        </div>
        </div>
        </div>
        </div>
  </Transition.Child>
  </Dialog>
 
  </Transition.Root>

        </div>
    );
};
ComfirmationDialog.defaultProps={
  
    title: "Are you sure?",
    okText: "OK",
    cancelText: "Cancel",
}

export default ComfirmationDialog;