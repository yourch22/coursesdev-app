export const CardPosts = ({dataCard}) => {
    return (
        <article className="flex flex-col h-full" data-aos="fade-up">
        <header>
            <a className="block mb-6" href={`/blog/${dataCard.ruta}`}>
                <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={`/${dataCard.portada}`} width="352" height="198" alt="News 01" />
                </figure>
            </a>
            <div className="mb-3">
                <ul className="flex flex-wrap text-xs font-medium -m-1">
                    <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#">Product</a>
                    </li>
                    <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#">Engineering</a>
                    </li>
                </ul>
            </div>
            <h3 className="h4 mb-2">
                <a className="hover:text-gray-500 transition duration-150 ease-in-out" href={`/blog/${dataCard.ruta}`}>{dataCard.titulo}</a>
            </h3>
        </header>
        <p className="text-lg text-gray-800 grow">{dataCard.descripcion}</p>
        <footer className="flex items-center mt-4">
            <a href={`/blog/${dataCard.ruta}`}>
                <img className="rounded-full shrink-0 mr-4" src="../img/plantilla/icono.png" width="40" height="40" alt="Author 01" />
            </a>
            <div className="font-medium">
                <a className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#">Cursos Dev</a>
                <span className="text-gray-700"> - </span>
                <span className="text-gray-500">Jan 17, 202</span>
            </div>
        </footer>
    </article>
    )
}