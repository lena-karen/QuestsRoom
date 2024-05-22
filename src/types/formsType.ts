export interface IOrder {
	name: string
	phone: string
  	peopleCount: number
  	isLegal: boolean
}

export interface ISignUp {
	id: string
	email: string
	password: string
}

export enum FORM_FIELDS {
	NAME = 'name',
	PHONE = 'phone',
	PEOPLE_COUNT = 'peopleCount',
	IS_LEGAL = 'isLegal',
	EMAIL = 'email',
	PASSWORD = 'password'
}