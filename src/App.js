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
      people: ["Yogesh Birla and Family ( 5)", "Ajay Sharma and Family (5)"],
    },
    {
      name: "Table 2",
      people: [
        "Sunil Dutt Salwan and Family (8)",
        "Aneesh Sharma ( 1)",
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
        "Ganesh Sharma (2)",
      ],
    },
    {
      name: "Table 5",
      people: [
        "Laj Prasher and Family ",
        "Shubash Sharma (2)",
        "Umesh Sharma (2)",
      ],
    },
    {
      name: "Table 6",
      people: [
        "Laj Prasher and Family ",
        "Ruchi/ Ambrish Sharma and Family (3)",
      ],
    },
    {
      name: "Table 7",
      people: [
        "Rama and Upinder Sharma( 4)",
        "Sonia Sharma/Sunny Gill (2)",
        "Ritu Sharma and Family (3)",
      ],
    },
    {
      name: "Table 8",
      people: [
        "Manav Sharma and Family (3)",
        "Rohan (Chandu) Sharma and Family (3)",
        "Renu and S.Sharma (2)",
      ],
    },
    {
      name: "Table 9",
      people: ["Sukhdev Kalia and Family (6)", "Rakesh Modgil and Family (3)"],
    },
    {
      name: "Table 10",
      people: [
        "T.Tiwari and Family (5)",
        "Eshesh Sharma and Family (3)",
        "Renuka Sharma (2)",
      ],
    },
    {
      name: "Table 11",
      people: [
        "Karamjeet Prasher (2)",
        "Tek Chand Prasher (2)",
        "Manoj Prasher(2)",
        "Kapil sharma (4)",
      ],
    },
    {
      name: "Table 12",
      people: [
        "Deepak Sharma and Family (4)",
        "Amita Sharma (3)",
        "Nirmala Sharma (3)",
      ],
    },
    {
      name: "Table 13",
      people: [
        "Poonam Chibber (2)",
        "Savita Saini (2)",
        "Anoop Sharma (2)",
        "Prahba Sharma (3)",
      ],
    },
    {
      name: "Table 14",
      people: [
        "Asma Al and Family (5)",
        "Bala Joshi (2)",
        "Akash and Sabina (2)",
      ],
    },
    {
      name: "Table 15",
      people: [
        "Parveen Khanna and Family (6)",
        "Surinder Manku and Family (3)",
      ],
    },
    {
      name: "Table 16",
      people: [
        "Anoop Brar ( 3)",
        "Ravinder Sahota (3)",
        "Pushpinder Gularia (3)",
      ],
    },
    {
      name: "Table 17",
      people: [
        "Rajan and Family (4)",
        "Basant Sharma and Family (4)",
        "Ibrahim Manjra (1)",
        "Prahbjot Saini (1)",
      ],
    },
    {
      name: "Table 18",
      people: ["Amrut Rathod (4)", "Brijeshbhai and Family (3)"],
    },
    {
      name: "Table 19",
      people: [
        "Renecca",
        "Harman",
        "Jasveen",
        "Jasmin",
        "Maya",
        "Sonam",
        "Arika",
      ],
    },
    {
      name: "Table 20",
      people: [
        "Manpriya Arora (2)",
        "Elaha Raheen (2)",
        "Kiranjot Kang (2)",
        "Rupali Kangura ",
        "Krupa Mistry",
        "Kishanika R.",
        "Naveena S.",
      ],
    },
    {
      name: "Table 21",
      people: [
        "Suresh Bhambi (3)",
        "Tarun (2)",
        "Pankaj (2)",
        "Absar (2)",
        "Urvashi",
      ],
    },
    {
      name: "Table 22",
      people: [
        "Taral Shah",
        "Kushal Shah",
        "Devang",
        "Priyang",
        "Janmejay Buranpuri",
        "Ashmi",
        "Isha Patel (Nilesh)",
        "Mansi Pandya",
        "Yesha Patel",
        "Harsh Patel",
      ],
    },
    {
      name: "Table 23",
      people: [
        "Kushal Patel",
        "Hemish",
        "Jarna",
        "Purvish",
        "Nishil",
        "Kena",
        "Jay (2)",
      ],
    },
    {
      name: "Table 24",
      people: [
        "Dinker Patel",
        "Ila Patel",
        "Arpit Master",
        "Deepaben Master",
        "Yogesh Patel",
        "Nitaben Patel",
        "Rashmi Patel",
        "Nitaben Patel (US)",
        "Nikita Patel",
        "Ketankumar Patel",
      ],
    },
    {
      name: "Table 25",
      people: [
        "Pragnesh Doshi",
        "Priyaben Doshi",
        "Bela Pandya",
        "Manish Pandya",
        "Nilesh Patel",
        "Hetalben Patel",
        "Ankir Shah",
        "Nishaben Shah",
      ],
    },
    {
      name: "Table 26",
      people: [
        "Manish Shah",
        "Mansiben Shah",
        "Urmil",
        "Falguniben",
        "Harshad Buranpuri",
        "Chayaben Buranpuri",
        "Binoy Joshi (4)",
      ],
    },
    {
      name: "Table 27",
      people: [
        "Jignesh Patel (3)",
        "Reena Patel",
        "Umang Patel",
        "Shitalben Patel",
        "umang son 1",
        "umang son 2",
        "Sanjaykumar and family (2)",
      ],
    },
    {
      name: "Table 28",
      people: [
        "Greena Patel",
        "Harsh Patel",
        "Faisal & Ghazal Khan (3)",
        "Luxy",
        "Sachin (2)",
        "Krish",
      ],
    },
    {
      name: "Table 29",
      people: [
        "Yesha Patel",
        "Valay Patel & family (3)",
        "Shreyeshbhai Patel",
        "Dakshaben Patel",
        "Khushi Patel",
        "Arushi Loomba (2)",
        "Aanchal Saxena",
      ],
    },
    {
      name: "Table 30",
      people: [
        "Jalak Patel",
        "Samar (3)",
        "Yesha (3)",
        "Deep Patel",
        "Rajvi Patel",
        "**** Arushi Loomba (2)",
        "**** Aanchal Saxena",
      ],
    },
    {
      name: "Table 31",
      people: ["Kalkat Family (5)", "Deanna (1)", "Aman (4)"],
    },
    {
      name: "Table 32",
      people: [
        "Renecca Vernon Family (3)",
        "Jasveen Guraya Family (3)",
        "Harman Grewal Family (2)",
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
