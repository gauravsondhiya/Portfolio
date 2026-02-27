import React from "react";
import { Timeline } from "@/components/ui/timeline";
import linkederp from './assets/linkederp.png'
import reckit from './assets/reckit.png'
import tp from './assets/tp.png'
import adminpanel from './assets/adminpannel.jpg'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'

const Experience = () => {
  const data = [
    {
      title: "July 2024 - April 2026",
      content: (
        <div>
          <p className="mb-8 text-3xl font-bold  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-red-500 to-pink-500 ">
            Pursuing MCA(Master of Computer Application) from RGPV
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={project1}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={project2}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2022 - Jan 2024",
      content: (
        <div>
          <p className="mb-8 text-3xl font-bold  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-red-500 to-pink-500 ">
            Associate Software Developer, Linked ERP Bangalore
          </p>
          <p className="mb-8 text-xl font-normal text-neutral-800  dark:text-neutral-200">
            • Developed interactive dashboards that automated manual tracking,
            cutting processing time by 25%.
            <br /> • Created 50+ frontend modules across 5 SLAs using React and
            Tailwind.
            <br />• Standardizing UI components and reducing dev time by 20%.
            <br /> • Enhanced SLA monitoring dashboards for real-time
            operational visibility, improving efficiency by 15%.
            <br /> • Built and maintained Next.js + Node.js applications
            integrated with Oracle ERP for warehouse and manufacturing
            workflows.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={linkederp}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={reckit}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={adminpanel}
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2020 - Oct 2021",
      content: (
        <div>
          <p className="mb-8 text-3xl font-bold  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-red-500 to-pink-500 ">
            Technical Support Associate, Teleperformance Gurugram
          </p>
          <p className="mb-8 text-xl font-normal text-neutral-800  dark:text-neutral-200">
            • Built and maintained internal web tools using React.js, Node.js,
            and MongoDB to automate client workflows.
            <br /> • Developed RESTful APIs and integrated third-party services,
            reducing manual data handling by 25%. <br />• Created responsive
            dashboards with React and Tailwind CSS, improving agent productivity
            and reporting accuracy.
            <br /> • Automated repetitive business tasks cutting process time by
            20%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={tp}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
