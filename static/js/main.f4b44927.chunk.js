(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),s=(n(22),n(16)),l=n(2),i=n(3),u=n(5),h=n(4),d=n(6),m=(n(24),{text:{color:"white",fontSize:25}}),f=function(e){return r.a.createElement("div",{className:"navbar-text",href:"#",style:m.text},e.pText)},p={background:{background:"purple"}},g=function(e){return r.a.createElement("div",{className:"navbar navbar-light justify-content-between",style:p.background},r.a.createElement(f,{pText:"Clicky Game"}),r.a.createElement(f,{pText:"Message"}),r.a.createElement(f,{pText:"Score: "+e.score+" | Top Score: "+e.topScore}))},b=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h2",null,"Clicky Game!"),r.a.createElement("h4",null,"Click an image to earn points, game ends when any image is clicked more than once!"))},v={background:{background:"purple"}},k=function(){return r.a.createElement("div",{className:"navbar navbar-light",style:v.background})},y=n(15),S=n.n(y),w={getPhotos:function(){return S.a.get("https://dog.ceo/api/breeds/image/random/12")}},x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={clicked:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.props.handleScore(e.props.url),this.props.shuffleArray()}},{key:"render",value:function(){var e=this,t={width:170,height:170,cursor:"pointer",backgroundImage:"url("+this.props.url+")",backgroundSize:"cover",backgroundPosition:"50%",margin:"8px 25px",border:"5px solid #f1f1f1"};return r.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4",style:t,role:"img",onClick:function(){return e.handleClick(e)}})}}]),t}(a.Component),E={main:{display:"flex",minHeight:"80%",flexWrap:"wrap",justifyContent:"center",margin:"0 auto"}},j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={results:[],guessed:[],score:0,topScore:0},n.fetchPhotos=function(){w.getPhotos().then(function(e){return n.setState({results:e.data.message})}).catch(function(e){return console.log(e)})},n.handleScore=function(e){var t=n.state.guessed,a=n.state.score+1;-1===t.indexOf(e)?(n.setState({score:a}),n.setState(function(t){return{guessed:Object(s.a)(t.guessed).concat([e])}})):n.state.score>n.state.topScore?(n.setState({topScore:n.state.score,score:0}),n.forceUpdate()):(n.setState({guessed:[],score:0}),n.forceUpdate())},n.shuffleArray=function(e){for(var t,a,r=n.state.results,o=r.length;0!==o;)a=Math.floor(Math.random()*o),t=r[o-=1],r[o]=r[a],r[a]=t;n.setState({results:r})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchPhotos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(b,null),r.a.createElement("main",{className:"container",style:E.main},this.state.results.map(function(t){return r.a.createElement(x,{key:e.state.results.indexOf(t),url:t,shuffleArray:e.shuffleArray,handleScore:e.handleScore})})),r.a.createElement(k,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.f4b44927.chunk.js.map