var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'Shared', "react", "react-dom", "components/CartListItem"], function (require, exports, Shared_1, React, ReactDOM, CartListItem_1) {
    "use strict";
    var CartPopover = (function (_super) {
        __extends(CartPopover, _super);
        function CartPopover() {
            var _this = this;
            _super.call(this);
            this.componentDidMount = function () {
                _this._el.querySelector("#checkout").addEventListener("click", _this.showMessage.bind(_this));
                _this._el.querySelector("#close").addEventListener("click", _this.closePopover.bind(_this));
                Shared_1.boltCall("mobile/adjustCart", { cartId: _this.props.cartId, product: _this.props.productToAdd }, function (result) {
                    _this.setState(result.return_value);
                    var popover = _this._el;
                    popover.show(document.querySelector("#buybutton").parentElement.parentElement);
                });
            };
            this.showMessage = function (ev) {
                ons.notification.alert("TODO: Normally this would navigate to the checkout process.");
            };
            this.closePopover = function (ev) {
                var popover = _this._el;
                popover.hide();
                ReactDOM.unmountComponentAtNode(_this._el.parentElement);
            };
            this.state = {
                "cartItems": [],
                "subtotal": 0,
                "shipping": 0,
                "tax": 0,
                "total": 0,
                "promos": []
            };
        }
        CartPopover.prototype.render = function () {
            var _this = this;
            return React.createElement("ons-popover", {direction: "down", id: "cart", ref: function (c) { return _this._el = c; }}, React.createElement("div", {style: { padding: "10px", textAlign: "center" }}, React.createElement("p", null, React.createElement("h4", null, this.props.message)), React.createElement("p", null, React.createElement("ons-list", null, React.createElement("ons-list-header", null, "Your Cart"), this.state.cartItems.map(function (v, i) {
                return React.createElement(CartListItem_1.CartListItem, {meta: v.meta, key: i, name: v.name, price: v.price, stock: v.stock, sku: v.sku, previewImage: v.previewImage});
            }))), React.createElement("p", null, "Subtotal: $", this.state.subtotal, React.createElement("br", null), "Shipping: $", this.state.shipping, React.createElement("br", null), "Tax: $", this.state.tax, React.createElement("br", null), React.createElement("strong", null, "Total: $", this.state.total)), React.createElement("p", null, React.createElement("ons-button", {id: "checkout"}, "Checkout"), " ", React.createElement("ons-button", {id: "close"}, "Close"))));
        };
        return CartPopover;
    }(React.Component));
    exports.CartPopover = CartPopover;
});
//# sourceMappingURL=CartPopover.js.map