import axios from "axios";
import React, { useState } from "react";
import { Layout } from "../../components/layouts";
import { Home_nav } from "../../components/layouts/home_nav";
import { CardCoursesfree } from "../../components/card/cardCoursesfree";
import { Console } from "console";
import { useRouter } from "next/router";
import { Home_nav_category } from "../../components/layouts/home_nav_category";

export const getServerSideProps = async ({ query }) => {
    const page = query.page || 1;
    const url = "https://www.udemy.com/get/api-2.0/courses/?page=1&page_size=14&price=price-free&is_affiliate_agreed=True&language=es&ordering=relevance";
    
    const token = process.env.APIUDEMY_CLIENT_SECRET_BASE64;
    const { data: courseUdemyFree } = await axios.get(
        `https://www.udemy.com/api-2.0/courses/?fields[course]=title,headline,price,image_240x135,avg_rating,url,published_title,visible_instructors&page=1&page_size=18&search=programacion&price=price-free&is_affiliate_agreed=True&is_fixed_priced_deals_agreed=True&is_percentage_deals_agreed=True&language=es&ordering=relevance`,
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
            courseUdemyFree
        }
    }
}
type Props = {
    courseUdemyFree
}
const udemyFree = ({ courseUdemyFree }) => {
const router = useRouter();
const [valuesearch, setValuesearch] = useState("");
const handleChange = (e) => {
    setValuesearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput=valuesearch.split(' ').join('-');
            setValuesearch(searchInput);
            router.push({
                pathname: `/search-courses-free/${searchInput}/${1}`
              })
  };
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
    return (
        <Layout>
            <form>
                <div className="-mt-4 h-48 max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full flex justify-center items-center bg-cover bg-center"
                    style={{backgroundImage: `linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),url(https://www.itmastersmag.com/wp-content/uploads/2021/01/shutterstock_1078387013-2048x1024.jpg)`}}>
                    <div className="space-y-5">
                        <p className="text-white font-semibold text-3xl flex flex-col items-center">Repositorio gratuito de todos los cursos de Udemy</p>
                        <div className="flex flex-row items-center justify-center">
                            <input type="text" placeholder="¿Qué buscaremos hoy?" className="p-4 focus:outline-none focus:ring-1 focus:ring-blue-300 w-3/4 buscador_free"
                            value={valuesearch}
                            onChange={handleChange}
                            onKeyPress={handleKeypress} />
                            <button onClick={handleSubmit} type="submit" className="p-4 text-l font-semibold bg-red-500 hover:bg-red-700 text-white buscar_free">Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
           
            <div className="w-full mt-8 mb-6 mx-auto px-4 flex items-center justify-between">
                <span className="text-2xl">
                    Los mejores cursos de
                    <strong className="text-2xl"> Programacion</strong>
                </span>
            </div>

            <div className="w-screen sm:w-full md:full lg:w-full xl:w-full mx-auto grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">
             {
                courseUdemyFree.results.map(coursesfree=>(
                    <CardCoursesfree key={coursesfree.id} coursesfree={coursesfree}/>
                ))
             }
            </div>
        </Layout>
    )

}

export default udemyFree;