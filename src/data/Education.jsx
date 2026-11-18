
import { education_data } from "./Data";

export const Education = () => {
  
  return (
    <div className="p-5 sm:p-15 h-screen text-lg font-iowanoldstyle-bold bg-[#F3EFE7] ">
      
      <h1 className="text-5xl font-['Iowan_Old_Style',Georgia,serif]">Education</h1>
      <hr className="mt-10"/>

      <div className="p-5">
        {education_data.map((e, i) => (
          <div key={i} className="mt-5">
            <div className="flex justify-between ">
              <p className="text-xl font-semibold font-['Iowan_Old_Style',Georgia,serif]">{e.Degree}</p>
              <p>{e.year}</p>
            </div>
            <div>
              <p >{e.collage_name}</p>
              <p>{e.Grade}</p>
            </div>

           
         <hr className="border-gray-300 md:my-10" />
          
          </div>
        ))}
      </div>
    </div>
  );
};


