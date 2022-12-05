const Person = ({ person }) => {
  const { name, birthday, deathday, image, country, url } = person;

  return (
    <>
      {person && (
        <div className="pagination-person">
          <img
            src={image ? image.medium : "https://plchldr.co/i/210x295"}
            alt={person.name}
          />
          <h5>{name}</h5>
          <ul className="list-unstyled person-info">
            {country && (
              <li>
                <strong>Country: </strong>
                {country.name}
              </li>
            )}
            {birthday && (
              <li>
                <strong>Birthday: </strong>
                {birthday}
              </li>
            )}
            {deathday && (
              <li>
                <strong>Deathday: </strong>
                {deathday}
              </li>
            )}
            {url && (
              <li>
                <strong>
                  <a href={url}>details</a>
                </strong>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Person;
