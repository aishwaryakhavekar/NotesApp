import { useState } from 'react';
import axios from '../api';

export default function CreateNote({ onCreate }){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submit = async () => {
    if(!title && !content) return;
    const res = await axios.post('/notes', { title, content });
    onCreate(res.data);
    setTitle(''); setContent('');
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <input className="w-full border rounded px-3 py-2 mb-3" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="w-full border rounded px-3 py-2 mb-3" rows="4" placeholder="Write a note..." value={content} onChange={e=>setContent(e.target.value)} />
      <div className="flex justify-end">
        <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Create</button>
      </div>
    </div>
  )
}
