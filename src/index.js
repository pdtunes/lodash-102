/* import _ from 'lodash'; */

import { orderBy, isEqual, debounce } from 'lodash'; 

const products = [
	{
		name: "Product A",
		price: 15.99,
	},
	{
		name: "Product B",
		price: 8,
	},
	{
		name: "Product C",
		price: 10.5,
	},
	{
		name: "Product D",
		price: 4.95,
	},
];