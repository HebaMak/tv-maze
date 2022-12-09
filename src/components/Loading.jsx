function Loading({ text }) {
  return (
    <div className="loading">
      <h2>{text}</h2>
      <img
        src="https://res.cloudinary.com/hapiii/image/upload/v1648557034/loading%20img/b9zdkzh3d547ueexd68l.gif"
        alt="loading"
      />
    </div>
  );
}

export default Loading;
