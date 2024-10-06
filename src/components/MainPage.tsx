import React from "react";
import { Stack, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import NoteCard from "./Form/NoteCard";

type MainProps = {
  availableTags: Tag[];
};

const MainPage = ({ availableTags }) => {
  return (
    <div className="container">
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Notlar</h1>
        <Link to="/new">
          <Button>Oluştur</Button>
        </Link>
      </Stack>
      {/* Filtreleme alanı */}
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <ReactSelect />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      {/* Notlar */}
      <Row xs={1} sm={20} lg={3} xl={4} className="g-3 mt-4">
        <Col>
          <NoteCard />
        </Col>
        <Col>
          <NoteCard />
        </Col>
        <Col>
          <NoteCard />
        </Col>
        <Col>
          <NoteCard />
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
