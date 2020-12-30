import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID DEDjE2fQ4tCzlrbWYkPPfKABv7Ekzv6uaj4DhORzX08'
    }
});