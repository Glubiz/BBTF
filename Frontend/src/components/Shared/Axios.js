import axios from 'axios'
export const Axios = (URL, Params = {}, Method = "POST") => { 
    return new Promise((resolve, reject) => {
        axios({
            method: Method,
            url: URL,
            params: Params
        })
        .then(result => {
            resolve(result.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}
