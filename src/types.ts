export type CountryDataType = {
  date: string,
  newConfirmed: number,
  totalConfirmed: number,
  newRecovered: number,
  totalRecovered: number
}

export type allCountriesDataType = {
  Country: string,
  NewConfirmed: number,
  TotalConfirmed: number,
}

export type WorldPagePropsType = {
  allCountriesData: allCountriesDataType[]; // 配列型に修正
};

type CountriesJsonType = {
  Country: string,
  Slug: string,
}[]

export type TopPageType = {
  countriesJson: CountriesJsonType,
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countryData: CountryDataType,
  loading: boolean,
}

export type SelectorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countriesJson: CountriesJsonType,
}

export type ResultType = {
  countryData: CountryDataType,
  loading: boolean,
}