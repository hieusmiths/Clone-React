import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class NavSearchResult extends Component {
    styles = {
        isActive: {
            color: '#fff'
        }
    }
    render() {
        return (
            <div className="result-pages__header-navigation">
                <div className="rp-header-navigation header-navigation__container">
                    <div className="header-navigation__items d-flex">
                    <div className="header-navigation--item is-actived">
                        <NavLink activeClassName='active' className="hn-item--text" to="/result">Tất cả</NavLink>
                    </div>
                    <div className="header-navigation--item">
                        <NavLink activeClassName='active' className="hn-item--text" to="/result/posts">Thông tin</NavLink>
                    </div>
                    <div className="header-navigation--item">
                        <NavLink activeClassName='active' className="hn-item--text" to="/ban-do">Bản đồ</NavLink>
                    </div>
                    <div className="header-navigation--item">
                        <a className="hn-item--text" href="/ket-qua/bang-gia">Bảng giá</a>
                    </div>
                    <div className="header-navigation--item dropdown">
                        <div className="hn-item--text dropdown-toggle" data-toggle="dropdown">Thêm <span className="fa icon" /></div>
                        <div className="dropdown-menu hn-menu__add">
                        <div className="dropdown-item"><a href="/#">Danh bạ</a></div>
                        <div className="dropdown-item"><a href="/#">Tài nguyên</a></div>
                        <div className="dropdown-item"><a href="/#">Hỏi đáp</a></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
