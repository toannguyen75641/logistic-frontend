import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
    return (
        <div className="error">
            <div className="not-found text-center">
                <FontAwesomeIcon icon={faTruck} />
                <h1>404</h1>
                <h2>Không tìm thấy trang</h2>
                <p>Chúng tôi xin lỗi nhưng trang bạn đang tìm kiếm không tồn tại.</p>
            </div>
        </div>
    );
}

export default NotFound;