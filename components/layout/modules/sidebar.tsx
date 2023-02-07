import Link from "next/link"

export const Sidebar = () => {
    return (
        <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-gradient-to-br from-indigo-900 to-green-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex gap-y-2 flex-col py-4 space-y-1">
                    <li className="px-5 hidden md:block">
                        <div className="flex flex-row shadow-xl items-center mt-1 h-8">
                            <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Front-End</div>
                        </div>
                    </li>
                    <li>
                        <Link href={`/courses-discount/JavaScript`}>
                            <div className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer transition">
                                <img className="w-6" src={'http://localhost:3000/img/icons/javascript.svg'} alt="" />
                                <div>
                                    <span>JavaScript</span>
                                </div>
                                <div>
                                    <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Angular`}>
                                <div className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer transition">
                                    <img className="w-6"
                                        src={`http://localhost:3000/img/icons/angular-icon.svg`}
                                        alt="" />
                                    <div>
                                        <span>Angular</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                    </div>
                                </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/React`}>
                                <div className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer transition">
                                    <img className="w-6"
                                        src={`http://localhost:3000/img/icons/react-icon.svg`}
                                        alt="" />
                                    <div>
                                        <span>React</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                    </div>
                                </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/VueJS`}>
                            <div
                                className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer transition">
                                <img className="w-6"
                                    src="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='36px' height='30px' viewBox='0 0 36 30' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E %3Ctitle%3EUntitled%3C/title%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Crect id='Rectangle' fill='%231389FD' x='15' y='21' width='21' height='7' rx='3.5'%3E%3C/rect%3E %3Ctext id='BETA' font-family='Roboto-Medium, Roboto' font-size='5' font-weight='400' fill='%23FFFFFF'%3E %3Ctspan x='22' y='26'%3EBETA%3C/tspan%3E %3C/text%3E %3Cg id='vue' fill-rule='nonzero'%3E %3Cg id='Group' transform='translate(18.000000, 15.000000) scale(-1, 1) rotate(-180.000000) translate(-18.000000, -15.000000) translate(-0.000000, -0.000000)'%3E %3Cg transform='translate(0.010406, 0.001744)' fill='%2341B883' id='Path'%3E %3Cpolygon points='20.9853249 29.8255814 17.053785 22.9772093 13.1222451 29.8255814 0.0296569468 29.8255814 17.053785 0.170930233 34.0779131 29.8255814'%3E%3C/polygon%3E %3C/g%3E %3Cg transform='translate(6.774271, 11.862209)' fill='%2334495E' id='Path'%3E %3Cpolygon points='14.2214599 17.9651163 10.28992 11.1167442 6.35838003 17.9651163 0.0754431103 17.9651163 10.28992 0.172674419 20.5043968 17.9651163'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E"
                                    alt="" />
                                <div>
                                    <span>VUE</span>
                                  
                                </div>
                                <div>
                                    <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/TypeScript`}>
                            <div
                                className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer transition">
                               <img className="w-6" src={'http://localhost:3000/img/icons/typescript.svg'} alt=""/>
                                <div>
                                    <span>TypeScript</span>
                                </div>
                                <div>
                                    <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Flutter`}>
                            <div  className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                                <img className="w-6" src={'http://localhost:3000/img/icons/flutter.svg'} alt=""/>
                                <div>
                                    <span>Flutter</span>
                                </div>
                                <div>
                                    <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Desarrollo Web`}>
                            <div
                                className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                                <img className="w-6" src={'http://localhost:3000/img/icons/desarrolloweb.svg'} alt=""/>
                                <div>
                                    <span>DesarrolloWeb</span>
                                </div>
                                <div>
                                    <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Html5`}>
                            <div
                                className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                                <img className="w-6" src={'http://localhost:3000/img/icons/html5.svg'} alt=""/>
                                <div>
                                    <span>HTML5</span>
                                </div>
                                <div>
                                    <i  className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Css3`}>
                        <div
                            className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                            <img className="w-6" src={'http://localhost:3000/img/icons/css3.svg'} alt=""/>
                           
                            <div>
                                <span>CSS3</span>
                            </div>
                            <div>
                                <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                            </div>
                        </div>
                    </Link>
                    </li>
                    <li className="px-5 hidden md:block">
                        <Link href="/">
                            <div className="flex flex-row shadow-xl items-center mt-1 h-8">
                                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Back-End</div>
                            </div>
                        </Link>
                    </li >
                    <li>
                        <Link href={`/courses-discount/NodeJS`}>
                        <div
                            className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                            <img className="w-6" src={'http://localhost:3000/img/icons/python.svg'} alt=""/>
                           
                            <div>
                                <span>NodeJS</span>
                            </div>
                            <div>
                                <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                            </div>
                        </div>
                    </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Python`}>
                        <div
                            className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                            <img className="w-6" src={'http://localhost:3000/img/icons/nodejs.svg'} alt=""/>
                            
                            <div>
                                <span>Python</span>
                            </div>
                            <div>
                                <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                            </div>
                        </div>
                    </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Java`}>
                        <div
                            className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                            <img className="w-6" src={'http://localhost:3000/img/icons/java.svg'} alt=""/>
                            <div>
                                <span>JAVA</span>
                            </div>
                            <div>
                                <i  className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                            </div>
                        </div>
                    </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Php`}>
                        <div
                            className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                            <img className="w-6" src={'http://localhost:3000/img/icons/php.svg'} alt=""/>
                            <div>
                                <span>PHP</span>
                            </div>
                            <div>
                                <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                            </div>
                        </div>
                    </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/Kotlin`}>
                        <div
                            className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                            <img className="w-6" src={'http://localhost:3000/img/icons/kotlin.svg'} alt=""/>
                            <div>
                                <span>KOTLIN</span>
                            </div>
                            <div>
                                <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                            </div>
                        </div>
                    </Link>
                    </li>
                    <li className="px-5 hidden md:block">
                        <Link href="/">
                        <div className="flex flex-row shadow-xl items-center mt-1 h-8">
                            <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Otros</div>
                        </div>
                    </Link>
                    </li >
                    <li>
                        <Link href={`/courses-discount/sql`}>
                        <div
                            className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                            <img className="w-6" src={'http://localhost:3000/img/icons/database.svg'} alt=""/>
                            <div>
                                <span>DATABASES</span>
                            </div>
                            <div>
                                <i  className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                            </div>
                        </div>
                    </Link>
                    </li>
                    <li>
                        <Link href={`/courses-discount/MongoDB`}>
                            <div
                                className="group flex items-center gap-5 px-2 py-1 rounded-lg mx-2 cursor-pointer hover:bg-opacity-100 transition">
                                <img className="w-6" src={'http://localhost:3000/img/icons/mongodb.svg'} alt=""/>
                                <div>
                                    <span>MongoDB</span>
                                </div>
                                <div>
                                    <i
                                        className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul >
                <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright cursosdev @2022</p>
            </div>
        </div>
    )

}