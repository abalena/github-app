import axios from 'axios';

export function searchUsersByLocation(location){
  const params = {
    'q': `location:${location}`,
    'per_page': '10'
  }
  return axios.get(`https://api.github.com/search/users?`, {params})
}
