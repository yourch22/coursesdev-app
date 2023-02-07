import Link from "next/link"

export const CardHeadPost = ({data}) => {
    return(
        <div className="pb-12 md:pb-20">
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <Link className="relative block group" href={`/blog/${data.ruta}`} data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={`/${data.portada}`} width="540" height="303" alt="Blog post 01" />
                </figure>
            </Link>
            <div data-aos="fade-left" data-aos-delay="200">
                <header>
                    <div className="mb-3">
                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                            <li className="m-1">
                                <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                            </li>
                            <li className="m-1">
                                <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                            </li>
                        </ul>
                    </div>
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                        <Link className="hover:text-gray-500 transition duration-150 ease-in-out" href={`/blog/${data.ruta}`}>{data.titulo}</Link>
                    </h3>
                </header>
                <p className="text-lg text-gray-800 grow">{data.descripcion}</p>
                <footer className="flex items-center mt-4">
                    <Link href={`/blog/${data.ruta}`}>
                        <img className="rounded-full shrink-0 mr-4" src="../img/plantilla/icono.png" width="40" height="40" alt="Author 04" />
                    </Link>
                    <div>
                        <a className="font-medium hover:text-gray-500 transition duration-150 ease-in-out" href="#">Cursos dev</a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Jan 19, 2023</span>
                    </div>
                </footer>
            </div>
        </article>
    </div>
    )
}