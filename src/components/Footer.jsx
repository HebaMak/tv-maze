const Footer = () => {
  return (
    <div className="footer">
      <div className="container  d-flex justify-content-between align-items-center">
        <div className="social-media d-flex align-items-center">
          <h6>Follow us on :</h6>
          <ul className="d-flex list-unstyled">
            <li>
              <a href="https://www.facebook.com/tvmaze">
                <i className="facebook fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tvmazecom/">
                <i className="instagram fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tvmaze">
                <i className="twitter fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/tvmaze/">
                <i className="reddit fab fa-reddit-alien"></i>
              </a>
            </li>
          </ul>
        </div>
        <h6> Tv-Maze &copy;. 2022.</h6>
      </div>
    </div>
  );
};

export default Footer;
