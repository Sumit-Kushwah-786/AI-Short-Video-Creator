"use client";
import Image from "next/image";
import React from "react";
import { options } from "./VideoStyle";

function Preview({ formData }) {
  const selectedVideoStyle =
    formData && options.find((item) => item?.name == formData?.videoStyle);
  return (
    <div className="relative">
      <h2 className="md-3 text-2xl">Preview</h2>
      <Image
        src={selectedVideoStyle?.image || "/preview.jpg"}
        alt={
          selectedVideoStyle?.name ||
          "Generating your video preview... \n Rendering video layout — almost there!"
        }
        width={1000}
        height={300}
        className="w-full h-[65vh] object-cover rounded-xl bg-white"
      />
      <h2
        className={`${formData?.caption?.style} absolute bottom-7 text-center w-full`}
      >
        {formData?.caption?.name}
      </h2>
    </div>
  );
}

export default Preview;
