import React from "react";
import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Section from "./Components/Section/Section.js";
import ArrayMap from "./Components/ArrayMap";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "title",
          nocard: true,
          content: "haskfjhakshbfkjahsfkjbasjfagsfbasjkfjk",
          theme: 1,
          className: "section1"
        },
        {
          title: "title2",
          nocard: true,
          content: "ajsfhkjabsjfkbajksfbjkasb",
          theme: 2,
          className: "section1"
        },
        {
          title: "title2",
          nocard: true,
          content: "kafklahisfkjnjkasnbfkjansfjk",
          theme: 3,
          className: "section1"
        },
        {
          title: "title2",
          nocard: true,
          content: "kafklahisfkjnjkasnbfkjansfjk",
          theme: 3,
          className: "section1"
        },
        
      ]
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Navbar />
        <ArrayMap data={data}>
          {({ title, className, nocard, content, theme }) => (
            <Section
              title={title}
              showList={nocard}
              className={className}
              theme={theme}
              content={content}
            />
          )}
        </ArrayMap>
      </div>
    );
  }
}

export default Homepage;
