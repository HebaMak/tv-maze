const About = () => {
  return (
    <div className="container about-page">
      <div className="aboutpage-content">
        <h1>About</h1>

        <p className="intro">
          <span>
            <strong>TV-Maze</strong>
          </span>
          &nbsp; tv shows app is an application the user can use to searching
          for different types of shows comedy, drama or animation, etc...
          <br />I use&nbsp;-
          <a href="https://www.tvmaze.com/api" target="_blank" rel="noreferrer">
            Tvmaze
          </a>
          - &nbsp;API here is the documentation.
        </p>

        <h4>The App features :</h4>
        <ul>
          <li>The app consists of 3 folders Pages , Components and Hooks</li>
          <li>
            <strong>Pages: </strong> in which many pages are found, Home ,
            Search , People , Favorites , About app , Login and Register and
            ShowDetails pages.
          </li>
          <li>
            <strong>Components: </strong> in which the different components used
            in the app are found, Navbar, Ads, Error, FavIcon, FilterSidebar,
            Footer, Loading, Login, Register, pagination, SearchField, Person,
            SingleShow and SearchShow
          </li>
          <li>
            <strong>Hooks: </strong> in which the files of hooks context and
            useFetch custom hook is found
          </li>
          <li>
            <strong>Pages Folder:</strong>
          </li>
          <ol>
            <li>
              <strong>Home page: </strong>
              <ul>
                <li>
                  displays a list of shows in pagination each page displays 15
                  show. these shows fetched from limited api of 240 shows only.
                </li>
                <li>
                  pagination uses the component SingleShow which has its
                  information requested from API.
                </li>
                <li>
                  each SingleShow has a poster for the show, the show name,
                  rating and a white heart icon which let the user put the show
                  in the favorite list by clicking on it to turn to the red
                  heart.
                </li>
                <li>
                  contains the components: Navbar , Login , Register,
                  pagination, SearchField , FilterSidebar and the Footer in the
                  mobile and tab screens the components.
                </li>
                <li>
                  Login and Register replaced by the Pages Login and Register.
                </li>
                <li>
                  user directed to the details page when clicks on any show, the
                  different information about each show fetched from 4 or 5
                  APIs, all information about the show: the Name , Poster, show
                  types, status, rating, summary, web channel displayed on,
                  language, country, cast, ... and others are fetched according
                  to the show id.
                </li>
                <li>
                  user can search for any show by using the SearchField in the
                  Navbar and the results displayed in the main pagination of the
                  homepage in number of pages depend on the results shows number
                </li>
                <li>
                  user can filter out the shows according to the show status,
                  type, genre, language, country, network, web channel, runtime
                  and rating by using the FilterSidebar and the results
                  displayed in the pagination as the search results.
                </li>
                <li>
                  if the user clear the search field the original data displayed
                  once again
                </li>
                <li>
                  if there is an error during the fetching data process an error
                  message and image will show up which is the Error component
                </li>
                <li>
                  before displaying the data fetched from the API there is a
                  loading message and image showed up which is the Loading
                  component
                </li>
              </ul>
            </li>
            <li>
              <strong>Search page: </strong>
              <ul>
                <li>
                  User can search for shows using Search field in the Navbar or
                  in another form in the page are connected to gether to give
                  the same results if the user use one of therm
                </li>
                <li>
                  the use search for shows in unlimited API different from that
                  used to display shows in Homepage
                </li>
                <li>
                  the results are displayed inside a pagination of pages each
                  page displays 50 shows according to the search results.
                </li>
                <li>
                  The pagination uses the component SearchShow which has
                  information slight different than the SingleShow.
                </li>
                <li>
                  there is a clear button to clear the search page content. and
                  this button will found only when there are shows results from
                  a search process in the page
                </li>
                <li>
                  the app remembers the latest searching results that stored in
                  the localStorage when user reload or refresh the app
                </li>
                <li>
                  if the user enters search without entering any searching data
                  there is an error image and message "Please enter a Show Name
                  ..."
                </li>
                <li>
                  id the user enters a name of data does not exist in the API
                  data, the error image and a different error message "there No
                  Shows with the Name (the entered name)" will appear.
                </li>
                <li>
                  the loading image and message also appear before the requested
                  data displayed
                </li>
              </ul>
            </li>
            <li>
              <strong>People page: </strong>
              <ul>
                <li>
                  the page displays different actresses and actors photo and
                  Name in a pagination of pages each page displayed 60 person
                </li>
                <li>
                  The pagination uses the component Person which has information
                  different from the SingleShow and SearchShow.
                </li>
                <li>
                  when user hovers over each person, an overlay on the show
                  shows up with some information the country, birthday, death
                  date and a link for other details direct to the person page in
                  tv-maze original side
                </li>
                <li>
                  the user can search for any person using the SearchField in
                  Navbar, the results displayed in the pagination
                </li>
                <li>
                  if the user enters a name not in the people data API, the
                  error image and message "There is No person with the name
                  (Entered Name) " will appear, and Back to People button which
                  refresh the page and back People Page.
                </li>
                <li>
                  the Loading image and message also will appear before the data
                  fetched from API.
                </li>
                <li>
                  when the user clear the SearchField, all people data will
                  displayed once again.
                </li>
              </ul>
            </li>
            <li>
              <strong>Favorite page: </strong>
              <ul>
                <li>
                  the favorites page contains the all the shows that user click
                  on their hearts to be favorites.
                </li>
                <li>
                  the favorites shows displayed in a pagination each page
                  displayed 20 show.
                </li>
                <li>
                  there is a Clear Favorites button to clear the page from
                  favorites, and it is appear only when there are favorites
                  shows in the page.
                </li>
                <li>
                  if there are no favorites shows in the page there is a message
                  "You Haven't Chosen any Favorites yet!" and a nice gif image.
                </li>
                <li>
                  the app remembers the favorite shows by stored the latest
                  favorites in localStorage when user reload or refresh the app.
                </li>
              </ul>
            </li>
            <li>
              <strong>About page:</strong>
              <ul>
                <li>
                  the page contains all data about the app, components, pages,
                  styles like the readMe page.
                </li>
              </ul>
            </li>
          </ol>
          <li>
            <strong>Hooks folder:</strong>
            <ul>
              <li>contains two files context.js and useFetch.js</li>
              <li>
                useFetch.js file is a custom hook I used to prepare the fetching
                data from any api passes as a parameter and handle the
                appearance of data with the Error and Loading components.
              </li>
              <li>
                context.js in that file the use of usefetch custom hook and
                fetch almost all data used in the app and almost all APIs.
              </li>
              <li>
                in context.js file I created the context to allow the usage of
                different states and function created inside the context file in
                all the app files.
              </li>
              <li>
                in context.js file also there are many function created to
                manage many states and all passed to different app pages and
                components.
              </li>
            </ul>
          </li>

          <li>
            <strong>Components:</strong>
            <ol>
              <li>
                <strong>Navbar: </strong>
                <ul>
                  <li>I use Bootstrap navbar and updated it.</li>
                  <li>
                    I used the Bootstrap bundles and some other functions help
                    in collapse incase clicking on any other part.
                  </li>
                </ul>
              </li>
              <li>
                <strong>SearchField: </strong>
                <ul>
                  <li>
                    component of search contains a form of input field and
                    search button.
                  </li>
                  <li>
                    used in different pages Home page, People page and Search
                    page.
                  </li>
                  <li>
                    each page uses the SearchField passes to it the placeholder
                    and the functionality special for the page.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Login-Register: </strong>
                <ul>
                  <li>I used the Bootstrap Modal and I update it.</li>
                  <li> used the same code in Login and Register pages.</li>
                </ul>
              </li>
              <li>
                <strong>Error: </strong>
                <ul>
                  <li>
                    contains an image a message which changed according to the
                    position that component used it.
                  </li>
                  <li>
                    the page called the Error passes an Error message to it as a
                    prop.
                  </li>
                  <li>
                    the Error components appears when the data can't fetched
                    correctly or when user searches for something not found.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Loading: </strong>
                <ul>
                  <li>
                    contains an image a message which changed according to the
                    position that component used it.
                  </li>
                  <li>
                    the page called the Loading passes an Loading message to it
                    as a prop.
                  </li>
                  <li>
                    the Loading components appears before fetching any data.
                  </li>
                </ul>
              </li>
              <li>
                <strong>FavIcon: </strong>
                <ul>
                  <li>
                    the Hear, which appears in a white color for all shows
                    displayed in home page, search page and show details page .
                  </li>
                  <li>
                    let the user make a show a favorite by clicking on it and
                    becomes red to tell the user that the show now will be in
                    the favorites list.
                  </li>
                  <li>
                    user can click on the heart again to unfavorite the show and
                    remove it from the favorite list and heart becomes white
                    again.
                  </li>
                  <li>the action of FavIcon takes place in all pages.</li>
                </ul>
              </li>
              <li>
                <strong>SingleShow: </strong>
                <ul>
                  <li>
                    displays some info about the show and the pagination of Home
                    page use it.
                  </li>
                </ul>
              </li>
              <li>
                <strong>SearchShow: </strong>
                <ul>
                  <li>
                    displays some info about the show and the pagination of
                    search page use it.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Person: </strong>
                <ul>
                  <li>
                    displays some info about the show and the pagination people
                    page use it.
                  </li>
                </ul>
              </li>
              <li>
                <strong>pagination:</strong>
                <ul>
                  <li>I used the Bootstrap pagination and updated it.</li>
                  <li>
                    the pagination used in different pages and displayed
                    different number of items and different component passed to
                    it from the page call it.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ads: </strong>
                <ul>
                  <li>
                    contains two carousels which used in Home page and People
                    page only.
                  </li>
                  <li>
                    I used the Bootstrap Carousel for React using a specific
                    package.
                  </li>
                </ul>
              </li>
              <li>
                <strong>FilterSidebar: </strong>
                <ul>
                  <li>that component used once in the Home page.</li>
                  <li>
                    I used 9 select boxes with options to filter out the shows
                    according to the values inside.
                  </li>
                  <li>
                    OPTIONS get their values from the data of shows displayed
                    dynamically
                  </li>
                  <li>
                    user can filter out the shows according toShow status, Type,
                    Genre, Language, Rating, Runtime, WebChannel, NetWork and
                    Country.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Footer: </strong>
                <ul>
                  <li> footer contains some font awesome of the app.</li>
                  <li>
                    each font awesome direct to the tv-maze original sites
                    Facebook, Twitter, Instagram and Reddit.
                  </li>
                </ul>
              </li>
            </ol>
          </li>

          <li>
            I use Bootsrtap Navbar, Pagination, cards, Modal and carousel.
          </li>
          <li>The app is Responsive for different devices screen.</li>
          <li>
            The Original Tv-Maze site:
            <a href="https://www.tvmaze.com/shows">
              <span>
                <strong>TV-Maze Site</strong>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
