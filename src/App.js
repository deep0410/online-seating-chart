import "./App.css";
import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  background: white;
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Marck Script", cursive;
`;

const CenterWrapper = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Container = styled.ul`
  margin: 1rem 2rem;
  max-height: 315px;
  min-height: 315px;
  min-width: 150px;
  max-width: 150px;
  padding: 0;
  font-family: "Lato", sans-serif;
  border: 1px solid;
`;
const ListValue = styled.li`
  display: flex;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  margin: 0.5rem;
`;
const HeaderForList = styled.li`
  display: flex;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  margin-bottom: 0.5rem;
  justify-content: center;
  font-weight: bold;
  margin-top: 0.5rem;
`;

function App() {
  const [search, setSearch] = useState("");

  const tableData = [
    {
      name: "Table 1",
      people: [
        "Dinker",
        "Ila",
        "Arpit",
        "Deepaben",
        "Yogesh",
        "Nitaben",
        "Baku",
        "Nitaben usa",
      ],
    },
    {
      name: "Table 2",
      people: [
        "Nikita",
        "Ketankumar",
        "Jalak",
        "Sammer",
        "Smmer husband",
        "Yesha",
        "Yesha husband",
        "Yesha daughter",
        "deep",
        "rajvi",
      ],
    },
    {
      name: "Table 3",
      people: [
        "Manish",
        "Mansiben",
        "Urmil",
        "Falguniben",
        "Harshad",
        "Chayaben",
        "Joshi",
        "Joshi wife",
        "Joshi son 1",
        "Joshi son 2",
      ],
    },
    {
      name: "Table 4",
      people: [
        "Taral",
        "Kushal",
        "Devang",
        "Priyang",
        "sonu",
        "Ankir daughter",
        "Nilesh Daughter",
        "Mansi pandya",
      ],
    },
    {
      name: "Table 5",
      people: [
        "Pragnesh doshi",
        "Priyaben",
        "Bela",
        "Manish panya",
        "Nilesh  ",
        "Nilesh wife",
        "Ankir   ",
        "Nishaben",
      ],
    },
    {
      name: "Table 6",
      people: [
        "Kushal",
        "deep",
        "Hemish",
        "Jarnaben",
        "Purvish",
        "Nishil",
        "Kena",
        "Yesha",
        "Hurse",
      ],
    },
    {
      name: "Table 7",
      people: ["Brijeshbhai", "Jinal", "Brijeshbhai son"],
    },
    {
      name: "Table 8",
      people: [
        "jignesh",
        "reena",
        "jignesh daughter 1",
        "jignesh daughter 2",
        "umang",
        "Shitalben",
        "umang son 1",
        "umang son 2",
      ],
    },
    {
      name: "Table 8",
      people: [
        "Bebu",
        "Valay",
        "Valay father ",
        "Valay mother",
        "Shreyeshbhai",
        "Dakshaben",
        "Khushi",
      ],
    },
  ];

  const searchedTables = tableData.filter((table) => {
    if (!search) return true;
    let personExistsInTable = false;
    table.people.forEach((person) => {
      if (person.includes(search)) {
        personExistsInTable = true;
      }
    });
    return personExistsInTable;
  });

  const finalTable = searchedTables.map((table) => {
    return {
      name: table.name,
      people: search
        ? table.people.filter((person) => person.includes(search))
        : table.people,
    };
  });

  return (
    <Wrapper>
      <Header>Welcome to Deep and Keerti's wedding</Header>
      <CenterWrapper>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={"Search your name here"}
        />
      </CenterWrapper>
      <FlexWrapper>
        {finalTable &&
          finalTable.map((table) => (
            <Container>
              <HeaderForList>{table.name}</HeaderForList>
              {table.people &&
                table.people.map((person) => <ListValue>{person}</ListValue>)}
            </Container>
          ))}
      </FlexWrapper>
    </Wrapper>
  );
}

export default App;
