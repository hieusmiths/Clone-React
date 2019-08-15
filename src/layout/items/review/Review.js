import React, { Component } from 'react'

export default class Review extends Component {
    render() {
        return (
            <div className="rp-search-result-item">
                <div className="box-company-info">
                    <div className="row">
                    <div className="col-sm-8 col-xs-12">
                        <div className="company-info">
                        <div className="avatar">
                            <span className="img" style={{backgroundImage: 'url(https://dongphucocean.vn/wp-content/uploads/2018/12/logo-dong-phuc-ocean.jpg)'}}>
                            </span>
                        </div>
                        <div className="name">Song Kim Land</div>
                        <div className="info">89 Lý Chính Thắng Phường 7, Quận Tân Bình, Hồ Chí Minh</div>
                        <div className="info">(+84) 098176761</div>
                        <div className="rating-box">
                            <div className="rating">
                            <span className="star fa fa-star -good" />
                            <span className="star fa fa-star -good" />
                            <span className="star fa fa-star" />
                            <span className="star fa fa-star" />
                            <span className="star fa fa-star" />
                            </div>
                            <span className="total">540 total reviews</span>
                        </div>
                        <div className="actions">
                            <button className="btn btn-like">
                            <span className="-ap  icon-like2 icon" /> Thích
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="map-canvas">
                        <img src="../../assets/uploads/map.jpg" alt="" />
                        </div>
                        <div className="action-buttons-bottom">
                        <a href="#" className="btn -comment">
                            <span className="fa fa-comment-o icon" /> 40
                        </a>
                        <a href="#" className="btn -liked">
                            <span className="-ap  icon-like2 icon" /> 40
                        </a>
                        <a href="#" className="btn -share">
                            <span className="-ap  icon-share4 icon" /> 40
                        </a>
                        <a href="#" className="btn -mail">
                            <span className="-ap  icon-mail6 icon" /> 10
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}
