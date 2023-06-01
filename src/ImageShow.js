import React from "react";

const ImageShow = ({ imageDetails }) => {
  console.log(imageDetails);
  return (
    <div>
      <img src={imageDetails.urls.small} alt='Car photoes'></img>
    </div>
  );
};

export default ImageShow;
