import axios from "axios"
import { BlogLayout } from "../../components/blog"
import { CardHeadPost } from "../../components/blog/cardheadpost"
import { CardPosts } from "../../components/blog/cardpost"
import { Layout } from "../../components/layouts"
import { Articles } from "../../models/articles"
export const getServerSideProps = async ({ query }) => {
    const token = process.env.DB_API_SECRET_BASE64;
    const url = process.env.API_URL;
    const page = query.page || 1;
    const limit = 20;
    const { data: articles } = await axios.get(
      `${url}/posts?page=${page}&limit=${limit}`,{
        headers:{
            'Authorization': `Basic ${token}`
        }
      });
    return {
      props: {
        articles,page
      }
    }
  }
  type Props = {
    articles: Articles[],page
  }
const PageArticles = ({articles}) => {
    return (
        <Layout>
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/* < !--Page content-- > */}
                <main className="grow">
                    {/* <!-- Posts list --> */}
                    <section className="relative">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6">
                            <div className="pt-8 pb-12 md:pt-10 md:pb-20">

                                {
                                    articles.PostsData.map(items=>(
                                        <CardHeadPost key={items.id} data={items} />
                                    ))
                                }

                                {/* <!-- Articles list --> */}
                                <div className="max-w-sm mx-auto md:max-w-none">

                                    {/* <!-- Section title --> */}
                                    <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Últimos artículos</h4>

                                    {/* <!-- Articles container --> */}
                                    <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                                    {
                                        articles.PostsData.map(items=>(
                                            <CardPosts key={items.id} dataCard={items} />
                                        ))
                                    }
                                        
                                    </div>

                                </div>

                                {/* <!-- Pagination --> */}
                                <nav className="flex justify-center pt-16" role="navigation" aria-label="Pagination Navigation">
                                    <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
                                        <li className="m-1">
                                            <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">Prev</span>
                                        </li>
                                        <li className="m-1">
                                            <a href="#0" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">1</a>
                                        </li>
                                        <li className="m-1">
                                            <a href="#0" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">2</a>
                                        </li>
                                        <li className="m-1">
                                            <a href="#0" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">3</a>
                                        </li>
                                        <li className="m-1">
                                            <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">...</span>
                                        </li>
                                        <li className="m-1">
                                            <a href="#0" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">12</a>
                                        </li>
                                        <li className="m-1">
                                            <a href="#0" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">Next</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </section>

                </main>

            </div >
        </Layout>
        // <div>desde articulos</div>
    )
}
export default PageArticles