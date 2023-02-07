import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { Layout } from '../components/layouts';
import { CardCategory } from '../components/card/cardCategory';
import { PaginationComponent } from '../components/PaginationComponent';
export const getServerSideProps = async ({ query }) => {
    const token_ = process.env.DB_API_SECRET_BASE64;
    const url = process.env.API_URL;
    const rutacategory = query.subcategory[0];
    const rutasubcategory = query.subcategory[1];
    let page = query.page ? query.page: 1;
    const page_size = 20;
    let type;
    let price;
    const language = "es";
    const ordering = "relevance";
        const { data: categoryByRoute } = await axios.get(
            `${url}/category/rutacategory?ruta=${rutacategory}`,{
                headers: { 'Authorization': `Basic ${token_}`}
            });
       const idCateg= categoryByRoute[0]['id'] || 1;
    const { data: subcategoryByRoute } = await axios.get(
        `${url}/subcategory?id_category=${idCateg}`,{
            headers: { 'Authorization': `Basic ${token_}`}
        });
    const subcategory= subcategoryByRoute[0]['api'];
    const subcategoryfree= subcategoryByRoute[0]['gratis'];
    if (subcategoryfree === 1) {
        type = "search";
        price = "price-free";
    } else {
        type = "search";
        price = "price-paid";
    }
    const token = process.env.APIUDEMY_CLIENT_SECRET_BASE64;
    const { data: searchCategory } = await axios.get(
        `https://www.udemy.com/api-2.0/courses/?fields[course]=title,headline,price,image_240x135,avg_rating,url,published_title,visible_instructors&page=${page}&page_size=${page_size}&${type}=${subcategory}&price=${price}&is_affiliate_agreed=True&is_fixed_priced_deals_agreed=True&is_percentage_deals_agreed=True&language=${language}&ordering=${ordering}`,
        {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    );
    return {
        props: {
            searchCategory,rutacategory,page,page_size,categoryByRoute,rutasubcategory
        }
    }
}
type Props = {
    searchCategory,search,page,page_size,categoryByRoute,rutasubcategory
}
const PageSubCategory = ({searchCategory,rutacategory,page,page_size,categoryByRoute,rutasubcategory}) => {
    const router = useRouter();
    const [valuesearch, setValuesearch] = useState("");
    const totalCourses= searchCategory.count;
    const routePaginate= `/${rutacategory}/${rutasubcategory}${'?page=' ? '?page=': null}`;
    const handleChange = (e) => {
        let searchInputText = e.target.value;
        setValuesearch(searchInputText);
      };
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(page_size);
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    return(
        <Layout>
            <form>
                <div className="-mt-4 h-48 max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full flex justify-center items-center bg-cover bg-center"
                    style={{backgroundImage: `linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),url(http://localhost:3000/${categoryByRoute[0]['imgBanner']})`}}>
                    <div className="space-y-5">
                        {/* <Image src={imgbanner} alt=""  width={157.5} height={40} /> */}
                        <p className="text-white font-semibold text-3xl flex flex-col items-center">Repositorio gratuito de todos los cursos de Udemy</p>
                        <div className="flex flex-row items-center justify-center">
                            <input type="text" placeholder="¿Qué buscaremos hoy?" className="p-4 focus:outline-none focus:ring-1 focus:ring-blue-300 w-3/4 buscador_free"
                            value={valuesearch}
                            onChange={handleChange} />
                            <button  type="submit" className="p-4 text-l font-semibold bg-red-500 hover:bg-red-700 text-white buscar_free">Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
           
            <div className="w-full mt-8 mb-6 mx-auto px-4 flex items-center justify-between">
                <span className="text-2xl">
                    Los mejores cursos de
                    <strong className="text-2xl"> {categoryByRoute[0]['categoria']}</strong>
                </span>
            </div>

            <div className="w-screen sm:w-full md:full lg:w-full xl:w-full mx-auto grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">
             {
                searchCategory.results.map(searchCategory=>(
                    <CardCategory key={searchCategory.id} searchCategory={searchCategory}/>
                ))
             }
            </div>
            <PaginationComponent
                setcurrentPage={setcurrentPage}
                totalCourses={totalCourses}
                itemsPerPage={itemsPerPage}
                maxPageNumberLimit={maxPageNumberLimit}
                minPageNumberLimit={minPageNumberLimit}
                currentPage={currentPage}
                setmaxPageNumberLimit={setmaxPageNumberLimit}
                setminPageNumberLimit={setminPageNumberLimit}
                pageNumberLimit={pageNumberLimit}
                router={router}
                search={rutacategory}
                routePaginate={routePaginate}
            />
        </Layout>
    )
}
export default PageSubCategory