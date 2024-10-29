import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '@/components/ui/button';
import { useArticles } from './ArticleContext/articleContext';
import '../../src/Components/Preview.css';

const MyEditor = ({ displayWrite, setDisplayWrite }) => {
  const [editorHtml, setEditorHtml] = useState('');
  const { yourArticles, setYourArticles } = useArticles();

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  // Handle Publish
  const handlePublish = () => {
    const newArticle = {
      id: Date.now(),
      content: editorHtml,
    };
    const updatedArticles = [...yourArticles, newArticle];
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    setYourArticles(updatedArticles);
    setEditorHtml('');
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ font: ['sans-serif', 'serif', 'monospace'] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image', 'video'],
      [{ align: [] }],
      ['clean'],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  };

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        placeholder='Write your article here...'
        className='mb-4'
      />

      <div className='preview'>
        <h3 className='font-bold text-lg mb-2'>Preview:</h3>
        <div
          dangerouslySetInnerHTML={{ __html: editorHtml }}
          className='preview p-4 border rounded bg-gray-100 overflow-auto h-64'
          style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
        />
      </div>

      <Button
        className='ml-3 my-3 bg-red-600 text-white hover:bg-red-700'
        onClick={() => setDisplayWrite(!displayWrite)}
      >
        Close and Cancel
      </Button>

      {editorHtml.length > 0 && (
        <Button className='ml-4 bg-blue-600' onClick={handlePublish}>
          Publish
        </Button>
      )}
    </div>
  );
};

export default MyEditor;
