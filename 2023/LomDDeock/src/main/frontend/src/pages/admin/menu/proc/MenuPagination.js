import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function MenuPagination({page, setPage, pageData}) {
    const navigate = useNavigate();

    useEffect(() => {
        // cate 값이 변경되면 page 값을 1로 초기화
        setPage(1);
    }, [pageData.cate]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        console.log("pageData.cate : "+pageData.cate);
        console.log("newPage : "+newPage);
        navigate(`/admin/menu/AdminMenuList${pageData.cate ? `?cate=${pageData.cate}` : ''}&page=${newPage}&size=10`);
    };

    const renderPaginationNumbers = () => {
        const pages = [];
        for (let i = pageData.pageGroupStart; i <= pageData.pageGroupEnd; i++) {
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
                onClick={() => handlePageChange(pageData.pageGroupStart  - 1)}
            >
                &lt;
            </span>
            {renderPaginationNumbers()}
            <span
                className={`num next ${!pageData.next ? ' disabled' : ''}`}
                onClick={() => handlePageChange(pageData.pageGroupEnd + 1)}
            >
                &gt;
            </span>
        </div>
    );

}

export default MenuPagination;