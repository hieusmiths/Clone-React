import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchIResultItem extends Component {
    render() {
        return (
            <div class="rp-search-result-item">
                <div class="search-result__item-container d-flex"><img class="sr-item__modal" src="../../../assets/img/icon-modal.png" />
                    <div class="sr-item__poster">
                        <div class="poster--avatar"><a href="#"><img src="../../../assets/img/1pcs-hot-kawaii-small-teddy-bears-plush-toys.png" alt="" /></a></div>
                    </div>
                    <div class="sr-item__details">
                        <div class="item-details__container">
                            <div class="item-details__title">
                                <div class="ids-title__content">
                                    <div class="ids-title--header d-flex"><a class="title--name" href="#">Asset data team</a>
                                        <div class="title--rate d-flex align-items-center"><span>[Chung c&#x1B0; </span><span class="title_rate--highlight"> 3,5+ </span><img src="../../assets/img/star.png" alt="" />]</div>
                                    </div>
                                    <p class="mb-0 ids-title--category">đã đăng một <a class="ids-title--category" href="/ket-qua/thong-tin">Con đường</a> </p>
                                    <p class="mb-0 ids-title--date-posted">10 ng&agrave;y tr&#x1B0;&#x1EDB;c</p>
                                </div>
                            </div>
                            <div class="item-details__post box-info-line">
                                <div class="box-info-tn">
                                    <div class="icon">
                                        <img src="../../assets/img/home/googlepdf@3x.jpg" alt="" />
                                    </div>
                                    <div class="title">Cần thông tin pháp lý khi mua nhà tại quận 2? </div>
                                    <div class="description">Chiều cao, cân nặng hiển thị thông tin từ lịch sử ra. Cho phép sửa đổi và lưu lại thành lịch sử (Thong tin lưu cùng chỗ với thông tin thể lực của bệnh nhân)Bổ sung thêm cột: Thời gian tạo.Danh sách bệnh nhân được order mặc định theo thời gian tạo, từ mới nhất xuống cũ nhất. Khi tạo mới 1 bệnh nhân, mặc định bệnh nhân mới được tạo sẽ được sắp xếp ngày lên đầu tiên</div>
                                </div>  
                            </div>
                            <div class="item-details__actions">
                                <div class="action-buttons-bottom">
                                    <a href="#" class="btn -marked">
                                        <span class="fa fa-star icon"></span> 40
                                    </a>
                                    <a href="#" class="btn -comment">
                                        <span class="fa fa-comment-o icon"></span> 40
                                    </a>
                                    <a href="#" class="btn -liked">
                                        <span class="-ap  icon-like2 icon"></span> 40
                                    </a>
                                    <a href="#" class="btn -share">
                                        <span class="-ap  icon-share4 icon"></span> 40
                                    </a>
                                    <a href="#" class="btn -mail">
                                        <span class="-ap  icon-mail6 icon"></span> 10
                                    </a>
                                    <a href="#" class="btn -mail">
                                        <span class="-ap   icon-add_shopping_cart icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    fillSearchResultItem = () => {
        return 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchIResultItem)
