import React from "react";
import GitHubCalendar from "react-github-calendar";
const Gitgraph = () => {
  return (
   
      <div className="">
        <h2 className="text-5xl mb-4 font-['Iowan_Old_Style',Georgia,serif]">GitHub Activity</h2>
        <div className="mt-10">
          <GitHubCalendar
            username="gauravsondhiya"
            transformData={(contributions) => contributions}
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            theme={{
              light: ["#7B3F32","#7B3F32"],
            }}
          />
        </div>
      </div>
    
  );
};

export default Gitgraph;
