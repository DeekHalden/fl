import axios from 'axios'
import { eventbus } from '@/eventbus/eventbus'

const baseURL = '/users'

export function doLogin (data, router) {
  axios.post(baseURL + '/login', data).then((response) => {
    setToken(response.data.token)
    eventbus.$emit('login successful', data.username)
    localStorage.setItem('username', data.username)
  }, (response) => {
    console.log(response)
  })
}
export function doLogout (data) {
  axios.get(baseURL + '/logout').then((response) => {
    destroyToken()
  })
}

export function setToken (data) {
  console.log(data)
  localStorage.setItem('Token', data)
}

export function getToken () {
  return localStorage.getItem('Token')
}

function destroyToken () {
  localStorage.removeItem('Token')
}

