import { useState } from "react";
import styled from "styled-components";
import checkName from "./checkName.jsx";

const Span = styled.span`
  text-align: center;
  padding-top: 7px;
  width: 70px;
  height: 70px;
  background-color: #14532d;
  margin-right: 2px;
  display: inline-block;
`;

const UserInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  padding: 4px;
  background-color: #14532d;
  border-radius: 10px;
  &:hover {
    background-color: #17723c;
  }
`;

function Breakify() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameResult, setFirstNameResult] = useState([]);
  const [lastNameResult, setLastNameResult] = useState([]);

  return (
    <div className="flex flex-col items-center mt-32 w-full">
      <div className="text-5xl">
        <h3>
          {firstNameResult[0] && <span>{firstNameResult[0]}</span>}
          {firstNameResult[1] && <Span>{firstNameResult[1]}</Span>}
          {firstNameResult[2] && <span>{firstNameResult[2]}</span>}
        </h3>
        <h3 className="ml-48 my-9">
          {lastNameResult[0] && <span>{lastNameResult[0]}</span>}
          {lastNameResult[1] && <Span>{lastNameResult[1]}</Span>}
          {lastNameResult[2] && <span>{lastNameResult[2]}</span>}
        </h3>
      </div>
      <UserInput>
        <div className="rounded-sm mx-auto">
          <label htmlFor="firstName" className="mr-3">
            First Name
          </label>
          <input
            className="text-black p-1  rounded-md"
            type="text"
            name="FirstName"
            id="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="rounded-sm mx-auto">
          <label htmlFor="lastName" className="mr-3">
            Last Name
          </label>
          <input
            className="text-black p-1 rounded-md"
            type="text"
            name="LastName"
            id="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>{" "}
        <Button
          onClick={() => {
            checkName(firstName, setFirstNameResult);
            checkName(lastName, setLastNameResult);
          }}
        >
          Breakify
        </Button>
      </UserInput>
    </div>
  );
}

export default Breakify;
