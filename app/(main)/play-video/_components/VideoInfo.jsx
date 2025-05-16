import { Button } from "@/components/ui/button";
import { ArrowLeft, DownloadIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function VideoInfo({ videoData }) {
  return (
    <div className="p-5 border rounded-xl">
      <Link href={"/dashboard"}>
        <h2 className="flex gap-2 items-center text-sm hover:text-gray-600">
          <ArrowLeft />
          Back to Dashboard
        </h2>
      </Link>
      <div className="flex flex-col gap-3">
        <h2 className="mt-5 text-sm font-bold">
          Project Name: {videoData?.title}
        </h2>
        <p className="text-gray-500 text-xs">Script: {videoData?.script}</p>
        <h2 className="text-xs">Video Style: {videoData?.videoStyle}</h2>

        <Button>
          <DownloadIcon /> Export & Download
        </Button>
      </div>
    </div>
  );
}

export default VideoInfo;
