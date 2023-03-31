import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div>
      <h1 className="faq-title">React core concept FAQ</h1>
      <h3>1. Props vs state:</h3>
      <p>
        Basically data can be send through props in a Component. We can send
        number, string, obj, array by the props. Props is unidirectional that
        means it can go only one way it can not go upper parent Component.We can
        not change props. We can only use it. This is immutable.
        <br />
        State can store change value. Like user change anything in website is
        state. we can change the state value. Like in facebook when a user click
        on like button it change the like number. This a state it website.
      </p>
      <h3>2. How does useState work?</h3>
      <p>
        State is change something in website. useState is hook. basically
        useState return two array one is normal array another is functional
        array. State can take default state like 0, empty array. Then Set
        function change the value.
      </p>
      <h3>3.Purpose of useEffect other than fetching data. </h3>
      <p>
        There are some Purpose of useEffect. basically we use it for fetch api
        data on website. Then we use it validating input filed. We can filter an
        array by useEffect. Also for animation on new array value running on
        props change.
      </p>
      <h3>4. How Does React work?</h3>
      <p>
        React is a javascript lybry. To reduce the number of modifications to
        the real DOM, a virtual one is used. It is very usefull. In order to
        make it simpler to maintain the state of an application, it also makes
        use of declarative programming and unidirectional data flow.
      </p>
    </div>
  );
};

export default Question;
