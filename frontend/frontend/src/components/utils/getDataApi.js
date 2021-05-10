import axios from 'axios'
/**
 * The following class sends a get request using axios
 * to open weather for weather data based on the city 
 * param passed to it.
 * @param {city} QUERY 
 * @returns JSON weather data for the city.
 */
export const getDataApi = async (QUERY = [{ key: 'q', value: 'galway' }]) => {
  const URL_BASE = `https://api.openweathermap.org/data/2.5/weather?appid=4c877f2673f01a25cab9395e71356dad&units=metric`
  const PARAMS = QUERY.reduce((acum, elem) => `${acum}${elem?.key && elem?.value ? `&${elem.key}=${elem.value}` : ''}`, '')
  return axios.get(`${URL_BASE}${PARAMS}`)
}
