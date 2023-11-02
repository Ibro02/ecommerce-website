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

export const NavbarRoutes = [
	{ name: "Home", path: "/home" },
	{ name: "Categories", path: "/home" /**CategoriesPage */ },
	{ name: "Sell", path: "/home/new-product" /**NewSalePage */ },
	{ name: "Profile", path: "/home/profile" /**ProfilePage */ }, //#-> for now, Profile button is sing out button
];
export interface IUser {
	[key: string]: string|number|null;
	username: string;
	password: string;
	cityId: number;
	description: string;
	email: string;
	firstName: string;
	id: number | null;
	lastName: string;
	roleId: number;
}

export interface IInputProps {
	[key: string]: string;
	title: string;
	name: string;
}

export const ProfileProps = [
	{ title: "First name", name: "firstName" },
	{ title: "Last name", name: "lastName" },
	{ title: "Email", name: "email" },
	{ title: "Username", name: "username" },
	{ title: "Password", name: "password" },
	{ title: "Phone number", name: "phone" },
	{ title: "Description", name: "description" },
	{ title: "City", name: "cityId" },
	// {title: "Country", name:},
];

export const ProductProps = 
[
	{ title: "Product name", name: "name" },
	{ title: "Description", name: "description" },
	{ title: "Price", name: "price" },
	{ title: "Category", name: "productCategoryId" },
	{ title: "Status", name: "statusId" }	
]