import React from "react";
import path1 from "../assets/path1.png";
import path2 from "../assets/path2.png";
import path3 from "../assets/path3.png";
import path4 from "../assets/path4.png";
import joinus from "../assets/joinus.png";
import bg from "../assets/background (1).png";

import styled from "styled-components";


const Button = styled.button`
  margin-left: 530px;

  margin-top: 20px;
  width: 20vw;
  height: 10vh;
  background-color: #00bee3;
  border-radius: 30px;
  position: absolute;
  text-align: center;
  color: white;
`;

const MainPublisherDiv = styled.div`
  position: absolute;
  margin-top: 40vh;
  margin-left: 250px;
`;
const PublisherDiv1 = styled.div`
  display: grid;
  margin-left: 40px;
`;
const PublisherDiv2 = styled.div`
  display: grid;
  margin-left: 200px;
`;
const PublisherDiv3 = styled.div`
  display: grid;
  margin-left: 180px;
`;
const PublisherDiv4 = styled.div`
  display: grid;
  margin-left: 180px;
`;
const MainIconDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const MainDiv = styled.div`
  position: absolute;
  margin-top: 30vh;
  margin-left: 150px;
  @media (min-width:1024px) and (max-width:1280px) {
    position: absolute;
  margin-top: 30vh;
  margin-left: 70px;
  }
` 
const Text = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;


const Joinus = () => {
  return (
    <>
      <Button>Who Can Join Us</Button>
<MainDiv>
     <MainIconDiv>
     <PublisherDiv1>
          <img src={path1} alt="path1" />
          <Text>Publisher</Text>
        </PublisherDiv1>
        <PublisherDiv2>
          <img src={path2} alt="path1" />
          <Text>Content Expert</Text>
        </PublisherDiv2>
        <PublisherDiv3>
          <img src={path3} alt="path1" />
          <Text>Freenlancer Teaccher</Text>
        </PublisherDiv3>
        <PublisherDiv4>
          <img src={path4} alt="path1" />
          <Text>Individual Student</Text>
        </PublisherDiv4>
     </MainIconDiv>
       
     </MainDiv>

      <img style={{
        marginTop: "10vh",
        width: "100%",
        height:'60vh'
      }} src={bg} />
    </>
  );
};

export default Joinus;
