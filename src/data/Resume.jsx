import React from 'react';

export default function FilePreview() {
  
  // https://drive.google.com/file/d/1cNTqjqtLMLM3p4XWrbqQciMR5QgtkU_f/view?usp=drive_link
  // link divided into like this 
 
  const fileId = "1cNTqjqtLMLM3p4XWrbqQciMR5QgtkU_f";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className=" bg-[#F3EFE7] m-auto  h-screen p-5">
      {/* Header / Action Bar */}
      
      <div className=' border-black mt-8 mb-9 flex justify-around'>
          <h1 className="text-5xl font-['Iowan_Old_Style',Georgia,serif] ">Resume </h1>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className='bg-[#7B3F32]  text-white font-bold p-3 rounded'>
          Download
        </a>
      </div>
       <hr />

      {/* Preview Frame */}
      <div className='bg-[#F3EFE7] m-auto mt-15 h-[500px] max-w-[800px] 
       rounded overflow-hidden'>
        <iframe
          src={previewUrl}
          width="100%"
          height="100%"
          allow="autoplay"
          title="Drive File Preview"
          className='bg-[#F3EFE7]'
        />
      </div>
    </div>
  );
}