import { useEffect, useState } from "react";
import axios from "./api";
import CreateNote from "./components/CreateNote";
import NoteCard from "./components/NoteCard";

export default function App(){
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/notes').then(r => setNotes(r.data)).catch(e=>console.error(e));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-800">Notes</h1>
        </header>

        <CreateNote onCreate={n => setNotes([n, ...notes])} />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(n => (
            <NoteCard key={n._id} note={n}
              onDelete={id => setNotes(notes.filter(x=>x._id!==id))}
              onUpdate={u => setNotes(notes.map(x=> x._id===u._id ? u : x))}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
