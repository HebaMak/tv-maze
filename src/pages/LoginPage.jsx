const LoginPage = () => {
  return (
    <div className="registerLoginPage">
      <div className="container">
        <h5>Login</h5>
      </div>
      <div className="modal-body">
        <button className="btn btn-outline-dark w-100 mb-4">
          <i className="fa fa-google me-2"></i> Sign in With Google
        </button>
        <button className="btn btn-outline-dark w-100 mb-4">
          <i className="fa fa-facebook me-2"></i> Sign in With Facebook
        </button>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-dark w-100 mb-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
