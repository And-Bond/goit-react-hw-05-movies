import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/trending/movie/day'
})

const fetchApi = async(settings) => {
    const response = await instance.get(`https://api.themoviedb.org/3/${settings}`,{
        params:{
            api_key: '2e46478410a3b7ef74a24e2b089ec9d3',
        }
    })
    console.log(response)
    return response.data
}
// async function fetchApi() {
//     try {
//       const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day',{
//         params: {
//             api_key: '2e46478410a3b7ef74a24e2b089ec9d3'
//         }
//       });
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

// const fetchApi = async() => {
//     const defaultLink = 'https://api.themoviedb.org/3/trending/movie/day?api_key='
//     const APIKEY = '2e46478410a3b7ef74a24e2b089ec9d3'
//     return await fetch(`${defaultLink}${APIKEY}`).then(r => r.json())
// }

export default fetchApi