import React from "react";
import GitHubCalendar from "react-github-calendar";
const Gitgraph = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold mb-4">GitHub Activity</h2>
        <div className="flex justify-center">
          <GitHubCalendar
            username="gauravsondhiya"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            color="#4ade80" // light green
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <img
          src="https://github-readme-stats.vercel.app/api?username=gauravsondhiya&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=gauravsondhiya&theme=radical"
          alt="GitHub Streak"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Gitgraph;
