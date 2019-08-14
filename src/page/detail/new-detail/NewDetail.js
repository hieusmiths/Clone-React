import React, { Component } from 'react'

export default class NewDetail extends Component {
    render() {
        return (
            <section className="News-Detail-Page">
                {/* Button to Open the Modal */}
                <button className="btn btn-primary mt-3" data-toggle="modal" data-target="#newsDetailsModal">
                    Open modal
                </button>
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
                                    <a href="#" className="header-title-name">Nam Anh</a>
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
                            <div className="nd-header__title-text">Vì sao hầu hết người đi mua nhà đều ưa chuộng những căn hộ đã hoàn
                                thiện, đủ tiện nghi và sẵn sàng vào ở? </div>
                            <img className="edit-picture" src="../../assets/img/phong_detail.png" />
                            <div className="nd-content__texts">
                                <p className="text-1">
                                Giảm áp lực căn hộ hình thành trong tương lai khác biệt quá lớn so với truyền thông,
                                những dự án đã hoàn thiện, bàn giao luôn được người mua nhà ưu tiên lựa chọn. Với chính sách
                                "Nhận nhà trước – Trả tiền sau" dự án VC2 Golden Heart số 1, Nghiêm Xuân Yêm, phường Đại Kim,
                                quận Hoàng Mai nhanh chóng ghi điểm.
                                </p>
                                <p className="text-2">
                                Dự án chuẩn bị bàn giao, giảm thiểu áp lực.
                                </p>
                                <p className="text-3">
                                Mua nhà là chuyện an cư lạc nghiệp lâu dài. Giá trị của những sản phẩm BĐS không hề nhỏ.
                                Chuyện người mua nhà băn khoăn, cân đo đong đếm trước khi đưa ra quyết định là điều dễ hiểu.
                                <br />
                                <br />
                                Anh Tuấn, nhân viên một sàn giao dịch có nhiều năm kinh nghiệm về phân phối căn hộ tại Hà
                                Nội chia sẻ: Hiện nay, nguồn cung nhà phong phú, người mua nhà thường lo ngại khi đối mặt
                                với nhiều rủi ro khi lựa chọn những căn hộ trên giấy. Nhất là khi số lượng và loại hình sản
                                phẩm tăng nhưng không đi kèm với chất lượng, bàn giao không đúng thời hạn hoặc thậm chí, sản
                                phẩm khác xa so với bản vẽ mẫu. Thực tế cũng chứng minh, những dự án đã xây dựng xong và
                                tiến hành bàn giao mới ghi điểm trên thị trường và tính thanh khoản sẽ cao.
                                <br />
                                <br />
                                Xét về góc độ kinh tế, những dự án đã hoàn thiện và sẵn sàng bàn giao giúp khách hàng tiết
                                kiệm được một khoản phí thuê nhà. Theo thống kê giá thuê nhà của một gia đình trung bình 5 -
                                10 triệu đồng mỗi tháng. Khi không phải đặt cọc và bỏ ra vài năm để chờ đợi thì người mua
                                nhà hoàn thành và bàn giao đưa vào sử dụng đã tiết kiệm được hàng trăm triệu đồng.
                                <br />
                                <br />
                                Lựa chọn những dự án đã bàn giao, người mua nhà cũng được hưởng các hạng mục, tiện ích nội
                                khu hoàn thiện, trọn vẹn hơn. Dưới áp lực người đi mua nhà có cơ hội được trực tiếp trải
                                nghiệm, "mục sở thị" dự án, chủ đầu tư không chỉ phải chú trọng xây dựng dự án, mà còn phải
                                chỉn chu, kỹ lưỡng hơn trong từng hạng mục. Ngoài ra, có thời gian tìm hiểu thông tin pháp
                                lý của dự án, người mua nhà cũng hạn chế được rủi ro, tranh chấp về giấy tờ sở hữu sau khi
                                nhận nhà. Bởi những lý do này, căn hộ đã bàn giao, đưa vào sử dụng luôn hút khách, đón nhiều
                                tín hiệu tích cực.
                                </p>
                                <div>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper swiper-content">
                                    <div className="swiper-slide">
                                        <img src="../../assets/img/toa_nha_2.png" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="../../assets/img/phong_detail.png" />
                                    </div>
                                    </div>
                                    {/* Add Arrows */}
                                    <div className="swiper-button-next edit-button-next" />
                                    <div className="swiper-button-prev edit-button-prev" />
                                </div>
                                </div>
                                <p>
                                </p><p className="text-2">
                                Nhận nhà trước, trả tiền sau.
                                </p>
                                <p className="text-3">
                                Trong bối cảnh những dự án đã hoàn thiện và sẵn sàng bàn giao đang trở thành lựa chọn được ưu
                                tiên,
                                chủ đầu tư không những phải đẩy nhanh tiến độ xây dựng, mà còn phải đưa ra những chính sách thật
                                sự
                                nổi bật.
                                <br />
                                <br />
                                Điển hình như dự án VC2 Golden Heart số 1, Nghiêm Xuân Yêm, phường Đại Kim, quận Hoàng Mai, nhân
                                dịp
                                dự án hoàn thành, bàn giao đưa vào sử dụng vào tháng 6/2019, Chủ đầu tư Vinaconex 2 đã có chính
                                sách
                                ưu đãi đặc biệt hấp dẫn "Nhận nhà trước – Trả tiền sau": Khách hàng chỉ cần thanh toán 30% giá
                                trị
                                căn
                                hộ là được nhận bàn giao ngay nhà để sử dụng, 70% còn lại trả theo tiến độ thanh toán linh hoạt.
                                Chính
                                sách ưu đãi này sẽ giúp cho khách hàng đang đi thuê vừa có nhà để ở, vừa giải tỏa được áp lực
                                tài
                                chính khi kéo giãn tiến độ thanh toán. Cơ hội chỉ áp dụng cho Khách hàng đặt mua căn hộ từ ngày
                                22/5/2019 đến hết 30/6/2019.
                                <br />
                                <br />
                                Ngoài ra, Công ty Vinaconex 2 còn rất nhiều chính sách ưu đãi, hấp dẫn cho Khách hàng như: chính
                                sách
                                ưu đãi lên đến 10% - tương đương gần 200 triệu đồng, Khách hàng nộp đủ 70% giá trị căn hộ ngay
                                sau
                                khi
                                ký hợp đồng sẽ được tặng thêm 1% giá trị căn hộ , hỗ trợ lãi suất ngân hàng 0% ...
                                </p>
                                <p />
                                <div>
                                <div className="edit-tags__content d-flex flex-wrap">
                                    <span style={{marginTop: '10px', fontSize: '16px', fontWeight: 500, color: '#3b63a1'}}>Tags:</span>
                                    <div className="nav-item edit-tags">
                                    <a className="tag-item  text-2">
                                        BatDongSan
                                    </a>
                                    </div>
                                    <div className="nav-item edit-tags">
                                    <a className="tag-item text-2 tag-item-3">
                                        Laisuatnganhang
                                    </a>
                                    </div>
                                    <div className="nav-item edit-tags">
                                    <a className="tag-item  text-2">
                                        BatDongSan
                                    </a>
                                    </div>
                                    <div className="nav-item edit-tags">
                                    <a className="tag-item  text-2">
                                        BatDongSan
                                    </a>
                                    </div>
                                    <div className="nav-item edit-tags">
                                    <a className="tag-item  text-2">
                                        BatDongSan
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="info-fix">
                            <div className="name">Nam Anh</div>
                            <div className="post-time">03 ngày trước</div>
                            <a className="btn btn-follow" href="#">Theo giõi</a>
                            <div className="actions">
                                <div>
                                <a href="#" className="btn">
                                    <span className="-ap  icon-like2 icon" /> 40
                                </a>
                                </div>
                                <div>
                                <a href="#" className="btn">
                                    <span className="-ap  icon-share4 icon" /> 40
                                </a>
                                </div>
                                <div>
                                <a href="#" className="btn">
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
                                    <a href="#" className="btn">
                                        Trả lời
                                    </a>
                                    <a href="#" className="btn -comment">
                                        <span className="fa fa-comment-o icon" /> 40
                                    </a>
                                    <a href="#" className="btn">
                                        <span className="-ap  icon-like2 icon" /> 40
                                    </a>
                                    <a href="#" className="btn -share">
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
                                    <a href="#" className="btn">
                                        Trả lời
                                    </a>
                                    <a href="#" className="btn -comment">
                                        <span className="fa fa-comment-o icon" /> 40
                                    </a>
                                    <a href="#" className="btn">
                                        <span className="-ap  icon-like2 icon" /> 40
                                    </a>
                                    <a href="#" className="btn -share">
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
                                        <a href="#" className="btn">
                                            Trả lời
                                        </a>
                                        <a href="#" className="btn -comment">
                                            <span className="fa fa-comment-o icon" /> 40
                                        </a>
                                        <a href="#" className="btn">
                                            <span className="-ap  icon-like2 icon" /> 40
                                        </a>
                                        <a href="#" className="btn -share">
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
                                        <a href="#" className="btn">
                                            Trả lời
                                        </a>
                                        <a href="#" className="btn -comment">
                                            <span className="fa fa-comment-o icon" /> 40
                                        </a>
                                        <a href="#" className="btn">
                                            <span className="-ap  icon-like2 icon" /> 40
                                        </a>
                                        <a href="#" className="btn -share">
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
                                    <a href="#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                    </a>
                                    <h3 className="post-title">
                                    <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                    </h3>
                                    <div className="post-time">
                                    12:09 - 18/10/2019
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="wrap">
                                    <a href="#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                    </a>
                                    <h3 className="post-title">
                                    <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                    </h3>
                                    <div className="post-time">
                                    12:09 - 18/10/2019
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="wrap">
                                    <a href="#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                    </a>
                                    <h3 className="post-title">
                                    <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                    </h3>
                                    <div className="post-time">
                                    12:09 - 18/10/2019
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="wrap">
                                    <a href="#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                    </a>
                                    <h3 className="post-title">
                                    <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                    </h3>
                                    <div className="post-time">
                                    12:09 - 18/10/2019
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="wrap">
                                    <a href="#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                    </a>
                                    <h3 className="post-title">
                                    <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                    </h3>
                                    <div className="post-time">
                                    12:09 - 18/10/2019
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="wrap">
                                    <a href="#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                    </a>
                                    <h3 className="post-title">
                                    <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                    </h3>
                                    <div className="post-time">
                                    12:09 - 18/10/2019
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="wrap">
                                    <a href="#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                    </a>
                                    <h3 className="post-title">
                                    <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
                                    </h3>
                                    <div className="post-time">
                                    12:09 - 18/10/2019
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="wrap">
                                    <a href="#" className="post-image" style={{backgroundImage: 'url(https://cdn.tuoitre.vn/thumb_w/640/2019/1/16/photo-1-15476236955311643255083.jpg)'}}>
                                    <img src="../../assets/img/204x102.jpg" alt="" />
                                    </a>
                                    <h3 className="post-title">
                                    <a href="#">Tòa nhà Lý Chính Thắng đang trong giai đoạn hoàn thiện…</a>
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
