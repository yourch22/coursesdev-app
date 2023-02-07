import axios from "axios";
import Link from "next/link";
import { Layout } from "../../components/layouts";
export const getServerSideProps = async ({ query }) => {
    let id = query.params[0];
    let idCourse = id.split("-", 1);
    const token = process.env.APIUDEMY_CLIENT_SECRET_BASE64;
    const outstandingCourseUrl = `${process.env.API_URL}/coursescupon/coursesoutstanding`;
    const { data: courseUdemyFreeDetail } = await axios.get(
        `https://www.udemy.com/api-2.0/courses/${Number(idCourse)}/?fields[course]=@all`,
        {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    );
    const { data: relatedCourseFree } = await axios.get(
        `https://www.udemy.com/api-2.0/courses/?page=1&page_size=3&category=${courseUdemyFreeDetail.primary_category.title}&price=price-free&is_affiliate_agreed=True&ordering=relevance`,
        {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    );
    const { data: courseOutstandingCoupons } = await axios.get(outstandingCourseUrl
    );
    return {
        props: {
            courseUdemyFreeDetail, courseOutstandingCoupons, relatedCourseFree
        }
    }
}
type Props = {
    courseUdemyFreeDetail, courseOutstandingCoupons, relatedCourseFree
}

const CoursesDetailFree = ({ courseUdemyFreeDetail, courseOutstandingCoupons, relatedCourseFree }) => {
    return (
        <Layout>
            <div className="flex justify-between container mx-auto">
                <div className="w-full lg:w-8/12">
                    <div className="text-center my-4">
                        {/* <!-- Ads_Horizontal --> */}
                    </div>

                    <div className="pb-12 md:pb-12">
                        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                            <div className="relative block group">
                                <div className="rounded absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                                <img className="rounded w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={courseUdemyFreeDetail.image_240x135} alt="Blog post 01" />
                                <div className="absolute top-0 right-0 mt-4 mr-4">
                                    <div className="inline-flex items-center text-xs font-medium text-slate-100 bg-slate-900 bg-opacity-60 rounded-full text-center px-2 py-0.5">
                                        <svg className="w-3 h-3 shrink-0 fill-current text-amber-500 mr-1" viewBox="0 0 12 12">
                                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                        </svg>
                                        <span>{courseUdemyFreeDetail.locale.simple_english_title}</span>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="200">
                                <header>
                                    <div className="mb-3">
                                        <ul className="flex flex-wrap text-xs font-medium -m-1">
                                            <li className="m-1">
                                                <Link href="/" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Development</Link>
                                            </li>
                                            <li className="m-1">
                                                <Link href="/" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">Software Engineering</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                                        <Link href="/" className="hover:text-gray-500 transition duration-150 ease-in-out">{courseUdemyFreeDetail.title}</Link>
                                    </h3>
                                </header>
                                <p className="text-lg text-gray-500 grow">{courseUdemyFreeDetail.headline}</p>
                                <div className="mt-2 flex flex-wrap items-center justify-between text-sm text-amber-500">
                                    <div className="flex items-center space-x-2">
                                        <span className="inline-block text-white bg-amber-500 font-bold text-sm py-0 px-1 rounded">{courseUdemyFreeDetail.avg_rating.toPrecision(2)}</span>
                                        <div className="relative inline-flex text-amber-500">
                                            <div className="absolute top-0 left-0 whitespace-no-wrap overflow-hidden w-0" style={{ width: (courseUdemyFreeDetail.avg_rating * 100) / 5 }}>
                                                <div className="inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none"
                                                        className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none"
                                                        className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none"
                                                        className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none"
                                                        className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none"
                                                        className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </div>
                                        <span className="inline-block text-gray-500 font-bold text-sm py-0 px-1">{courseUdemyFreeDetail.num_subscribers}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="inline-flex text-sm font-bold bg-rose-100 text-rose-600 rounded-full text-center px-2 py-0.5">{courseUdemyFreeDetail.price}</div>
                                        {/* <div className="inline-flex text-sm font-medium text-slate-500 line-through">${courseUdemyFreeDetail.original_price_text}</div> */}
                                    </div>
                                </div>
                                <footer className="mt-2 flex flex-wrap items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <img className="rounded-full shrink-0 mr-4" src={courseUdemyFreeDetail.image_50x50} width="40" height="40" alt="Author 04" />
                                        <div className="font-medium text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out">{courseUdemyFreeDetail.visible_instructors[0].title}</div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {/* <span className="text-gray-700"> - </span> */}
                                        <div className="flex flex-wrap items-center justify-between">
                                            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10.88 4.5L10.88 9.64L14.51 13.27C14.7018 13.4678 14.7018 13.7822 14.51 13.98L13.98 14.51C13.7822 14.7018 13.4678 14.7018 13.27 14.51L9.27 10.51C9.17837 10.4159 9.12492 10.2912 9.12 10.16L9.12 4.5C9.12 4.22386 9.34386 4 9.62 4L10.38 4C10.6561 4 10.88 4.22386 10.88 4.5Z"
                                                    fillRule="evenodd" stroke="none"></path>
                                            </svg>
                                        </div>
                                        <span className="mb-2 text-xs text-gray-600 font-bold">12/12/2023</span>
                                    </div>

                                </footer>

                            </div>
                        </article>
                    </div>

                    <div className="mt-1">
                        <div className="max-w-5xl px-10 py-2 bg-white rounded-lg shadow-md">
                            <div className="mx-auto flex flex-wrap">
                                <div className="flex justify-between items-center mt-2">
                                    <a href="/courses/{{ $courses_free_detalle->primary_category->title_cleaned }}/1"
                                        className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{courseUdemyFreeDetail.primary_category.title}</a>
                                    <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                                    </svg>
                                    <a href="/{{ $courses_free_detalle->primary_category->title_cleaned }}/{{ $courses_free_detalle->primary_subcategory->title_cleaned }}/1"
                                        className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{courseUdemyFreeDetail.primary_subcategory.title}</a>
                                </div>
                                <section className="bg-coolGray-100 mx-auto item-center text-coolGray-900 w-full">
                                    <div className="mx-auto flex flex-col justify-around p-4 text-center md:p-6 lg:flex-row">
                                        <div className="flex flex-col justify-center lg:text-left">
                                            <p className="py-2 text-2xl font-medium leading-tight title-font">Comparte si te a gustado: </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center flex-shrink-0 mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                                            <a id="share-fb" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 shadow-md text-white">
                                                <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                                <span className="flex flex-col items-start ml-4 leading-none">
                                                    <span className="font-semibold title-font">Facebook</span>
                                                </span>
                                            </a>
                                            <a id="share-twitter" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-400 hover:bg-blue-500 shadow-md text-white">
                                                <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                                <span className="flex flex-col items-start ml-4 leading-none">
                                                    <span className="font-semibold title-font">Twitter</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                                <div className="mt-2">
                                    <a href="/cursos-gratis" className="text-4xl text-gray-700 font-bold hover:underline">{courseUdemyFreeDetail.titulo}</a>
                                    <div className="flex mt-6 justify-center">
                                        <div className="w-16 h-1 rounded-full bg-gray-300 inline-flex"></div>
                                    </div>
                                    {/* ads aqui */}
                                    <section className="text-gray-600 body-font">
                                        <div className="container py-2 mx-auto">
                                            <div className="text-left mb-6">
                                                <h1 className="text-gray-900 title-font font-medium text-3xl my-4 font-bold mb-1">Lo que
                                                    aprenderás</h1>
                                            </div>
                                            <div className="flex flex-wrap -m-4">
                                                <div className="p-4 w-full">
                                                    <nav className="flex flex-col sm:items-start sm:text-left text-left items-left -mb-1 space-y-2.5">
                                                        {
                                                            courseUdemyFreeDetail.objectives.map(item => (
                                                                <div key={item.toString()} className="my-2">
                                                                    <span
                                                                        className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                                            strokeLinejoin="round" strokeWidth="3" className="w-3 h-3"
                                                                            viewBox="0 0 24 24">
                                                                            <path d="M20 6L9 17l-5-5"></path>
                                                                        </svg>
                                                                    </span>{item}
                                                                </div>
                                                            ))
                                                        }
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="text-gray-600 body-font">
                                        <div className="container py-2 mx-auto">
                                            <div className="text-left mb-6">
                                                <h1 className="text-gray-900 title-font font-medium text-3xl my-4 font-bold mb-1">Requisitos
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap -m-4">
                                                <div className="p-4 w-full">
                                                    <nav className="flex flex-col sm:items-start sm:text-left text-left items-left -mb-1 space-y-2.5">
                                                        {
                                                            courseUdemyFreeDetail.requirements_data.items.map(requeriment => (
                                                                <div key={requeriment.toString()} className="my-2">
                                                                    <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                                            strokeLinejoin="round" strokeWidth="3"
                                                                            className="w-3 h-3" viewBox="0 0 24 24">
                                                                            <path d="M20 6L9 17l-5-5"></path>
                                                                        </svg>
                                                                    </span>{requeriment}
                                                                </div>
                                                            ))
                                                        }
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <h1 className="text-gray-900 title-font font-medium text-3xl my-4 font-bold mb-6">Descripción</h1>
                                    <div className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: courseUdemyFreeDetail.description }}></div>
                                    <section className="text-gray-600 body-font">
                                        <div className="container py-2 mx-auto">
                                            <div className="text-left mb-6">
                                                <h1 className="text-gray-900 title-font font-medium text-3xl my-4 font-bold mb-1">¿Para
                                                    quién es este curso?
                                                </h1>
                                            </div>
                                            <div className="flex flex-wrap -m-4">
                                                <div className="p-4 w-full">
                                                    <nav className="flex flex-col sm:items-start sm:text-left text-left items-left -mb-1 space-y-2.5">
                                                        {
                                                            courseUdemyFreeDetail.who_should_attend_data.items.map(items1 => (
                                                                <div key={items1.toString()} className="my-2">
                                                                    <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                                            strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                            <path d="M20 6L9 17l-5-5"></path>
                                                                        </svg>
                                                                    </span>
                                                                    {items1}
                                                                </div>
                                                            ))
                                                        }
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                {/* <!-- coupons_final --> */}
                                <div className="my-2">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="flex content-center">
                                            <a href={`https://click.linksynergy.com/deeplink?id=sIt9MIeGnaM&mid=47900&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2F${courseUdemyFreeDetail.published_title}`} rel="nofollow"
                                                target="_blank"
                                                className="border border-purple-800 bg-indigo-900 hover:bg-indigo-500 my-8 mr-2 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex text-center items-center">
                                                Obtener Cupón
                                            </a>
                                            <a href="/udemy-free"
                                                className="border border-purple-800 text-bg-blue-850  block my-8 rounded-sm font-bold py-4 px-6 flex text-center items-center hover:bg-indigo-500 hover:text-white">
                                                Mas Cursos
                                                <svg className="h-5 w-5 ml-2 fill-current" id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px" y="0px" viewBox="-49 141 512 512"
                                                >
                                                    <path id="XMLID_11_"
                                                        d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                                                                l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                                                                c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* ads aqui  */}
                                <section className="bg-coolGray-100 mx-auto item-center text-coolGray-900">
                                    <div className="mx-auto flex flex-col justify-around p-4 text-center md:p-6 lg:flex-row">
                                        <div className="flex flex-col justify-center lg:text-left">
                                            <p className="py-2 text-2xl font-medium leading-tight title-font">Comparte si te a gustado: </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center flex-shrink-0 mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                                            <a id="share-fb2" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 pointer-events-auto hover:bg-blue-600 shadow-md text-white">
                                                <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                                <span className="flex flex-col items-start ml-4 leading-none">
                                                    <span className="font-semibold title-font">Facebook</span>
                                                </span>
                                            </a>
                                            <a id="share-twitter2" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-400 hover:bg-blue-500 shadow-md text-white">
                                                <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                                <span className="flex flex-col items-start ml-4 leading-none">
                                                    <span className="font-semibold title-font">Twitter</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                                <section className="text-gray-600 body-font mb-4">
                                    <div className="container px-5 py-auto mx-auto">
                                        <div className="flex flex-col">
                                            <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center">
                                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                                    Articulos Relacionados</h1>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                            {relatedCourseFree.results.map((coursesrelated) => (
                                                <div key={coursesrelated.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                                    <div className="rounded-lg h-64 overflow-hidden">
                                                        <img alt="content" className="object-cover object-center h-full w-full" src={coursesrelated.image_240x135} />
                                                    </div>
                                                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{coursesrelated.title}</h2>
                                                    <p className="text-base leading-relaxed mt-2">{coursesrelated.headline}</p>
                                                    <Link key={coursesrelated.id} href={'/udemy-free/[...params]'} as={`/udemy-free/${coursesrelated.id}-${coursesrelated.published_title}`} className="text-indigo-500 inline-flex items-center mt-3">Ir al Curso
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                            strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    
                </div >


                <div className="-mx-8 w-full xl:w-4/12 hidden lg:block">
                    <div className="px-8">
                        {/* <!-- coupons_mid --> */}
                        <h1 className="mb-4 text-xl font-bold text-gray-700">CURSOS DESTACADOS</h1>
                        <div className="flex flex-col bg-white max-w-lg px-6 py-4 mx-auto rounded-lg shadow-md">
                            {
                                courseOutstandingCoupons.map((items) => (
                                    <Link key={items.id} href={'/udemy-free/[ruta]'} as={`/coupons-udemy/${items.ruta}`}>
                                        <div className="rounded w-full flex flex-col md:flex-row mb-10">
                                            <img src={items.portada}
                                                className="rounded-md h-32 sm:h-56 md:h-32 md:m-0 lg:h-16 m-4" />
                                            <div className="bg-white rounded px-4">
                                                <div className="text-gray-800 font-semibold text-sm mb-2 md:mt-4 lg:mt-0">
                                                    {items.titulo}
                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >
        </Layout>
    )
}

export default CoursesDetailFree