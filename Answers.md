# Answers

1.  What is React JS and what problems does it try and solve?

React JS is an open-source Javascript component library used for building user interfaces specifically for single page applications (handling view layer for web and mobile apps). It is also used to create reusable UI components.
React allows developers to create large web apps which can change data, without reloading the page. It makes apps fast, scalable and simple.

2.  What does it mean to _think_ in react?

React should be thought out into a UI component hierarchy. Meaning,
broken down into steps to create an React app. Such as, building a mock up first. Then a static version to visualize to identify where each component will reside. There after, implementing functionality.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.
A class component requires you to extend from React.

4.  Describe state.

State is used for defining the shape of data both initially and upon user interaction.
State is changeable, React uses the setState() method to update the object of a state. State can only be mutated by the component that contains the state. It is private in this sense.

5.  Describe props.

Props make react components reusable. Props are mainly used for passing data from component to component. They are immutable and should only be sent from parent to child component.
