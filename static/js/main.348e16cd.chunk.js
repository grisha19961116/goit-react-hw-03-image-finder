(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__V1VTi",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3LKpd"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1yyRa",Modal:"Modal_Modal__3WbLG"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1mV0q"}},23:function(e,t,a){},25:function(e,t,a){e.exports={App:"App_App__2CnT6"}},26:function(e,t,a){e.exports={Button:"Button_Button__2qudL"}},3:function(e,t,a){e.exports={SearchBar:"Searchbar_SearchBar__3hiVf",SearchForm:"Searchbar_SearchForm__2XVxV",SearchForm__button:"Searchbar_SearchForm__button__1E1bG","SearchForm__button-label":"Searchbar_SearchForm__button-label__eZO6k",SearchForm__input:"Searchbar_SearchForm__input__1KpDq"}},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(13),l=a.n(o),i=(a(22),a(23),a(12)),s=a(4),u=a(5),h=a(6),m=a(8),d=a(7),b=(a(24),a(25),{API_KEY:"18650753-c8867d24a687d3baeda70b1dc",HTTP:"https://pixabay.com/api/?",getFullRequest:function(e,t){return fetch("".concat(this.HTTP,"q=").concat(e,"&page=").concat(t,"&key=").concat(this.API_KEY,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return e}))}}),f=a(3),_=a.n(f),j=function(e){var t=e.onSubmit;return Object(n.jsx)("header",{className:_.a.SearchBar,children:Object(n.jsxs)("form",{className:_.a.SearchForm,onSubmit:function(e){return t(e)},children:[Object(n.jsx)("button",{type:"submit",className:_.a.SearchForm__button,children:Object(n.jsx)("span",{className:"s.SearchForm-button-label"})}),Object(n.jsx)("input",{className:_.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},g=a(14),p=a.n(g),O=a(10),S=a.n(O),x=function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(n.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:a,alt:r,className:S.a.ImageGalleryItem__image})},t)},F=function(e){var t=e.dataFetch,a=e.onClickImg;return Object(n.jsx)("ul",{className:p.a.ImageGallery,onClick:function(e){return a(e)},children:t.length>0&&t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(n.jsx)(x,{id:t,webformatURL:a,largeImageURL:r})}))})},I=(a(26),function(e){var t=e.onClick;return Object(n.jsx)("button",{onClick:function(){return t()},children:"Load more"})}),v=(a(27),a(15)),y=a.n(v),C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(y.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(r.Component),L=a(16),k=a.n(L),G=a(11),M=a.n(G),E=function(e){var t=e.src,a=e.closeModalClick,r=e.closeModalEsc;return Object(n.jsx)(k.a,{onEscapeOutside:function(e){return r(e)},children:Object(n.jsx)("div",{className:M.a.Overlay,onClick:function(e){return a(e)},children:Object(n.jsx)("div",{className:M.a.Modal,children:Object(n.jsx)("img",{src:t,alt:"open full hd img"})})})})},N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var a=t.target.lastChild.value,n=e.state.page;b.getFullRequest(a,n).then((function(t){e.setState((function(e){e.valueSubmit,e.dataFetch;return{valueSubmit:a,dataFetch:t.hits}}))}))},e.handleLoadButton=function(){var t=e.state,a=t.valueSubmit,n=t.page+1;e.setState((function(){return{flag:!0}}));b.getFullRequest(a,n+1).then((function(t){e.setState((function(e){var a=e.dataFetch;return{dataFetch:[].concat(Object(i.a)(a),Object(i.a)(t.hits)),page:n,flag:!1}}),(function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}))},e.handleListenerForList=function(t){"IMG"===t.target.tagName&&e.setState((function(){return{fullHd:t.target.alt}}))},e.handleListenerForCloseModalClick=function(t){"IMG"!==t.target.tagName&&e.setState((function(){return{fullHd:""}}))},e.handleListenerCloseEsc=function(t){void 0===t&&e.setState((function(){return{fullHd:""}}))},e.state={valueSubmit:"",dataFetch:[],page:1,flag:!1,fullHd:""},e.handleListenerCloseEsc=e.handleListenerCloseEsc.bind(Object(h.a)(e)),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.dataFetch,a=e.flag,r=e.fullHd;return Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{onSubmit:this.handleSubmit,onChange:this.handleInput}),""!==r&&Object(n.jsx)(E,{src:r,closeModalClick:this.handleListenerForCloseModalClick,closeModalEsc:this.handleListenerCloseEsc}),Object(n.jsx)(F,{dataFetch:t,onClickImg:this.handleListenerForList}),t.length>0&&Object(n.jsx)(I,{onClick:this.handleLoadButton}),a&&Object(n.jsx)(C,{})]})}}]),a}(r.Component);l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.348e16cd.chunk.js.map