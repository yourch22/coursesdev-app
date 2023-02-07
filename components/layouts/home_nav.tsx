import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const  Home_nav = () => {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const token_ = process.env.NEXT_PUBLIC_API_SECRET;
    const [dataLanguage, setDataLanguage] = useState([]);
    const [dropdownOpenLanguaje, setdropdownOpenLanguaje] = useState(false);
    // useEffect(() => {
        // (async()=>{
        //     const response = await axios.get(`http://localhost:3000/api/languages`,{
        //         headers: {'Authorization': `Basic ${token_}`}
        //     })
        //     console.log("desde home nav",response)
        //     setDataLanguage(response.data);
        // })()
        // fetch("http://localhost:3000/api/languages",{
        //     headers: {'Authorization': `Bearer ${token_}`,'Content-Type': 'application/json'},
        // }).then((data) => data.json()).then((data) => setDataLanguage(data));
        // const fetchProducts = async () => {
        //     const {data} = await axios.get(`http://localhost:3000/api/languages`,{
        //         headers: {'Authorization': `Basic ${token_}`}
        //     })
        //     console.log("desde: ",data)
        //     setDataLanguage(data);
        //   }
        //   fetchProducts()
      
    // }, []);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`${url}/languages`, {
            headers: {
              'Authorization': `Barrer ${token_}`,
            }
          });
          setDataLanguage(response.data);
        } catch (error:any) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
        <div className="px-4 mt-4 mb-2 flex items-center justify-between">
            <div className="flex items-center select-none">
                <nav className="text-black font-bold my-2" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center"><a href="/">Home</a><svg className="fill-current w-3 h-3 mx-3"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                        </svg></li>
                        <li className="flex items-center"><a href="#" className="text-gray-500" aria-current="page">Coupons</a></li>
                    </ol>
                </nav>
            </div>
            <nav className="flex-grow pb-4 md:pb-0 md:flex md:justify-end flex-row sm:flex-row md:flex-row">
                <a className="hidden sm:hidden md:flex lg:flex xl:flex px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/">Udemy
                </a>
                <a className="relative hidden sm:hidden md:flex lg:flex xl:flex px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="{{ route('courses.itoo_es') }}">Cursos
                    <div className="absolute top-0 right-0 -mt-3 text-xs -mr-4 px-3 py-0.5 bg-red-500 text-white rounded-t-full rounded-br-full">
                        $8.97</div>
                </a>
                <div className="relative">
                    <button onClick={() => setdropdownOpenLanguaje(!dropdownOpenLanguaje)} className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                        <span>Idiomas</span><svg fill="currentColor" viewBox="0 0 20 20"
                            className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div x-show="open" className={`${dropdownOpenLanguaje ? `visible` : 'invisible'} absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50`}>
                        <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                            {
                                Object.keys(dataLanguage).map((item) => (
                                    <Link href={'/courses-free/[languege]'} as={`/courses-free/${dataLanguage[item].language}`} key={dataLanguage[item].id} className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    >{dataLanguage[item].language}</Link>
                                ))
                            }

                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}