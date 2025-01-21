'use client';

import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css'; // Import Quill styles
import { useEffect, useRef } from 'react';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const RichTextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const editorRef = useRef<HTMLDivElement>(null);

  // Auto-grow functionality
  useEffect(() => {
    const adjustHeight = () => {
      const editor = editorRef.current?.querySelector('.ql-editor') as HTMLElement;
      if (editor) {
        editor.style.height = 'auto'; // Reset height
        editor.style.height = `${editor.scrollHeight}px`; // Set to content height
      }
    };

    adjustHeight(); // Initial adjustment
    const editor = editorRef.current?.querySelector('.ql-editor') as HTMLElement;
    if (editor) {
      editor.addEventListener('input', adjustHeight);
    }

    return () => {
      if (editor) {
        editor.removeEventListener('input', adjustHeight);
      }
    };
  }, [value]);

  return (
    <div ref={editorRef} className="border rounded-md shadow-sm">
      <ReactQuill
        theme="snow"
        value={value || ''}
        onChange={onChange}
        placeholder="Write your description here..."
        className="ql-container"
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline'], // Text formatting
            [{ list: 'ordered' }, { list: 'bullet' }], // Lists
            [{ align: [] }], // Alignment
          ],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
