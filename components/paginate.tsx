import React from 'react';
type Props = {
  coursesPerPage,currentPage,setCurrentPage,totalCourses,page,router,search
}
export const Paginate = ({coursesPerPage,currentPage,setCurrentPage,totalCourses,page,router,search})=> {
const PageNumber:any[] = [];
const pagina =Math.ceil(totalCourses/coursesPerPage);
for (let i = 1; i <= pagina; i++) {
  PageNumber.push(i);
}

console.log("page number",PageNumber);
const onPreviusPage = () => {
  let onPreviusPag = currentPage-1;
  setCurrentPage(onPreviusPag);
  router.push({
    pathname: `/search-free/${search}/${onPreviusPag}`
  })
}
const onNextPage = () => {
  let pagenext = currentPage+1;
  setCurrentPage(pagenext);
  router.push({
    pathname: `/search-free/${search}/${pagenext}`
  })

}

const onSpecificPage = (pageActual) => {
  setCurrentPage(pageActual);
  router.push({
    pathname: `/search-free/${search}/${pageActual}`
  })
}
  return(
    <div className="flex justify-center mb-6">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2" onClick={onPreviusPage}>
          <button className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 text-slate-300 ${currentPage===1 ? '' : 'hover:bg-indigo-500 text-slate-600 hover:text-white shadow-sm'}`}>
            <span className="sr-only">Anterior</span><wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </button>
        </div>
        <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
          {       
          PageNumber.map(noPage =>(
            <li key={noPage} onClick={()=>onSpecificPage(noPage)}>
              <span className={`inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white ${noPage===currentPage ? 'text-white bg-indigo-500': ''} hover:bg-indigo-500  border border-slate-200 hover:text-white`}>{noPage}</span>
            </li>
          ))
          }
        </ul>
        <div className="ml-2" onClick={onNextPage}>
          <button className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 ${currentPage>=PageNumber.length ? 'text-slate-300' : ' hover:bg-indigo-500 text-slate-600 hover:text-white shadow-sm'}`}>
            <span className="sr-only">Siguente</span><wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
