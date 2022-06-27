import "./App.css";
import styled from "@emotion/styled";
import { useState } from "react";
import CornerTl from "./corner-tl.png";

const theme1 = "#EAD2AC";
const theme2 = theme1;
const theme3 = theme1;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 1rem 0;
  color: ${theme2};
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Marck Script", cursive;
  color: ${theme2};
  margin-bottom: 0;
  text-align: center;
  font-size: 56px;
  margin: 0 1rem;
`;

const CenterWrapper = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  input {
    height: 32px;
    font-family: "Lato", sans-serif;
    border: 1px solid ${theme3};
    font-size: 1.2rem;
    padding: 0.75rem;
    border-radius: 8px;
    min-width: 400px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Container = styled.ul`
  margin: 1rem auto;
  margin-left: 1rem;
  max-height: 315px;
  min-width: 300px;
  max-width: 300px;
  padding: 0.5rem;
  font-family: "Lato", sans-serif;
  border: 2px solid #de9b72;
  border-radius: 16px;
  position: relative;
  padding: 1.25rem;
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
  font-size: 1.1em;
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
      if (person.toLowerCase().includes(search.toLowerCase())) {
        personExistsInTable = true;
      }
    });
    return personExistsInTable;
  });

  const finalTable = searchedTables.map((table) => {
    return {
      name: table.name,
      people: search
        ? table.people.filter((person) =>
            person.toLowerCase().includes(search.toLowerCase())
          )
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
          placeholder={"Search your name here to find your seating"}
        />
      </CenterWrapper>
      <FlexWrapper>
        {finalTable &&
          finalTable.map((table) => (
            <Container>
              <img
                class="corner-decoration corner-left-top"
                src={CornerTl}
              ></img>
              <img
                class="corner-decoration corner-right-top"
                src={CornerTl}
              ></img>
              <img
                class="corner-decoration corner-right-bottom"
                src={CornerTl}
              ></img>
              <img
                class="corner-decoration corner-left-bottom"
                src={CornerTl}
              ></img>
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
