import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function FaqPagination({page, setPage, pageData}) {
    const navigate = useNavigate();

    useEffect(() => {
        // cate 값이 변경되면 page 값을 1로 초기화
        setPage(1);
    }, [pageData.cate]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        navigate(`/admin/faq/adminFaqList${pageData.cate ? `?cate=${pageData.cate}` : ''}&page=${newPage}`);
    };

    const renderPaginationNumbers = () => {
        const pages = [];
        for (let i = pageData.start; i <= pageData.end; i++) {
            pages.push(
                <span
                    key={i}
                    className={`num${page === i ? ' on' : ''}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </span>
            );
        }
        return pages;
    };


    return (
        <div className="paging">
            <span
                className={`num prev ${!pageData.prev ? ' disabled' : ''}`}
                onClick={() => handlePageChange(pageData.start - 1)}
            >
                &lt;
            </span>
            {renderPaginationNumbers()}
            <span
                className={`num next ${!pageData.next ? ' disabled' : ''}`}
                onClick={() => handlePageChange(pageData.end + 1)}
            >
                &gt;
            </span>
        </div>
    );

}

export default FaqPagination;