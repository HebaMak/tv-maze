**TV-Maze**   tv shows app is an application the user can use to searching for different types of shows comedy, drama or animation, etc...  
I use - [Tvmaze](https://www.tvmaze.com/api) \-  API here is the documentation.

###### The App link on Netlify is: https://hapi-tv-maze-like.netlify.app/

### Technologies used: React.js, Html5, Css3, Bootstrap 

 ![alt text](https://img.shields.io/badge/Html5--E34F26?style=for-the-badge&logo=Html5)
 ![alt text](https://img.shields.io/badge/Css3--1572B6?style=for-the-badge&logo=css3)
 
#### The App features:

- App Screen Shot:

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670335929/HYF/React/tv-maze/xnobafhaijlgkocqrjwj.png)](https://some-url.dev/)

- The app consists of 3 folders Pages , Components and Hooks.
- **Pages:** in which many pages are found, Home , Search , People , Favorites , About app , Login , Register. and ShowDetails pages.
- **Components:** in which the different components used in the app are found, Navbar, Ads, Error, FavIcon, FilterSidebar, Footer, Loading, Login, Register, pagination, SearchField, Person, SingleShow and SearchShow.
- **Hooks:** in which the files of hooks context and useFetch custom hook is found.

- **Pages Folder:**

1.  **Home page:**

    - displays a list of shows in pagination each page displays 15 show. these shows fetched from limited api of 240 shows only.
    - pagination uses the component SingleShow which has its information requested from API.
    - each SingleShow has a poster for the show, the show name, rating and a white heart icon which let the user put the show in the favorite list by clicking on it to turn to the red heart.
    - contains the components: Navbar , Login , Register, pagination, SearchField , FilterSidebar and the Footer.
    - in the mobile and tab screens the components Login and Register replaced by the Pages Login and Register.
    - user clicks on any show directed to the show details page.
    - user can search for any show by using the SearchField in the Navbar and the results displayed in the main pagination of the homepage in number of pages depend on the results shows number.
    - user can filter out the shows according to the show status, type, genre, language, country, network, web channel, runtime and rating by using the FilterSidebar and the results displayed in the pagination as the search results.
    - if the user clear the search field the original data displayed once again.
    - if there is an error during the fetching data process an error message and image will show up which is the Error component.
    - before displaying the data fetched from the API there is a loading message and image showed up which is the Loading component.

    - Home Page screenshot:

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670337804/HYF/React/tv-maze/jrkdxghnmzvf3op098g5.png)](https://some-url.dev/)

2.  **ShowDetails page:**

- user directed to the details page when clicks on any show, the different information about each show fetched from 4 or 5 APIs.
- all information about the show: the Name , Poster, show types, status, rating, summary, web channel displayed on, language, country, cast, ... and others are fetched according to the show id.

- Show details screenshot:

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670336126/HYF/React/tv-maze/gzodjvv2wzsqobhrjm5c.png)](https://some-url.dev/)

3.  **Search page:**

    - user can search for shows using Search field in the Navbar or in another form in the page are connected to gether to give the same results if the user use one of them.
    - the use search for shows in unlimited API different from that used to display shows in Homepage.
    - the results are displayed inside a pagination of pages each page displays 50 shows according to the search results.
    - The pagination uses the component SearchShow which has information slight different than the SingleShow.
    - there is a clear button to clear the search page content. and this button will found only when there are shows results from a search process in the page.
    - the app remembers the latest searching results that stored in the localStorage when user reload or refresh the app.
    - if the user enters search without entering any searching data there is an error image and message "Please enter a Show Name ...".
    - if the user enters a name of data does not exist in the API data, the error image and a different error message "there No Shows with the Name (the entered name)" will appear.
    - the loading image and message also appear before the requested data displayed.

    - Show details screenshot:

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670336931/HYF/React/tv-maze/xf18csmwb4tjlarcp2cz.png)](https://some-url.dev/)

    * Loading Image and Message:

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670336931/HYF/React/tv-maze/xnj2vzmvbmzt63btvr4x.jpg)](https://some-url.dev/)

    * Error Image and Message, when user does not enter any name:

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670337340/HYF/React/tv-maze/tdi7zrgmcbmfzdknr92m.jpg)](https://some-url.dev/)

    * Error Image and Message, when user enters a name not found:

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670337239/HYF/React/tv-maze/jyjhc5ewbg0nmpcvbhx7.jpg)](https://some-url.dev/)

4.  **People page:**

    - the page displays different actresses and actors photo and Name in a pagination of pages each page displayed 60 person.
    - The pagination uses the component Person which has information different from the SingleShow and SearchShow.
    - when user hovers over each person, an overlay on the person
      shows up with some information the country, birthday, death
      date and a link for other details direct to the person page in
      tv-maze original site.
    - the user can search for any person using the SearchField in Navbar, the results displayed in the pagination.
    - if the user enters a name not in the people data API, the error image and message "There is No person with the name (Entered Name) " will appear, and Back to People button which refresh the page and back People Page.
    - the Loading image and message also will appear before the data fetched from API.
    - when the user clear the SearchField, all people data will displayed once again.

    - People page screen shot:

    [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670345508/HYF/React/tv-maze/n1valyhncvepplrfst3t.png)](https://some-url.dev/)

    - Searching for a certain person:

    [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670338130/HYF/React/tv-maze/ks5ondqb1cshm130bwzh.png)](https://some-url.dev/)

    - Error message when user searching for a person not found:

    [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670338796/HYF/React/tv-maze/m23fff1tx87bi3ecvkbv.jpg)](https://some-url.dev/)

5.  **Favorite page:**

    - the favorites page contains the all the shows that user click
      on their hearts to be favorites.
    - the favorites shows displayed in a pagination each page
      displayed 20 show.
    - there is a Clear Favorites button to clear the page from
      favorites, and it is appear only when there are favorites
      shows in the page.
    - if there are no favorites shows in the page there is a message
      "You Haven't Chosen any Favorites yet!" and a nice gif image.
    - the app remembers the favorite shows by stored the latest
      favorites in localStorage when user reload or refresh the app.

    - Favorites shows list screenshot:

    [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670338893/HYF/React/tv-maze/yatanifszeaz9yc2zoyk.png)](https://some-url.dev/)

6.  **About page:**
    - the page contains all data about the app, components, pages, styles and images like the readMe page.

- About page screenshot:

  [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670411751/HYF/React/tv-maze/us0ly8tpfwig5ip2ccls.png)](https://some-url.dev/)

- **Hooks folder:**

  - contains two files context.js and useFetch.js
  - useFetch.js file is a custom hook I used to fetch data from any
    api passes as a parameter and handle the appearance of data with
    the Error and Loading components.
  - context.js in that file the use of usefetch custom hook and
    fetch almost all data used in the app and almost all APIs.
  - in context.js file I created the context to allow the usage of
    different states and function created inside the context file in
    all the app files.
  - in context.js file also there are many function created to
    manage many states and all passed to different app pages and
    components.

- **Components:**

  1.  **Navbar:**

      - I use Bootstrap navbar and updated it.
      - I used the Bootstrap bundles and some other functions help
        in collapse incase clicking on any other part.

  2.  **SearchField:**

      - component of search contains a form of input field and
        search button.
      - used in different pages Home page, People page and Search
        page.
      - each page uses the SearchField passes to it the placeholder
        and the functionality special for the page.

  3.  **Login-Register:**

      - I used the Bootstrap Modal and I update it.
      - used the same code in Login and Register pages.

      - Login & Register components screenshot:

  [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670340777/HYF/React/tv-maze/cytc9metbzcauic8muge.jpg)](https://some-url.dev/)

  4.  **Error:**

      - contains an image and a message which changed according to
        the position that component calls it.
      - the page called the Error passes an Error message to it as a
        prop.
      - the Error components appears when the data can't fetched
        correctly or when user searches for something not found.

      - Error Image and Message screenshot:

      [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670341404/HYF/React/tv-maze/dbj50t6fvhxmhwgqsvuc.jpg)](https://some-url.dev/)

  5.  **Loading:**

      - contains an image a message which changed according to the position that component used it.
      - the page called the Loading passes an Loading message to it as a prop.
      - the Loading components appears before fetching any data.

      - Loading Image and Message:

      [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670341232/HYF/React/tv-maze/fklw1itpndwmsqklpezq.jpg)](https://some-url.dev/)

  6.  **FavIcon:**

      - the Heart, which appears in a white color for all shows
        displayed in home page, search page and show details page.
      - let the user make a show a favorite by clicking on it and
        becomes red to tell the user that the show now will be in
        the favorites list.
      - user can click on the heart again to unfavorite the show and
        remove it from the favorite list and heart becomes white
        again.
      - the action of FavIcon takes place in all pages.

  7.  **SingleShow:**

      - displays some info about the show image, name, rating and
        favIcon.

      - the pagination of Home page use it.

      - Single show screenshot:

      [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670341608/HYF/React/tv-maze/qqtij4yfewdww5ns49lb.jpg)](https://some-url.dev/)

  8.  **SearchShow:**

      - displays some info about the show and the pagination of search page use it.

  9.  **Person:**

      - displays some info about the show and the pagination people page use it.

      - Single person screenshot:

      [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670341611/HYF/React/tv-maze/od0ofwz98pbycrwk4a2f.jpg)](https://some-url.dev/)

  10. **pagination:**

      - I used the Bootstrap pagination and updated it.
      - the pagination used in different pages and displayed
        different number of items and different component. number
        and component are passed to it from the page call it.

  11. **Ads:**

      - contains two carousels which used in Home page and People
        page only.
      - I used the Bootstrap Carousel for React using a specific package.

      - Carousels screen shot

      [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670341726/HYF/React/tv-maze/x2etq6x51o1r20usoh5m.jpg)](https://some-url.dev/)

  12. **FilterSidebar:**

      - that component used once in the Home page.
      - I used 9 select boxes with options to filter out the shows
        according to the values inside.
      - options get their values from the data of shows displayed
        dynamically.
      - user can filter out the shows according to show Status,
        Type, Genre, Language, Rating, Runtime, WebChannel, NetWork
        and Country.
      - when user clicks on all, reset all shows.

      - FilterSidebar screenshot:

      [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670342098/HYF/React/tv-maze/c5pqofax6e6kzdu7er0e.jpg)](https://some-url.dev/)

      [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670342100/HYF/React/tv-maze/dvrkm6yite9ajbp6lnrv.jpg)](https://some-url.dev/)

  13. **Footer:**

      - footer contains some font awesome of the app.
      - font awesome direct to the tv-maze original sites Facebook,
                    Twitter, Instagram and Reddit.

      - Footer Screenshot:
        
    [![Header](https://res.cloudinary.com/hapiii/image/upload/v1670342259/HYF/React/tv-maze/u1sw8h55kyh9jdniebfe.jpg)](https://some-url.dev/)

- I use fontawsome and Bootsrtap Navbar, Pagination, cards, Modal and
            carousel.
- The app is Responsive for different devices screens.

- Screenshots in small screens:

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670343309/HYF/React/tv-maze/srxurpo7xjcnhkcgfwxb.png)](https://some-url.dev/)

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670343310/HYF/React/tv-maze/hdxublol4zs4fzawcwyz.jpg)](https://some-url.dev/)

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670343309/HYF/React/tv-maze/pehy92saqygsdyezbxju.png)](https://some-url.dev/)

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670343309/HYF/React/tv-maze/fc4wnkbrfbisid2ghzjn.png)](https://some-url.dev/)

[![Header](https://res.cloudinary.com/hapiii/image/upload/v1670343309/HYF/React/tv-maze/zacamlg2vrlyvj2thgmb.jpg)](https://some-url.dev/)

- The Original Tv-Maze site: [**TV-Maze Site**](https://www.tvmaze.com/shows)
