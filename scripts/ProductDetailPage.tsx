import {pageManager, boltCall} from 'Shared'
import {CartPopover} from 'components/CartPopover'
import * as React from "react"
import * as ReactDOM from "react-dom"

declare var ons:any;

export interface Props { sku:string }

export class ProductDetailPage extends React.Component<Props, { product:any }> {
    private _el:Element;
 
    constructor() {
        super();
        this.state = {
            product: {images:[]}
        }
    }

    render() { 
        return <ons-page id="productdetail" ref={(c:Element) => this._el = c}>
                <ons-toolbar>
                    <div className="left">
                        <ons-back-button>Back</ons-back-button>
                    </div> 
                    <div className="center">{this.props.sku}</div>
                    <div className="right" onClick={this.handleClick.bind(this)}>
                        <ons-toolbar-button id="buybutton"><ons-icon icon="ion-ios-cart" /> Buy</ons-toolbar-button>
                    </div>
                </ons-toolbar>
                <ons-carousel style={{height:"150px"}} swipeable overscrollable auto-scroll auto-refresh>
                    <div style={{float:"left", zIndex:1, position:"relative", textAlign:"center", color:"white",fontWeight:"bold", textShadow:"1px 1px black"}}>
                        {this.state.product.name} ({this.props.sku})
                    </div>
                    {this.state.product.images.map((v:any, i:any)=>{
                        return <ons-carousel-item key={i}><img src={v} style={{width:"100%", height:"150px"}} /></ons-carousel-item>
                    })} 
                </ons-carousel>
                <div>
                    Price: ${this.state.product.price} <br/>
                    {this.state.product.stock>=1 ? 'In-Stock' : 'Out of Stock'}<br/>
                    <br/>
                    {this.state.product.desc}
                </div>              
                <div id="cartholder"></div>
            </ons-page>;
    }

    private handleClick = (ev:Event) => {
        ReactDOM.render(<CartPopover productToAdd={this.props.sku} message="Successfully added to cart!" cartId="123"></CartPopover>,document.getElementById("cartholder"));
    }

    private componentDidMount = () => {
        boltCall("mobile/getProductDetail", {sku: this.props.sku}, (result:any) => {
            this.setState({product: result.return_value});
        });
    }
}