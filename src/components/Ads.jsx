import Carousel from "react-bootstrap/Carousel";

function Ads() {
  return (
    <div className="container">
      <div className="ads-container">
        <div className="left-ads">
          <Carousel>
            <Carousel.Item>
              <img
                src="images/first.jpg"
                className="d-block w-100"
                height="150px"
                alt="first-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/second.jpg"
                className="d-block w-100"
                height="150px"
                alt="second-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/third.jpg"
                className="d-block w-100"
                height="150px"
                alt="third-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/fourth.jpg"
                className="d-block w-100"
                height="150px"
                alt="forth-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/fifth.jpeg"
                className="d-block w-100"
                height="150px"
                alt="fifth-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/sixth.jpg"
                className="d-block w-100"
                height="150px"
                alt="sixth-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/seventh.jpg"
                className="d-block w-100"
                height="150px"
                alt="seventh-img"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="right-ads">
          <Carousel>
            <Carousel.Item>
              <img
                src="images/eighth.jpeg"
                className="d-block w-100"
                height="150px"
                alt="eighth-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/ninth.jpeg"
                className="d-block w-100"
                height="150px"
                alt="ninth-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/tenth.jpg"
                className="d-block w-100"
                height="150px"
                alt="tenth-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/eleventh.jpg"
                className="d-block w-100"
                height="150px"
                alt="eleventh-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/twelfth.jpeg"
                className="d-block w-100"
                height="150px"
                alt="twelfth-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/13th.jpg"
                className="d-block w-100"
                height="150px"
                alt="13th-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="images/14th.png"
                className="d-block w-100"
                height="150px"
                alt="14th-img"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Ads;
