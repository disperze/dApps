(this.webpackJsonpwallet=this.webpackJsonpwallet||[]).push([[0],{295:function(e,n){},445:function(e,n,t){e.exports=t.p+"static/media/cosmWasmLogo.4939303a.svg"},446:function(e,n,t){e.exports=t.p+"static/media/failIcon.fc124c19.svg"},447:function(e,n,t){e.exports=t.p+"static/media/successIcon.13d3bd8e.svg"},448:function(e,n,t){e.exports=t.p+"static/media/backArrow.526bf197.svg"},456:function(e,n,t){e.exports=t(959)},485:function(e,n){},487:function(e,n){},497:function(e,n){},499:function(e,n){},544:function(e,n){},545:function(e,n){},550:function(e,n){},552:function(e,n){},576:function(e,n){},958:function(e,n,t){},959:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(22),i=t.n(o),c=(t(461),t(444)),s=t.n(c),l=(t(463),t(443)),u=t.n(l),m=(t(465),t(442)),f=t.n(m),d=(t(203),t(77)),v=t.n(d),h=(t(140),t(45)),p=t.n(h),g=(t(474),t(435)),b=t.n(g),E=t(15),y=t(23),k=t(966),x=t(967),j=t(968),P=t(41),O=t(425),S=t(33),w=t(85),T=t(426),A=t(122),C=t(427),B=t(430),M=t(21);var D={setError:function(){},clearError:function(){}},I=Object(r.createContext)(D),z=function(){return Object(r.useContext)(I)};function U(e){var n=e.children,t=Object(r.useState)(),a=t[0],o=t[1],i={error:a,setError:o,clearError:function(){o(void 0)}};return Object(r.createElement)(I.Provider,{value:i},n)}var N=function(e){try{var n,t=window;if(!t.getOfflineSignerAuto)throw new Error("Keplr extension is not available");var r=t.getOfflineSignerAuto(e);return r.signAmino=null!==(n=r.signAmino)&&void 0!==n?n:r.sign,Promise.resolve(r)}catch(a){return Promise.reject(a)}},L=function(e,n){try{return Promise.resolve(C.a.create(12e4,12e4)).then((function(e){return new T.LedgerSigner(e,{hdPaths:[Object(P.makeCosmoshubPath)(0)],prefix:n})}))}catch(t){return Promise.reject(t)}},F=function(e,n){try{var t=function(){var e="burner-wallet",n=localStorage.getItem(e);if(n)return n;var t=S.Bip39.encode(S.Random.getBytes(16)).toString();return localStorage.setItem(e,t),t}(),r=Object(P.makeCosmoshubPath)(0);return Promise.resolve(w.DirectSecp256k1HdWallet.fromMnemonic(t,{hdPaths:[r],prefix:n}))}catch(a){return Promise.reject(a)}};function $(){return($=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var R=function(){function e(){}return e.prototype.then=function(n,t){var r=new e,a=this.s;if(a){var o=1&a?n:t;if(o){try{W(r,1,o(this.v))}catch(i){W(r,2,i)}return r}return this}return this.o=function(e){try{var a=e.v;1&e.s?W(r,1,n?n(a):a):t?W(r,1,t(a)):W(r,2,a)}catch(i){W(r,2,i)}},r},e}();function W(e,n,t){if(!e.s){if(t instanceof R){if(!t.s)return void(t.o=W.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(W.bind(null,e,n),W.bind(null,e,2));e.s=n,e.v=t;var r=e.o;r&&r(e)}}function q(e,n,t){var r=[];for(var a in e)r.push(a);return function(e,n,t){var r,a,o=-1;return function i(c){try{for(;++o<e.length&&(!t||!t());)if((c=n(o))&&c.then){if(!((s=c)instanceof R&&1&s.s))return void c.then(i,a||(a=W.bind(null,r=new R,2)));c=c.v}r?W(r,1,c):r=c}catch(l){W(r||(r=new R),2,l)}var s}(),r}(r,(function(e){return n(r[e])}),t)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function V(e,n){try{var t=e()}catch(r){return n(r)}return t&&t.then?t.then(void 0,n):t}function J(){throw new Error("Not yet initialized")}var G={initialized:!1,init:J,clear:J,config:{},changeConfig:J,address:"",balance:[],refreshBalance:J,hitFaucet:J,getSigner:J,changeSigner:J,getClient:J,getStakingClient:J},H=Object(r.createContext)(G),K=function(){return Object(r.useContext)(H)};function Y(e){var n=function(e){try{if(!s.faucetUrl||!s.feeToken)return Promise.resolve();var n=V((function(){var n=new B.FaucetClient(s.faucetUrl);return Promise.resolve(n.credit(e,s.feeToken)).then((function(){}))}),(function(e){i(e.message),console.error(e)}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},t=function(e,n){try{if(!v)return Promise.resolve();n.length=0;var t=q(s.coinMap,(function(t){return Promise.resolve(v.getBalance(e,t)).then((function(e){e&&n.push(e)}))}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(r){return Promise.reject(r)}},a=e.config,o=e.children,i=z().setError,c=Object(r.useState)(a),s=c[0],l=c[1],u=Object(r.useState)(),m=u[0],f=u[1],d=Object(r.useState)(),v=d[0],h=d[1],p=$({},G,{init:f}),g=Object(r.useState)(p),b=g[0],E=g[1];function y(){E($({},p)),h(void 0),f(void 0),l(a)}function k(e){l((function(n){return $({},n,e)}))}return Object(r.useEffect)((function(){m&&function(){try{var e=V((function(){return Promise.resolve(function(e,n){try{return Promise.resolve(O.SigningCosmWasmClient.connectWithSigner(e.rpcUrl,n,{prefix:e.addressPrefix}))}catch(t){return Promise.reject(t)}}(s,m)).then((function(e){h(e)}))}),(function(e){i(e.message)}));e&&e.then&&e.then((function(){}))}catch(n){Promise.reject(n)}}()}),[m,s]),Object(r.useEffect)((function(){if(m&&v){var e=[];!function(){try{Promise.resolve(m.getAccounts()).then((function(r){var a=r[0].address;return Promise.resolve(t(a,e)).then((function(){function r(){return Promise.resolve(t(a,e)).then((function(){return Promise.resolve(function(e){try{return Promise.resolve(A.Tendermint34Client.connect(e)).then((function(e){return P.QueryClient.withExtensions(e,P.setupStakingExtension,P.setupDistributionExtension)}))}catch(n){return Promise.reject(n)}}(s.rpcUrl)).then((function(r){E({initialized:!0,init:function(){},clear:y,config:s,changeConfig:k,address:a,balance:e,refreshBalance:t.bind(null,a,e),hitFaucet:n.bind(null,a),getSigner:function(){return m},changeSigner:f,getClient:function(){return v},getStakingClient:function(){return r}})}))}))}var o=function(){if(!e.find((function(e){return e.denom===s.feeToken})))return Promise.resolve(n(a)).then((function(){}))}();return o&&o.then?o.then(r):r()}))}))}catch(r){Promise.reject(r)}}()}}),[v]),Object(r.createElement)(H.Provider,{value:b},o)}function Q(e){var n=e.authPath,t=e.children,r=e.location;return K().initialized?a.a.createElement(y.d,{location:r},t):a.a.createElement(y.a,{to:{pathname:n,state:r?{redirectPathname:r.pathname,redirectState:r.state}:void 0}})}function X(e){if(!e)return"0";if(e.denom.startsWith("u")){var n=e.denom.slice(1).toUpperCase();return M.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+n}return e.amount+"\u202f"+e.denom}function Z(e,n){if(!n)return e;var t=n[e.denom];if(!t)return e;var r=M.Decimal.fromAtomics(e.amount,t.fractionalDigits).toString();return{denom:t.denom,amount:r}}function _(e){var n=(e||"").toString(),t=n.match(/.*\s*$/g)[0];return t.substring(0,t.lastIndexOf(";"))||n}var ee=t(431),ne=t.n(ee);function te(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function re(e,n){return n||(n=e.slice(0)),e.raw=n,e}function ae(e){var n=e.tag,t=void 0===n?"div":n,a=e.children,o=te(e,["tag","children"]);return Object(r.createElement)(t,Object.assign({},o),a)}function oe(){var e=re(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return oe=function(){return e},e}var ie=Object(E.b)(ae)(oe());function ce(e){var n=e.tag,t=void 0===n?"div":n,a=e.children,o=te(e,["tag","children"]);return Object(r.createElement)(t,Object.assign({},o),a)}function se(){var e=re(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return se=function(){return e},e}var le=Object(E.b)(ce)(se());function ue(e){var n=e.children,t=te(e,["children"]);return Object(r.createElement)(ie,Object.assign({tag:"main"},t),n)}function me(){var e=re(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return me=function(){return e},e}var fe=Object(E.b)(ue)(me());function de(e){var n=e.icon,t=e.path,r=e.state,o=te(e,["icon","path","state"]),i=Object(y.g)(),c=t?function(){return i.push(t,r)}:i.goBack;return a.a.createElement("img",Object.assign({src:n,alt:"Back arrow",onClick:c},o))}function ve(){var e=re(["\n  cursor: pointer;\n"]);return ve=function(){return e},e}var he=Object(E.b)(de)(ve());function pe(){var e=re(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return pe=function(){return e},e}var ge=Object(E.b)(b.a)(pe()),be=Object(r.createElement)(k.a,{style:{fontSize:"6.25rem"},spin:!0});function Ee(e){var n=e.loadingText||"Loading...";return Object(r.createElement)(fe,null,Object(r.createElement)(ge,{indicator:be,tip:n}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function ye(e,n){try{var t=e()}catch(r){return n(r)}return t&&t.then?t.then(void 0,n):t}function ke(){var e=re(["\n  width: 100%;\n  text-align: center;\n  --gap: var(--s3)\n"]);return ke=function(){return e},e}function xe(){var e=re(["\n  color: var(--color-red);\n"]);return xe=function(){return e},e}function je(){var e=re(["\n  display: block;\n  font-weight: lighter;\n"]);return je=function(){return e},e}function Pe(){var e=re(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Pe=function(){return e},e}function Oe(){var e=re(["\n  & > * {\n    --gap: 0;\n  }\n"]);return Oe=function(){return e},e}var Se=p.a.Text,we=Object(E.b)(le)(Oe()),Te=Object(E.b)(le)(Pe()),Ae=Object(E.b)(Se)(je()),Ce=Object(E.b)(Se)(xe()),Be=E.b.div(ke()),Me=p.a.Title;function De(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Ie(e){var n=function(e){try{P(!0),g();var n=ye((function(){return Promise.resolve(e(t.chainId,t.addressPrefix)).then((function(e){b.init(e)}))}),(function(e){console.error(e),h(Error(""+e).message),P(!1)}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(r){return Promise.reject(r)}},t=e.config,o=e.pathAfterLogin,i=e.appName,c=e.appLogo,s=te(e,["config","pathAfterLogin","appName","appLogo"]),l=Object(y.g)(),u=l.location.state,m=z(),d=m.error,h=m.setError,g=m.clearError,b=K(),E=Object(r.useState)(!1),k=E[0],P=E[1];return Object(r.useEffect)((function(){b.initialized&&(u?l.push(u.redirectPathname,u.redirectState):l.push(o))}),[b.initialized,u,l]),k?a.a.createElement(Ee,{loadingText:"Initializing app..."}):a.a.createElement(fe,Object.assign({},s),a.a.createElement(we,null,a.a.createElement("img",{src:c,alt:"dApp logo"}),a.a.createElement(Te,null,a.a.createElement(p.a,null,a.a.createElement(Me,{level:2},"Hello!"),a.a.createElement(Ae,null,"Welcome to your ",i),a.a.createElement(Ae,null,"Select one of the following options to start:")),d&&a.a.createElement(Ce,null,d),a.a.createElement(v.a,{type:"primary",onClick:function(){try{return Promise.resolve(n(F)).then((function(){}))}catch(e){return Promise.reject(e)}},style:{display:"none"}},"Browser (Demo)"),a.a.createElement(v.a,{type:"primary",disabled:De(),onClick:function(){try{return Promise.resolve(n(L)).then((function(){}))}catch(e){return Promise.reject(e)}}},a.a.createElement(x.a,null)," Ledger (Secure, Chrome)"),a.a.createElement(v.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,r=ye((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits,coinGeckoId:e.coinMap[e.feeToken].coingecko},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits,coinGeckoId:e.coinMap[e.stakingToken].coingecko}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits,coinGeckoId:e.coinMap[e.stakingToken].coingecko},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118,features:["stargate","ibc-transfer","cosmwasm","no-legacy-stdTx"]}}(t))).then((function(){return Promise.resolve(e.keplr.enable(t.chainId)).then((function(){return Promise.resolve(n(N)).then((function(){}))}))}))}),(function(e){console.error(e),h(Error(""+e).message)}));return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(a){return Promise.reject(a)}}},a.a.createElement(j.a,null)," Keplr (Secure)")),a.a.createElement(Be,null,a.a.createElement(f.a,{src:"https://avatars.githubusercontent.com/u/71741453?s=200&v=4"})," by Disperze")))}function ze(e){var n=e.defaultButtonAction,t=e.successIcon,r=e.failIcon,o=Object(y.g)(),i=o.location.state,c=i.success,s=i.message,l=i.error,m=i.customButtonText,f=i.customButtonActionPath,d=i.customButtonActionState;var h=function(e){return e?{result:"success",icon:t,buttonText:"Home",buttonAction:function(){return n(o)}}:{result:"error",icon:r,buttonText:"Retry",buttonAction:o.goBack}}(c),p=h.result,g=h.buttonText,b=h.buttonAction,E=m||g,k=f?function(){return o.push(f,d)}:b;return a.a.createElement(fe,null,a.a.createElement(u.a,{status:p,title:c?"":s,subTitle:c?s:l,extra:[a.a.createElement(v.a,{type:"primary",onClick:k},E)]}))}function Ue(){var e=re(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return Ue=function(){return e},e}var Ne=Object(E.b)(le)(Ue()),Le=p.a.Title,Fe=p.a.Text;function $e(e){var n=e.tag,t=e.hideTitle,r=e.hideBalance,o=K(),i=o.address,c=o.balance;return a.a.createElement(Ne,{tag:n},!t&&a.a.createElement("header",null,a.a.createElement(Le,{level:3},"Your Account"),!r&&a.a.createElement(s.a,null)),a.a.createElement(Fe,null,i),!r&&a.a.createElement(Fe,null,"(",function(e){return e&&0!==e.length?e.map(X).join(", "):"\u2013"}(c),")"),a.a.createElement(v.a,{type:"primary",onClick:function(){return ne()(i)}},"Copy Account Address"))}function Re(){var e=re(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Re=function(){return e},e}var We=Object(E.a)(Re());function qe(){var e=re(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n    --color-coral: #f0827dff;\n    --color-coral-light: #f16a64;\n\n    --color-primary: var(--color-coral);\n    --button-color: var(--color-coral-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return qe=function(){return e},e}var Ve=Object(E.a)(qe());function Je(){var e=re(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Je=function(){return e},e}var Ge=Object(E.a)(Je());function He(){var e=re(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return He=function(){return e},e}var Ke=Object(E.a)(He());function Ye(){var e=re(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return Ye=function(){return e},e}var Qe=Object(E.a)(Ye());function Xe(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ke,null),a.a.createElement(Qe,null),a.a.createElement(Ve,null),a.a.createElement(Ge,null),a.a.createElement(We,null))}var Ze=t(123);const _e=function(e){var n=e.uninet;if(!n)throw new Error("No configuration found for network uninet");return n}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"wasm",rpcUrl:"http://localhost:26659",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025},musselnet:{chainId:"musselnet-2",chainName:"Musselnet",addressPrefix:"wasm",rpcUrl:"https://rpc.musselnet.cosmwasm.com",httpUrl:"https://lcd.musselnet.cosmwasm.com",faucetUrl:"https://faucet.musselnet.cosmwasm.com",feeToken:"umayo",stakingToken:"ufrites",coinMap:{umayo:{denom:"MAYO",fractionalDigits:6},ufrites:{denom:"FRITES",fractionalDigits:6}},gasPrice:.025},uninet:{chainId:"uni",chainName:"Juno Testnet",addressPrefix:"juno",rpcUrl:"https://rpc.juno.giansalex.dev",httpUrl:"https://lcd.juno.giansalex.dev",faucetUrl:"",feeToken:"ujunox",stakingToken:"ujunox",coinMap:{ujunox:{denom:"JUNOX",fractionalDigits:6}},gasPrice:.025}});var en=t(445),nn=t.n(en);function tn(){return a.a.createElement(Ie,{pathAfterLogin:"/tokens",appName:"Wallet",appLogo:nn.a,config:_e})}var rn=t(446),an=t.n(rn),on=t(447),cn=t.n(on);function sn(e){e.push("/tokens")}function ln(){return a.a.createElement(ze,{defaultButtonAction:sn,successIcon:cn.a,failIcon:an.a})}var un=t(448),mn=t.n(un),fn=t(46),dn=t(964),vn=t(452),hn=t(965),pn=t(109);const gn=new RegExp("^"+_e.addressPrefix),bn={address:pn.c().required("An address is required").matches(gn,`"${_e.addressPrefix}" prefix required`).length(39+_e.addressPrefix.length,"Address invalid")},En=pn.b().shape(bn),yn=pn.b().shape(bn),kn=Object(E.b)(le)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,xn=E.b.div`
  display: flex;
  align-items: baseline;

  & > * + * {
    margin-left: var(--s0);
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`,{Text:jn}=p.a;function Pn({tokenName:e,tokenAmount:n,sendTokensAction:t}){const r=pn.b().shape({amount:pn.a().required("An amount is required").positive("Amount should be positive").max(parseFloat(n),"Amount cannot be greater than "+n)}).concat(yn);return a.a.createElement(fn.c,{initialValues:{amount:"",address:""},onSubmit:t,validationSchema:r},n=>a.a.createElement(dn.a,null,a.a.createElement(kn,null,a.a.createElement(xn,null,a.a.createElement(jn,null,"Send"),a.a.createElement(vn.a,{name:"amount"},a.a.createElement(hn.a,{name:"amount",placeholder:"Enter amount"})),a.a.createElement(jn,null,e)),a.a.createElement(xn,null,a.a.createElement(jn,null,"to"),a.a.createElement(vn.a,{name:"address"},a.a.createElement(hn.a,{name:"address",placeholder:"Enter address"}))),a.a.createElement(v.a,{type:"primary",onClick:n.submitForm,disabled:!(n.isValid&&n.dirty)},"Send"))))}const On=Object(E.b)(le)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,Sn=Object(E.b)(le)`
  & > * {
    --gap: var(--s2);
  }
`,wn=E.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:Tn,Text:An}=p.a;function Cn(){const[e,n]=Object(r.useState)(!1),t=Object(y.g)(),{tokenName:o}=Object(y.h)(),{tokenAmount:i}=t.location.state,{getClient:c,address:s,refreshBalance:l}=K(),u={denom:o,amount:i},{denom:m,amount:f}=Z(u,_e.coinMap),[d,v]=f.split(".");return e&&a.a.createElement(Ee,{loadingText:`Sending ${m}...`})||!e&&a.a.createElement(fe,null,a.a.createElement(On,null,a.a.createElement(he,{icon:mn.a,path:"/tokens"}),a.a.createElement(Sn,null,a.a.createElement(Tn,null,m),a.a.createElement($e,{hideTitle:!0,hideBalance:!0})),a.a.createElement(wn,null,a.a.createElement(An,null,`${d}${v?".":""}`),v&&a.a.createElement(An,null,v),a.a.createElement(An,null," tokens")),a.a.createElement(Pn,{tokenName:m,tokenAmount:f,sendTokensAction:e=>{n(!0);const{address:r,amount:a}=e,u=function(e,n,t){var r,a=null===(r=n[t])||void 0===r?void 0:r.fractionalDigits;return a?M.Decimal.fromUserInput(e,a).atomics:e}(a,_e.coinMap,o),m=[{denom:o,amount:u}],f=Object(P.calculateFee)(4e5,`${_e.gasPrice}${_e.feeToken}`);c().sendTokens(s,r,m,f).then(e=>{if(Object(P.isBroadcastTxFailure)(e))return Promise.reject(e.rawLog);l(),t.push({pathname:"/result",state:{success:!0,message:`${a} ${o} successfully sent to ${r}`,customButtonText:"Tokens"}})}).catch(e=>{console.error(e);const n="/tokens/"+o,r={tokenAmount:i};t.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:_(e),customButtonActionPath:n,customButtonActionState:r}})})}})))}t(204);var Bn=t(108),Mn=t.n(Bn),Dn=t(202);const In=r.forwardRef(({name:e,validate:n,fast:t,onChange:a,onBlur:o,...i},c)=>r.createElement(Dn.a,{name:e,validate:n,fast:t},({field:{value:n,onChange:t,onBlur:s}})=>r.createElement(Mn.a,Object.assign({ref:c,name:e,value:n,onChange:e=>{t(e),a&&a(e)},onBlur:e=>{s(e),o&&o(e)}},i))));In.Search=r.forwardRef(({name:e,validate:n,fast:t,onChange:a,onBlur:o,...i},c)=>r.createElement(Dn.a,{name:e,validate:n,fast:t},({field:{value:n,onChange:t,onBlur:s}})=>r.createElement(Mn.a.Search,Object.assign({ref:c,name:e,value:n,onChange:e=>{t(e),a&&a(e)},onBlur:e=>{s(e),o&&o(e)}},i))));var zn=In.Search;function Un({currentAddress:e,setCurrentAddress:n}){return a.a.createElement(fn.c,{initialValues:{address:e},validationSchema:En,onSubmit:e=>{n(e.address)}},e=>a.a.createElement(dn.a,null,a.a.createElement(vn.a,{name:"address"},a.a.createElement(zn,{name:"address",placeholder:"Enter address",enterButton:!0,onSearch:e.submitForm}))))}const Nn=Object(E.b)(le)`
  & > * {
    --gap: 0;
  }
`,Ln=E.b.div`
  --v-padding: var(--s-2);
  --border-size: 1px;

  padding-top: var(--v-padding);
  padding-bottom: var(--v-padding);

  padding-left: var(--s4);
  margin-left: calc(-1 * var(--s4));
  padding-right: var(--s4);
  margin-right: calc(-1 * var(--s4));

  margin-bottom: calc(-1 * var(--border-size));

  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-primary);

    & * {
      color: white;
    }
  }

  &:first-child > * {
    --border-size: 0;
  }

  & > * {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    span:first-child {
      font-family: var(--ff-iceland);
      font-size: var(--s2);
    }

    span:not(:first-child) {
      font-weight: bolder;
      font-size: var(--s-1);
    }
  }

  &[data-state="forbidden"] {
    &:hover,
    &:active,
    &:focus {
      background-color: var(--color-black);
      cursor: not-allowed;
    }
  }
`,Fn=E.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:$n}=p.a;function Rn({currentAddress:e}){const{config:n,getClient:t,address:o,balance:i}=K(),c=o===e,[s,l]=Object(r.useState)([]);Object(r.useEffect)(()=>{c?l(i):(l([]),async function(){for(const r in n.coinMap){const n=await t().getBalance(e,r);n&&l(e=>[...e,n])}}())},[c,i,e,n.coinMap,t]);const u=Object(y.g)();return a.a.createElement(Nn,null,s.map(e=>{const{denom:t,amount:r}=Z(e,n.coinMap);return a.a.createElement(Ln,{key:e.denom,"data-state":c?"":"forbidden",onClick:()=>{var n;c&&(n=e,u.push("/tokens/"+n.denom,{tokenAmount:n.amount}))}},a.a.createElement(Fn,null,a.a.createElement($n,null,t),a.a.createElement($n,null,"0"!==r?r:"No tokens")))}))}const Wn=Object(E.b)(le)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,{Title:qn}=p.a;function Vn(){const{address:e}=K(),[n,t]=Object(r.useState)(e);return a.a.createElement(fe,null,a.a.createElement(Wn,null,a.a.createElement(qn,null,"Tokens"),a.a.createElement(Un,{currentAddress:n,setCurrentAddress:t}),a.a.createElement(Rn,{currentAddress:n}),a.a.createElement($e,{hideTitle:!0,hideBalance:!0})))}function Jn(){return a.a.createElement(U,null,a.a.createElement(Y,{config:_e},a.a.createElement(Xe,null),a.a.createElement(Ze.a,{basename:"/wallet"},a.a.createElement(y.d,null,a.a.createElement(y.b,{exact:!0,path:"/",component:tn}),a.a.createElement(y.b,{exact:!0,path:"/login",component:tn}),a.a.createElement(Q,{authPath:"/login"},a.a.createElement(y.b,{exact:!0,path:"/tokens",component:Vn}),a.a.createElement(y.b,{exact:!0,path:"/tokens/:tokenName",component:Cn}),a.a.createElement(y.b,{exact:!0,path:"/result",component:ln}))))))}t(958);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Jn,null)),document.getElementById("root"))}},[[456,1,2]]]);