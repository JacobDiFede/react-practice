
const Pagination = ({pages, getMoviesByPage, currentPage}) => {
    const restrictedValues = [1, 2, pages - 2, pages - 1, pages];
    const PaginationButton = ({ page }) => (
        <button
            disabled={page === currentPage}
            onClick={() => getMoviesByPage(page)}
        >{ `${page}` }</button>
    );
    const renderButtonsConditionally = (condition) => (
        condition
            ? (
                <>
                    <PaginationButton page={currentPage + 1} />
                    <PaginationButton page={currentPage + 2} />
                    <PaginationButton page={currentPage + 3} />
                </>
            )
            : null
    )
    return (
        <div>
            <div>
                <button
                    onClick={() => getMoviesByPage(currentPage - 1)}
                    disabled={currentPage  === 1}>
                    Back
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => getMoviesByPage(currentPage + 1)}
                    disabled={currentPage === pages}>
                    Forward
                </button>
            </div>
            <div>
                <PaginationButton page={1}/>
                <PaginationButton page={2}/>
                <PaginationButton page={3}/>
                { currentPage > 4 && <span>...</span> }
                {
                    renderButtonsConditionally(!restrictedValues.includes(currentPage))
                }
                { currentPage !== pages - 3 && <span>...</span> }
                <PaginationButton page={pages - 2}/>
                <PaginationButton page={pages - 1}/>
                <PaginationButton page={pages}/>
            </div>
        </div>
    )
}
export default Pagination;