import { TypeAnimation } from "react-type-animation";
import "./parallax.scss";
import { useState, useEffect } from "react";

const Parallax = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".box");
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        setStartAnimation(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="box">
      <div className="typing">
        {startAnimation && (
          <TypeAnimation
            sequence={[
              "I  AM  REALLY  SORRY ",
              2000,
              "I  wanted  to  add  more  Animations  and  more  effects  to  the  portfolio",
              2000,
              "So  I  am  working  on  it",
              2000,
              "But  if  you  want  to  know  more  about  me  !!!!",
              2000,
              "You  can  visit  my  LinkedIn  profile  or  can  download  my  CV  in  the  home  page",
              2000,
              "I  have  added  all  my  projects  and  experience  in  it",
              2000,
              "Thank  you  for  visiting  my  Portfolio",
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3em", display: "inline-block" }}
            className="typed"
          />
        )}
      </div>
    </div>
  );
};

export default Parallax;
