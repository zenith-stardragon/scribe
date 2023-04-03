// components/Toolbar.js
import { useCallback } from 'react';
import { Packer, Document, Html } from 'docx';
import { saveAs } from 'file-saver';

const Toolbar = ({ editor }) => {
  const openDocx = async (event) => {
    const file = event.target.files[0];
    const fileContent = await file.text();
    editor.clipboard.dangerouslyPasteHTML(fileContent);
  };

  const saveDocx = async () => {
    const content = editor.root.innerHTML;
    const doc = new Document();
    const html = new Html(content);

    doc.addSection({
      children: [html],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'Document.docx');
    });
  };

  return (
    <div className="file-actions bl bl-space-x bl-padding-4">
      <input type="file" accept=".docx" onChange={openDocx} className="bl bl-button" />
      <button onClick={saveDocx} className="bl bl-button">Save</button>
    </div>
  );
};

export default Toolbar;


