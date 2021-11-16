(this["webpackJsonpreact-3-image-finder"]=this["webpackJsonpreact-3-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Ada1",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3939_"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__lezk5",Modal:"Modal_Modal__22BBD"}},16:function(e,t,a){e.exports={Button:"Button_Button__GhtAh"}},22:function(e,t,a){},23:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),s=(a(22),a(3)),i=a(4),l=a(6),u=a(5),h=(a(23),a(8)),m=a.n(h),d=a(10),b=(a(24),a(9)),p=a.n(b),j=a(12),g=a.n(j),f=a(13),y=a.n(f),_=a(1),O=document.getElementById("modal-root"),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleEscClose=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscClose)}},{key:"render",value:function(){var e=this.props,t=e.modalSource,a=e.modalDescription;return Object(o.createPortal)(Object(_.jsx)("div",{className:y.a.Overlay,onClick:this.handleOverlayClick,children:Object(_.jsx)("div",{className:y.a.Modal,children:Object(_.jsx)("img",{src:t,alt:a})})}),O)}}]),a}(r.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.source,a=e.description,r=e.id,n=e.dataOriginal,o=this.state.showModal;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("li",{className:g.a.ImageGalleryItem,onClick:this.toggleModal,children:Object(_.jsx)("img",{src:t,alt:a,className:g.a.ImageGalleryItem__image})},r),o&&Object(_.jsx)(v,{modalSource:n,modalDescription:a,onClose:this.toggleModal})]})}}]),a}(r.Component),x=a(14),C=a.n(x),k=a(15),I={pageNumber:1,fetchImages:function(e){var t=this;return Object(k.a)(C.a.mark((function a(){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t.pageNumber,"&key=").concat("23531219-4793e7ad626a6d166b9f03b8c","&image_type=photo&orientation=horizontal&per_page=12"),console.log(r),a.next=4,fetch(r).then((function(e){if(e.ok)return e.json()})).then((function(e){return t.pageNumber+=1,e})).catch((function(e){return console.log(e)}));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}),a)})))()},resetPageNumber:function(){this.pageNumber=1}},w=a(16),N=a.n(w),F=function(e){var t=e.children,a=e.onClick;return Object(_.jsx)("button",{type:"button",className:N.a.Button,onClick:a,children:t})},Q=(a(27),a(17)),G=a.n(Q);function M(){return Object(_.jsx)(G.a,{className:p.a.loader,type:"TailSpin",color:"#3f51b5",height:80,width:80,timeout:3e3})}var B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={hits:[],totalHits:"",loading:!1},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.searchQuery,n=this.props.searchQuery;r!==n?(this.setState({loading:!0,hits:[]}),I.fetchImages(n).then((function(e){var t=e.totalHits,r=e.hits;return a.setState({totalHits:t,hits:r})})).catch((function(e){return console.log(e)})).finally((function(){return a.setState({loading:!1})}))):I.resetPageNumber()}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.loading,r=e.totalHits,n=this.props.onClick;return Object(_.jsxs)(_.Fragment,{children:[a&&Object(_.jsx)(M,{}),0===r&&Object(_.jsxs)("div",{children:["Nothing was found on ",this.props.searchQuery]}),Object(_.jsx)("ul",{className:p.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,n=e.largeImageURL;return Object(_.jsx)(S,{source:a,description:r,dataOriginal:n},t)}))}),t.length>0&&Object(_.jsx)(F,{onClick:n,children:"Load more"})]})}}]),a}(r.Component),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):d.b.error("Please type the query",{position:"top-right",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("header",{className:m.a.Searchbar,children:Object(_.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(_.jsx)("button",{type:"submit",className:m.a.SearchForm__button,children:Object(_.jsx)("span",{className:m.a.SearchForm__label,children:"Search"})}),Object(_.jsx)("input",{className:m.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchQuery",value:e,onChange:this.handleQueryChange})]})}),Object(_.jsx)(B,{searchQuery:e,onClick:this.handleQueryChange})]})}}]),a}(r.Component),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t}),console.log(t)},e}return Object(i.a)(a,[{key:"render",value:function(){this.state.searchQuery;return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(A,{onSubmit:this.handleFormSubmit}),Object(_.jsx)(d.a,{})]})}}]),a}(r.Component),D=E;c.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(D,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__31jV6",SearchForm:"Searchbar_SearchForm__1bPzr",SearchForm__button:"Searchbar_SearchForm__button__2zJNc",SearchForm__label:"Searchbar_SearchForm__label__2oue-",SearchForm__input:"Searchbar_SearchForm__input__1q85Q"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__HUoY6",loader:"ImageGallery_loader__1T7dh"}}},[[48,1,2]]]);
//# sourceMappingURL=main.1e97a5d0.chunk.js.map