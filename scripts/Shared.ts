
import {PageManager} from 'PageManager';
import * as React from "react"
import * as ReactDOM from "react-dom"

declare var ons:any;

export var pageManager:PageManager = new PageManager();
export const VERSION:string = "1.0.0";

//Note: This is using hard coded simple auth. HMAC auth is recommended for production and requires some crypto
var boltUrlBase:string = "http://"+window.location.hostname+":8888/";
var username:string = "publicweb";
var userkey:string = "webaccess1";
var retryMs:number = 1000;

/**
 * boltCall makes an api call and return the result to the callback if complete. if not, show 
 * loading modal until request completes, then call the callback. resultcb may be called multiple times
 * if the call has data but is not complete!
 */
export function boltCall(apicall:string, payload:any, resultcb:(result:any)=>void) {
    $.ajax({
        url: boltUrlBase+"request/"+apicall,
        type: "POST",
        data: JSON.stringify(payload),
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + userkey));
        },
        success: (data:any, status:string) => {
            //console.log(data);
            if (data.complete) {
                resultcb(data);
            } else {
                boltRepeatCall(data.id, resultcb, 1);
            }           
        },
        error: ()=>{
            console.log("Request error");
            resultcb({error:"request"});
        },
    });
}

function boltRepeatCall(id:string, resultcb:(result:any)=>void, attempt:number) {
    var loading =document.querySelector("#loading") as any;
    loading.show();
    if (attempt>10) {
        loading.hide();
        ons.notification.alert("We couldn't load the page you requested! Please go back and try again.");
        resultcb({error:"request"});
        return
    }

    setTimeout(()=> {
        $.ajax({
            url: boltUrlBase+"retr/peek/"+id,
            type: "POST",
            data: "{}",
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + userkey));
            },
            success: (data:any, status:string) => {
                //console.log(data);
                if (data.complete) {
                    loading.hide();
                    resultcb(data);
                } else {
                    boltRepeatCall(id, resultcb, attempt+1);
                }
            },
            error: ()=>{
                console.log("Request retry error");
                resultcb({error:"request"});
            },
        });
    }, retryMs);
}