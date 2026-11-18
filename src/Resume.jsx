import React from 'react';

export default function FilePreview() {
  const fileId = "1cNTqjqtLMLM3p4XWrbqQciMR5QgtkU_f";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
      {/* Header / Action Bar */}
      <div className=' border-black mt-8 mb-9 flex justify-around'>
          <h1 className='text-4xl font-bold'>Resume </h1>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className='bg-purple-500 text-white font-bold p-3 rounded'>
          Download
        </a>
      </div>

      {/* Preview Frame */}
      <div style={{ 
        width: '100%', 
        height: '500px', 
        borderRadius: '8px', 
        overflow: 'hidden'
      }}>
        <iframe
          src={previewUrl}
          width="100%"
          height="100%"
          style={{ border: 'none'}}
          allow="autoplay"
          title="Drive File Preview"
        />
      </div>
    </div>
  );
}