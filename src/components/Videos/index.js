import videos from "../../mockdata/videos";
import MyNavbar from "../Header/NavContainer";
const Videos = () => {
  return (
    <>
      <MyNavbar />
      <h4>Video Container</h4>
      {videos.map((video, index) => {
        return (
          <p>
            {video.id} {video.paragraph}
          </p>
        );
      })}
    </>
  );
};

export default Videos;
