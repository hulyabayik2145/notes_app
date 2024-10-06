import React from "react";
import { Card, Stack, Badge } from "react-bootstrap";
import { Note } from "../../types";
import { useNavigate } from "react-router-dom";

type CardType = {
  note: Note;
};

const NoteCard = ({ note }: CardType) => {
  const navigate = useNavigate();
  console.log(note);
  return (
    <Card onClick={() => navigate(`/${note.id}`)}>
      <Card.Body>
        <Stack className="justify-content-center align-items-center">
          <span>{note.title}</span>
          <Stack
            className="justify-content-center gap-1"
            direction="horizontal"
          >
            <Badge>label</Badge>
            <Badge>label</Badge>
            <Badge>label</Badge>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
