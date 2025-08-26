import diagonal from "../images/diagonal.png";
import sad from "../images/sad.png";
import natural from "../images/natural.png";
import happy from "../images/happy.png";
import student_1 from "../images/student_1.png";

const videos = [
  {
    id: 1,
    video_poster: diagonal,
    user_quote: "diagonal smile",
    paragraph:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    user_image: student_1,
    username: "first user",
    rating: [1, 2, 3, 4, 5],
    minutes: "1 min",
  },
  {
    id: 2,
    video_poster: sad,
    user_quote: "sad smile",
    paragraph:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    user_image: student_1,
    username: "second user",
    rating: [1, 2, 3, 4, 5],
    minutes: "2 min",
  },
  {
    id: 3,
    video_poster: natural,
    user_quote: "Natural smile",
    paragraph:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    user_image: student_1,
    username: "third user",
    rating: [1, 2, 3, 4, 5],
    minutes: "3 min",
  },
  {
    id: 4,
    video_poster: happy,
    user_quote: "Happy smile",
    paragraph:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    user_image: student_1,
    username: "fourth user",
    rating: [1, 2, 3, 4, 5],
    minutes: "4 min",
  },
];

export default videos;
