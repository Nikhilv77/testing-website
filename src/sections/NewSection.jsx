import styled from "styled-components";
import React from "react";

const NewSection = () => {
  const Section = styled.section`
    height: calc(100vh - 4.5rem);
    width: 100vw;
    position: relative;
    background-color: green;

  `
  return (

    <Section>
      <h1>working</h1>
    </Section>
  );
};

export default NewSection;
