export function filterArray(array, query) {
  array.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
}

// function handleSearch(event) {
//   setCountry(event.target.value);
//   setCountryData(
//     data.filter((item) =>
//       item.name.toLowerCase().includes(country.toLowerCase())
//     )
//   );
// }

// function handleChange(event) {
//   const { value } = event.target;
//   setRegion(value);
//   setFilteredData(
//     allData.filter(
//       (item) => item.region.toLowerCase() === value.toLowerCase()
//     )
//   );
// }
