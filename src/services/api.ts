import axios from 'axios'

export async function api(user: string) {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${user}`,
    )
    return response.data.items
  } catch (error) {
    console.error(error)
  }
}
