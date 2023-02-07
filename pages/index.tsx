import { NextSeo } from 'next-seo';
import { CardCoupons } from '../components/card/cardCoupons';
const API_KEY = 'PXS3l4PYHzwmRFtZmxXU3zJLF7647g8kH090eUiXuI';
import axios from "axios";
import { Layout } from '../components/layouts';
import { Home_nav } from '../components/layouts/home_nav';
import { Courses } from '../models/courses';
import { useRouter } from 'next/router';
import { PaginationComponent } from '../components/PaginationComponent';
import { useState } from 'react';
export const getServerSideProps = async ({ query }) => {
  const token_ = process.env.DB_API_SECRET_BASE64;
  const url = process.env.API_URL;
  const page = query.page || 1;
  const limit = 20;
  const { data: courses } = await axios.get(
    `${url}/coursescupon?page=${page}&limit=${limit}`,
    {
      headers: {'Authorization': `Basic ${token_}`}
    });
  return {
    props: {
      courses
    }
  }
}
type Props = {
  courses: Courses[]
}
const PageIndex = ({ courses }) => {
  const router = useRouter();
  const routePaginate = "/?page=";
  const totalCourses = courses.coursesCountData[0].count;
  // console.log("total cursososos",totalCourses);
  const search = null;
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(20);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  return (
    <Layout>
      <NextSeo
        title="Cupones Gratis | Udemy"
        description="todos los mejores cursos de Udemy con cupon gratis"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          siteName: 'SiteName',
        }}
      />
      <>
        <Home_nav />
        <div className="border dark:border-gray-700 transition duration-500ease-in-out"></div>
        <div className="mt-2 w-full mb-6 mx-auto px-4 flex items-center justify-between border-gray-300">
          <h1><span className="text-2xl"><strong className="text-2xl">Últimas publicaciones, Regalos, cupones y
            ofertas</strong></span></h1>
        </div>
        <div className="w-screen sm:w-full md:full lg:w-full xl:w-full mx-auto grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {courses.coursesCuponData.map(coupons => (
            <CardCoupons key={coupons.id} data={coupons} />
          ))}
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
          search={search}
          routePaginate={routePaginate}
        />
      </>
    </Layout>
  )
}

export default PageIndex;