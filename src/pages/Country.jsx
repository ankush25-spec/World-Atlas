import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../API/Postapi'
import Countrycard from '../components/UI/Countrycard'

import Searchfilter from '../components/UI/Searchfilter';


const Country = () => {

  const [isPending, startTransition] = useTransition()
  const [countries, setcountries] = useState([])
  const [search, setsearch] = useState('')
  const [filter, setfilter] = useState('All')
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData()
      setcountries(res.data)
    })
  }, [])


  function searchcountry(country) {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country
  }
 
  function filterRegion(country){
    if(filter !== 'All'){
      return country.region == filter
    }
    return country
  }

  const filteredcountries = countries.filter((elem) => {
    return searchcountry(elem) && filterRegion(elem)
  })

  if (isPending) return <h1>Loading...</h1>

  return (
    <section className='max-w-300 mx-auto'>
      <Searchfilter search={search} setsearch={setsearch} filter={filter} setfilter={setfilter} countries={countries} setcountries={setcountries} />
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 p-5'>
        {filteredcountries.map((elem, idx) => {
          return <Countrycard key={idx} countries={elem} />
        })}
      </div>
    </section>

  )
}

export default Country