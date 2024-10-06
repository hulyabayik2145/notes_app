import React from "react";
import { Card, Stack, Badge } from "react-bootstrap";

const NoteCard = () => {
  return (
    <Card>
      <Card.Body>
        <Stack className="justify-content-center align-items-center">
          <span>title</span>
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
