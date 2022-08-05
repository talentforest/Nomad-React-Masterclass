import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import {
  FaTrashAlt,
  FaCheckCircle,
  FaArrowCircleRight,
  FaListUl,
} from "react-icons/fa";

export default function ToDo({ text, category, id, field }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, field, category: name as Categories };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onDeleteClick = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <List>
      <ToDoContents>
        <div>{field}</div>
        <Buttons>
          {category !== Categories.DOING && (
            <button name={Categories.DOING} onClick={onClick}>
              <FaArrowCircleRight />
              <span>Doing</span>
            </button>
          )}
          {category !== Categories.TO_DO && (
            <button name={Categories.TO_DO} onClick={onClick}>
              <FaListUl />
              <span>To Do</span>
            </button>
          )}
          {category !== Categories.DONE && (
            <button name={Categories.DONE} onClick={onClick}>
              <FaCheckCircle />
              <span>Done</span>
            </button>
          )}
          <button name="delete" onClick={onDeleteClick}>
            <FaTrashAlt />
            <span>delete</span>
          </button>
        </Buttons>
      </ToDoContents>
      <p>{text}</p>
    </List>
  );
}

const List = styled.li`
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin-top: 8px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boxColor};
  border: 1px solid #cecece;
  font-size: 14px;
  > p {
    width: 100%;
    display: inline-block;
    word-wrap: break-word;
    padding: 0 3px;
  }
`;

const ToDoContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  > div:first-child {
    display: flex;
    align-items: center;
    padding: 0 5px;
    width: fit-content;
    height: 30px;
    border-radius: 6px;
    color: ${(props) => props.theme.textColor};
    font-size: 13px;
    border: 1px solid #c7c7c7;
    background-color: #fff;
    margin-bottom: 8px;
  }
`;

const Buttons = styled.div`
  display: flex;
  min-width: 135px;
  gap: 0 3px;
  > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme.textColor};
    font-size: 10px;
    cursor: pointer;
    gap: 0 3px;
    svg {
      width: 14px;
      height: 14px;
      margin-bottom: 2px;
    }
  }
`;
