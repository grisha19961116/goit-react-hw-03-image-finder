(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1quEO",Modal:"Modal_Modal__31fLO"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2NTQk"}},21:function(e,t,a){},23:function(e,t,a){e.exports={App:"App_App__dV839"}},24:function(e,t,a){e.exports={Button:"Button_Button__3jgD1"}},3:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1QSJF",SearchForm:"Searchbar_SearchForm__26lC1",SearchForm__button:"Searchbar_SearchForm__button__3Qizx","SearchForm__button-label":"Searchbar_SearchForm__button-label__3GfTB",SearchForm__input:"Searchbar_SearchForm__input__1aoS-"}},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),c=a(12),l=a.n(c),i=(a(20),a(21),a(11)),u=a(4),s=a(5),h=a(7),m=a(6),d=(a(22),a(23),{API_KEY:"18650753-c8867d24a687d3baeda70b1dc",HTTP:"https://pixabay.com/api/?",getFullRequest:function(e,t){return fetch("".concat(this.HTTP,"q=").concat(e,"&page=").concat(t,"&key=").concat(this.API_KEY,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return e}))}}),b=a(3),f=a.n(b),_=function(e){var t=e.onSubmit;return Object(n.jsx)("header",{className:f.a.Searchbar,children:Object(n.jsxs)("form",{className:f.a.SearchForm,onSubmit:function(e){return t(e)},children:[Object(n.jsx)("button",{type:"submit",className:f.a.SearchForm__button,children:Object(n.jsx)("span",{className:"s.SearchForm-button-label"})}),Object(n.jsx)("input",{className:f.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},j=a(13),g=a.n(j),p=a(9),S=a.n(p),O=function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(n.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:a,alt:r,className:S.a.ImageGalleryItem__image})},t)},F=function(e){var t=e.dataFetch,a=e.onClick;return Object(n.jsx)("ul",{className:g.a.ImageGallery,onClick:function(e){return a(e)},children:t.length>0&&t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(n.jsx)(O,{id:t,webformatURL:a,largeImageURL:r})}))})},x=(a(24),function(e){var t=e.onClick;return Object(n.jsx)("button",{onClick:function(){return t()},children:"Load more"})}),y=(a(25),a(14)),v=a.n(y),I=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(n.jsx)(v.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(r.Component),C=a(10),k=a.n(C),L=function(e){var t=e.src,a=e.onClickClose,r=e.keyClose;return Object(n.jsx)("div",{className:k.a.Overlay,tabIndex:0,onKeyDown:function(e){return r(e)},onClick:function(e){return a(e)},children:Object(n.jsx)("div",{className:k.a.Modal,children:Object(n.jsx)("img",{src:t,alt:"open full hd img"})})})},G=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={valueSubmit:"",dataFetch:[],page:1,flag:!1,fullHd:""},e.handleSubmit=function(t){t.preventDefault();var a=t.target.lastChild.value,n=e.state.page;d.getFullRequest(a,n).then((function(t){e.setState((function(e){e.valueSubmit,e.dataFetch;return{valueSubmit:a,dataFetch:t.hits}}))}))},e.handleLoadButton=function(){var t=e.state,a=t.valueSubmit,n=t.page+1;e.setState((function(){return{flag:!0}}));d.getFullRequest(a,n+1).then((function(t){e.setState((function(e){var a=e.dataFetch;return{dataFetch:[].concat(Object(i.a)(a),Object(i.a)(t.hits)),page:n,flag:!1}}),(function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}))},e.handleListenerForList=function(t){"IMG"===t.target.tagName&&e.setState((function(){return{fullHd:t.target.alt}}))},e.handleListenerForCloseModalClick=function(t){"IMG"!==t.target.tagName&&e.setState((function(){return{fullHd:""}})),console.log("handleListenerForCloseModalClick")},e.handleListenerForCloseModalKeydown=function(t){"Escape"===t.code&&e.setState((function(){return{fullHd:""}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.dataFetch,a=e.flag,r=e.fullHd;return Object(n.jsxs)("div",{children:[Object(n.jsx)(_,{onSubmit:this.handleSubmit,onChange:this.handleInput}),""!==r&&Object(n.jsx)(L,{src:r,onClickClose:this.handleListenerForCloseModalClick,keyClose:this.handleListenerForCloseModalKeydown}),Object(n.jsx)(F,{dataFetch:t,onClick:this.handleListenerForList}),t.length>0&&Object(n.jsx)(x,{onClick:this.handleLoadButton}),a&&Object(n.jsx)(I,{})]})}}]),a}(r.Component);l.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3a7De",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__2LYrg"}}},[[47,1,2]]]);
//# sourceMappingURL=main.5344b993.chunk.js.map