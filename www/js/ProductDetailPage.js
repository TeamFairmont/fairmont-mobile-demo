var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'Shared', 'components/CartPopover', "react", "react-dom"], function (require, exports, Shared_1, CartPopover_1, React, ReactDOM) {
    "use strict";
    var ProductDetailPage = (function (_super) {
        __extends(ProductDetailPage, _super);
        function ProductDetailPage() {
            var _this = this;
            _super.call(this);
            this.handleClick = function (ev) {
                ReactDOM.render(React.createElement(CartPopover_1.CartPopover, {productToAdd: _this.props.sku, message: "Successfully added to cart!", cartId: "123"}), document.getElementById("cartholder"));
            };
            this.componentDidMount = function () {
                Shared_1.boltCall("mobile/getProductDetail", { sku: _this.props.sku }, function (result) {
                    _this.setState({ product: result.return_value });
                });
            };
            this.state = {
                product: { images: [] }
            };
        }
        ProductDetailPage.prototype.render = function () {
            var _this = this;
            return React.createElement("ons-page", {id: "productdetail", ref: function (c) { return _this._el = c; }}, React.createElement("ons-toolbar", null, React.createElement("div", {className: "left"}, React.createElement("ons-back-button", null, "Back")), React.createElement("div", {className: "center"}, this.props.sku), React.createElement("div", {className: "right", onClick: this.handleClick.bind(this)}, React.createElement("ons-toolbar-button", {id: "buybutton"}, React.createElement("ons-icon", {icon: "ion-ios-cart"}), " Buy"))), React.createElement("ons-carousel", {style: { height: "150px" }, swipeable: true, overscrollable: true, "auto-scroll": true, "auto-refresh": true}, React.createElement("div", {style: { float: "left", zIndex: 1, position: "relative", textAlign: "center", color: "white", fontWeight: "bold", textShadow: "1px 1px black" }}, this.state.product.name, " (", this.props.sku, ")"), this.state.product.images.map(function (v, i) {
                return React.createElement("ons-carousel-item", {key: i}, React.createElement("img", {src: v, style: { width: "100%", height: "150px" }}));
            })), React.createElement("div", null, "Price: $", this.state.product.price, " ", React.createElement("br", null), this.state.product.stock >= 1 ? 'In-Stock' : 'Out of Stock', React.createElement("br", null), React.createElement("br", null), this.state.product.desc), React.createElement("div", {id: "cartholder"}));
        };
        return ProductDetailPage;
    }(React.Component));
    exports.ProductDetailPage = ProductDetailPage;
});
//# sourceMappingURL=ProductDetailPage.js.map