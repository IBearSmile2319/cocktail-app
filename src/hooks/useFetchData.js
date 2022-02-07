import { useEffect, useState } from 'react'


export const useFetchData = (url) => {
  const [data, setData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
  useEffect(async () => {
    if (localStorage.getItem('data')) return setData(JSON.parse(localStorage.getItem('data')))
    const res = await fetch(url, {
      method: "GET",
      crossDomain: "true",
      Headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "http://www.thecocktaildb.com"
      }
    }).then(res => res.json())
      .then(ress => { return ress })
      .catch(err => {
        console.log(err)
      })
    res.drinks.forEach(e => {

      e.price = Math.floor(Math.random() * (100 - 1) + 1)
    })
    setData(res.drinks)
    localStorage.setItem('data', JSON.stringify(res.drinks))
    // optional
    // 1.hace un filtro para sacar las categorias del objeto drinks
    // const categories = Array.from(new Set(deta.drinks.map(e => e.strCategory)))
    // 2. a si mismo dentro de cada cate goria biene con su dato especifico perteneciente a la categoria
    // 3.se crea un objeto con la categoria como key y el array de datos de la categoria como value
    // let temp = {}
    // categories.forEach(cat => {
    //   temp[cat] = deta.drinks.filter(e => e.strCategory === cat)
    // })
    // 4.datos filtrados por categoria
    // setByCategory(temp)
    // localStorage.setItem("temp", JSON.stringify(temp))
  }, [])

  return { data }
}

export const useFetchSearchData = async (url) => {
  const search = await fetch(url, {
    method: "GET",
    crossDomain: "true",
    Headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "http://www.thecocktaildb.com"
    }

  }).then(res => res.json())
    .catch(err => {
      console.log(err)
    })
  return { drinks: search.drinks }
}