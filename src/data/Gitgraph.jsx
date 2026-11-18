import React from "react";
import GitHubCalendar from "react-github-calendar";
const Gitgraph = () => {
  return (
    <>
      <h2 className="text-5xl mb-4 font-['Iowan_Old_Style',Georgia,serif]">GitHub Activity</h2>
      <GitHubCalendar
        username="gauravsondhiya"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme="light"
        theme={{
          light: ["#ebedf0", "#d4a59a", "#b67e72", "#985c4f", "#7B3F32"],
          dark: ["#161b22", "#4a261e", "#5e3026", "#6d382c", "#7B3F32"],
        }}
      />

    </>

  );
};

export default Gitgraph;
