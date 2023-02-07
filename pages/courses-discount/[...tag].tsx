import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";
import { CardDiscount } from "../../components/card/cardDiscount";
import { Layouts } from "../../components/layout"
import { PaginationComponent } from "../../components/PaginationComponent";
import { Courses } from "../../models/courses";
export const getServerSideProps = async ({ query }) => {
    const token_ = process.env.DB_API_SECRET_BASE64;
    const url = process.env.API_URL;
    const tag=  query.tag || 'React';
    const page = query.page || 1;
    const limit = 20;
    const { data:coursesdiscount } = await axios.get(
      `${url}/discounts/tag?tag=${tag}&page=${page}&limit=${limit}`,{
        headers:{
            'Authorization': `Basic ${token_}`
        }
      });
    return {
      props: coursesdiscount
      
    }
  }
  type Props = {
    coursesdiscount: Courses[],page
  }
const PageCoursesDiscountTag = (coursesdiscount,tag) => {
    const router = useRouter();
    let tags = router.asPath.split("/", 3);
    const routePaginate = `/courses-discount/${tags[2]}?page=`;
    const totalCourses = coursesdiscount.coursesCountDataDiscontSearch[0].count;
    const search = null;
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(20);
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    return (
        <>
        <Layouts>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
                <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                    <div className="w-full mt-8 mb-6 mx-auto px-4 flex items-center justify-between">
                        <h1><span className="text-2xl">
                            Los mejores cursos de
                            <strong className="text-2xl"> {tags[2]}</strong>
                        </span>
                        </h1>
                    </div>
                    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                        {
                            coursesdiscount.CoursesDataDiscount.map(coursesdiscounts =>(
                                <CardDiscount key={coursesdiscounts.id} coursesdiscounts={coursesdiscounts}/>
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
                        search={search}
                        routePaginate={routePaginate}
                        />
                </div>
            </div>
        </Layouts>
        </>
    )
}

export default PageCoursesDiscountTag