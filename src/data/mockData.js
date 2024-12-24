export const routes = [
	{
		id: 1,
		name: "Маршрут через Итум-Кали",
		description: "Живописный маршрут через горные ущелья и древние башни",
		location: "Итум-Кали",
		duration: 6,
		distance: 15,
		difficulty: "Средний",
		rating: 4.8,
		image: "/download.jpg",
		reviews: [
			{
				id: 1,
				userName: "Адам",
				rating: 5,
				comment: "Отличный маршрут!",
				date: "2024-03-15",
			},
			{
				id: 2,
				userName: "Марьям",
				rating: 4,
				comment: "Красивые виды",
				date: "2024-03-10",
			},
		],
	},
	{
		id: 2,
		name: "Озеро Кезеной-Ам",
		description: "Маршрут к самому большому высокогорному озеру Кавказа",
		location: "Веденский район",
		duration: 8,
		distance: 20,
		difficulty: "Сложный",
		rating: 4.9,
		image: "/download2.jpg",
		reviews: [
			{
				id: 3,
				userName: "Ислам",
				rating: 5,
				comment: "Невероятные пейзажи!",
				date: "2024-03-12",
			},
		],
	},
	{
		id: 3,
		name: "Грозный Сити тур",
		description: "Обзорная экскурсия по современной столице",
		location: "Грозный",
		duration: 4,
		distance: 8,
		difficulty: "Лёгкий",
		rating: 4.7,
		image: "/download3.jpg",
		reviews: [
			{
				id: 4,
				userName: "Амина",
				rating: 5,
				comment: "Отличная экскурсия!",
				date: "2024-03-14",
			},
		],
	},
];

export const categories = [
	{ id: 1, name: "Горные маршруты" },
	{ id: 2, name: "Городские экскурсии" },
	{ id: 3, name: "Исторические места" },
	{ id: 4, name: "Природные достопримечательности" },
];

// добавляем к существующим данным
export const bookings = [
	{
		id: 1,
		routeId: 1,
		userId: 1,
		date: "2024-03-25",
		numberOfPeople: 2,
		status: "confirmed",
		totalCost: 3000,
		route: {
			name: "Маршрут через Итум-Кали",
			location: "Итум-Кали",
			duration: 6,
		},
	},
	{
		id: 2,
		routeId: 2,
		userId: 1,
		date: "2024-04-01",
		numberOfPeople: 4,
		status: "pending",
		totalCost: 6000,
		route: {
			name: "Озеро Кезеной-Ам",
			location: "Веденский район",
			duration: 8,
		},
	},
];
