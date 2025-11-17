import { useState } from 'react';
import axios from '../api';

export default function NoteCard({ note, onDelete, onUpdate }){
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const save = async () => {
    const res = await axios.put(`/notes/${note._id}`, { title, content });
    onUpdate(res.data);
    setEditing(false);
  }

  const remove = async () => {
    await axios.delete(`/notes/${note._id}`);
    onDelete(note._id);
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      {editing ? (
        <>
          <input className="w-full border rounded px-2 py-1 mb-2" value={title} onChange={e=>setTitle(e.target.value)} />
          <textarea className="w-full border rounded px-2 py-1 mb-2" rows="4" value={content} onChange={e=>setContent(e.target.value)} />
          <div className="flex gap-2 justify-end">
            <button onClick={()=>setEditing(false)} className="px-3 py-1 border rounded">Cancel</button>
            <button onClick={save} className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-medium text-gray-800 truncate">{note.title || 'Untitled'}</h3>
          <p className="text-gray-700 mt-2">{note.content}</p>
          <div className="flex gap-2 justify-end mt-4">
            <button onClick={()=>setEditing(true)} className="px-3 py-1 bg-orange-500 text-white rounded">Edit</button>
            <button onClick={remove} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
          </div>
        </>
      )}
    </div>
  )
}
