import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateNote from "./components/Form/CreateNote";
import { NoteData, RawNote, Tag } from "./types";
import { useLocaleStorage } from "./useLocaleStorage";
import { v4 as uuidv4 } from "uuid";
import Layout from "./components/Layout";
import NoteDetail from "./components/NoteDetail";

function App() {
  const [notes, setNotes] = useLocaleStorage<RawNote[]>("notes", []);
  const [tags, setTags] = useLocaleStorage<Tag[]>("tags", []);

  const addNote = ({ tags, ...data }: NoteData) => {
    setNotes((prev) => {
      return [
        ...prev,
        {
          ...data,
          id: uuidv4(),
          //* ellemanın etiketleini don ve diziye aktar
          tagIds: tags.map((tag) => tag.id),
        },
      ];
    });
  };
  console.log(notes);
  const createTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage availableTags={tags} notes={notes} />}
        />
        <Route
          path="/new"
          element={
            <CreateNote
              onSubmit={addNote}
              createTag={createTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id" element={<Layout notes={notes} />}>
          <Route index element={<NoteDetail />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
