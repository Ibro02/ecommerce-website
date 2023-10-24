
export const Profiles = [
	{
		name: "Ibrahim",
		surname: "Hodzic",
		email: "ibrahim@gmail.com",
		username: "ibro",
		password: "12345",
		role: "administrator",
		phone: undefined,
		description: undefined,
		city: "Travnik",
		country: "Bosnia and Herzegovina",
	},
	{
		name: "Eldar",
		surname: "Dautovic",
		email: "eldo@gmail.com",
		username: "eldo",
		password: "nevolja",
		role: "customer",
		phone: undefined,
		description: undefined,
		city: "Mostar",
		country: "Bosnia and Herzegovina",
	},
];

export const NavbarRoutes = 
[
	{name: "Home", path:"/home"},
	{name: "Categories", path:"/home"/**CategoriesPage */},
	{name: "Sell", path:"/home"/**NewSalePage */},
	{name: "Profile", path:"/"/**ProfilePage */} //#-> for now, Profile button is sing out button

]
