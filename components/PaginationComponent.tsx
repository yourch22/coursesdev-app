export const PaginationComponent = ({routePaginate,setcurrentPage,totalCourses,itemsPerPage,maxPageNumberLimit,minPageNumberLimit,currentPage,setmaxPageNumberLimit,setminPageNumberLimit,pageNumberLimit,router,search}) => {
  const handleClick = (event) => {
    let PageActual = Number(event.currentTarget.id);
    setcurrentPage(PageActual);
    router.push(`${routePaginate}${PageActual}`);
  };
  const pages:any[] = [];
  const pagina =Math.ceil(totalCourses/itemsPerPage);
  for (let i = 1; i <= pagina; i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number}
          id={number}
          onClick={handleClick}>
          <span className={`inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white ${currentPage == number ? 'text-white bg-indigo-500' : null} hover:bg-indigo-500 border border-slate-200 hover:text-white`}>{number}</span>
        </li>
      );
    } 
    else {
      return null;
    }
  });

  const handleNextbtn = () => {
    let pagenext = currentPage+1;
    setcurrentPage(pagenext);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    router.push(`${routePaginate}${pagenext}`);
  };
  const handlePrevbtn = () => {
    let onPreviusPag = currentPage-1;
    setcurrentPage(onPreviusPag);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    router.push(`${routePaginate}${onPreviusPag}`);
  };

  let pageIncrementBtn;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = 
    <li onClick={handleNextbtn}>
      <span className={'inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-indigo-500 border border-slate-200 hover:text-white'}>&hellip;</span>
    </li>
  }

  let pageDecrementBtn;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = 
    <li onClick={handlePrevbtn}>
    <span className={'inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-indigo-500 border border-slate-200 hover:text-white'}>&hellip;</span>
  </li>
  }
  return (
    <>
      <div className="flex justify-center mb-8">
        <nav className="flex" role="navigation" aria-label="Navigation">
          <div className="mr-2">
            <button onClick={handlePrevbtn} disabled={currentPage == pages[0] ? true : false} className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 text-slate-300 ${currentPage === 1 ? '' : 'hover:bg-indigo-500 text-slate-600 hover:text-white shadow-sm'}`}>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
              </svg>
              <span className="">Anterior</span><wbr/>
            </button>
          </div>
          <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
          </ul>
          <div className="ml-2">
            <button onClick={handleNextbtn} disabled={currentPage == pages[pages.length - 1] ? true : false} className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 ${currentPage >= pages.length ? 'text-slate-300' : ' hover:bg-indigo-500 text-slate-600 hover:text-white shadow-sm'}`}>
              <span className="">Siguente</span><wbr />
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      {/* <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button> */}
    </>
  );
}
