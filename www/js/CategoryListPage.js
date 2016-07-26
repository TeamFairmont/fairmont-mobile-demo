var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'Shared', "react", "components/CategoryListItem"], function (require, exports, Shared_1, React, CategoryListItem_1) {
    "use strict";
    var CategoryListPage = (function (_super) {
        __extends(CategoryListPage, _super);
        function CategoryListPage() {
            var _this = this;
            _super.call(this);
            this.componentDidMount = function () {
                _this._el.addEventListener("init", _this.handleInit.bind(_this));
                _this._el.addEventListener("destroy", _this.handleDestroy.bind(_this));
                _this._el.addEventListener("show", _this.handleShow.bind(_this));
                _this._el.addEventListener("hide", _this.handleHide.bind(_this));
                Shared_1.boltCall("mobile/getCategories", {}, function (result) {
                    _this.setState(result.return_value);
                });
            };
            this.state = {
                categories: []
            };
        }
        CategoryListPage.prototype.render = function () {
            var _this = this;
            return React.createElement("ons-page", {id: "categorylistpage", ref: function (c) { return _this._el = c; }}, React.createElement("ons-toolbar", null, React.createElement("div", {className: "left"}, React.createElement("ons-back-button", null, "Back")), React.createElement("div", {className: "center"}, "Product Categories")), React.createElement("ons-list", null, React.createElement("ons-list-header", null, "Main Categories"), this.state.categories.map(function (v, i) {
                return React.createElement(CategoryListItem_1.CategoryListItem, {key: i, name: v.name, id: v.id});
            })));
        };
        CategoryListPage.prototype.handleInit = function (ev) {
        };
        CategoryListPage.prototype.handleDestroy = function (ev) {
        };
        CategoryListPage.prototype.handleShow = function (ev) {
        };
        CategoryListPage.prototype.handleHide = function (ev) {
        };
        return CategoryListPage;
    }(React.Component));
    exports.CategoryListPage = CategoryListPage;
});
//# sourceMappingURL=CategoryListPage.js.map