import Resource from"@baifendian/adherev-util-resource";var selectorPrefix="adherev-ui-globalindicator",MAX_ZINDEX=Resource.Dict.value.ResourceNormalMaxZIndex.value;export default{show:function(e,i,o){void 0===e&&(e=document.body),void 0===i&&(i=""),void 0===o&&(o=MAX_ZINDEX);var r=document.createElement("div");r.innerHTML='\n      <div class="'+selectorPrefix+'" style="z-index: '+(o||MAX_ZINDEX)+'">\n       <span class="'+selectorPrefix+'-dot"><i></i><i></i><i></i><i></i></span>\n       <div class="'+selectorPrefix+'-text">'+i+"</div>\n      </div>";r=r.firstElementChild;return e===document.body&&(r.style.position="fixed"),e.appendChild(r),r},hide:function(e){e&&e.parentElement.removeChild(e)}};
//# sourceMappingURL=globalindicator.js.map
