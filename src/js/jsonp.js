import originJSONP from 'jsonp'   //引用jsonp

function param(data) {
    let url = ''
    for (let i in data) {
        let value = (data[i] !== undefined) ? data[i] : ''
        url += `&${i}=${encodeURIComponent(value)}`
    }
    // 删掉第一个 &
    return url ? url.substring(1) : ''
}


export default function jsonp(url, data, options) {

    //地址判断和调用处理地址函数

    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    //返回一个Promise

    return new Promise((resolve, reject) => {
        originJSONP(url, options, (err, data) => {  //用原始的jsonp调用有三个参数
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}