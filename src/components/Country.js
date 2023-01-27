import Language from './Language'

const Country = ({ country, languages }) => {
  const flagDes = `${country.name} flag`
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {languages.map((language) => (
          <Language key={language} language={language} />
        ))}
      </ul>
      <img src={country.flag} alt={flagDes} />
    </div>
  )
}

export default Country
