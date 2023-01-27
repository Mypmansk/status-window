import React from 'react';
import cities from './cities.json';

function Option(props) {

	let BigCities = [];

	cities.forEach((item, i) => {
		if (Number(cities[i].population) > 50000) BigCities.push(cities[i]);
	});

	function compare(a, b) {
		if (a.city > b.city) return 1;
		if (a.city === b.city) return 0;
		if (a.city < b.city) return -1;
	}
	BigCities.sort(compare);

	let NameSort = BigCities.slice();

	function BiggestCity() {
		function compareNumeric(a, b) {
			if (Number(a.population) > Number(b.population)) return -1;
			if (Number(a.population) === Number(b.population)) return 0;
			if (Number(a.population) < Number(b.population)) return 1;
		}
		let PopulationList = BigCities.sort(compareNumeric);
		let IndexOfBiggestCity = NameSort.indexOf(PopulationList[0]);
		NameSort.splice(IndexOfBiggestCity, 1);

		return PopulationList[0];
	}
	NameSort.unshift(BiggestCity());

	return <>
		{NameSort.map((optionName, index) => <option name={optionName} key={index}>{NameSort[index].city}</option>)}

	</>





};

export default Option;