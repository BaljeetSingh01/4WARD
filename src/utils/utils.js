import axios from "axios"

// const AxiosApi = (endPoint, method, header, data) => {

//     return new Promise((resolve, reject) => {

//         axios({
//             url: endPoint,
//             method: method,
//             headers: header,
//             data: data,
//         }).then((res) => { return resolve(res) }).catch((error) => reject(error))
//     })
// }


// export const getApi = (endPoint) => {

//     return (
//         AxiosApi(endPoint, 'get')
//     )
// }

// export const postApi = (endPoint, header, data) => {

//     return (
//         AxiosApi(endPoint, 'post', header, data)
//     )

// }


export const axiosget = (endpoint, methodd) => {
    return new Promise((resolve, reject) => {
        axios({
            url: endpoint,
            method: methodd,

        }).then((res) => resolve(res)).catch((err) => reject(err))
    })
}



export const axiospost = (endpoint, method, header, data) => {
    return new Promise((resolve, reject) => {
        axios({
            url: endpoint,
            method: method,
            headers: header,
            data: data
        }).then((res) => { return resolve(res) }).catch((err) => reject(err))
    })
}

