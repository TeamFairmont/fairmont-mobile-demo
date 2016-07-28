import {boltCall} from 'Shared'
import * as React from "react"
import * as ReactDOM from "react-dom"
import {CartListItem} from "components/CartListItem"

declare var ons:any;

export interface Props { cartId:string, message:string, productToAdd:string }

export class CartPopover extends React.Component<Props,{ cartItems:Array<any>, subtotal:number, shipping:number, tax:number, total:number, promos:Array<any> }> {
    private _el:Element;

    constructor() {
        super();
        this.state = {
            "cartItems":[
                   ], 
            "subtotal":0,
            "shipping":0,
            "tax":0,
            "total":0,
            "promos":[]
        };
    }

    render() {
        return <ons-popover direction="down" id="cart" ref={(c:Element) => this._el = c}>
            <div style={{padding: "10px", textAlign: "center"}}>
                <p><h4>{this.props.message}</h4></p>
                <p>
                    <ons-list>
                        <ons-list-header>Your Cart</ons-list-header>
                        {this.state.cartItems.map((v, i)=>{
                            return <CartListItem meta={v.meta} key={i} name={v.name} price={v.price} stock={v.stock} sku={v.sku} previewImage={v.previewImage}></CartListItem>
                        })} 
                    </ons-list>
                </p>
                <p>
                    Subtotal: ${this.state.subtotal}<br/>
                    Shipping: ${this.state.shipping}<br/>
                    Tax: ${this.state.tax}<br/>
                    <strong>Total: ${this.state.total}</strong>
                </p>
                <p>
                    <ons-button id="checkout">Checkout</ons-button>&nbsp;
                    <ons-button id="close">Close</ons-button>
                </p>
            </div>
        </ons-popover>;
    }

    private componentDidMount = () => {        
        this._el.querySelector("#checkout").addEventListener("click", this.showMessage.bind(this));
        this._el.querySelector("#close").addEventListener("click", this.closePopover.bind(this));
        boltCall("mobile/adjustCart", {cartId: this.props.cartId, product: this.props.productToAdd}, (result:any) => {
            this.setState(result.return_value);
            var popover:any = this._el as any;
            popover.show(document.querySelector("#buybutton").parentElement.parentElement);
        });
    }

    private showMessage = (ev:Event) => {
        ons.notification.alert("TODO: Normally this would navigate to the checkout process.");
    }

    private closePopover = (ev:Event) => {
        var popover:any = this._el as any;
        popover.hide();
        ReactDOM.unmountComponentAtNode(this._el.parentElement);
    }
}