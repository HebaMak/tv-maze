const About = () => {
  return (
    <div className="container about-page">
      <div className="aboutpage-content">
        <h1>About</h1>

        <p className="intro">
          <span>
            <strong>TV-Maze</strong>
          </span>
          &nbsp; tv shows app is an application the user can use search field
          for searching for different types of shows comedy, drama or animation,
          etc...
          <br />I use&nbsp;-
          <a href="https://www.tvmaze.com/api" target="_blank" rel="noreferrer">
            Tvmaze
          </a>
          - &nbsp;API here is the documentation.
        </p>

        <h4>The App features :</h4>
        <ol>
          <li>
            The homepage, displays a list of shows in pagination each page
            displays 15 show.
          </li>
          <li>
            User can search for shows using Search field in the Navbar or in
            search page
          </li>
          <li>User can add/remove a show to/from favorites page.</li>
          <li>
            The app remembers the favorite shows if user reload or refresh the
            app.
          </li>
          <li>
            When user clicks on the show poster app direct to the details of the
            show.
          </li>
          <li>People page there are most famous actors and actress.</li>
          <li>I use Bootsrtap Navbar, cards, Modal and carousel.</li>
          <li>The app is responsive for different devices screen.</li>
          <li>
            I watched this video https://www.youtube.com/watch?v=zDwgTRkPkF4 and
            took some ideas from it
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
