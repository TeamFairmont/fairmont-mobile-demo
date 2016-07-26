var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'Shared', "react", "react-dom", "CategoryListPage", "MainMenu", "components/ProductListItem", "components/CategoryListItem"], function (require, exports, Shared_1, React, ReactDOM, CategoryListPage_1, MainMenu_1, ProductListItem_1, CategoryListItem_1) {
    "use strict";
    var StartPage = (function (_super) {
        __extends(StartPage, _super);
        function StartPage() {
            var _this = this;
            _super.call(this);
            this.componentDidMount = function () {
                _this._el.addEventListener("init", _this.handleInit.bind(_this));
                _this._el.addEventListener("destroy", _this.handleDestroy.bind(_this));
                _this._el.addEventListener("show", _this.handleShow.bind(_this));
                _this._el.addEventListener("hide", _this.handleHide.bind(_this));
                Shared_1.boltCall("mobile/getHomeBanners", {}, function (result) {
                    _this.setState(result.return_value);
                });
                Shared_1.boltCall("mobile/getRecommendedProducts", { userId: "someuser" }, function (result) {
                    _this.setState(result.return_value);
                });
            };
            this.handleViewAllClick = function (ev) {
                Shared_1.pageManager.pushPage(Shared_1.pageManager.renderPage(React.createElement(CategoryListPage_1.CategoryListPage, null)).page);
            };
            this.handleClick = function (ev) {
                var menu = document.querySelector("ons-splitter-side");
                menu.open();
            };
            this.state = {
                images: [],
                products: [],
            };
        }
        StartPage.prototype.render = function () {
            var _this = this;
            return React.createElement("ons-page", {id: "startpage", ref: function (c) { return _this._el = c; }}, React.createElement("ons-toolbar", null, React.createElement("div", {className: "left"}, React.createElement("ons-back-button", null, "Back")), React.createElement("div", {className: "center"}, "Start Page"), React.createElement("div", {className: "right"}, React.createElement("ons-toolbar-button", null, React.createElement("ons-icon", {icon: "fa-bars", onClick: this.handleClick})))), React.createElement("ons-carousel", {style: { height: "300px" }, swipeable: true, overscrollable: true, "auto-scroll": true, "auto-refresh": true}, React.createElement("div", {style: { float: "left", zIndex: 1, position: "absolute", textAlign: "center", color: "white", fontWeight: "bold", textShadow: "1px 1px black" }}, React.createElement("br", null), "Welcome to our store", React.createElement("br", null), "Check out some of these great foods!"), this.state.images.map(function (v, i) {
                return React.createElement("ons-carousel-item", {key: i}, React.createElement("img", {src: v, style: { width: "100%", height: "300px" }}));
            })), React.createElement("ons-list", null, React.createElement("ons-list-header", null, "View Products"), React.createElement(CategoryListItem_1.CategoryListItem, {name: "Super Specials", id: 123}), React.createElement("ons-list-item", {onClick: this.handleViewAllClick.bind(this), modifier: "chevron", tappable: true}, "All Products"), React.createElement("ons-list-header", null, "Recommended For You"), this.state.products.map(function (v, i) {
                return React.createElement(ProductListItem_1.ProductListItem, {key: i, name: v.name, price: v.price, stock: v.stock, sku: v.sku, previewImage: v.previewImage});
            })));
        };
        StartPage.prototype.handleInit = function (ev) {
        };
        StartPage.prototype.handleDestroy = function (ev) {
        };
        StartPage.prototype.handleShow = function (ev) {
            ReactDOM.render(React.createElement(MainMenu_1.MainMenu, null), document.getElementById("menu"));
        };
        StartPage.prototype.handleHide = function (ev) {
        };
        return StartPage;
    }(React.Component));
    exports.StartPage = StartPage;
});
//# sourceMappingURL=StartPage.js.map