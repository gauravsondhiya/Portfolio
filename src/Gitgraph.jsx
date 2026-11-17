import React from "react";
import GitHubCalendar from "react-github-calendar";
const Gitgraph = () => {
  return (
    <div className="w-[90%] m-auto ">
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold mb-4">GitHub Activity</h2>
        <div className="flex justify-center">
          <GitHubCalendar
            username="gauravsondhiya"
            transformData={(contributions) => contributions || []}
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            color="#a855f7"
          />
        </div>
      </div>
    </div>
  );
};

export default Gitgraph;
