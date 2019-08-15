import React, { Component } from 'react'

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPage: 1,
            currentPage: 1,
        }
    }
    render() {
        return (
            <div className="rp-search-result__pagination">
                <div className="search-result__pagination-container container">
                    <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end"><a className="sr-pagination--btn sr-pagination--previous" href="#">Tr&#x1B0;&#x1EDB;c</a>
                        <div className="sr-pagination__items d-flex align-items-center"><a className="sr-pagination--item is-actived" href="/#">1</a><a className="sr-pagination--item" href="#">2</a><a className="sr-pagination--item" href="#">3</a><a className="sr-pagination--item" href="#">4</a><a className="sr-pagination--item" href="#">5</a></div><a className="sr-pagination--btn sr-pagination--next" href="#">Ti&#x1EBF;p</a>
                    </div>
                </div>
            </div>
        )
    }
}

