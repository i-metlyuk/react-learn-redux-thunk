import axios from "axios";

export const client = async (endPoint, {body, ...customConfig} = {}) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    const config = {
        baseURL: 'https://jsonplaceholder.typicode.com/',
        url: endPoint,
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    }

    if (body) {
        config.data = body;
    }

    try {
        const response = await axios(config);

        if ((response.status !== 200) && (response.status !== 201)) throw new Error('failed to fetch');

        const data = await response.data;

        return data;
    } catch (e) {
        return Promise.reject(e.message);
    }
}

client.get = function (endPoint, customConfig = {}) {
    return client(endPoint, customConfig)
}

client.post = function (endPoint, body, customConfig = {}) {
    return client(endPoint, {...customConfig, body})
}

client.delete = function (endPoint, customConfig = {}) {
    return client(endPoint, {...customConfig, method: "DELETE"})
}

client.patch = function (endPoint, body, customConfig = {}) {
    return client(endPoint, {...customConfig, body, method: "PATCH"})
}