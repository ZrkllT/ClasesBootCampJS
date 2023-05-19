
const peticiones = (url) =>{
    return new Promise((resolve, reject) =>{
        fetch(url)
            .then((hero) => hero.json())
            .then((heroData) => resolve(heroData))
            .catch((error) => reject(error))
    })

}

const peticionAjax = (url) =>{
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: url,
            type: 'GET',
            data: {},
            success: function(data){
                resolve(data);
            },
            error: function(error){
                reject(error)
            }
        })
    })
}

export default { peticiones, peticionAjax }