

const peticiones = (url) =>{
    return new Promise((resolve, reject) =>{
        fetch(url)
            .then((hero) => hero.json())
            .then((heroData) => resolve(heroData))
            .catch((err) => console.log(err))
    })

}

export default { peticiones }