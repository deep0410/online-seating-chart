import "./App.css";
import styled from "@emotion/styled";
import { useState } from "react";
import CornerTl from "./corner-tl.png";

const theme1 = "#EAF2EF";
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
  font-family: "Rouge Script", cursive;
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
    height: 24px;
    font-family: "Lato", sans-serif;
    border: 1px solid ${theme3};
    font-size: 1rem;
    padding: 0.75rem;
    border-radius: 8px;
    width: 400px;
    margin: 0 1rem;
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
  border: 2px solid #eaf2ef;
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
      people: ["Yogesh Birla and Family (5)", "Ajay Sharma and Family (5)"],
    },
    {
      name: "Table 2",
      people: [
        "Sunil Dutt Salwan and Family (8)",
        "Aneesh Sharma (1)",
        "Yuvi (1)",
      ],
    },
    {
      name: "Table 3",
      people: [
        "Mukhesh Sharma and Family (3)",
        "Braham Dutt Sharma and Family (3) ",
        "Shivani Sharma/Ravneet Multani and Family (4)",
      ],
    },
    {
      name: "Table 4",
      people: [
        "Braham Parkash Sharma and Family (4)",
        "Gian Sharma and Family (4)",
      ],
    },
    {
      name: "Table 5",
      people: [
        "Manav Sharma and Family (3)",
        "Arun Sharma (2)",
        "Anoop Sharma (2)",
        "Amita Sharma (3)",
      ],
    },
    {
      name: "Table 6",
      people: [
        "Deepak Sharma and Family (4)",
        "Renuka Sharma (2)",
        "Nirmala Sharma (3)",
      ],
    },
    {
      name: "Table 7",
      people: [
        "Karamjeet Prasher (2)",
        "Tek Chand Prasher (4)",
        "Manoj Prasher(2)",
        "Dharamvir Prasher (2)",
      ],
    },
    {
      name: "Table 8",
      people: [
        "Rama and Upinder Sharma( 4)",
        "Sonia Sharma/Sunny Gill (2)",
        "Ritu Sharma and Family (3)",
      ],
    },
    {
      name: "Table 9",
      people: [
        "T.Tiwari and Family (5)",
        "Eshesh Sharma and Family (3)",
        "Renuka Sharma (2)",
      ],
    },
    {
      name: "Table 10",
      people: ["Sukhdev Kalia and Family (6)", "Rakesh Modgil and Family (4))"],
    },
    {
      name: "Table 11",
      people: [
        "Laj Prasher and Family (6)",
        "Ruchi/ Ambrish Sharma and Family (3)",
      ],
    },
    {
      name: "Table 12",
      people: ["Laj Prasher and Family (6)", "Shubash Sharma (2)"],
    },
    {
      name: "Table 13",
      people: ["Harman Grewal Family (6)"],
    },
    {
      name: "Table 14",
      people: [
        "Renecca Vernon Family (3)",
        "Jasveen Guraya Family (3)",
        "Liban, Iman and Kaadar Mousa (3)",
      ],
    },
    {
      name: "Table 15",
      people: [
        "Rajan and Family (4)",
        "Basant Sharma and Family (4)",
        "Ibrahim Manjra (1)",
        "Prahbjot Saini (1)",
      ],
    },
    {
      name: "Table 16",
      people: [
        "Renecca",
        "Harman",
        "Jasveen",
        "Jasmin",
        "Maya (2)",
        "Sonam",
        "Arika (2)",
      ],
    },
    {
      name: "Table 17",
      people: [
        "Manpriya Arora (2)",
        "Elaha Raheen (2)",
        "Rupali Kangura ",
        "Krupa Mistry",
        "Kishanika R.",
        "Naveena S.",
      ],
    },
    {
      name: "Table 18",
      people: [
        "Kalkat Family (5)",
        "Deanna (1)",
        "Ankit Sharma (2)",
        "Somesh Sharma (2)",
      ],
    },
    {
      name: "Table 19",
      people: [
        "Parveen Khanna and Family (6)",
        "Surinder Manku and Family (3)",
      ],
    },
    {
      name: "Table 20",
      people: [
        "Taral Shah",
        "Devang",
        "Priyang",
        "Janmejay Buranpuri",
        "Ashmi",
        "Isha Patel (Nilesh)",
        "Harsh Patel",
        "Sachin (2)",
        "Krish",
      ],
    },
    {
      name: "Table 21",
      people: [
        "Kushal Patel",
        "Hemish",
        "Jarna",
        "Purvish",
        "Nishil",
        "Kena",
        "Tarun",
        "Akash",
        "Ronak",
        "JAY",
      ],
    },
    {
      name: "Table 22",
      people: [
        "Manish Shah",
        "Mansiben Shah",
        "Urmil",
        "Falguniben",
        "Harshad Buranpuri",
        "Chayaben Buranpuri",
        "Jignesh Patel (4)",
      ],
    },
    {
      name: "Table 23",
      people: [
        "Dinker Patel",
        "Ila Patel",
        "Arpit Master",
        "Deepaben Master",
        "Yogesh Patel",
        "Nitaben Patel",
        "Rashmi Patel",
        "Nitaben Patel(US)",
        "Jigna patel",
        "Dharmeshbhai",
      ],
    },
    {
      name: "Table 24",
      people: ["Umang Patel (4)", "Dave  (5)"],
    },
    {
      name: "Table 25",
      people: [
        "Pragnesh Doshi",
        "Priyaben Doshi",
        "Nilesh Patel",
        "Hetalben Patel",
        "Ankir Shah",
        "Nishaben Shah",
        "Sandip (4)",
      ],
    },
    {
      name: "Table 26",
      people: [
        "Yesha Patel",
        "Valay Patel (3)",
        "Pankaj (2)",
        "Absar (2)",
        "Urvashi (2)",
      ],
    },
    {
      name: "Table 27",
      people: ["Samar (3)", "Yesha (2)", "Nikita Patel", "Ketankumar Patel"],
    },
    {
      name: "Table 28",
      people: [
        "Deep",
        "Keerti",
        "Jay (5)",
        "Shreyeshbhai Patel",
        "Dakshaben Patel",
        "Khushi Patel",
      ],
    },
    {
      name: "Table 29",
      people: [
        "Arushi Loomba (2)",
        "Aanchal Saxena (2)",
        "Greena (2)",
        "Ghazal (3)",
        "Luxy",
      ],
    },
    {
      name: "Table 30",
      people: [
        "Anoop Brar ( 3)",
        "Ravinder Sahota (3)",
        "Pushpinder Gularia (3)",
      ],
    },
    {
      name: "Table 31",
      people: ["Amrut Rathod (4)", "Savita Saini (2)", "Paresh Katri (2)"],
    },
    {
      name: "Table 32",
      people: ["Eng", "Patel (2)", "Clement (2)", "Ashvariya (2)"],
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
      <Header>Welcome to Deep and Keerti's Reception</Header>
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
