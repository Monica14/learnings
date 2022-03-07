import React, { useEffect } from "react";
import loadjs from "loadjs";

const SharedJS = () => {
  useEffect(() => {
    console.log("Hi");
    loadjs(
      ["../../public/js/jquery-1.11.1.min.js"],
      () => {
        loadjs(
          ["../../public/js/bootstrap.min.js","../../public/js/bootstrap-hover-dropdown.min.js","../../public/js/bootstrap-select.min.js", "../../public/js/owl.carousel.min.js"],
          () => {
            console.log("loaded ===");
            loadjs(
              ["../../public/js/echo.min.js", "../../public/js/jquery.easing-1.3.min.js", "../../public/js/bootstrap-slider.min.js"],
              () => {
                console.log("inner loaded ===");
                loadjs(
                  ["../../public/js/jquery.rateit.min.js","../../public/js/lightbox.min.js", "../../public/js/bootstrap-select.min.js", "../../public/js/wow.min.js", "../../public/js/scripts.js"],
                  () => {
                    console.log("inner loaded11 ===");
                    
                  }
                )
              }
            );
          }
        );
      }
    );
  });

  return <></>;
};

export default SharedJS;
