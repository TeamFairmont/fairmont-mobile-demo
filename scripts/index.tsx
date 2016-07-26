import {StartPage}   from './StartPage';
import {MainMenu}    from './MainMenu';
import {pageManager} from './Shared';

import * as React from "react";
import * as ReactDOM from "react-dom";

declare var ons:any;

namespace MyApp {

    namespace Application {
        "use strict";
 
        export function initialize() {
            onDeviceReady();
        }

        function onDeviceReady() {
            var w:any = window as any;
            w.pageManager = pageManager;

            pageManager.pushPage(pageManager.renderPage(<StartPage></StartPage>).page, ()=>{}, "", {title:"Fairmont Mobile Demo", urlpath:"/"});
        }
    }
    
    ons.ready(function() {
        Application.initialize();
    });
}

        
