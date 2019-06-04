import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/Layout";

// Load on Ready
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == "complete") {
        let els = document.getElementsByClassName("dnnfree-app");
        Array.prototype.forEach.call(els, function (el) {
            let moduleId = el.id.replace("module-", "");
            let service = {
                path: "DnnFree.Modules.SPA.React",
                framework: $.ServicesFramework(moduleId)
            };
            service.baseUrl = service.framework.getServiceRoot(service.path);
            ReactDOM.render(<Layout mid={moduleId} />, el);
        });
    }
};