import axios from 'axios'
import { eventbus } from '@/eventbus/eventbus'

const baseURL = 'http://localhost:3000/posts'

export function getPosts () {
  axios.get(baseURL + '/').then((response) => {
    let posts = response.data
    eventbus.$emit('send posts', posts)
  }, (response) => {
    console.log(response)
  })
}

export function deletePost (id, index) {
  const token = localStorage.getItem('Token')
  let config = {
    headers: { 'x-access-token': token }
  }
  axios.delete(baseURL + '/' + id, config).then((response) => {
    console.log('removed succesfully')
    console.log(index)
    eventbus.$emit('remove post', index)
  }, (response) => {
    console.log(response)
  })
}
