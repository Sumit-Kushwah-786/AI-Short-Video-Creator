"use client";
import React, { useEffect } from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

function RemotionComposition({ videoData, setDurationInFrame }) {
  const captions = videoData?.captionJson;
  const { fps } = useVideoConfig();
  const imageList = videoData?.images;
  const frame = useCurrentFrame();
  console.log("imageList", imageList);
  console.log("videoData", videoData);
  useEffect(() => {
    videoData && getDurationFrame();
  }, [videoData]);

  const getDurationFrame = () => {
    const totalDuration = captions[captions?.length - 1]?.end * fps;
    setDurationInFrame(totalDuration);
    return totalDuration;
  };

  const getCurrentCaption = () => {
    const currentTime = frame / fps;
    const currentCaption = captions?.find(
      (item) => currentTime >= item?.start && currentTime <= item?.end
    );

    return currentCaption ? currentCaption?.word : "";
  };

  return (
    <div>
      <AbsoluteFill>
        {imageList?.map((image, index) => {
          const startTime = (index * getDurationFrame()) / imageList?.length;
          const duration = getDurationFrame();

          console.log("image", image);

          const scale = (index) =>
            interpolate(
              frame,
              [startTime, startTime + duration / 2, startTime + duration],
              index % 2 == 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );
          return (
            <Sequence
              key={index}
              from={startTime}
              durationInFrames={getDurationFrame()}
            >
              <AbsoluteFill>
                <Img
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: `scale(${scale(index)})`,
                  }}
                />
              </AbsoluteFill>
            </Sequence>
          );
        })}
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: "center",
          bottom: 50,
          height: 150,
          textAlign: "center",
          top: undefined,
        }}
      >
        <h1 className={videoData?.caption?.style}>{getCurrentCaption()}</h1>
      </AbsoluteFill>

      <AbsoluteFill>
        {videoData?.audioUrl && <Audio src={videoData?.audioUrl} />}
      </AbsoluteFill>
    </div>
  );
}

export default RemotionComposition;
