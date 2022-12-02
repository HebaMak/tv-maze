const Footer = () => {
  return (
    <div className="footer">
      <div className="container  d-flex justify-content-between align-items-center">
        <div className="social-media d-flex align-items-center">
          <h6>Follow us on :</h6>
          <ul className="d-flex list-unstyled">
            <li>
              <i className="facebook fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="instagram fab fa-instagram"></i>
            </li>
            <li>
              <i className="twitter fab fa-twitter-square"></i>
            </li>
            <li>
              <i className="reddit fab fa-reddit-alien"></i>
            </li>
          </ul>
        </div>
        <h6> Tv-Maze &copy;. 2022.</h6>
      </div>
    </div>
  );
};

export default Footer;
