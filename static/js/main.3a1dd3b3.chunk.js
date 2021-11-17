(this["webpackJsonpreact-3-image-finder"]=this["webpackJsonpreact-3-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Ada1",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3939_"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__lezk5",Modal:"Modal_Modal__22BBD"}},16:function(e,t,a){e.exports={Button:"Button_Button__GhtAh"}},23:function(e,t,a){},24:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),s=(a(23),a(3)),i=a(4),l=a(6),u=a(5),h=(a(24),a(8)),d=a.n(h),m=a(10),p=(a(25),a(1)),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):m.b.error("Please type the query",{position:"top-right",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("header",{className:d.a.Searchbar,children:Object(p.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:d.a.SearchForm__button,children:Object(p.jsx)("span",{className:d.a.SearchForm__label,children:"Search"})}),Object(p.jsx)("input",{className:d.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchQuery",value:e,onChange:this.handleQueryChange})]})})})}}]),a}(r.Component),j=a(15),g=a(9),f=a.n(g),y=a(12),_=a.n(y),O=a(13),v=a.n(O),S=document.getElementById("modal-root"),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleEscClose=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscClose)}},{key:"render",value:function(){var e=this.props,t=e.modalSource,a=e.modalDescription;return Object(o.createPortal)(Object(p.jsx)("div",{className:v.a.Overlay,onClick:this.handleOverlayClick,children:Object(p.jsx)("div",{className:v.a.Modal,children:Object(p.jsx)("img",{src:t,alt:a})})}),S)}}]),a}(r.Component),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.source,a=e.description,r=e.id,n=e.dataOriginal,o=this.state.showModal;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:_.a.ImageGalleryItem,onClick:this.toggleModal,children:Object(p.jsx)("img",{src:t,alt:a,className:_.a.ImageGalleryItem__image})},r),o&&Object(p.jsx)(x,{modalSource:n,modalDescription:a,onClose:this.toggleModal})]})}}]),a}(r.Component),k=a(16),C=a.n(k),w=function(e){var t=e.children,a=e.onClick,r=e.id;return Object(p.jsx)("button",{id:r,type:"button",className:C.a.Button,onClick:a,children:t})},F=(a(27),a(17)),Q=a.n(F);function M(){return Object(p.jsx)(Q.a,{className:f.a.loader,type:"TailSpin",color:"#3f51b5",height:80,width:80,timeout:3e3})}var N=a(14),G=a.n(N),B=a(18),A={fetchImages:function(e,t){return Object(B.a)(G.a.mark((function a(){var r;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("23531219-4793e7ad626a6d166b9f03b8c","&image_type=photo&orientation=horizontal&per_page=12"),console.log(r),a.next=4,fetch(r).then((function(e){if(e.ok)return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}),a)})))()}},E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={hits:[],totalHits:"",loading:!1,page:1},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.searchQuery,n=this.props.searchQuery,o=t.page,c=this.state.page;r!==n&&(this.setState({loading:!0,hits:[],page:1}),A.fetchImages(n,c).then((function(e){var t=e.totalHits,r=e.hits;return a.setState({totalHits:t,hits:r})})).catch((function(e){return console.log(e)})).finally((function(){return a.setState({loading:!1})}))),o!==c&&A.fetchImages(r,this.state.page).then((function(e){var t=e.hits;return a.setState((function(e){return{hits:[].concat(Object(j.a)(e.hits),Object(j.a)(t))}}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.loading,r=e.totalHits;return Object(p.jsxs)(p.Fragment,{children:[a&&Object(p.jsx)(M,{}),0===r&&Object(p.jsxs)("div",{children:["Nothing was found on ",this.props.searchQuery]}),Object(p.jsx)("ul",{className:f.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,n=e.largeImageURL;return Object(p.jsx)(I,{source:a,description:r,dataOriginal:n},t)}))}),t.length>0&&Object(p.jsx)(w,{id:"loadmore",onClick:this.loadMore,children:"Load more"})]})}}]),a}(r.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t}),console.log(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{onSubmit:this.handleFormSubmit}),Object(p.jsx)(E,{searchQuery:e}),Object(p.jsx)(m.a,{})]})}}]),a}(r.Component),H=D;c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__31jV6",SearchForm:"Searchbar_SearchForm__1bPzr",SearchForm__button:"Searchbar_SearchForm__button__2zJNc",SearchForm__label:"Searchbar_SearchForm__label__2oue-",SearchForm__input:"Searchbar_SearchForm__input__1q85Q"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__HUoY6",loader:"ImageGallery_loader__1T7dh"}}},[[49,1,2]]]);
//# sourceMappingURL=main.3a1dd3b3.chunk.js.map