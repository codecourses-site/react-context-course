import { useContext } from "react";

import Context from "../../context";

const Dog = () => {
  const { dog } = useContext(Context);

  return (
    <div className="dog">
      <img src={dog} alt="dog" />
    </div>
  );
};

export default Dog;
