import React from 'react';
import logo from '../assets/img/fbs_logo.png';
import image_1 from '../assets/img/image_1.png';
import image_2 from '../assets/img/image_2.png'
import '../assets/scss/main.scss';

const text = {
    title: 'Giải pháp quản lý toàn diện',
    title2: 'Giám sát tình hình hoạt động mọi lúc mọi nơi',
    title3: 'Tối ưu hóa việc xếp xe',
    title4: 'Quản lý lương tài xế',
    title5: 'Quản lý nhiên liệu',
    title6: 'Theo dõi công nợ',
    title7: 'Quản lý hậu cần đội xe'
};

const Home = () => {
 return (
    <div>
        <header className="bg-orange py-2 position-fixed w-100">
            <div className="container flex-space-between">
                <div>
                    <img className="w-75" src={logo} alt={logo}/>
                </div>
                <div className="flex-center">
                    <div className="ml-2 nav nav-home">
                        <p className="mb-0 px-2 color-white">Home</p>
                    </div>
                    <div className="ml-2 nav nav-search">
                        <i class="fa fa-search color-white"></i>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section id="background" className="w-100">
            </section>

            <section className="bg-white text-2 py-4">
                <div className="flex-center">
                    <p className="color-dark"><b>{text.title}</b></p>
                </div>
                <div className="container">
                    <div className="flex-space-between row">
                        <div className="col-md-6">
                            <img className="w-95" src={image_1} alt={"image_1"}/>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <div><p className="text-2 text-center color-dark"><b>{text.title2}</b></p></div>
                                <div>
                                    <ul>
                                        <li className="text-1 my-3">Phân tích doanh thu, chi phí, lợi nhuận theo khách hàng, tuyến đường, theo thời gian.</li>
                                        <li className="text-1 my-3">So sánh đánh giá mức độ tăng giảm với kỳ trước, cùng kỳ năm trước.</li>
                                        <li className="text-1 my-3">Phân tích đánh giá năng suất và các chỉ tiêu khai thác xe theo từng xe và toàn đội xe theo thời gian.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-yeallow py-4">
                <div className="container">
                    <div className="flex-space-between row">    
                        <div className="w-90 col-md-6">
                            <div>
                                <div><p className="text-2 text-center color-dark"><b>{text.title3}</b></p></div>
                                <div>
                                    <ul>
                                        <li className="text-1 my-3">Tự động đề xuất phương án xếp xe hợp lý và tối ưu.</li>
                                        <li className="text-1 my-3">Hiển thị lịch sử các chuyến xe của từng đầu xe và toàn đội xe từ đầu tháng/năm.</li>
                                        <li className="text-1 my-3">Phân tích đánh giá năng suất khai thác của từng đầu xe và toàn đội xe hàng tháng/năm.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-block m-auto col-md-6">
                            <img className="w-95" src={image_2} alt={"image_2"}/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="bg_form">
            </section>
        </main>

        <footer className="bg-dark">
            <div className="container">
                <p className="text-1 color-white py-4 mb-0">Copyright 2020 <b>© UX Themes</b></p>
            </div>
        </footer>
    </div>
 );
}

export default Home;