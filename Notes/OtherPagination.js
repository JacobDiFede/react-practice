{/* {pages && renderPagination()} */}

// const renderPagination = () => {
//     let PaginationButton = [];
//     for(let i = 0; i < pages; i++) {
//         PaginationButton.push(
//             <button
//                 onClick={() => getMoviesByPage( i + 1)}
//                 disabled={i + 1 === currentPage}
//             >{ i + 1 }</button>
//         )
//     }
//     return (
//         <div>
//             {
//                 PaginationButton
//             }
//         </div>
//     )
// }

// const getMoviesByPage = async (page) => {
//     setCurrentPage(page);
//     const movieList = await movieService.getMoviesByTitle(movieTitle, page);
//     console.log("movieListByPage: ", movieList);
//     setMovieData(movieList.Search);
// }