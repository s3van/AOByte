import { Post } from "./Post";
import { postsData } from "./postsData";

export const Pool = () => {
  return (
    <div>
      {postsData.map((user, index) => {
        return (
          <Post key={index} name={user.name} img={user.img} text={user.text} />
        );
      })}
    </div>
  );
};
