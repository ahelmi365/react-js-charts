import { useParams } from "react-router-dom";

const EditUser = () => {
  const { userId } = useParams();

  return <h1>Edit user ID: {userId}</h1>;
};

export default EditUser;
