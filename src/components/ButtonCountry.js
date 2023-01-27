import Country from './Country'

const ButtonCountry = ({ country, languages, click, onClick }) => {
  let display =
    click === true ? <Country country={country} languages={languages} /> : <></>

  return (
    <div>
      <p>
        <span>{country.name}</span>
        <button onClick={onClick}>show</button>
      </p>
      {display}
    </div>
  )
}

export default ButtonCountry;
