import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';
import styled from 'styled-components';

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { 
    register, 
    handleSubmit, 
    setValue,
  } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category }, 
      ...oldToDos,
    ])
    setValue("toDo", "");
  };
  
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do.",
        })}
        placeholder="Write a to do" 
      />
      <button>Add</button>
    </Form>
  );
}

const Form = styled.form`
  text-align: center;
`
