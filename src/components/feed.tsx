import React from "react";

export default function Feed({ data }) {
  return (
    <div className="content w-full md:w-3/4 lg:w-1/2 mx-10 p-3">
      {data.map((item, index: number) => (
        <div
          key={index}
          className="content-border mt-2 mb-5 border-2 p-4 rounded-xl"
        >
          <img
            className="rounded-lg w-full h-110"
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
          <p>{item.subTitle}</p>
          <div className="py-5">
            <p className="">{item.content}</p>
          </div>
          <div className="py-5">
            {item.comments.map((element, idx) => (
              <>
                <div key={idx} className="flex justify-between">
                  <p>{element.text}</p>
                  <p className="text-sm">{element.author}</p>
                </div>
                <div className="pt-0 pb-5 flex text-xs">
                  <p>Likes -</p>
                  <p className="pl-1">{element.likes}</p>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-between text-xs font-semibold">
            <p>Publish date</p>
            <p>{item.publishDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
