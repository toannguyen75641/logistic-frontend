import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer">
          <Container fluid>
            <nav className="pull-left">
              <ul>
                <li>
                  <a href="#pablo">Trang chủ</a>
                </li>
                <li>
                  <a href="#pablo">Công ty liên kết</a>
                </li>
                <li>
                  <a href="#pablo">Cài đặt</a>
                </li>
                <li>
                  <a href="#pablo">Blog</a>
                </li>
              </ul>
            </nav>
            <p className="copyright pull-right">
                Quản lý Logistic thực hiện bởi Toàn
            </p>
          </Container>
        </footer>
      );
}

export default Footer;