import React, { Component } from 'react'

export default class HomePersonal extends Component {
    render() {
        const {data} = this.props;
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
                            <div className="ids-title--header d-flex"><a className="title--name" href="#">Asset data team</a>
                            {data.name}
                            <div className="title--rate d-flex align-items-center"><span>[Chung cư </span><span className="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                            </div>
                            <p className="mb-0 ids-title--category">đã đăng một bài viết trong <a className="ids-title--category" href="/ket-qua/thong-tin">Nhà riêng</a> cùng với <a href="/#" className="ids-title--category">Homekeys 97891</a> cập nhật trạng thái <span className="red bold">Bán</span></p>
                            <p className="mb-0 ids-title--date-posted">10 ngày trước</p>
                        </div>
                        </div>
                        <div className="item-details__post">
                        <div className="realestate-item">
                            <div className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                            <img src="../../assets/img/125x130.jpg" alt="" />
                            <div className="like  fa fa-heart-o" />
                            </div>
                            <div className="post-content">
                            <div className="top"><span>2,66 tỷ</span>  <span className="#" style={{color: '#189655'}}>60,78m<sub className="subtop">2</sub></span>  <span className="#" style={{color: "#189655" }} >150,0m<sub className="subtop">2</sub> <em style={{fontWeight: 'normal'}}>sàn</em> </span> </div>
                            <div className="location">711014P0001- Hồ Thị Kỷ, Phường 4, Quận 6, Hồ Chí Minh</div>
                            <div className="actions">
                                <button className="btn">
                                <img src="../../assets/img/bxs-edit.svg" alt="" />
                                </button>
                                <button className="btn">
                                <img src="../../assets/img/earth.svg" alt="" />
                                </button>
                                <button className="btn">
                                <img src="../../assets/img/baseline-map-24px.svg" alt="" />
                                </button>
                            </div>
                            <div className="map">
                                <img src="../../assets/uploads/map.jpg" alt="" />
                            </div>
                            <div className="info -top">
                                <span>Nhà xây dựng</span>  <span>Bàn giao T2.2010</span>  <span>Đã hoàn công</span>  <span>Sổ hồng</span>
                            </div>
                            <div className="info -ban">
                                <span className="status -ban">Bán</span>  <span>Avalue: <strong>2,65 tỷ</strong></span>  <span>Arent: <strong>7,5 triệu/ Tháng</strong></span>
                            </div>
                            <div className="info">
                                <span><strong>47,2 triệu/m</strong> <sub className="subtop">2</sub></span>  <span>Trả trước: <strong>700 triệu</strong></span><span>Thanh toán: <strong>13,2 triệu/tháng</strong></span>
                            </div>
                            <div className="location"> <span>Hẻm xe hơi</span> <span>Đường vào 4,5m (LG 5,0m)</span></div>
                            <div className="bottom-info">
                                <span>
                                <img src="../../assets/img/cauthang.svg" alt="" /> 3 tầng
                                </span>
                                <span>
                                <img src="../../assets/img/icons/bx-bed.svg" alt="" /> 2
                                </span>
                                <span>
                                <img src="../../assets/img/icons/bx-bath.svg" alt="" /> 2
                                </span>
                                <span>
                                <img src="../../assets/img/icons/location.svg" alt="" /> Đông Nam
                                </span>
                            </div>
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
