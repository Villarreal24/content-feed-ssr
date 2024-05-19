import React from "react";

export default function FeedSkeleton() {
  return (
    <div className="border border-gray-400 shadow rounded-xl p-4 w-full md:w-3/4 lg:w-1/2 mx-10">
      <div className="animate-pulse flex space-x-4">
        {/* <div className="rounded-full bg-slate-700 h-10 w-10"></div> */}
        <div className="flex-1 space-y-6 py-1">
          <div className="h-110 bg-slate-700 rounded-lg"></div>
          <div className="flex justify-between">
            <div className="h-3 w-32 bg-slate-700 rounded"></div>
            <div className="h-3 w-32 bg-slate-700 rounded"></div>
          </div>
          <div className="h-3 w-32 bg-slate-700 rounded"></div>
          <div
            className="h-2 bg-slate-700 rounded"
            style={{ marginBottom: "-10px" }}
          ></div>
          <div
            className="h-2 bg-slate-700 rounded"
            style={{ marginBottom: "-10px" }}
          ></div>
          <div className="h-2 bg-slate-700 rounded"></div>

          <div
            className="pt-5 flex justify-between"
            style={{ marginBottom: "-10px" }}
          >
            <div className="h-3 w-60 bg-slate-700 rounded"></div>
            <div className="h-3 w-24 bg-slate-700 rounded" />
          </div>
          <div className="h-2 w-32 bg-slate-700 rounded"></div>

          <div className="pt-5 flex justify-between">
            <div className="h-2 w-24 bg-slate-700 rounded" />
            <div className="h-2 w-24 bg-slate-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
