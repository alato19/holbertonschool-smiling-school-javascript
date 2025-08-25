import { Container, Row, Col, Card } from "react-bootstrap";
import videos from "../mockdata/videos.js";
import { IoStarSharp } from "react-icons/io5";
import "./Card.css";

const BasicExample = () => {
  console.log("videos----", videos);

  return (
    <>
      <Container>
        <Row>
          {videos.map((video, index) => {
            return (
              <Col md={3} key={index}>
                <Card className="custom-card">
                  <Card.Img
                    variant="top"
                    src={`${video.video_poster}`}
                    className="custom-image"
                  />
                  <Card.Body>
                    <Card.Title>{video.user_quote}</Card.Title>
                    <Card.Text>{video.paragraph}</Card.Text>
                    <div className="user-data">
                      <Card.Img
                        variant="top"
                        src={`${video.user_image}`}
                        className="user-image"
                      />
                      <span>{video.username}</span>
                    </div>
                    {video.rating.map((el, i) => {
                      return <IoStarSharp key={i} />;
                    })}
                    <h3>{video.minutes}</h3>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BasicExample;
