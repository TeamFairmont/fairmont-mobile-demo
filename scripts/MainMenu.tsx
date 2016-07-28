import * as React from "react"
import * as ReactDOM from "react-dom"

declare var ons:any;

export interface MenuProps {}

export class MainMenu extends React.Component<MenuProps, {}> {
    render() {
        return <ons-page>
                <ons-list> 
                    <ons-list-item onClick={this.handleHome.bind(this)} tappable>
                        Home
                    </ons-list-item>
                    <ons-list-item onClick={this.handleCart.bind(this)} tappable>
                        My Cart
                    </ons-list-item>
                    <ons-list-item onClick={()=>ons.notification.alert('Our company sells great food products endorsed by cats!')} tappable>
                        About
                    </ons-list-item>
                </ons-list>
            </ons-page>
    }

    private handleHome = () => {
        window.location.href = "/";
    }

    private handleCart = () => {
        ons.notification.alert('To-Do: Normally this would make an empty request to Fairmont API mobile/adjustCart and display results');
    }
}