"use client";
import { useAuthContext } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { RefreshCcw } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function VideoList() {
  const [videoList, setVideoList] = useState([]);
  const convex = useConvex();
  const { user } = useAuthContext();

  useEffect(() => {
    user && GetUserVideoList();
  }, [user]);

  const GetUserVideoList = async () => {
    // All user videos
    const result = await convex.query(api.videoData.GetUserVideos, {
      uid: user?._id,
    });
    setVideoList(result);

    const isPendingVideo = result?.find((item) => item.status == "pending");
    isPendingVideo && GetPendingVideoStatus(isPendingVideo);
  };

  const GetPendingVideoStatus = (pendingVideo) => {
    const intervalId = setInterval(async () => {
      // Get Video Data by Id
      const result = await convex.query(api.videoData.GetVideoById, {
        videoId: pendingVideo?._id,
      });

      if (result?.status == "completed") {
        clearInterval(intervalId);
        console.log("Video Process Completed");

        GetUserVideoList();
      }
      console.log("Still Pending...");
    }, 5000);
  };

  return (
    <div>
      {videoList?.length == 0 ? (
        <div className="flex flex-col items-center justify-center mt-14 gap-5 p-5 border border-dashed rounded-xl py-16">
          <Image src={"/logo.svg"} alt="logo" width={60} height={60} />
          <h2 className="text-gray-400 text-lg">
            You dont have any video created! \n Create new one
          </h2>
          <Link href={"/create-new-video"}>
            <Button>+ Create New Video</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-4 mt-10">
          {videoList?.map((video, index) => (
            <Link key={index} href={"/play-video/" + video?._id}>
              <div className="relative">
                {video?.status == "completed" ? (
                  <Image
                    src={video?.images[0]}
                    alt={video?.title}
                    width={200}
                    height={200}
                    className="rounded-xl aspect-[2/3]"
                  />
                ) : (
                  <div className="rounded-xl aspect-[2/3] p-2 bg-slate-900 flex items-center justify-center gap-1">
                    <RefreshCcw className="animate-spin" />
                    <h2>Creating...</h2>
                  </div>
                )}
                <div className="absolute bottom-3 px-3 w-full">
                  <h2 className="text-sm font-bold">{video?.title}</h2>
                  <h2 className="text-xs">
                    {moment(video?._creationTime).fromNow()}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoList;
