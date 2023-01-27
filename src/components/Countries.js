import ButtonCountry from './ButtonCountry'
import Country from './Country'

const Countries = ({ countries, search, click, onClick }) => {
  if (search === '') {
    return <></>
  }
  const filteredData = countries
    .filter((country) => {
      return (
        country.name.common.toLowerCase().indexOf(search.toLowerCase()) !==
          -1 &&
        country.capital !== undefined &&
        country.languages !== undefined
      )
    })
    .map((country) => {
      return {
        name: country.name.common,
        capital: country.capital[0],
        area: country.area,
        languages: Object.values(country.languages),
        flag: country.flags.svg,
      }
    })
  if (filteredData.length === 0) {
    return <></>
  } else if (filteredData.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filteredData.length === 1) {
    return (
      <Country
        country={filteredData[0]}
        languages={filteredData[0].languages}
      />
    )
  }

  return (
    <div>
      {filteredData.map((country) => {
        return (
          <ButtonCountry
            key={country.name}
            country={country}
            languages={country.languages}
            click={click}
            onClick={onClick}
          />
        )
      })}
    </div>
  )
}

export default Countries
