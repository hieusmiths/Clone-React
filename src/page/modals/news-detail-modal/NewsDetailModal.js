import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'

class NewsDetailModal extends Component {

    createMarkup = (document) => {
        const url = 'src="http://27.74.250.96:8283/document/'
        if(document) {
            const changedSrc = this.replacePathImage(url, document)
            console.log(changedSrc)
            return {__html: changedSrc};
        }
    }
    replacePathImage = (change, str) => {
        return str.replace(/src="document\?\id=/gi, change);
    }
    render() {
        const { content } = this.props;
        return (
            <section className="News-Detail-Page">
                <div className="modal news-details__modal" id="newsDetailsModal">
                <div className="ndt-modal__container">
                    <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <button type="button" className="close close-button" data-dismiss="modal">×</button>
                        <div className="clearfix" />
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                        <div className="modal-body__container container">
                        <div className="news-details__content-top">
                            <div className="news-details__header d-flex">
                            <div className="nd-header__logo">
                                <img className="nd-header--logo" src="../../assets/img/avatar-user.png" />
                            </div>
                            <div className="nd-header__title">
                                <div className="header-title__container">
                                <a href="/#" className="header-title-name">Nam Anh</a>
                                <div className="header-title__content">[
                                    <span className="small-text">Chuyên gia</span>
                                    <span className="content-1">
                                    3,5+
                                    <img className="edit-star" src="../../assets/img/SVG/star.svg" />
                                    </span>
                                    ]</div>
                                <span className="header-title--time-post">3 ngày trước</span>
                                </div>
                            </div>
                            </div>
                            <div className="nd-header__title-text"> {content.name} </div>
                            <p> {content.description} </p>
                            <div id='document' dangerouslySetInnerHTML={this.createMarkup(content.document)}>
                            </div>
                        </div>
                        <div className="info-fix">
                            <div className="name">Nam Anh</div>
                            <div className="post-time">03 ngày trước</div>
                            <a className="btn btn-follow" href="/#">Theo giõi</a>
                            <div className="actions">
                            <div>
                                <a href="/#" className="btn">
                                <span className="-ap  icon-like2 icon" /> 40
                                </a>
                            </div>
                            <div>
                                <a href="/#" className="btn">
                                <span className="-ap  icon-share4 icon" /> 40
                                </a>
                            </div>
                            <div>
                                <a href="/#" className="btn">
                                <span className="-ap  icon-bookmark_outline icon" /> 40
                                </a>
                            </div>
                            </div>
                        </div>
                        {/*--------- Content-bottom -------*/}
                        <div className="divider-gray" />
                        <div className="news-details__content-bottom">
                            <div className="box-comments" style={{paddingTop: '20px'}}>
                            <h2 className="title-main">Bình luận</h2>
                            <div className="comments">
                                <div className="item">
                                <div className="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)'}}>
                                </div>
                                <div className="username">Lâm Thy Văn Tần <span className="datetime">12:09 - 18/10/2019</span></div>
                                <div className="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                                    0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho vay
                                    lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                                <div className="action-buttons-bottom">
                                    <a href="/#" className="btn">
                                    Trả lời
                                    </a>
                                    <a href="/#" className="btn -comment">
                                    <span className="fa fa-comment-o icon" /> 40
                                    </a>
                                    <a href="/#" className="btn">
                                    <span className="-ap  icon-like2 icon" /> 40
                                    </a>
                                    <a href="/#" className="btn -share">
                                    <span className="-ap  icon-share4 icon" /> 40
                                    </a>
                                </div>
                                </div>
                                <div className="item">
                                <div className="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)'}}>
                                </div>
                                <div className="username">Lâm Thy Văn Tần <span className="datetime">12:09 - 18/10/2019</span></div>
                                <div className="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                                    0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho vay
                                    lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                                <div className="action-buttons-bottom">
                                    <a href="/#" className="btn">
                                    Trả lời
                                    </a>
                                    <a href="/#" className="btn -comment">
                                    <span className="fa fa-comment-o icon" /> 40
                                    </a>
                                    <a href="/#" className="btn">
                                    <span className="-ap  icon-like2 icon" /> 40
                                    </a>
                                    <a href="/#" className="btn -share">
                                    <span className="-ap  icon-share4 icon" /> 40
                                    </a>
                                </div>
                                <div className="comments">
                                    <div className="item">
                                    <div className="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)'}} />
                                    <div className="username">Lâm Thy Văn Tần <span className="datetime">12:09 - 18/10/2019</span></div>
                                    <div className="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                                        0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho
                                        vay lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                                    <div className="action-buttons-bottom">
                                        <a href="/#" className="btn">
                                        Trả lời
                                        </a>
                                        <a href="/#" className="btn -comment">
                                        <span className="fa fa-comment-o icon" /> 40
                                        </a>
                                        <a href="/#" className="btn">
                                        <span className="-ap  icon-like2 icon" /> 40
                                        </a>
                                        <a href="/#" className="btn -share">
                                        <span className="-ap  icon-share4 icon" /> 40
                                        </a>
                                    </div>
                                    </div>
                                    <div className="item">
                                    <div className="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)'}} />
                                    <div className="username">Lâm Thy Văn Tần <span className="datetime">12:09 - 18/10/2019</span></div>
                                    <div className="comment-content">Đầu tư an toàn, bảo toàn dòng vốn. Cam kết lợi nhuận 10%/năm. Hỗ trợ lãi suất
                                        0%/tháng. Bảo đảm chất lượng với đơn vị vận hành quốc tế. Giá trị bất động sản tăng theo hàng năm. Cho
                                        vay lên tới 65% Cơ hội du lịch miễn phí. Vốn đầu tư từ 600 triệu. Tặng 15 đêm nghỉ dưỡng.</div>
                                    <div className="action-buttons-bottom">
                                        <a href="/#" className="btn">
                                        Trả lời
                                        </a>
                                        <a href="/#" className="btn -comment">
                                        <span className="fa fa-comment-o icon" /> 40
                                        </a>
                                        <a href="/#" className="btn">
                                        <span className="-ap  icon-like2 icon" /> 40
                                        </a>
                                        <a href="/#" className="btn -share">
                                        <span className="-ap  icon-share4 icon" /> 40
                                        </a>
                                    </div>
                                    </div>
                                    <div className="item -input">
                                    <div className="avatar" style={{backgroundImage: 'url(https://www.bitgab.com/uploads/profile/files/default.png)'}} />
                                    <input className="form-control comment-input" placeholder="Viết bình luận" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="divider-gray">
                        </div>
                        <div className="bottom-related-news">
                            <div className="title-main">Các bài viết liên quan</div>
                            <div className="list-news">
                            <div className="item">
                                <div className="wrap">
                                <a href="/#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                </a>
                                <h3 className="post-title">
                                    <a href="/#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                </h3>
                                <div className="post-time">
                                    12:09 - 18/10/2019
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                <a href="/#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                </a>
                                <h3 className="post-title">
                                    <a href="/#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                </h3>
                                <div className="post-time">
                                    12:09 - 18/10/2019
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                <a href="/#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                </a>
                                <h3 className="post-title">
                                    <a href="/#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                </h3>
                                <div className="post-time">
                                    12:09 - 18/10/2019
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                <a href="/#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                </a>
                                <h3 className="post-title">
                                    <a href="/#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                </h3>
                                <div className="post-time">
                                    12:09 - 18/10/2019
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                <a href="/#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                </a>
                                <h3 className="post-title">
                                    <a href="/#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                </h3>
                                <div className="post-time">
                                    12:09 - 18/10/2019
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                <a href="/#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                </a>
                                <h3 className="post-title">
                                    <a href="/#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                </h3>
                                <div className="post-time">
                                    12:09 - 18/10/2019
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                <a href="/#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                </a>
                                <h3 className="post-title">
                                    <a href="/#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                </h3>
                                <div className="post-time">
                                    12:09 - 18/10/2019
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                <a href="/#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                </a>
                                <h3 className="post-title">
                                    <a href="/#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                </h3>
                                <div className="post-time">
                                    12:09 - 18/10/2019
                                </div>
                                </div>
                            </div>
                            </div>  
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    content: state.posts.content
})

const mapDispatchToProps = dispath => {
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailModal)