import React, { Component } from 'react'
import { diffDays } from './../../../utils/functions/diffDays'
export default class TheRoad extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="rp-search-result-item">
                <div className="search-result__item-container d-flex"><img className="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                    <div className="sr-item__poster">
                    <div className="poster--avatar"><a href="#"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
                    </div>
                    <div className="sr-item__details">
                    <div className="item-details__container">
                        <div className="item-details__title">
                        <div className="ids-title__content">
                            <div className="ids-title--header d-flex"><a className="title--name" href="#">{data.user.name}</a>
                            <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                            </div>
                            <p className="mb-0 ids-title--category">đã đăng một <a className="ids-title--category" href="/ket-qua/thong-tin">Con đường</a> </p>
                            <p className="mb-0 ids-title--date-posted">{ diffDays(data.write_date) } ngày trước</p>
                        </div>
                        </div>
                        <div className="item-details__post box-info-line">
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                            <div className="name">Lý Chính Thắng</div>
                            <div className="location">Phường 7, Quận Tân Bình, {data.address_name}</div>
                            <p className="info-left">Bất động sản trên đường này</p>
                            <div className="info-row">
                                <span>
                                <span className="value">12</span>
                                <span className="key">đất nền</span>
                                </span>
                                <span>
                                <span className="value">12</span>
                                <span className="key">căn hộ</span>
                                </span>
                            </div>  
                            </div>
                            <div className="col-sm-4 col-xs-12">
                            <div className="map">
                                <img src="../../assets/uploads/map.jpg" alt="" />
                            </div>
                            </div>
                            <div className="col-sm-4 col-xs-12 box-right">
                            <p className="info-right">Phân đoạn: <span style={{color: '#707070'}}>Toàn đường</span></p>
                            <div className="info-line">
                                <span>Hiện hữu 15,5m</span>
                                <span>Lộ giới 15,5m</span>
                            </div>
                            <p className="info-right">Lộ giới 15,5m</p>
                            <p className="info-right">Avalue: 140tr/m <span className="subtop">2</span></p>
                            <p className="info-right">Gợi ý kinh doanh: Làm khách sạn</p>
                            </div>
                        </div>   
                        </div>
                        <div className="item-details__actions">
                        <div className="action-buttons-bottom">
                            <a href="#" className="btn -marked">
                            <span className="fa fa-star icon" /> 40
                            </a>
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
                            <a href="#" className="btn -mail">
                            <span className="-ap   icon-add_shopping_cart icon" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}
