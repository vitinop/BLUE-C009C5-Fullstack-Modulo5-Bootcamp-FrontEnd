const Api = {
    apiUrl: 'http://localhost:3000',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
    fetchPost:(metastore) => {
        return fetch(Api.apiUrl + '/add', {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(metastore)
        })},
    fetchPut:(metastore, id) => {
        return fetch(`${Api.apiUrl}/update/${id}`, {
            method: 'PUT',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(metastore)
        })
    },
    fetchDelete: (id) => {
        return fetch(`${Api.apiUrl}/delete/${id}`, {
            method: 'DELETE'
        })    
    }
}

export default Api