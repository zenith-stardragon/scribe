import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const modules = {
  toolbar: [
    [{ 'font': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'align': [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const TextEditor = ({ registerEditor }) => {
  const handleEditorChange = (content, delta, source, editor) => {
    registerEditor(editor);
  };

  return (
    <ReactQuill
      className="text-editor bl bl-padding-4"
      theme="snow"
      modules={modules}
      onChange={handleEditorChange}
    />
  );
};

export default TextEditor;
