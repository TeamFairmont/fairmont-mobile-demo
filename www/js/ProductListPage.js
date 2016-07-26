var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'Shared', "react", "components/ProductListItem"], function (require, exports, Shared_1, React, ProductListItem_1) {
    "use strict";
    var ProductListPage = (function (_super) {
        __extends(ProductListPage, _super);
        function ProductListPage() {
            var _this = this;
            _super.call(this);
            this.componentDidMount = function () {
                _this._el.addEventListener("init", _this.handleInit.bind(_this));
                _this._el.addEventListener("destroy", _this.handleDestroy.bind(_this));
                _this._el.addEventListener("show", _this.handleShow.bind(_this));
                _this._el.addEventListener("hide", _this.handleHide.bind(_this));
                Shared_1.boltCall("mobile/getCategoryProducts", { categoryId: _this.props.categoryId }, function (result) {
                    _this.setState(result.return_value);
                });
            };
            this.state = {
                products: []
            };
        }
        ProductListPage.prototype.render = function () {
            var _this = this;
            return React.createElement("ons-page", {id: "productlistpage", ref: function (c) { return _this._el = c; }}, React.createElement("ons-toolbar", null, React.createElement("div", {className: "left"}, React.createElement("ons-back-button", null, "Back")), React.createElement("div", {className: "center"}, this.props.name)), React.createElement("ons-list", null, React.createElement("ons-list-header", null, "View Products"), this.state.products.map(function (v, i) {
                return React.createElement(ProductListItem_1.ProductListItem, {key: i, name: v.name, price: v.price, stock: v.stock, sku: v.sku, previewImage: v.previewImage});
            })));
        };
        ProductListPage.prototype.handleInit = function (ev) {
        };
        ProductListPage.prototype.handleDestroy = function (ev) {
        };
        ProductListPage.prototype.handleShow = function (ev) {
        };
        ProductListPage.prototype.handleHide = function (ev) {
        };
        return ProductListPage;
    }(React.Component));
    exports.ProductListPage = ProductListPage;
});
//# sourceMappingURL=ProductListPage.js.map