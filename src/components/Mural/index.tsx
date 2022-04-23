import {
  ButtonSubmit,
  Container,
  Description,
  FormMural,
  Input,
  Label,
  MuralMessages,
  TextArea,
  Title,
  MuralContainer
} from "./style";
import { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import axios from "../../configs/axios";

interface IMural {
  id?: string;
  title: string;
  description: string;
}

interface FormsElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
}

interface MuralForm extends HTMLFormElement {
  readonly elements: FormsElements;
}

export function Mural() {
  const [api, setApi] = useState<IMural[]>([]);

  useEffect(() => {
    async function getApi() {
      try {
        const response: AxiosResponse<IMural[]> = await axios.get("/all");
        setApi(response.data);
      } catch (err: unknown | any) {
        if (err.response && err.response.status) {
          console.log(err.response.status);
        }
      }
    }

    getApi();
  });

  const handleSubmit = (e: React.FormEvent<MuralForm>) => {
    try {
      e.preventDefault();
      const { description, title } = e.currentTarget.elements;
      axios.post("/new", {
        title: title.value,
        description: description.value,
      } as IMural);

      title.value = "";
      description.value = "";
    } catch (err: unknown | any) {
      if (err.response && err.response.status) {
        console.log(err.response.status);
      }
    }
  };

  return (
    <Container>
      <FormMural onSubmit={handleSubmit}>
        <Label htmlFor="title">Título:</Label>
        <Input type="text" id="title" name="title" />
        <Label htmlFor="description">Description:</Label>
        <TextArea id="description" name="description" />
        <ButtonSubmit type="submit"> Adicionar Post</ButtonSubmit>
      </FormMural>
      <MuralContainer>
        <Title>Mural de Avisos</Title>
        {api.map((post, idx) => (
          <MuralMessages key={idx}>
            <Title>{post.title}</Title>
            <Description>{post.description}</Description>
          </MuralMessages>
        ))}
      </MuralContainer>
    </Container>
  );
}
