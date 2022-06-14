import { useContext } from "react";
import { useHistory } from "react-router";

import Context from "../../context";

const Home = () => {
  const history = useHistory();

  const { setDog } = useContext(Context);

  const generateDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((json) => {
        setDog(json.message);
        localStorage.setItem("selectedDog", json.message);
        history.push("/dog");
      });
  };

  return (
    <div className="home">
      <button className="home__generate-dog-btn" onClick={generateDog}>
        Show Dog Image
      </button>
    </div>
  );
};

export default Home;
