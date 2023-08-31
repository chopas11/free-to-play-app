import { Row, Col } from 'antd';
import React from 'react';
// @ts-ignore
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <Row>
                <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    Free to play Games
                </Col>
            </Row>
        </header>
    );
};

export default Header;