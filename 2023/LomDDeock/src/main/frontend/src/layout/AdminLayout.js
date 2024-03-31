import React, {Suspense} from 'react';

function AdminLayout({ children }) {
    function fallBackData() {
        return <div>로딩중</div>;
    }
    return (
        <>
            {children}
        </>
    )
}
export default AdminLayout;