import {pageManager, boltCall} from 'Shared'
import * as React from "react"
import * as ReactDOM from "react-dom"
import {ProductListItem} from "components/ProductListItem"

export interface ProductListPageProps { categoryId:number, name:string }

export class ProductListPage extends React.Component<ProductListPageProps, {products:Array<any>}> {
    private _el:Element;

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    render() {
        return <ons-page id="productlistpage" ref={(c:Element) => this._el = c}>
                <ons-toolbar>
                <div className="left">
                    <ons-back-button>Back</ons-back-button>
                </div> 
                <div className="center">{this.props.name}</div>
                </ons-toolbar>
                <ons-list>
                    <ons-list-header>View Products</ons-list-header>
                    {this.state.products.map((v, i)=>{
                        return <ProductListItem key={i} name={v.name} price={v.price} stock={v.stock} sku={v.sku} previewImage={v.previewImage}></ProductListItem>
                    })} 
                </ons-list>
                
            </ons-page>;
    }

    public componentDidMount = () => {
        this._el.addEventListener("init", this.handleInit.bind(this));
        this._el.addEventListener("destroy", this.handleDestroy.bind(this));
        this._el.addEventListener("show", this.handleShow.bind(this));
        this._el.addEventListener("hide", this.handleHide.bind(this));

        boltCall("mobile/getCategoryProducts", {categoryId: this.props.categoryId}, (result:any) => {
            this.setState(result.return_value);
        });
    }

    private handleInit(ev:Event) {
    }

    private handleDestroy(ev:Event) {
    }

    private handleShow(ev:Event) {
    }

    private handleHide(ev:Event) {
    }
}   