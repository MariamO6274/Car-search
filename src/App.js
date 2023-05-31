import React, { useState } from "react";
import "./App.css";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import searchImages from "./api";

// Normal JS code can be written here

// If we want the component to re-render itself based on change in some variable (in this case: 'count').
// Then we need to make that variable a 'state' and then update that state through function.
// This will help React to understand that you would like to re-render the component.

var App = () => {
  let myCar = "Honda";
  const [images, setImages]=useState([])


  function callMe(searchTerm) {
    console.log("Call me function is called....");
    console.log("Query param is : " + searchTerm);
    searchImages().then((response) => {
      const imageData = response.data.results;
      console.log(imageData);
      setImages(imageData); //upadeting state variable with data we get frmo api array, image get rerander
    });
    //creat async means returning promise
    //we need .then pluse params inside
    // write catch later
  }
  //searchImages brings promise in consolle log and it need .then

  // Next steps: to call the fetch function and pass it the searchTerm
  // It should return us some imag list
  // Pass this imageList to ImageList component

// rodesac dagvibrundeba array maqedan udna chavsvat statis funqciashi setImages
// when you get resault u update state

  return (
    <>
      <SearchBar str1={myCar} cb={callMe} />
      <ImageList imgList={images} />
    </>
  );
};
//pass this data to image list/ rerender 
//create new state, state variable and make images as state var and update it

export default App;

// Access Key
// 0195lSK0lm6kyYFa8Yjptntl6pO8Sz6J-xRjAKOtQe0

// Secret key
// TmkgYZKZ68N2AwWrjCDqhVOgw3UcPve-wcgx13bNJlQ
