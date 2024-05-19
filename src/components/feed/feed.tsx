"use client";

import React, { useState } from "react";
import { FeedProps } from "@/utils/feed/types";

export const Feed: React.FC<FeedProps> = ({ data }) => {
  const [showFullText, setShowFullText] = useState<boolean>(false);
  const [amountComments, setAmountComments] = useState<number>(2);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="content w-full sm:w-3/4 lg:w-1/2 mx-0 md:mx-10 p-3">
      {data.map((item, index: number) => (
        <div
          key={index}
          className="content-border mt-2 mb-5 border-2 p-4 rounded-xl"
        >
          <img
            className="rounded-lg w-full h-96 sm:h-110"
            src={item.imageUri}
            alt="image"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="pt-4 flex justify-between">
            <p className="font-semibold">{item.title}</p>
            <p className="font-semibold">{item.author}</p>
          </div>
          <p className="font-light">{item.subTitle}</p>
          <div className="py-5 flex">
            <p>
              {showFullText ? item.content : item.content.slice(0, 150)}
              {item.content.length > 150 && !showFullText ? (
                <span
                  onClick={toggleText}
                  className="text-blue-500 cursor-pointer"
                >
                  {" Read more..."}
                </span>
              ) : (
                <span
                  onClick={toggleText}
                  className="text-blue-500 cursor-pointer"
                >
                  {" Read less..."}
                </span>
              )}
            </p>
          </div>
          <div className="py-5">
            {item.comments.map((element, idx: number) => (
              <div key={idx}>
                {idx < amountComments && (
                  <div className="pb-3">
                    <div className="flex justify-between">
                      <p>{element.text}</p>
                      <p className="text-sm">{element.author}</p>
                    </div>
                    <div className="pt-0 flex text-xs">
                      <p>Likes -</p>
                      <p className="pl-1">{element.likes}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {item.comments.length > 2 && amountComments < 10 && (
              <span
                className="text-blue-500 text-sm cursor-pointer"
                onClick={() => setAmountComments(10)}
              >
                {" See more comments"}
              </span>
            )}
            {amountComments >= 10 && (
              <span
                className="text-blue-500 text-sm cursor-pointer"
                onClick={() => setAmountComments(2)}
              >
                {" Less comments"}
              </span>
            )}
          </div>
          <div className="flex justify-between text-xs font-semibold">
            <p>Publish date</p>
            <p>{item.publishDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
