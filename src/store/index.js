//#####################
//LocalStorage handlers 
const USERS_KEY = 'usersData'

export function getUsersData() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || {}
}

export function getUserData(userId) {
  let usersData = getUsersData()
  return usersData[userId]
}

export function getUserDataByNameAndCard(fullName, readersCard) {
  let usersData = getUsersData()
  for (let userId in usersData) {
    if (usersData[userId].readersCard === readersCard && usersData[userId].fullName === fullName) {
      return usersData[userId]
    }
  }
}

export function setUserData(userId, userData) {
  let usersData = getUsersData()
  usersData[userId] = userData
  localStorage.setItem(USERS_KEY, JSON.stringify(usersData))
}

//#####################
//New user template
export class User {
  constructor(
    firstName = '',
    lastName = '',
    email = '',
    password = '',
    readersCard = Math.floor(Math.random() * 0x1000000000).toString(16).padStart(9, '0').toUpperCase(),
    visitsCount = 1,
    booksRent = [],
    bonuses = 0
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = `${firstName} ${lastName}`.trim()
    this.initials = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`
    this.email = email
    this.password = password
    this.readersCard = readersCard
    this.visitsCount = visitsCount
    this.booksRent = booksRent
    this.bonuses = bonuses
  }
}