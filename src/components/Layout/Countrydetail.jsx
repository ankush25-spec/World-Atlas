import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryIndData } from '../../API/Postapi'

const Countrydetail = () => {
    const params = useParams()

    const [isPending, startTransition] = useTransition()
    const [countriesdata, setcountriesdata] = useState([])
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id)
            setcountriesdata(res.data)
        })
    }, [])
    if (isPending) return <h1>Loading...</h1>
    return (
        <section className='mx-9 rounded-4xl border-t-3 border-b-4 border-white/10 h-auto py-6 px-4 md:h-[74vh] bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] flex justify-center items-center mt-10'>
            {countriesdata.map((elem, idx) => {
                return (
                    <div key={idx} className='flex flex-col md:flex-row items-center gap-6 md:gap-30 lg:gap-60'>
                        <div>
                            <img className='rounded' src={elem.flags.png} alt="" />
                        </div>
                        <div >
                            <h1 className='text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold'>{elem.name?.common}</h1>
                            <div className='flex flex-col mt-10'>
                                <p className='md:text-[20px] lg:text-xl leading-loose'><span className='text-[rgba(255,255,255,0.5)]'>Native name : </span>
                                    {Object.keys(elem.name.nativeName).map((key) => {
                                        return elem.name.nativeName[key].common
                                    }).join(', ')}
                                </p>
                                <p className='md:text-[18px] lg:text-xl leading-loose'><span className='text-[rgba(255,255,255,0.5)]'>Population : </span> {elem.population}</p>
                                <p className='md:text-[18px] lg:text-xl leading-loose'><span className='text-[rgba(255,255,255,0.5)]'>Region : </span> {elem.region}</p>
                                <p className='md:text-[18px] lg:text-xl leading-loose'><span className='text-[rgba(255,255,255,0.5)]'>Sub-region : </span> {elem.subregion}</p>
                                <p className='md:text-[18px] lg:text-xl leading-loose'><span className='text-[rgba(255,255,255,0.5)]'>Capital : </span> {elem.capital[0]}</p>
                                <p className='md:text-[18px] lg:text-xl leading-loose'><span className='text-[rgba(255,255,255,0.5)]'>Top Level Domain : </span> {elem.tld}</p>
                                <p className='md:text-[18px] lg:text-xl leading-loose'><span className='text-[rgba(255,255,255,0.5)]'>Currencies : </span>
                                    {Object.keys(elem.currencies).map((key) => {
                                        return `${elem.currencies[key].name} ( ${elem.currencies[key].symbol} )`
                                    }).join(', ')}
                                </p>
                                <p className='md:text-[18px] lg:text-xl leading-loose'><span className='text-[rgba(255,255,255,0.5)]'>Languages : </span>
                                    {Object.keys(elem.languages).map((key) => {
                                        return elem.languages[key]
                                    }).join(', ')}
                                </p>
                            </div>
                        </div>
                    </div>)
            })}

        </section>

    )
}

export default Countrydetail