function Error({ text }) {
  return (
    <div className="error">
      <h2>{text}</h2>
      <img
        src="https://res.cloudinary.com/hapiii/image/upload/v1669848032/Error%20imgs/d2wigw0or7mcijn3vuts.gif"
        alt="error image"
      />
    </div>
  );
}

export default Error;
