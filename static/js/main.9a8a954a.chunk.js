(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{10:function(e,t,r){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__V1VTi",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3LKpd"}},11:function(e,t,r){e.exports={Overlay:"Modal_Overlay__1yyRa",Modal:"Modal_Modal__3WbLG"}},15:function(e,t,r){e.exports={App:"App_App__2CnT6",wrapper__gallery:"App_wrapper__gallery__1K9tQ"}},16:function(e,t,r){e.exports={ImageGallery:"ImageGallery_ImageGallery__1mV0q"}},17:function(e,t,r){e.exports={Button:"Button_Button__2qudL"}},28:function(e,t,r){},55:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),o=r.n(n),c=r(3),s=r.n(c),l=(r(27),r(28),r(12)),i=r(4),u=r.n(i),d=r(7),h=r(13),m=r(14),p=r(21),f=r(20),_=(r(30),r(5)),g=r(15),b=r.n(g),v={API_KEY:"18650753-c8867d24a687d3baeda70b1dc",HTTP:"https://pixabay.com/api/?",getFullRequest:function(e,t){return fetch("".concat(this.HTTP,"q=").concat(e,"&page=").concat(t,"&key=").concat(this.API_KEY,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return e}))}},j=r(6),O=r.n(j),x=function(e){var t=e.submitForm;return Object(a.jsx)("header",{className:O.a.SearchBar,children:Object(a.jsxs)("form",{className:O.a.SearchForm,onSubmit:function(e){return t(e)},children:[Object(a.jsx)("button",{type:"submit",className:O.a.SearchForm__button,children:Object(a.jsx)("span",{className:"s.SearchForm-button-label"})}),Object(a.jsx)("input",{id:"input-searchBar",className:O.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},y=r(16),S=r.n(y),L=r(10),w=r.n(L),k=function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(a.jsx)("li",{className:w.a.ImageGalleryItem,children:Object(a.jsx)("img",{src:r,alt:n,className:w.a.ImageGalleryItem__image})},t)},I=function(e){var t=e.dataFetch,r=e.onClickImg;return Object(a.jsx)("ul",{className:S.a.ImageGallery,onClick:function(e){return r(e)},children:t.length>0&&t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(a.jsx)(k,{id:t,webformatURL:r,largeImageURL:n})}))},"img_gallery")},F=r(17),C=r.n(F),B=function(e){var t=e.onClick;return Object(a.jsx)("button",{className:C.a.Button,onClick:function(){return t()},children:"Load more"})},H=(r(31),r(18)),R=r.n(H),M=r(8),E=r.n(M),G=function(e){var t=e.domLoad,r=e.duration,n=t?E.a.loader__domLoad__position:E.a.loader__position;return Object(a.jsx)(R.a,{className:E.a.loader+" "+n,type:"Puff",color:"#0ca0f5",height:100,width:100,timeout:r||3e5})},N=r(19),q=r.n(N),A=r(11),D=r.n(A),P=function(e){var t=e.src,r=e.closeModalClick,n=e.closeModalEsc;return Object(a.jsx)(q.a,{onEscapeOutside:function(e){return n(e)},children:Object(a.jsx)("div",{className:D.a.Overlay,onClick:function(e){return r(e)},children:Object(a.jsx)("div",{className:D.a.Modal,children:Object(a.jsx)("img",{src:t,alt:"open full hd img"})})})})},T=r(53),U=function(e){Object(p.a)(r,e);var t=Object(f.a)(r);function r(){var e;return Object(h.a)(this,r),(e=t.call(this)).scrollList=function(){var t;switch(e.myRef.current){case"HD":t=1080;break;case"fullHD":t=1150;break;case"4k":t=1520}window.scrollTo({top:document.documentElement.scrollHeight-t,behavior:"smooth"})},e.handleSubmit=function(){var t=Object(d.a)(u.a.mark((function t(r){var a,n,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),a=document.getElementById("input-searchBar"),n=a.value.toLowerCase().replace(/\s/g,""),o=e.state.page,t.prev=4,e.setState((function(){return{flag:!0}})),t.next=8,v.getFullRequest(n,o).then((function(t){var r=t.hits;if(0===t.totalHits)throw new Error("Wrong request");e.setState((function(){return{valueSubmit:n,dataFetch:r}}),(function(){return e.scrollList()})),""===n&&_.b.warn("\u26a0\ufe0f Default page!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}));case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(4),a.value="",_.b.error("\ud83d\ude80 ".concat("Wrong request"===t.t0.message?"Wrong request":"Server error","!"),{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 14:return t.prev=14,e.setState((function(){return{flag:!1}})),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,10,14,17]])})));return function(e){return t.apply(this,arguments)}}(),e.renderLazyAndButton=Object(d.a)(u.a.mark((function t(){var r,a,n,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state,a=r.valueSubmit,n=r.page,o=n+1,t.prev=2,e.setState((function(){return{flag:!0}})),t.next=6,v.getFullRequest(a,o+1).then((function(t){var r=t.hits;if(0===r.length)return _.b.warn("\u26a0\ufe0f The last page!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});e.setState((function(e){var t=e.dataFetch;return{dataFetch:[].concat(Object(l.a)(t),Object(l.a)(r)),page:o}}),(function(){return e.scrollList()}))}));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),_.b.error("\ud83d\ude80 Server error!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 11:return t.prev=11,e.setState((function(){return{flag:!1}})),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[2,8,11,14]])}))),e.handleLoadButton=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.renderLazyAndButton();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),e.handleListenerForList=function(t){"IMG"===t.target.tagName&&e.setState((function(){return{fullHd:t.target.alt}}))},e.handleListenerForCloseModalClick=function(t){"IMG"!==t.target.tagName&&e.setState((function(){return{fullHd:""}}))},e.handleListenerCloseEsc=function(t){void 0===t&&e.setState((function(){return{fullHd:""}}))},e.handleScrollRoot=function(t){var r,a=document.getElementById("root");switch(e.myRef.current){case"HD":r=900;break;case"fullHD":r=965;break;case"4k":r=1325}new IntersectionObserver((function(t){t.forEach((function(){var t=window.scrollY,n=a.clientHeight-Math.round(t)-r;console.log(n,"different"),0===n&&e.renderLazyAndButton()}))}),{root:null,rootMargin:"0px",threshold:1}).observe(a)},e.myRef=Object(n.createRef)(),e.state={valueSubmit:"",dataFetch:[],page:1,flag:!1,fullHd:""},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=window.screen.width;2560===t&&(this.myRef.current="4k"),1920===t&&(this.myRef.current="fullHD"),1600===t&&(this.myRef.current="HD"),window.addEventListener("scroll",T((function(t){e.handleScrollRoot(t)}),1e3))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScrollRoot)}},{key:"render",value:function(){var e=this.state,t=e.dataFetch,r=e.flag,n=e.fullHd;return Object(a.jsxs)("div",{children:[Object(a.jsx)(G,{domLoad:!0,duration:500}),Object(a.jsx)(x,{submitForm:this.handleSubmit}),""!==n&&Object(a.jsx)(P,{src:n,closeModalClick:this.handleListenerForCloseModalClick,closeModalEsc:this.handleListenerCloseEsc}),Object(a.jsxs)("div",{className:b.a.wrapper__gallery,children:[Object(a.jsx)(I,{dataFetch:t,onClickImg:this.handleListenerForList}),t.length>0&&Object(a.jsx)(B,{onClick:this.handleLoadButton}),r&&Object(a.jsx)(G,{}),Object(a.jsx)(_.a,{position:"top-right",autoClose:1500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})]})}}]),r}(n.Component);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))},6:function(e,t,r){e.exports={SearchBar:"Searchbar_SearchBar__3hiVf",SearchForm:"Searchbar_SearchForm__2XVxV",SearchForm__button:"Searchbar_SearchForm__button__1E1bG","SearchForm__button-label":"Searchbar_SearchForm__button-label__eZO6k",SearchForm__input:"Searchbar_SearchForm__input__1KpDq"}},8:function(e,t,r){e.exports={loader:"Loader_loader__2hrKY",loader__position:"Loader_loader__position__3Uwlx",loader__domLoad__position:"Loader_loader__domLoad__position__BfAnc"}}},[[55,1,2]]]);
//# sourceMappingURL=main.9a8a954a.chunk.js.map