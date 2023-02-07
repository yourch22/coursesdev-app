import React, { useEffect } from "react";
import Image from 'next/image';
import { useState } from "react";
import mainLogo from '../../public/assets/logo.png';
import logospanish from '../../public/assets/english.jpg';
import logoenglish from '../../public/assets/spanish.jpg';
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export const Nav = () => {
    const url = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const token_ = process.env.NEXT_PUBLIC_API_SECRET;
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [dropdownCategOpen, setdropdownCategOpen] = useState(false);
    const [dataCategory, setDataCategory] = useState([]);
    const [dataCategoryRoute, setDataCategoryroute] = useState([]);
    useEffect(()  => {
        fetch(url+"/category",{
            headers: {'Authorization': `Barrer ${token_}`}
        })
          .then((data) => data.json())
          .then((data) => setDataCategory(data));
        }, []);
        const [dataSubCategory, setDataSubCategory] = useState([]);
        const [hovered, setHovered] = useState(false);
        const handleMouseEnter = async (event) => {
          setHovered(true);
            // const elemento = document.getElementById("listasubcategorias");
            let idCateg = Number(event.currentTarget.id) || 1;
            setDataCategoryroute(event.currentTarget.title);
            const response = await axios.get(`${url}/subcategory?id_category=${idCateg}`,{
                headers: {'Authorization': `Barrer ${token_}`}
            })
            setDataSubCategory(response.data);
          }

          const handleMouseLeave = () => {
            setHovered(false);
            
          }
        const onMouseEnterCateg=() => {
            // setdropdownCategOpen(true);
        }
        const onMouseLeaveCateg=() => {
            setdropdownCategOpen(false);
        }
    return (
        <div className="bg-[#273444] relative max-w-full mb-2 md:mb-4 z-10">
            <div className="bg-dark flex text-gray-700 max-w-md mx-auto relative sm:max-w-none sm:w-full px-2 md:px-4 xl:max-w-screen-xl z-10">
                <div className="bg-dark mb-2 ms:mb-2 md:mb-0 lg:mb-0 xl:mb-0 flex flex-col w-full">
                    <div className="text-xs hidden items-center text-gray-300 sm:flex sm:py-2 sm:w-full sm:leading-4 md:py-3 md:leading-6">
                        <a href="https://www.facebook.com/CursosDev.com.coupons" target="_blank" className="inline-flex items-center mr-4 underline hover:no-underline hover:text-white">
                            <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/CursosDev" target="_blank" className="inline-flex items-center mr-4 underline hover:no-underline hover:text-white">
                            <svg viewBox="0 0 24 24" className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                            </svg>
                        </a>
                        <span className="inline-flex">
                            <a href="https://www.youtube.com/channel/UCqqevI_aDAppBZPQO5FNrfQ" target="_blank" className="inline-flex items-center mr-4 hover:text-white">
                                <svg width="18" height="14" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z" fill="white" />
                                </svg>
                            </a>
                        </span>
                    </div>
                    <div className="bg-dark flex flex-col items-start sm:flex-row sm:items-center">
                        <a href="/" className="h-10 flex-shrink-0 my-3 sm:my-0">
                            <Image src={mainLogo} alt="log" width={157.5} height={40} className="h-full rounded" />
                        </a>
                        <div className="flex-1 flex w-full min-w-0 sm:px-2 md:px-4 lg:px-16 xl:px-24">
                            <input type="search" name="serch" id="languaje"
                                placeholder="¿Qué buscaremos hoy?"
                                className="border border-r-0 rounded-l block flex-1 min-w-0 leading-6 text-sm px-4 focus:outline-none buscador" />
                            <button type="submit"
                                className="flex-shrink-0 bg-gray-700 hover:bg-gray-600 px-4 py-2 leading-6 text-white rounded-r text-sm buscar">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-dark mb-2 ms:mb-2 md:mb-0 lg:mb-0 xl:mb-0 absolute right-0 top-0 flex flex-shrink-0 px-2 pt-3 md:flex-col sm:relative sm:pt-8 md:pt-1 sm:px-0 md:py-0">
                    <div className="flex md:w-full flex-shrink-0 text-gray-300 md:py-3 md:justify-end">
                        <a href="/como-obtengo-cupon-gratis" className="flex items-center text-xs md:mr-4">
                            <span className="hidden md:flex underline hover:no-underline font-medium hover:text-white">¿Como obtengo Cupon Gratis?</span>
                        </a>
                    </div>
                    <div className="flex md:w-full flex-shrink-0">
                        <a href="www.facebook.com/groups/cuponesudemycursosonlinegratis/" target="_blank" className="hidden sm:flex items-center text-sm ml-2 md:ml-0 md:mr-8">
                            <span className="flex rounded bg-gray-700 hover:bg-gray-600 p-3 md:p-2 md:mr-2">
                                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentcolor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 388.227 388.227">
                                    <path d="M194.113,190.505c36.691,0,66.438-36.129,66.438-80.695c0-44.567-9.768-80.696-66.438-80.696
                                                c-56.672,0-66.438,36.129-66.438,80.696C127.676,154.376,157.422,190.505,194.113,190.505z"/>
                                    <path d="M319.455,310.459c-1.229-77.637-11.369-99.759-88.959-113.763c0,0-10.924,13.917-36.381,13.917
                                                c-25.457,0-36.379-13.917-36.379-13.917c-76.744,13.85-87.502,35.645-88.916,111.24c-0.115,6.173-0.168,6.497-0.189,5.78
                                                c0.004,1.343,0.01,3.826,0.01,8.157c0,0,18.473,37.239,125.475,37.239s125.477-37.239,125.477-37.239
                                                c0-2.782,0.002-4.718,0.004-6.033C319.576,316.283,319.533,315.424,319.455,310.459z"/>
                                    <path d="M286.313,176.097c29.801,0,53.959-29.343,53.959-65.539c0-36.197-7.932-65.54-53.959-65.54
                                                c-7.742,0-14.404,0.833-20.135,2.388c10.631,19.598,12.088,43.402,12.088,62.403c0,21.514-5.832,42.054-16.572,59.061
                                                C269.076,173.48,277.441,176.097,286.313,176.097z"/>
                                    <path d="M388.111,273.521c-1-63.055-9.234-81.022-72.252-92.396c0,0-8.871,11.304-29.547,11.304c-0.855,0-1.684-0.026-2.5-0.063
                                                c13.137,5.923,25.088,14.17,33.889,26.238c15.215,20.863,18.713,48.889,19.435,90.062c42.397-8.378,51.086-25.873,51.086-25.873
                                                c0-2.28,0-3.844,0.004-4.913C388.209,278.256,388.174,277.582,388.111,273.521z"/>
                                    <path d="M101.912,176.097c8.873,0,17.236-2.617,24.621-7.226c-10.74-17.007-16.572-37.547-16.572-59.061
                                                c0-19.002,1.457-42.806,12.086-62.403c-5.73-1.555-12.391-2.388-20.135-2.388c-46.027,0-53.957,29.343-53.957,65.54
                                                C47.955,146.754,72.113,176.097,101.912,176.097z"/>
                                    <path d="M104.412,192.365c-0.814,0.037-1.643,0.063-2.5,0.063c-20.676,0-29.547-11.304-29.547-11.304
                                                c-63.016,11.374-71.252,29.34-72.25,92.396c-0.065,4.062-0.098,4.735-0.115,4.358c0.002,1.069,0.004,2.633,0.004,4.913
                                                c0,0,8.69,17.495,51.084,25.873c0.725-41.172,4.221-69.198,19.438-90.062C79.326,206.536,91.275,198.288,104.412,192.365z"/>
                                </svg>
                            </span>
                            <span className="hidden md:flex text-gray-300 hover:text-white">Facebook</span>
                        </a>
                        <div onClick={() => setdropdownOpen(!dropdownOpen)} className="">
                            <a href="#" className="items-center text-sm flex ml-2">
                                
                                {/* <div className="items-center text-sm flex ml-2">
                                    <span className="relative flex rounded bg-gray-700 hover:bg-gray-600 p-3 md:p-2 md:mr-2">
                                        <Image src={logospanish} alt="español" width={1.5} height={1.5} className="w-4 h-4 md:w-6 md:h-6" />
                                    </span>
                                    <span className="hidden md:flex text-gray-300 hover:text-white">English</span>
                                </div> */}

                                <div className="items-center text-sm flex ml-2">
                                    <span className="relative flex rounded bg-gray-700 hover:bg-gray-600 p-3 md:p-2 md:mr-2">
                                        <Image src={logoenglish} alt="ingles" width={1.5} height={1.5} className="w-4 h-4 md:w-6 md:h-6" />
                                    </span>
                                    <span className="hidden md:flex text-gray-300 hover:text-white">Español</span>
                                </div>

                                <svg className="hidden md:inline-flex pl-2 h-2 text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enableBackground="new 0 0 129 129" fill="currentColor">
                                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                                </svg>
                            </a>
                            <div className={`${dropdownOpen ? `visible` : 'invisible'} origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#273444] ring-1 ring-black ring-opacity-5`} 
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <ul className="list-reset">
                                    <li><a href="/"
                                        className="px-4 py-2 block text-gray-300 no-underline hover:no-underline hover:text-white">Español</a>
                                    </li>
                                    <li><a href="/"
                                        className="px-4 py-2 block text-gray-300 no-underline hover:no-underline hover:text-white">Inglés</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="items-center text-sm flex ml-2 md:hidden" onClick={() => { setOpen(!open) }}>
                            <span className={`flex rounded bg-gray-700 hover:bg-gray-600 p-3 relative md:p-2 md:mr-2 ${open==true ? "bg-green-500 hover:bg-green-600" : ""}`}>
                                <img src="https://obr.now.sh/remix/system/menu-line/eceef2" className={`w-4 h-4 md:w-6 md:h-6 ${open==false ? "visible" : "invisible"}`} />
                                <img src="https://obr.now.sh/remix/system/close-line/eceef2" className={`w-4 h-4 absolute left-0 top-0 md:w-6 md:h-6 m-3 ${open==true ? "visible" : "invisible"}`} />
                            </span>
                        </button>
                    </div>
                    {/* <div onClick={() => setdropdownOpen(!dropdownOpen)}
                            className="overflow-hidden rounded-full w-8 h-8 flex justify-center items-center
                                hover:cursor-pointer">
                            Toggle
                        </div>

                        <div className={`${dropdownOpen ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
                            <a href="javascript:void(0)" className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
                                Dashboard
                            </a>
                            <a href="javascript:void(0)" className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
                                Settings
                            </a>
                        </div> */}

                </div>
            </div>

            <div className={`bg-[#475260] absolute w-full z-0 transform lg:block-important md:relative ${open ? "visible" : "invisible"} md:visible lg:visible xl:visible`}>
                <nav className="bg-[#475260] w-full mt-2 md:mt-4 px-2 max-w-md mx-auto sm:max-w-none">
                    <ul className="bg-[#475260] flex flex-col md:flex-row md:justify-start md:items-center text-gray-700 max-w-md mx-auto relative sm:max-w-none sm:w-full xl:max-w-screen-xl 
                                    shadow rounded md:shadow-none md:rounded-none md:px-2 xl:px-4">
                        <li className="mr-6 my-2 md:my-0">
                            <a href="/courses/itoo"
                                className="block py-1 md:py-3 pl-1 align-middle text-base font-bold text-gray-200 no-underline hover:text-white">
                                <i className="fas fa-university mr-3"></i><span className="relative pb-1 md:pb-0 text-sm">Cursos
                                    <div className="absolute top-0 right-0 -mt-4 text-xs -mr-4 px-3 py-0.5 bg-red-500 rounded-t-full rounded-br-full">
                                        Desct</div>
                                </span>
                            </a>
                        </li>
                        <li  className={`mr-6 my-2 md:my-0 hidden lg:block xl:block'}`}>
                            <a onMouseEnter={onMouseEnterCateg} onClick={() => setdropdownCategOpen(!dropdownCategOpen)} className="cursor-pointer navegacionbuton inline-flex items-center py-1 md:py-3 pl-1 align-middle text-base font-bold text-gray-300 no-underline hover:text-white">
                                <i className="fas fa-tasks fa-fw mr-3"></i><span
                                    className="pb-1 md:pb-0 text-sm">Categorias</span>
                                <svg className="text-gray-500 h-5 w-5 group-hover:text-gray-500 hover:text-white group-focus:text-gray-500 transition ease-in-out duration-150"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <div className={`bg-white ${dropdownCategOpen ? 'visible' : 'invisible'}  text-sm shadow rounded-lg absolute pin-t pin-l ml-3 items-navegacion mt-5 z-30`}
                                style={{ width: '520px' }}>
                                <svg className="block fill-current text-white w-8 h-8 absolute pin-t pin-l ml-5 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0l12 10h-24z"></path>
                                </svg>
                                <div className="flex flex-wrap justify-between rounded-t-lg p-2">
                                    <div className="grid gap-1 grid-cols-2 mx-auto w-screen">
                                        <div className="flex flex-col">
                                            <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                { Object.keys(dataCategory).map((key)=>(
                                                    <Link key={key}  href={`/courses/${dataCategory[key].ruta}`} className="-m-3 p-1 text-xs flex items-start space-x-4 rounded-sm hover:bg-cool-gray-200 transition ease-in-out duration-150">
                                                        <div className="space-y-1">
                                                            <p onMouseEnter={handleMouseEnter}
                                                                onMouseLeave={handleMouseLeave}
                                                                id={dataCategory[key].id} title={dataCategory[key].ruta} className="IdCategory text-base leading-6 font-medium text-gray-900">
                                                               {dataCategory[key].categoria}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                 )) 
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div id="listasubcategorias" className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            { Object.keys(dataSubCategory).map((keys)=>(
                                                <Link key={keys} href={`/${dataCategoryRoute}/${dataSubCategory[keys].ruta}`}  className="-m-3 p-1 flex items-start space-x-4 rounded-sm hover:bg-cool-gray-300 transition ease-in-out duration-150">
                                                    <div className="space-y-1">
                                                        <p id={dataSubCategory[keys].subcategoria} className="text-base leading-6 font-medium text-gray-900">
                                                            {dataSubCategory[keys].subcategoria}
                                                        </p>
                                                    </div>
                                                </Link>
                                                ))}
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li className="mr-6 my-2 md:my-0 sm:block md:block lg:hidden xl:hidden">
                            <a className="cursor-pointer modal-open inline-flex items-center py-1 md:py-3 pl-1 align-middle text-base font-bold text-gray-300 no-underline hover:text-white">
                                <i className="fas fa-tasks fa-fw mr-3"></i><span
                                    className="pb-1 md:pb-0 text-sm">Categorias</span>
                                <svg className="text-gray-500 h-5 w-5 group-hover:text-gray-500 hover:text-white group-focus:text-gray-500 transition ease-in-out duration-150"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li className="mr-6 my-2 md:my-0">
                            <a href="/udemy-free" className="block py-1 md:py-3 pl-1 align-middle text-base font-bold text-gray-200 no-underline hover:text-white">
                                <i className="fab fa-freebsd mr-3"></i><span className="relative pb-1 md:pb-0 text-sm">Udemy
                                    <div className="absolute top-0 right-0 -mt-4 text-xs -mr-4 px-3 py-0.5 bg-green-500 rounded-t-full rounded-br-full">
                                        Gratis</div>
                                </span>
                            </a>
                        </li>
                        <li className="mr-6 my-2 md:my-0">
                            <a href="/coupons-udemy" className="block py-1 md:py-3 pl-1 align-middle text-base font-bold text-gray-200 no-underline hover:text-white">
                                <i className="fa fa-gift fa-fw mr-3"></i><span className="relative pb-1 md:pb-0 text-sm">Cupones
                                    <div className="absolute top-0 right-0 -mt-4 text-xs -mr-4 px-3 py-0.5 bg-green-500 rounded-t-full rounded-br-full">
                                        Gratis</div>
                                </span>
                            </a>
                        </li>
                        <li className="mr-6 my-2 md:my-0">
                            <a href="/courses" className="block py-1 md:py-3 pl-1 align-middle text-base font-bold text-gray-300 no-underline hover:text-white">
                                <i className="fas fa-graduation-cap fa-fw mr-3"></i><span className="relative pb-1 md:pb-0 text-sm">Cupones
                                    <div className="absolute top-0 right-0 -mt-4 text-xs -mr-4 px-3 py-0.5 bg-red-500 rounded-t-full rounded-br-full">
                                        9.99</div>
                                </span>
                            </a>

                        </li>
                        <li className="mr-6 my-2 md:my-0">
                            <a href="/blog"
                                className="block py-1 md:py-3 pl-1 align-middle text-base font-bold text-gray-300 no-underline hover:text-white">
                                <i className="fa fa-wallet fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Blog</span>
                            </a>
                        </li>
                        <li className="mr-6 my-2 md:my-0">
                            <a href="/"
                                className="block py-1 md:py-3 pl-1 align-middle text-base font-bold text-gray-300 no-underline hover:text-white">
                                <i className="fab fa-free-code-camp fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Enviar Cupón</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}