define(["require", "exports", 'PageManager'], function (require, exports, PageManager_1) {
    "use strict";
    exports.pageManager = new PageManager_1.PageManager();
    exports.VERSION = "1.0.0";
    //Note: This is using hard coded simple auth. HMAC auth is recommended for production and requires some crypto
    var boltUrlBase = "http://localhost:8888/";
    var username = "publicweb";
    var userkey = "webaccess1";
    var retryMs = 1000;
    /**
     * boltCall makes an api call and return the result to the callback if complete. if not, show
     * loading modal until request completes, then call the callback. resultcb may be called multiple times
     * if the call has data but is not complete!
     */
    function boltCall(apicall, payload, resultcb) {
        $.ajax({
            url: boltUrlBase + "request/" + apicall,
            type: "POST",
            data: JSON.stringify(payload),
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + userkey));
            },
            success: function (data, status) {
                //console.log(data);
                if (data.complete) {
                    resultcb(data);
                }
                else {
                    boltRepeatCall(data.id, resultcb, 1);
                }
            },
            error: function () {
                console.log("Request error");
                resultcb({ error: "request" });
            },
        });
    }
    exports.boltCall = boltCall;
    function boltRepeatCall(id, resultcb, attempt) {
        var loading = document.querySelector("#loading");
        loading.show();
        if (attempt > 10) {
            loading.hide();
            ons.notification.alert("We couldn't load the page you requested! Please go back and try again.");
            resultcb({ error: "request" });
            return;
        }
        setTimeout(function () {
            $.ajax({
                url: boltUrlBase + "retr/peek/" + id,
                type: "POST",
                data: "{}",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + userkey));
                },
                success: function (data, status) {
                    //console.log(data);
                    if (data.complete) {
                        loading.hide();
                        resultcb(data);
                    }
                    else {
                        boltRepeatCall(id, resultcb, attempt + 1);
                    }
                },
                error: function () {
                    console.log("Request retry error");
                    resultcb({ error: "request" });
                },
            });
        }, retryMs);
    }
});
//# sourceMappingURL=Shared.js.map