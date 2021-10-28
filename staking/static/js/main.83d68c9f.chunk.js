(this["webpackJsonpnative-staking"]=this["webpackJsonpnative-staking"]||[]).push([[0],{1004:function(e,t,n){},1005:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),c=(n(280),n(197)),l=n.n(c),s=(n(492),n(467)),u=n.n(s),m=(n(494),n(466)),d=n.n(m),f=(n(100),n(32)),g=n.n(f),p=(n(49),n(18)),v=n.n(p),h=(n(503),n(459)),b=n.n(h),E=n(3),y=n(26),x=n(1010),k=n(1011),w=n(1012),j=n(450),O=n(25),T=n(20),P=n(88),S=n(451),A=n(89),C=n(452),D=n(455),z=n(12);var B={contracts:[],addContract:function(){}},M=r.a.createContext(B);function U(e){var t=e.children,n=Object(a.useState)(B.contracts),o=n[0],i=n[1];var c={contracts:o,addContract:function(e){i((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(M.Provider,{value:c},t)}var I={setError:function(){},clearError:function(){}},R=Object(a.createContext)(I),F=function(){return Object(a.useContext)(R)};function N(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],i={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(R.Provider,{value:i},t)}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=function(e){try{var t,n=window;if(!n.getOfflineSignerAuto)throw new Error("Keplr extension is not available");var a=n.getOfflineSignerAuto(e);return a.signAmino=null!==(t=a.signAmino)&&void 0!==t?t:a.sign,Promise.resolve(a)}catch(r){return Promise.reject(r)}},$=function(e,t){try{return Promise.resolve(C.a.create(12e4,12e4)).then((function(e){return new S.LedgerSigner(e,{hdPaths:[Object(T.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},W=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=O.Bip39.encode(O.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(T.makeCosmoshubPath)(0);return Promise.resolve(P.DirectSecp256k1HdWallet.fromMnemonic(n,{hdPaths:[a],prefix:t}))}catch(r){return Promise.reject(r)}};var q=function(){function e(){}return e.prototype.then=function(t,n){var a=new e,r=this.s;if(r){var o=1&r?t:n;if(o){try{J(a,1,o(this.v))}catch(i){J(a,2,i)}return a}return this}return this.o=function(e){try{var r=e.v;1&e.s?J(a,1,t?t(r):r):n?J(a,1,n(r)):J(a,2,r)}catch(i){J(a,2,i)}},a},e}();function J(e,t,n){if(!e.s){if(n instanceof q){if(!n.s)return void(n.o=J.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(J.bind(null,e,t),J.bind(null,e,2));e.s=t,e.v=n;var a=e.o;a&&a(e)}}function G(e,t,n){var a=[];for(var r in e)a.push(r);return function(e,t,n){var a,r,o=-1;return function i(c){try{for(;++o<e.length&&(!n||!n());)if((c=t(o))&&c.then){if(!((l=c)instanceof q&&1&l.s))return void c.then(i,r||(r=J.bind(null,a=new q,2)));c=c.v}a?J(a,1,c):a=c}catch(s){J(a||(a=new q),2,s)}var l}(),a}(a,(function(e){return t(a[e])}),n)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function H(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function Y(){throw new Error("Not yet initialized")}var K={initialized:!1,init:Y,clear:Y,config:{},changeConfig:Y,address:"",balance:[],refreshBalance:Y,hitFaucet:Y,getSigner:Y,changeSigner:Y,getClient:Y,getStakingClient:Y},Q=Object(a.createContext)(K),_=function(){return Object(a.useContext)(Q)};function X(e){var t=function(e){try{if(!l.faucetUrl||!l.feeToken)return Promise.resolve();var t=H((function(){var t=new D.FaucetClient(l.faucetUrl);return Promise.resolve(t.credit(e,l.feeToken)).then((function(){}))}),(function(e){i(e.message),console.error(e)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(n){return Promise.reject(n)}},n=function(e,t){try{if(!g)return Promise.resolve();t.length=0;var n=G(l.coinMap,(function(n){return Promise.resolve(g.getBalance(e,n)).then((function(e){e&&t.push(e)}))}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},r=e.config,o=e.children,i=F().setError,c=Object(a.useState)(r),l=c[0],s=c[1],u=Object(a.useState)(),m=u[0],d=u[1],f=Object(a.useState)(),g=f[0],p=f[1],v=V({},K,{init:d}),h=Object(a.useState)(v),b=h[0],E=h[1];function y(){E(V({},v)),p(void 0),d(void 0),s(r)}function x(e){s((function(t){return V({},t,e)}))}return Object(a.useEffect)((function(){m&&function(){try{var e=H((function(){return Promise.resolve(function(e,t){try{var n=V({},T.defaultGasLimits,{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4});return Promise.resolve(j.SigningCosmWasmClient.connectWithSigner(e.rpcUrl,t,{prefix:e.addressPrefix,gasPrice:T.GasPrice.fromString(""+e.gasPrice+e.feeToken),gasLimits:n}))}catch(a){return Promise.reject(a)}}(l,m)).then((function(e){p(e)}))}),(function(e){i(e.message)}));e&&e.then&&e.then((function(){}))}catch(t){Promise.reject(t)}}()}),[m,l]),Object(a.useEffect)((function(){if(m&&g){var e=[];!function(){try{Promise.resolve(m.getAccounts()).then((function(a){var r=a[0].address;return Promise.resolve(n(r,e)).then((function(){function a(){return Promise.resolve(n(r,e)).then((function(){return Promise.resolve(function(e){try{return Promise.resolve(A.Tendermint34Client.connect(e)).then((function(e){return T.QueryClient.withExtensions(e,T.setupStakingExtension,T.setupDistributionExtension)}))}catch(t){return Promise.reject(t)}}(l.rpcUrl)).then((function(a){E({initialized:!0,init:function(){},clear:y,config:l,changeConfig:x,address:r,balance:e,refreshBalance:n.bind(null,r,e),hitFaucet:t.bind(null,r),getSigner:function(){return m},changeSigner:d,getClient:function(){return g},getStakingClient:function(){return a}})}))}))}var o=function(){if(!e.find((function(e){return e.denom===l.feeToken})))return Promise.resolve(t(r)).then((function(){}))}();return o&&o.then?o.then(a):a()}))}))}catch(a){Promise.reject(a)}}()}}),[g]),Object(a.createElement)(Q.Provider,{value:b},o)}function Z(e){var t=e.authPath,n=e.children,a=e.location;return _().initialized?r.a.createElement(y.d,{location:a},n):r.a.createElement(y.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function ee(e){if(!e)return"0";if(e.denom.startsWith("u")){var t=e.denom.slice(1).toUpperCase();return z.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function te(e){return e&&0!==e.length?e.map(ee).join(", "):"\u2013"}function ne(e,t){if(!t)return e;var n=t[e.denom];if(!n)return e;var a=z.Decimal.fromAtomics(e.amount,n.fractionalDigits).toString();return{denom:n.denom,amount:a}}function ae(e,t,n){var a,r=null===(a=t[n])||void 0===a?void 0:a.fractionalDigits;return r?z.Decimal.fromUserInput(e,r).atomics:e}function re(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var oe=n(193),ie=n.n(oe);function ce(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function le(e,t){return t||(t=e.slice(0)),e.raw=t,e}function se(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=ce(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function ue(){var e=le(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ue=function(){return e},e}var me=Object(E.b)(se)(ue());function de(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=ce(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function fe(){var e=le(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return fe=function(){return e},e}var ge=Object(E.b)(de)(fe());function pe(e){var t=e.children,n=ce(e,["children"]);return Object(a.createElement)(me,Object.assign({tag:"main"},n),t)}function ve(){var e=le(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return ve=function(){return e},e}var he=Object(E.b)(pe)(ve());function be(e){var t=e.icon,n=e.path,a=e.state,o=ce(e,["icon","path","state"]),i=Object(y.g)(),c=n?function(){return i.push(n,a)}:i.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:c},o))}function Ee(){var e=le(["\n  cursor: pointer;\n"]);return Ee=function(){return e},e}var ye=Object(E.b)(be)(Ee());function xe(){var e=le(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return xe=function(){return e},e}var ke=Object(E.b)(b.a)(xe()),we=Object(a.createElement)(x.a,{style:{fontSize:"6.25rem"},spin:!0});function je(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(he,null,Object(a.createElement)(ke,{indicator:we,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Oe(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function Te(){var e=le(["\n  width: 100%;\n  text-align: center;\n  --gap: var(--s3)\n"]);return Te=function(){return e},e}function Pe(){var e=le(["\n  color: var(--color-red);\n"]);return Pe=function(){return e},e}function Se(){var e=le(["\n  display: block;\n  font-weight: lighter;\n"]);return Se=function(){return e},e}function Ae(){var e=le(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ae=function(){return e},e}function Ce(){var e=le(["\n  & > * {\n    --gap: 0;\n  }\n"]);return Ce=function(){return e},e}var De=v.a.Text,ze=Object(E.b)(ge)(Ce()),Be=Object(E.b)(ge)(Ae()),Me=Object(E.b)(De)(Se()),Ue=Object(E.b)(De)(Pe()),Ie=E.b.div(Te()),Re=v.a.Title;function Fe(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Ne(e){var t=function(e){try{j(!0),h();var t=Oe((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){b.init(e)}))}),(function(e){console.error(e),p(Error(""+e).message),j(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,o=e.pathAfterLogin,i=e.appName,c=e.appLogo,l=ce(e,["config","pathAfterLogin","appName","appLogo"]),s=Object(y.g)(),u=s.location.state,m=F(),f=m.error,p=m.setError,h=m.clearError,b=_(),E=Object(a.useState)(!1),x=E[0],j=E[1];return Object(a.useEffect)((function(){b.initialized&&(u?s.push(u.redirectPathname,u.redirectState):s.push(o))}),[b.initialized,u,s]),x?r.a.createElement(je,{loadingText:"Initializing app..."}):r.a.createElement(he,Object.assign({},l),r.a.createElement(ze,null,r.a.createElement("img",{src:c,alt:"dApp logo"}),r.a.createElement(Be,null,r.a.createElement(v.a,null,r.a.createElement(Re,{level:2},"Hello!"),r.a.createElement(Me,null,"Welcome to your ",i),r.a.createElement(Me,null,"Select one of the following options to start:")),f&&r.a.createElement(Ue,null,f),r.a.createElement(g.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(W)).then((function(){}))}catch(e){return Promise.reject(e)}},style:{display:"none"}},"Browser (Demo)"),r.a.createElement(g.a,{type:"primary",disabled:Fe(),onClick:function(){try{return Promise.resolve(t($)).then((function(){}))}catch(e){return Promise.reject(e)}}},r.a.createElement(k.a,null)," Ledger (Secure, Chrome)"),r.a.createElement(g.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=Oe((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits,coinGeckoId:e.coinMap[e.feeToken].coingecko},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits,coinGeckoId:e.coinMap[e.stakingToken].coingecko}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits,coinGeckoId:e.coinMap[e.stakingToken].coingecko},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118,features:["stargate","ibc-transfer","cosmwasm","no-legacy-stdTx"]}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(L)).then((function(){}))}))}))}),(function(e){console.error(e),p(Error(""+e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},r.a.createElement(w.a,null)," Keplr (Secure)")),r.a.createElement(Ie,null,r.a.createElement(d.a,{src:"https://avatars.githubusercontent.com/u/71741453?s=200&v=4"})," by Disperze")))}function Ve(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,o=Object(y.g)(),i=o.location.state,c=i.success,l=i.message,s=i.error,m=i.customButtonText,d=i.customButtonActionPath,f=i.customButtonActionState;var p=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(o)}}:{result:"error",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(c),v=p.result,h=p.buttonText,b=p.buttonAction,E=m||h,x=d?function(){return o.push(d,f)}:b;return r.a.createElement(he,null,r.a.createElement(u.a,{status:v,title:c?"":l,subTitle:c?l:s,extra:[r.a.createElement(g.a,{type:"primary",onClick:x},E)]}))}v.a.Title,v.a.Text;function Le(){var e=le(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Le=function(){return e},e}var $e=Object(E.a)(Le());function We(){var e=le(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n    --color-coral: #f0827dff;\n    --color-coral-light: #f16a64;\n\n    --color-primary: var(--color-coral);\n    --button-color: var(--color-coral-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return We=function(){return e},e}var qe=Object(E.a)(We());function Je(){var e=le(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Je=function(){return e},e}var Ge=Object(E.a)(Je());function He(){var e=le(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return He=function(){return e},e}var Ye=Object(E.a)(He());function Ke(){var e=le(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return Ke=function(){return e},e}var Qe=Object(E.a)(Ke());function _e(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,null),r.a.createElement(Qe,null),r.a.createElement(qe,null),r.a.createElement(Ge,null),r.a.createElement($e,null))}var Xe=n(71);const Ze=function(e){var t=e.uninet;if(!t)throw new Error("No configuration found for network uninet");return t}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"wasm",rpcUrl:"http://localhost:26659",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025,codeId:129},musselnet:{chainId:"musselnet-2",chainName:"Musselnet",addressPrefix:"wasm",rpcUrl:"https://rpc.musselnet.cosmwasm.com",httpUrl:"https://lcd.musselnet.cosmwasm.com",faucetUrl:"https://faucet.musselnet.cosmwasm.com",feeToken:"umayo",stakingToken:"ufrites",coinMap:{umayo:{denom:"MAYO",fractionalDigits:6},ufrites:{denom:"FRITES",fractionalDigits:6}},gasPrice:.025,codeId:5},uninet:{chainId:"uni",chainName:"Juno Testnet",addressPrefix:"juno",rpcUrl:"https://rpc.juno.giansalex.dev",httpUrl:"https://lcd.juno.giansalex.dev",faucetUrl:"",feeToken:"ujunox",stakingToken:"ujunox",coinMap:{ujunox:{denom:"JUNOX",fractionalDigits:6}},gasPrice:.025},juno1:{chainId:"juno-1",chainName:"Juno",addressPrefix:"juno",rpcUrl:"https://rpc.juno.disperze.network",httpUrl:"https://lcd.juno.disperze.network",faucetUrl:"",feeToken:"ujuno",stakingToken:"ujuno",coinMap:{ujuno:{denom:"JUNO",fractionalDigits:6,coingecko:"juno-network"}},gasPrice:.025}});n(432);var et=n(99),tt=n.n(et),nt=(n(433),n(48)),at=n.n(nt),rt=(n(904),n(472)),ot=n.n(rt),it=n(468),ct=n.n(it),lt=n(469),st=n.n(lt),ut=n(470),mt=n.n(ut),dt=n(471),ft=n.n(dt);const{Text:gt}=v.a,pt=E.b.img`
  cursor: pointer;
  width: 2.625rem;
`,vt=E.b.img`
  cursor: pointer;
  width: 1.75rem;
`,ht=Object(E.b)(me)`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;

  min-width: var(--max-width);
  padding: var(--s0);
  background-color: var(--color-primary);
`,bt=Object(E.b)(ge)`
  width: 100%;
  color: var(--color-gray-light);

  & > * {
    --gap: var(--s4);
  }
`,Et=Object(E.b)(ge)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > * {
    --gap: var(--s0);
  }

  & > img {
    align-self: flex-end;
  }
`,yt=E.b.div`
  display: flex;
`,xt=Object(E.b)(gt)`
  margin-left: var(--s-1);
  font-size: var(--s2);
  color: inherit;
`,kt=E.b.div`
  width: 100%;
  padding: var(--s-4) 0;
  border-radius: 2px;
  background-color: var(--color-gray-light);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,wt=Object(E.b)(gt)`
  font-size: var(--s-2);
`,jt=E.b.img`
  cursor: pointer;
`,Ot=Object(E.b)(ge)`
  & > * {
    --gap: var(--s-3);
  }
`,Tt=Object(E.b)(gt)`
  cursor: pointer;

  font-family: var(--ff-iceland);
  font-size: var(--s2);

  color: inherit;
`,{Text:Pt}=v.a;function St({name:e,...t}){const{address:n,balance:o,config:i}=_(),c=Object(y.g)();const[l,s]=Object(a.useState)(!1),u=e?e+"'s":"Your";return r.a.createElement(r.a.Fragment,null,r.a.createElement(ot.a,{count:(m=i.chainId,"juno-1"===m?"mainnet":i.chainId),style:{backgroundColor:"var(--color-primary)",marginTop:"8px"}}),r.a.createElement(pt,Object.assign({src:ft.a,alt:"Open account menu",onClick:()=>s(!0)},t)),l&&r.a.createElement(ht,t,r.a.createElement(bt,null,r.a.createElement(Et,null,r.a.createElement(vt,{src:mt.a,alt:"Close account menu",onClick:()=>s(!1)}),r.a.createElement(yt,null,r.a.createElement("img",{src:ct.a,alt:"Avatar"}),r.a.createElement(xt,null,u," account")),r.a.createElement(Pt,{style:{color:"white"}},"(",te(o),")"),r.a.createElement(kt,null,r.a.createElement(wt,null,n),r.a.createElement(jt,{src:st.a,alt:"Copy address icon",onClick:()=>{ie()(n)}}))),r.a.createElement(Ot,null,r.a.createElement("div",{onClick:function(){c.push("/rewards")}},r.a.createElement(Tt,null,"My Stake")),r.a.createElement("div",{onClick:function(){c.push("/validators")}},r.a.createElement(Tt,null,"Validators"))))));var m}const At=Object(E.b)(ge)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`,Ct=E.b.header`
  display: flex;
  justify-content: space-between;
`,Dt=Object(E.b)(ge)`
  & > * {
    --gap: 0;
  }
`,zt=E.b.div`
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

  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`;var Bt=n(192);const{Title:Mt,Text:Ut}=v.a;function It(){const[e,t]=Object(a.useState)(!1),[n,o]=Object(a.useState)(!1),i=Object(y.g)(),{address:c,config:l,getStakingClient:s,getClient:u,refreshBalance:m}=_(),[d,f]=Object(a.useState)([]),[p,v]=Object(a.useState)([]);function h(e){i.push("/validators/"+e)}return Object(a.useEffect)(()=>{!async function(){const e=s(),t=await e.staking.delegatorUnbondingDelegations(c);let n=[];t.unbondingResponses.forEach(t=>{n.push(e.staking.validator(t.validatorAddress))});const a=await Promise.all(n);let r=[];t.unbondingResponses.forEach(e=>{const t=a.find(t=>t.validator.operatorAddress===e.validatorAddress),n=e.entries.map(n=>({name:t.validator.description.moniker,address:e.validatorAddress,balance:n.balance,complete:n.completionTime}));r.push(...n)}),v(r)}()},[s,c]),Object(a.useEffect)(()=>{!async function(){const e=s(),t=await e.distribution.delegatorValidators(c);let n=[],a=[];t.validators.forEach(t=>{n.push(e.staking.validator(t)),a.push(e.distribution.delegationRewards(c,t))});const r=await Promise.all(n),i=await Promise.all(a),l=r.map((e,t)=>{var n;const a=i[t].rewards;return{name:e.validator.description.moniker,address:e.validator.operatorAddress,status:e.validator.status,rewards:a.length>0?z.Decimal.fromAtomics(null===(n=a[0].amount)||void 0===n?void 0:n.slice(0,-18),6).toString():""}}).filter(e=>3===e.status||e.rewards);o(l.some(e=>""!==e.rewards)),f(l)}()},[s,c]),e&&r.a.createElement(je,{loadingText:"Withdrawing rewards..."})||!e&&r.a.createElement(he,null,r.a.createElement(At,null,r.a.createElement(Ct,null,r.a.createElement("span",null),r.a.createElement(St,null)),r.a.createElement(Mt,null,"My Rewards"),r.a.createElement(Dt,null,r.a.createElement(tt.a,{style:{marginBottom:"1.5rem"}},r.a.createElement(at.a,{span:16,style:{textAlign:"left"}},r.a.createElement(Ut,null,"Validator")),r.a.createElement(at.a,{span:8,style:{textAlign:"right"}},r.a.createElement(Ut,null,"Reward"))),d.map(e=>r.a.createElement(zt,{key:e.name},r.a.createElement(tt.a,{onClick:()=>h(e.address)},r.a.createElement(at.a,{span:16,style:{textAlign:"left"}},r.a.createElement(Ut,null,e.name)),r.a.createElement(at.a,{span:8,style:{textAlign:"right"}},r.a.createElement(Ut,null,e.rewards)))))),r.a.createElement(g.a,{type:"primary",disabled:!n,onClick:async function(){if(0!==d.length){t(!0);try{let e=d.filter(e=>""!==e.rewards).map(e=>({typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:Bt.MsgWithdrawDelegatorReward.fromPartial({delegatorAddress:c,validatorAddress:e.address})}));const t={amount:Object(T.coins)(l.gasPrice*10**l.coinMap[l.feeToken].fractionalDigits,l.feeToken),gas:(e.length*T.defaultGasLimits.withdraw).toString()},n=await u().signAndBroadcast(c,e,t);if(Object(T.isBroadcastTxFailure)(n))throw Error("Rewards withdrawal failed");m(),i.push({pathname:"/result",state:{success:!0,message:"Successfully withdrawn",customButtonText:"My Rewards",customButtonActionPath:"/rewards"}})}catch(e){console.error(e),i.push({pathname:"/result",state:{success:!1,message:"Rewards withdrawal transaction failed:",error:re(e),customButtonActionPath:"/rewards"}})}}}},"Withdraw all rewards"),0===p.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(Mt,null,"Unbonding"),r.a.createElement(Dt,null,r.a.createElement(tt.a,{style:{marginBottom:"1.5rem"}},r.a.createElement(at.a,{span:16,style:{textAlign:"left"}},r.a.createElement(Ut,null,"Validator")),r.a.createElement(at.a,{span:8,style:{textAlign:"right"}},r.a.createElement(Ut,null,"Time left"))),p.map(e=>r.a.createElement(zt,{key:e.name},r.a.createElement(tt.a,{onClick:()=>h(e.address)},r.a.createElement(at.a,{span:16,style:{textAlign:"left"}},r.a.createElement(Ut,null,e.name," [",te([{amount:e.balance,denom:l.stakingToken}]),"]")),r.a.createElement(at.a,{span:8,style:{textAlign:"right"}},r.a.createElement(Ut,null,function(e){const t=new Date,n=e.getTime()-t.getTime(),a=Math.floor(n/864e5);return a>0?a+"days":Math.floor(n/36e5)+"hours"}(e.complete))))))))))}n(909);var Rt=n(271),Ft=n.n(Rt),Nt=n(473),Vt=n.n(Nt);const Lt=E.b.header`
  display: flex;
  justify-content: space-between;
`;function $t({path:e,state:t,name:n,...a}){return r.a.createElement(Lt,a,r.a.createElement(ye,{icon:Vt.a,path:e,state:t}),r.a.createElement(St,{name:n}))}function Wt(e){const{setError:t}=F(),{getStakingClient:n}=_(),[r,o]=Object(a.useState)();return Object(a.useEffect)(()=>{!async function(){try{const{validator:t}=await n().staking.validator(e);o(t)}catch(a){t(a.message),console.error(a)}}()},[n,e,t]),r}function qt(e){const t=e.slice(0,-16);return t?t+" %":"0 %"}var Jt=n(47),Gt=n(1009),Ht=n(477),Yt=n(1013),Kt=n(139);const Qt=Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,_t=(E.b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }

  span + span {
    margin-left: var(--s2);

    font-family: var(--ff-montserrat);
    font-weight: bolder;
    font-size: var(--s2);
    line-height: var(--s2);
  }
`,E.b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-typography {
    flex-grow: 0;
    flex-shrink: 1;
    text-align: left;
  }

  .ant-form-item {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }
`),{Text:Xt}=v.a;function Zt({submitDelegateBalance:e}){const{balance:t}=_(),n=t.find(e=>e.denom===Ze.stakingToken),a=Ze.coinMap[Ze.stakingToken].fractionalDigits,o=n?z.Decimal.fromAtomics(n.amount,a).toFloatApproximation():0,i=Kt.b().shape({amount:Kt.a().required("An amount is required").positive("Amount should be positive").max(o)});return r.a.createElement(Jt.c,{initialValues:{amount:""},onSubmit:e,validationSchema:i},e=>{const t=!(e.isValid&&e.dirty);return r.a.createElement(Gt.a,null,r.a.createElement(Qt,null,r.a.createElement(_t,null,r.a.createElement(Xt,null,Ze.coinMap[Ze.stakingToken].denom),r.a.createElement(Ht.a,{name:"amount"},r.a.createElement(Yt.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(g.a,{type:"primary",onClick:e.submitForm,disabled:t},"Delegate")))})}const en=Object(E.b)(ge)`
  & > * {
    --gap: var(--s6);
  }
`,tn=Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,{Title:nn}=(Object(E.b)(me)`
  --max-width: none;
`,Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }
`,v.a);function an(){var e;const[t,n]=Object(a.useState)(!1),o=Object(y.g)(),{validatorAddress:i}=Object(y.h)(),{getClient:c,address:l,refreshBalance:s}=_(),u=Wt(i);return t&&r.a.createElement(je,{loadingText:"Delegating..."})||!t&&r.a.createElement(he,null,r.a.createElement(en,null,r.a.createElement(tn,null,r.a.createElement($t,{path:"/validators/"+i}),r.a.createElement(nn,null,"Delegate"),r.a.createElement(nn,{level:2},null!==(e=null===u||void 0===u?void 0:u.description.moniker)&&void 0!==e?e:"")),r.a.createElement(Ft.a,{style:{marginTop:"10px"},message:"Unbonding time: 28 days",description:"You will need to undelegate in order for your staked assets to be liquid again. This process will take 28 days to complete.",type:"error",closable:!0}),r.a.createElement(Zt,{submitDelegateBalance:async function({amount:e}){n(!0);const t={amount:ae(e,Ze.coinMap,Ze.stakingToken),denom:Ze.stakingToken};try{const n=await c().delegateTokens(l,i,t);if(Object(T.isBroadcastTxFailure)(n))throw Error("Delegate failed");s(),o.push({pathname:"/result",state:{success:!0,message:`${e} ${Ze.coinMap[Ze.stakingToken].denom} successfully delegated`,customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(a){console.error(a),o.push({pathname:"/result",state:{success:!1,message:"Delegate transaction failed:",error:re(a),customButtonActionPath:`/validators/${i}/delegate`}})}}})))}var rn=n(478),on=n.n(rn);function cn(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{pathAfterLogin:"/validators",appName:"Juno Staking",appLogo:on.a,config:Ze}))}var ln=n(479),sn=n.n(ln),un=n(480),mn=n.n(un);function dn(e){e.push("/validators")}function fn(){return r.a.createElement(Ve,{defaultButtonAction:dn,successIcon:mn.a,failIcon:sn.a})}const{Text:gn}=v.a,pn=Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }

  div[role="separator"] {
    margin-bottom: 0;
  }
`,vn=E.b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`,hn=Object(E.b)(gn)`
  font-family: var(--ff-iceland);
  font-size: var(--s2);
  line-height: var(--s2);
`,bn=Object(E.b)(gn)`
  font-family: var(--ff-montserrat);
  font-weight: bolder;
  font-size: var(--s-1);
  line-height: var(--s-1);
`;function En(e){return r.a.createElement(pn,null,Object.entries(e).map(([e,t],n)=>r.a.createElement(r.a.Fragment,{key:e},n>0&&r.a.createElement(l.a,null),r.a.createElement(vn,null,r.a.createElement(hn,null,e.charAt(0).toUpperCase()+e.slice(1)),r.a.createElement(bn,null,t)))))}const yn=Object(E.b)(ge)`
  & > * {
    --gap: var(--s6);
  }

  width: 100%;
`,xn=Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,{Title:kn,Text:wn}=(Object(E.b)(ge)`
  & > * {
    --gap: var(--s2);
  }
`,v.a);function jn(){var e;const[t,n]=Object(a.useState)(!1),o=Object(y.g)(),{validatorAddress:i}=Object(y.h)(),{config:c,getClient:l,getStakingClient:s,address:u,refreshBalance:m}=_(),d=Wt(i),[f,p]=Object(a.useState)([]);return Object(a.useEffect)(()=>{!async function(){try{const{rewards:e}=await s().distribution.delegationRewards(u,i),t=e.map(e=>({amount:e.amount?e.amount.slice(0,-18):"",denom:e.denom||""})).filter(e=>e.amount.length&&e.denom.length);p(t)}catch(e){console.error(e.message)}}()},[s,u,i]),t&&r.a.createElement(je,{loadingText:"Withdrawing rewards..."})||!t&&r.a.createElement(he,null,r.a.createElement(yn,null,r.a.createElement(xn,null,r.a.createElement($t,{path:"/validators/"+i}),r.a.createElement(kn,null,"Pending rewards"),r.a.createElement(kn,{level:2},null!==(e=null===d||void 0===d?void 0:d.description.moniker)&&void 0!==e?e:"")),f.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(En,function(e,t){if(!e.coinMap)return{};const n={};for(const a of t){const t=ne(a,e.coinMap);n[t.denom]=t.amount}return n}(c,f)),r.a.createElement(g.a,{type:"primary",onClick:async function(){n(!0);try{const e=await l().withdrawRewards(u,i);if(Object(T.isBroadcastTxFailure)(e))throw Error("Rewards withdrawal failed");m(),o.push({pathname:"/result",state:{success:!0,message:"Successfully withdrawn",customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(e){console.error(e),o.push({pathname:"/result",state:{success:!1,message:"Rewards withdrawal transaction failed:",error:re(e),customButtonActionPath:`/validators/${i}/rewards`}})}}},"Withdraw rewards")):r.a.createElement(wn,null,"No rewards found")))}const On=Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,Tn=E.b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-typography {
    flex-grow: 0;
    flex-shrink: 1;
    text-align: left;
  }

  .ant-typography + .ant-typography {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
    text-align: right;

    font-family: var(--ff-montserrat);
    font-weight: bolder;
    font-size: var(--s4);
    line-height: var(--s4);
  }

  .ant-form-item {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }
`,{Text:Pn}=v.a;function Sn({validatorAddress:e,submitUndelegateBalance:t}){const{config:n,getStakingClient:o,address:i}=_(),[c,l]=Object(a.useState)(z.Decimal.fromUserInput("0",0)),s=c.toFloatApproximation(),u=Kt.b().shape({amount:Kt.a().required("An amount is required").positive("Amount should be positive").max(s)});return Object(a.useEffect)(()=>{!async function(){try{const{delegationResponse:t}=await o().staking.delegation(i,e),{balance:a}=t,r=z.Decimal.fromAtomics(a.amount,n.coinMap[n.stakingToken].fractionalDigits);l(r)}catch(t){console.error(t.message)}}()},[i,e,n,o]),r.a.createElement(Jt.c,{initialValues:{amount:""},onSubmit:t,validationSchema:u},e=>r.a.createElement(Gt.a,null,r.a.createElement(On,null,r.a.createElement(Tn,null,r.a.createElement(Pn,null,"Balance"),r.a.createElement(Pn,null,c.toString())),r.a.createElement(Tn,null,r.a.createElement(Pn,null,"Undelegate"),r.a.createElement(Ht.a,{name:"amount"},r.a.createElement(Yt.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(g.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Undelegate"))))}const{Text:An}=v.a,Cn=Object(E.b)(ge)`
  & > * {
    --gap: var(--s6);
  }
`,Dn=Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,{Title:zn}=(Object(E.b)(me)`
  --max-width: none;
`,Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }
`,Object(E.b)(ge)`
  & > * {
    --gap: var(--s3);
  }
`,Object(E.b)(An)`
  font-size: var(--s-1);
  color: var(--color-blue);
`,v.a);function Bn(){var e;const[t,n]=Object(a.useState)(!1),o=Object(y.g)(),{validatorAddress:i}=Object(y.h)(),{getClient:c,address:l,refreshBalance:s}=_(),u=Wt(i);return t&&r.a.createElement(je,{loadingText:"Undelegating..."})||!t&&r.a.createElement(he,null,r.a.createElement(Cn,null,r.a.createElement(Dn,null,r.a.createElement($t,{path:"/validators/"+i}),r.a.createElement(zn,null,"Undelegate"),r.a.createElement(zn,{level:2},null!==(e=null===u||void 0===u?void 0:u.description.moniker)&&void 0!==e?e:"")),r.a.createElement(Sn,{validatorAddress:i,submitUndelegateBalance:async function({amount:e}){n(!0);const t={amount:ae(e,Ze.coinMap,Ze.stakingToken),denom:Ze.stakingToken};try{const n=await c().undelegateTokens(l,i,t);if(Object(T.isBroadcastTxFailure)(n))throw Error("Undelegate failed");s(),o.push({pathname:"/result",state:{success:!0,message:`${e} ${Ze.coinMap[Ze.stakingToken].denom} successfully undelegated`,customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(a){console.error(a),o.push({pathname:"/result",state:{success:!1,message:"Undelegate transaction failed:",error:re(a),customButtonActionPath:`/validators/${i}/undelegate`}})}}})))}const Mn=Object(E.b)(ge)`
  & > * {
    --gap: var(--s5);
  }
`,Un=Object(E.b)(ge)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,In=(Object(E.b)(me)`
  --max-width: none;
`,Object(E.b)(ge)`
  & > * {
    --gap: var(--s0);
  }
`),{Title:Rn}=v.a;function Fn(){var e;const t=Object(y.g)(),{validatorAddress:n}=Object(y.h)(),o=Wt(n),{config:i,getStakingClient:c,address:l}=_(),[s,u]=Object(a.useState)(z.Decimal.fromUserInput("0",0));return Object(a.useEffect)(()=>{!async function(){try{const{delegationResponse:e}=await c().staking.delegation(l,n),t=z.Decimal.fromAtomics(e.balance.amount,i.coinMap[i.stakingToken].fractionalDigits);u(t)}catch(e){console.error(e.message)}}()},[c,l,n,i]),r.a.createElement(he,null,r.a.createElement(Mn,null,r.a.createElement($t,{path:"/validators"}),r.a.createElement(Un,null,r.a.createElement(Rn,null,null!==(e=null===o||void 0===o?void 0:o.description.moniker)&&void 0!==e?e:"")),r.a.createElement(En,function(e,t){return t?{Tokens:`${ne({denom:Ze.stakingToken,amount:t.tokens},Ze.coinMap).amount} ${Ze.coinMap[Ze.stakingToken].denom}`,Commission:qt(t.commission.commissionRates.rate),Balance:e.toString()}:{}}(s,o)),r.a.createElement(In,null,r.a.createElement(g.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/delegate`)}},"Delegate"),r.a.createElement(g.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/undelegate`)}},"Undelegate"),r.a.createElement(g.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/rewards`)}},"Rewards"))))}class Nn{constructor(e){this.queryClient=void 0,this.queryClient=T.QueryClient.withExtensions(e,T.setupBankExtension,T.setupStakingExtension)}static async connect(e){const t=await A.Tendermint34Client.connect(e);return new Nn(t)}getSupply(e){return this.queryClient.bank.supplyOf(e)}getStakingPool(){return this.queryClient.staking.pool()}}const Vn=Object(E.b)(ge)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`,Ln=E.b.header`
  display: flex;
  justify-content: space-between;
`,$n=Object(E.b)(ge)`
  & > * {
    --gap: 0;
  }
`,Wn=E.b.div`
  margin: 0;
`,qn=E.b.span`
  font-size: small;
`,Jn=E.b.span`
  font-size: larger;
`,Gn=E.b.div`
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

  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Title:Hn,Text:Yn}=v.a;function Kn(e,t){return Qn(e.name)&&Qn(t.name)?e.name<t.name?-1:e.name>t.name?1:0:1}function Qn(e){if(!e)return!1;const t=e.charCodeAt(0);return t>64&&t<123}function _n(){const e=Object(y.g)(),{getStakingClient:t,config:n}=_(),[o,i]=Object(a.useState)([]),[c,l]=Object(a.useState)(),s=e=>"juno-1"===e;return Object(a.useEffect)(()=>{!async function(){const{validators:e}=await t().staking.validators("BOND_STATUS_BONDED"),n=e.filter(e=>!e.description.moniker.includes("0%")).map(e=>({name:e.description.moniker,address:e.operatorAddress,commission:e.commission.commissionRates.rate})).sort(Kn);i(n)}()},[t]),Object(a.useEffect)(()=>{!async function(){if(!n.rpcUrl||!s(n.chainId))return;const e=await Nn.connect(n.rpcUrl),t=await e.getSupply(n.stakingToken),a=await e.getStakingPool(),r=function(e,t){return(100*(.392/(Number(t)/Number(e)))).toFixed(2)}(t.amount,a.pool.bondedTokens);l(r)}()},[n]),r.a.createElement(he,null,r.a.createElement(Vn,null,r.a.createElement(Ln,null,r.a.createElement("span",null),r.a.createElement(St,null)),r.a.createElement(Hn,null,"Validators"),s(n.chainId)?r.a.createElement(Wn,null,r.a.createElement(qn,null,"APR:")," ",c?r.a.createElement(Jn,null,c,"%"):r.a.createElement(x.a,null)):"",r.a.createElement($n,null,r.a.createElement(tt.a,{style:{marginBottom:"1.5rem"}},r.a.createElement(at.a,{span:16,style:{textAlign:"left"}},r.a.createElement(Yn,null,"Validator")),r.a.createElement(at.a,{span:8,style:{textAlign:"right"}},r.a.createElement(Yn,null,"Commission"))),o.map(t=>r.a.createElement(Gn,{key:t.name},r.a.createElement(tt.a,{onClick:()=>{return n=t.address,void e.push("/validators/"+n);var n}},r.a.createElement(at.a,{span:20,style:{textAlign:"left"}},r.a.createElement(Yn,null,t.name)),r.a.createElement(at.a,{span:4},r.a.createElement(Yn,null,qt(t.commission)))))))))}function Xn(){return r.a.createElement(N,null,r.a.createElement(X,{config:Ze},r.a.createElement(U,null,r.a.createElement(_e,null),r.a.createElement(Xe.a,{basename:"/staking"},r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/",component:cn}),r.a.createElement(y.b,{exact:!0,path:"/login",component:cn}),r.a.createElement(Z,{authPath:"/login"},r.a.createElement(y.b,{exact:!0,path:"/validators",component:_n}),r.a.createElement(y.b,{exact:!0,path:"/rewards",component:It}),r.a.createElement(y.b,{exact:!0,path:"/validators/:validatorAddress",component:Fn}),r.a.createElement(y.b,{exact:!0,path:"/validators/:validatorAddress/delegate",component:an}),r.a.createElement(y.b,{exact:!0,path:"/validators/:validatorAddress/undelegate",component:Bn}),r.a.createElement(y.b,{exact:!0,path:"/validators/:validatorAddress/rewards",component:jn}),r.a.createElement(y.b,{exact:!0,path:"/result",component:fn})))))))}n(1004);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Xn,null)),document.getElementById("root"))},309:function(e,t){},468:function(e,t,n){e.exports=n.p+"static/media/avatar.bf84890a.svg"},469:function(e,t,n){e.exports=n.p+"static/media/copy.67684d59.svg"},470:function(e,t,n){e.exports=n.p+"static/media/cross.176acc35.svg"},471:function(e,t,n){e.exports=n.p+"static/media/hamburger.e38e726c.svg"},473:function(e,t,n){e.exports=n.p+"static/media/backArrow.526bf197.svg"},478:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.4939303a.svg"},479:function(e,t,n){e.exports=n.p+"static/media/failIcon.fc124c19.svg"},480:function(e,t,n){e.exports=n.p+"static/media/successIcon.13d3bd8e.svg"},486:function(e,t,n){e.exports=n(1005)},513:function(e,t){},517:function(e,t){},519:function(e,t){},529:function(e,t){},531:function(e,t){},576:function(e,t){},581:function(e,t){},583:function(e,t){},607:function(e,t){}},[[486,1,2]]]);