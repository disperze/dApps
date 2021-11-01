(this["webpackJsonpcw20-wallet"]=this["webpackJsonpcw20-wallet"]||[]).push([[0],{1034:function(e,t,n){},1035:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n.n(o),i=(n(228),n(142)),s=n.n(i),l=(n(494),n(474)),u=n.n(l),m=(n(496),n(473)),f=n.n(m),d=(n(76),n(32)),h=n.n(d),p=(n(85),n(34)),v=n.n(p),g=(n(504),n(471)),b=n.n(g),E=n(7),y=n(41),w=n(1046),j=n(1047),x=n(1048),P=n(82),O=n(462),S=n(54),k=n(104),A=n(463),C=n(139),T=n(464),I=n(467),D=n(17);var B={contracts:[],addContract:function(){}},z=r.a.createContext(B),$=function(){return r.a.useContext(z)};function M(e){var t=e.children,n=Object(a.useState)(B.contracts),o=n[0],c=n[1];var i={contracts:o,addContract:function(e){c((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(z.Provider,{value:i},t)}var N=function(e,t){return{use:function(n){var a=P.GasPrice.fromString(""+t.gasPrice+t.feeToken),r=Object(P.calculateFee)(4e5,a);return{contractAddress:n,balance:function(t){try{return Promise.resolve(e.queryContractSmart(n,{balance:{address:t}})).then((function(e){return e.balance}))}catch(a){return Promise.reject(a)}},allowance:function(t,a){try{return Promise.resolve(e.queryContractSmart(n,{allowance:{owner:t,spender:a}}))}catch(r){return Promise.reject(r)}},allAllowances:function(t,a,r){try{return Promise.resolve(e.queryContractSmart(n,{all_allowances:{owner:t,start_after:a,limit:r}}))}catch(o){return Promise.reject(o)}},allAccounts:function(t,a){try{return Promise.resolve(e.queryContractSmart(n,{all_accounts:{start_after:t,limit:a}})).then((function(e){return e.accounts}))}catch(r){return Promise.reject(r)}},tokenInfo:function(){try{return Promise.resolve(e.queryContractSmart(n,{token_info:{}}))}catch(t){return Promise.reject(t)}},investment:function(){try{return Promise.resolve(e.queryContractSmart(n,{investment:{}}))}catch(t){return Promise.reject(t)}},claims:function(t){try{return Promise.resolve(e.queryContractSmart(n,{claims:{address:t}}))}catch(a){return Promise.reject(a)}},minter:function(){try{return Promise.resolve(e.queryContractSmart(n,{minter:{}}))}catch(t){return Promise.reject(t)}},mint:function(t,a,o){try{return Promise.resolve(e.execute(t,n,{mint:{recipient:a,amount:o}},r)).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},transfer:function(t,a,o){try{return Promise.resolve(e.execute(t,n,{transfer:{recipient:a,amount:o}},r)).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},burn:function(t,a){try{return Promise.resolve(e.execute(t,n,{burn:{amount:a}},r)).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},increaseAllowance:function(t,a,o){try{return Promise.resolve(e.execute(t,n,{increase_allowance:{spender:a,amount:o}},r)).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},decreaseAllowance:function(t,a,o){try{return Promise.resolve(e.execute(t,n,{decrease_allowance:{spender:a,amount:o}},r)).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},transferFrom:function(t,a,o,c){try{return Promise.resolve(e.execute(t,n,{transfer_from:{owner:a,recipient:o,amount:c}},r)).then((function(e){return e.transactionHash}))}catch(i){return Promise.reject(i)}},bond:function(t,a){try{return Promise.resolve(e.execute(t,n,{bond:{}},r,void 0,[a])).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},unbond:function(t,a){try{return Promise.resolve(e.execute(t,n,{unbond:{amount:a}},r)).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},claim:function(t){try{return Promise.resolve(e.execute(t,n,{claim:{}},r)).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}}}}}},U={setError:function(){},clearError:function(){}},q=Object(a.createContext)(U),F=function(){return Object(a.useContext)(q)};function V(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],c={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(q.Provider,{value:c},t)}var H=function(e){try{var t,n=window;if(!n.getOfflineSignerAuto)throw new Error("Keplr extension is not available");var a=n.getOfflineSignerAuto(e);return a.signAmino=null!==(t=a.signAmino)&&void 0!==t?t:a.sign,Promise.resolve(a)}catch(r){return Promise.reject(r)}},L=function(e,t){try{return Promise.resolve(T.a.create(12e4,12e4)).then((function(e){return new A.LedgerSigner(e,{hdPaths:[Object(P.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},W=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=S.Bip39.encode(S.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(P.makeCosmoshubPath)(0);return Promise.resolve(k.DirectSecp256k1HdWallet.fromMnemonic(n,{hdPaths:[a],prefix:t}))}catch(r){return Promise.reject(r)}};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var G=function(){function e(){}return e.prototype.then=function(t,n){var a=new e,r=this.s;if(r){var o=1&r?t:n;if(o){try{R(a,1,o(this.v))}catch(c){R(a,2,c)}return a}return this}return this.o=function(e){try{var r=e.v;1&e.s?R(a,1,t?t(r):r):n?R(a,1,n(r)):R(a,2,r)}catch(c){R(a,2,c)}},a},e}();function R(e,t,n){if(!e.s){if(n instanceof G){if(!n.s)return void(n.o=R.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(R.bind(null,e,t),R.bind(null,e,2));e.s=t,e.v=n;var a=e.o;a&&a(e)}}function J(e,t,n){var a=[];for(var r in e)a.push(r);return function(e,t,n){var a,r,o=-1;return function c(i){try{for(;++o<e.length&&(!n||!n());)if((i=t(o))&&i.then){if(!((s=i)instanceof G&&1&s.s))return void i.then(c,r||(r=R.bind(null,a=new G,2)));i=i.v}a?R(a,1,i):a=i}catch(l){R(a||(a=new G),2,l)}var s}(),a}(a,(function(e){return t(a[e])}),n)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Y(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function K(){throw new Error("Not yet initialized")}var Q={initialized:!1,init:K,clear:K,config:{},changeConfig:K,address:"",balance:[],refreshBalance:K,hitFaucet:K,getSigner:K,changeSigner:K,getClient:K,getStakingClient:K},X=Object(a.createContext)(Q),Z=function(){return Object(a.useContext)(X)};function ee(e){var t=function(e){try{if(!s.faucetUrl||!s.feeToken)return Promise.resolve();var t=Y((function(){var t=new I.FaucetClient(s.faucetUrl);return Promise.resolve(t.credit(e,s.feeToken)).then((function(){}))}),(function(e){c(e.message),console.error(e)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(n){return Promise.reject(n)}},n=function(e,t){try{if(!h)return Promise.resolve();t.length=0;var n=J(s.coinMap,(function(n){return Promise.resolve(h.getBalance(e,n)).then((function(e){e&&t.push(e)}))}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},r=e.config,o=e.children,c=F().setError,i=Object(a.useState)(r),s=i[0],l=i[1],u=Object(a.useState)(),m=u[0],f=u[1],d=Object(a.useState)(),h=d[0],p=d[1],v=_({},Q,{init:f}),g=Object(a.useState)(v),b=g[0],E=g[1];function y(){E(_({},v)),p(void 0),f(void 0),l(r)}function w(e){l((function(t){return _({},t,e)}))}return Object(a.useEffect)((function(){m&&function(){try{var e=Y((function(){return Promise.resolve(function(e,t){try{return Promise.resolve(O.SigningCosmWasmClient.connectWithSigner(e.rpcUrl,t,{prefix:e.addressPrefix}))}catch(n){return Promise.reject(n)}}(s,m)).then((function(e){p(e)}))}),(function(e){c(e.message)}));e&&e.then&&e.then((function(){}))}catch(t){Promise.reject(t)}}()}),[m,s]),Object(a.useEffect)((function(){if(m&&h){var e=[];!function(){try{Promise.resolve(m.getAccounts()).then((function(a){var r=a[0].address;return Promise.resolve(n(r,e)).then((function(){function a(){return Promise.resolve(n(r,e)).then((function(){return Promise.resolve(function(e){try{return Promise.resolve(C.Tendermint34Client.connect(e)).then((function(e){return P.QueryClient.withExtensions(e,P.setupStakingExtension,P.setupDistributionExtension)}))}catch(t){return Promise.reject(t)}}(s.rpcUrl)).then((function(a){E({initialized:!0,init:function(){},clear:y,config:s,changeConfig:w,address:r,balance:e,refreshBalance:n.bind(null,r,e),hitFaucet:t.bind(null,r),getSigner:function(){return m},changeSigner:f,getClient:function(){return h},getStakingClient:function(){return a}})}))}))}var o=function(){if(!e.find((function(e){return e.denom===s.feeToken})))return Promise.resolve(t(r)).then((function(){}))}();return o&&o.then?o.then(a):a()}))}))}catch(a){Promise.reject(a)}}()}}),[h]),Object(a.createElement)(X.Provider,{value:b},o)}function te(e){var t=e.authPath,n=e.children,a=e.location;return Z().initialized?r.a.createElement(y.d,{location:a},n):r.a.createElement(y.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function ne(e){if(!e)return"0";if(e.denom.startsWith("u")){var t=e.denom.slice(1).toUpperCase();return D.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function ae(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var re=n(468),oe=n.n(re);function ce(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function ie(e,t){return t||(t=e.slice(0)),e.raw=t,e}function se(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=ce(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function le(){var e=ie(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return le=function(){return e},e}var ue=Object(E.b)(se)(le());function me(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=ce(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function fe(){var e=ie(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return fe=function(){return e},e}var de=Object(E.b)(me)(fe());function he(e){var t=e.children,n=ce(e,["children"]);return Object(a.createElement)(ue,Object.assign({tag:"main"},n),t)}function pe(){var e=ie(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return pe=function(){return e},e}var ve=Object(E.b)(he)(pe());function ge(e){var t=e.icon,n=e.path,a=e.state,o=ce(e,["icon","path","state"]),c=Object(y.g)(),i=n?function(){return c.push(n,a)}:c.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:i},o))}function be(){var e=ie(["\n  cursor: pointer;\n"]);return be=function(){return e},e}var Ee=Object(E.b)(ge)(be());function ye(){var e=ie(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return ye=function(){return e},e}var we=Object(E.b)(b.a)(ye()),je=Object(a.createElement)(w.a,{style:{fontSize:"6.25rem"},spin:!0});function xe(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(ve,null,Object(a.createElement)(we,{indicator:je,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Pe(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function Oe(){var e=ie(["\n  width: 100%;\n  text-align: center;\n  --gap: var(--s3)\n"]);return Oe=function(){return e},e}function Se(){var e=ie(["\n  color: var(--color-red);\n"]);return Se=function(){return e},e}function ke(){var e=ie(["\n  display: block;\n  font-weight: lighter;\n"]);return ke=function(){return e},e}function Ae(){var e=ie(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ae=function(){return e},e}function Ce(){var e=ie(["\n  & > * {\n    --gap: 0;\n  }\n"]);return Ce=function(){return e},e}var Te=v.a.Text,Ie=Object(E.b)(de)(Ce()),De=Object(E.b)(de)(Ae()),Be=Object(E.b)(Te)(ke()),ze=Object(E.b)(Te)(Se()),$e=E.b.div(Oe()),Me=v.a.Title;function Ne(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Ue(e){var t=function(e){try{P(!0),g();var t=Pe((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){b.init(e)}))}),(function(e){console.error(e),p(Error(""+e).message),P(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,o=e.pathAfterLogin,c=e.appName,i=e.appLogo,s=ce(e,["config","pathAfterLogin","appName","appLogo"]),l=Object(y.g)(),u=l.location.state,m=F(),d=m.error,p=m.setError,g=m.clearError,b=Z(),E=Object(a.useState)(!1),w=E[0],P=E[1];return Object(a.useEffect)((function(){b.initialized&&(u?l.push(u.redirectPathname,u.redirectState):l.push(o))}),[b.initialized,u,l]),w?r.a.createElement(xe,{loadingText:"Initializing app..."}):r.a.createElement(ve,Object.assign({},s),r.a.createElement(Ie,null,r.a.createElement("img",{src:i,alt:"dApp logo"}),r.a.createElement(De,null,r.a.createElement(v.a,null,r.a.createElement(Me,{level:2},"Hello!"),r.a.createElement(Be,null,"Welcome to your ",c),r.a.createElement(Be,null,"Select one of the following options to start:")),d&&r.a.createElement(ze,null,d),r.a.createElement(h.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(W)).then((function(){}))}catch(e){return Promise.reject(e)}},style:{display:"none"}},"Browser (Demo)"),r.a.createElement(h.a,{type:"primary",disabled:Ne(),onClick:function(){try{return Promise.resolve(t(L)).then((function(){}))}catch(e){return Promise.reject(e)}}},r.a.createElement(j.a,null)," Ledger (Secure, Chrome)"),r.a.createElement(h.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=Pe((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits,coinGeckoId:e.coinMap[e.feeToken].coingecko},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits,coinGeckoId:e.coinMap[e.stakingToken].coingecko}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits,coinGeckoId:e.coinMap[e.stakingToken].coingecko},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118,features:["stargate","ibc-transfer","cosmwasm","no-legacy-stdTx"]}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(H)).then((function(){}))}))}))}),(function(e){console.error(e),p(Error(""+e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},r.a.createElement(x.a,null)," Keplr (Secure)")),r.a.createElement($e,null,r.a.createElement(f.a,{src:"https://avatars.githubusercontent.com/u/71741453?s=200&v=4"})," by Disperze")))}function qe(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,o=Object(y.g)(),c=o.location.state,i=c.success,s=c.message,l=c.error,m=c.customButtonText,f=c.customButtonActionPath,d=c.customButtonActionState;var p=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(o)}}:{result:"error",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(i),v=p.result,g=p.buttonText,b=p.buttonAction,E=m||g,w=f?function(){return o.push(f,d)}:b;return r.a.createElement(ve,null,r.a.createElement(u.a,{status:v,title:i?"":s,subTitle:i?s:l,extra:[r.a.createElement(h.a,{type:"primary",onClick:w},E)]}))}function Fe(){var e=ie(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return Fe=function(){return e},e}var Ve=Object(E.b)(de)(Fe()),He=v.a.Title,Le=v.a.Text;function We(e){var t=e.tag,n=e.hideTitle,a=e.hideBalance,o=Z(),c=o.address,i=o.balance;return r.a.createElement(Ve,{tag:t},!n&&r.a.createElement("header",null,r.a.createElement(He,{level:3},"Your Account"),!a&&r.a.createElement(s.a,null)),r.a.createElement(Le,null,c),!a&&r.a.createElement(Le,null,"(",function(e){return e&&0!==e.length?e.map(ne).join(", "):"\u2013"}(i),")"),r.a.createElement(h.a,{type:"primary",onClick:function(){return oe()(c)}},"Copy Account Address"))}function _e(){var e=ie(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return _e=function(){return e},e}var Ge=Object(E.a)(_e());function Re(){var e=ie(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n    --color-coral: #f0827dff;\n    --color-coral-light: #f16a64;\n\n    --color-primary: var(--color-coral);\n    --button-color: var(--color-coral-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Re=function(){return e},e}var Je=Object(E.a)(Re());function Ye(){var e=ie(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Ye=function(){return e},e}var Ke=Object(E.a)(Ye());function Qe(){var e=ie(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Qe=function(){return e},e}var Xe=Object(E.a)(Qe());function Ze(){var e=ie(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return Ze=function(){return e},e}var et=Object(E.a)(Ze());function tt(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,null),r.a.createElement(et,null),r.a.createElement(Je,null),r.a.createElement(Ke,null),r.a.createElement(Ge,null))}var nt=n(63);const at=function(e){var t=e.uninet;if(!t)throw new Error("No configuration found for network uninet");return t}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"wasm",rpcUrl:"http://localhost:26659",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025,codeId:2},musselnet:{chainId:"oysternet-1",chainName:"Oysternet",addressPrefix:"wasm",rpcUrl:"http://rpc.oysternet.cosmwasm.com",httpUrl:"http://lcd.oysternet.cosmwasm.com",faucetUrl:"https://faucet.musselnet.cosmwasm.com",feeToken:"usponge",stakingToken:"usponge",coinMap:{usponge:{denom:"SPONGE",fractionalDigits:6}},gasPrice:.025,codeId:3},uninet:{chainId:"uni",chainName:"Juno Testnet",addressPrefix:"juno",rpcUrl:"https://rpc.juno.giansalex.dev",httpUrl:"https://lcd.juno.giansalex.dev",faucetUrl:"",feeToken:"ujunox",stakingToken:"ujunox",coinMap:{ujunox:{denom:"JUNOX",fractionalDigits:6}},gasPrice:.025,codeId:1}});var rt=n(42),ot=n(1043),ct=n(478),it=n(1044),st=n(27),lt=n(70),ut=n.n(lt),mt=n(74);const ft=new RegExp("^"+at.addressPrefix),dt=mt.d().matches(ft,`"${at.addressPrefix}" prefix required`).length(39+at.addressPrefix.length,"Address invalid"),ht=dt.required("An address is required"),pt=mt.b().required("An amount is required").positive("Amount should be positive"),vt=mt.c().shape({contract:mt.a(e=>Number.isNaN(Number(e))?ht:mt.b().positive())}),gt=mt.c().shape({address:dt}),bt=mt.c().shape({address:ht}),Et=mt.c().shape({newAmount:pt}),yt=mt.c().shape({address:ht,amount:pt}),wt=Object(E.b)(de)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,jt=Object(E.b)(de)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`,xt=Object(E.b)(de)`
  & > * {
    --gap: var(--s2);
  }
`,Pt=E.b.div`
  display: flex;
  align-items: baseline;

  span {
    margin-left: var(--s1);
    font-family: var(--ff-iceland);
    font-size: var(--s1);
  }
`,{Title:Ot,Text:St}=v.a;var kt=function(){const[e,t]=Object(a.useState)(!1),n=Object(y.g)(),{getClient:o,address:c}=Z(),{contractAddress:i}=Object(y.h)(),[s,l]=Object(a.useState)(""),[u,m]=Object(a.useState)(0);return Object(a.useEffect)(()=>{N(o(),st.config).use(i).tokenInfo().then(e=>{l(e.symbol),m(e.decimals)})},[o,i]),e&&r.a.createElement(xe,{loadingText:"Adding allowance..."})||!e&&r.a.createElement(ve,null,r.a.createElement(wt,null,r.a.createElement(Ee,{icon:ut.a,path:"/tokens"}),r.a.createElement(Ot,null,"Add Allowance"),r.a.createElement(rt.c,{initialValues:{address:"",amount:""},onSubmit:e=>{t(!0);const{address:a,amount:r}=e,l=N(o(),st.config).use(i);l.allowance(c,a).then(({allowance:e})=>{const t=D.Decimal.fromUserInput(r,u),o=D.Decimal.fromAtomics(e,u);try{let e=Promise.reject("");e=t.isGreaterThan(o)?l.increaseAllowance(c,a,t.minus(o).atomics):l.decreaseAllowance(c,a,o.minus(t).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${r} ${s} allowance for ${a} successfully added `,customButtonText:"Tokens"}})})}catch(m){console.error(m),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:ae(m),customButtonActionPath:"/allowances/"+i}})}})},validationSchema:yt},e=>r.a.createElement(ot.a,null,r.a.createElement(jt,null,r.a.createElement(xt,null,r.a.createElement(ct.a,{name:"address"},r.a.createElement(it.a,{name:"address",placeholder:"Enter address"})),r.a.createElement(Pt,null,r.a.createElement(ct.a,{name:"amount"},r.a.createElement(it.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(St,null,s))),r.a.createElement(h.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))))};const At=Object(E.b)(de)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`;function Ct({submitChangeAmount:e}){return r.a.createElement(rt.c,{initialValues:{newAmount:""},onSubmit:e,validationSchema:Et},e=>r.a.createElement(ot.a,null,r.a.createElement(At,null,r.a.createElement(ct.a,{name:"newAmount"},r.a.createElement(it.a,{name:"newAmount",placeholder:"Enter new amount"})),r.a.createElement(h.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))}const Tt=Object(E.b)(de)`
  & > * {
    --gap: var(--s3);
  }

  h1 {
    margin: 0;
  }

  & > span {
    font-size: var(--s-1);
  }
`,It=E.b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  & > * + * {
    margin-left: var(--s-1);
  }

  span {
    font-size: var(--s-1);
  }

  span + span {
    font-size: var(--s1);
    font-weight: bolder;
  }
`,{Title:Dt,Text:Bt}=v.a;var zt=function(){const[e,t]=Object(a.useState)(!1),n=Object(y.g)(),{getClient:o,address:c,config:i}=Z(),{contractAddress:s,spenderAddress:l}=Object(y.h)(),[u,m]=Object(a.useState)(""),[f,d]=Object(a.useState)(0),[h,p]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=N(o(),i).use(s);e.tokenInfo().then(e=>{m(e.symbol),d(e.decimals)}),e.allowance(c,l).then(({allowance:e})=>p(e))},[o,s,c,l,i]);const v=D.Decimal.fromAtomics(h,f).toString();return e&&r.a.createElement(xe,{loadingText:"Changing allowance..."})||!e&&r.a.createElement(ve,null,r.a.createElement(Tt,null,r.a.createElement(Ee,{icon:ut.a,path:"/tokens"}),r.a.createElement(Dt,null,"Allowance"),r.a.createElement(Bt,null,l),r.a.createElement(It,null,r.a.createElement(Bt,null,"Current"),r.a.createElement(Bt,null,v),r.a.createElement(Bt,null,u)),r.a.createElement(Ct,{submitChangeAmount:e=>{t(!0);const{newAmount:a}=e,r=D.Decimal.fromUserInput(a,f),m=D.Decimal.fromAtomics(h,f),d=N(o(),i).use(s);try{let e=Promise.reject("");e=r.isGreaterThan(m)?d.increaseAllowance(c,l,r.minus(m).atomics):d.decreaseAllowance(c,l,m.minus(r).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${u} allowance successfully set to ${a} for ${l}`,customButtonText:"Tokens"}})})}catch(p){console.error(p),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:ae(p),customButtonActionPath:"/allowances/"+s}})}}})))},$t=n(479),Mt=n.n($t);const Nt=Object(E.b)(de)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,Ut=Object(E.b)(de)`
  & > * {
    --gap: var(--s2);
  }
`,qt=E.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,Ft=Object(E.b)(de)`
  & > * {
    --gap: var(--s0);
  }
`,Vt=E.b.div`
  max-width: var(--max-width);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s1);
  }

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: var(--s-1);
  }
`,Ht=E.b.div`
  display: flex;
  align-items: center;

  span + img {
    margin-left: var(--s-2);
  }

  span {
    font-size: var(--s1);
    font-weight: bolder;
  }

  img {
    cursor: pointer;
    height: var(--s-1);
  }
`,{Title:Lt,Text:Wt}=v.a;var _t=function(){const e=Object(y.g)(),{getClient:t,address:n,config:o}=Z(),{contractAddress:c}=Object(y.h)(),[i,l]=Object(a.useState)([]),[u,m]=Object(a.useState)(""),[f,d]=Object(a.useState)("0"),[p,v]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=N(t(),o).use(c);e.tokenInfo().then(({symbol:e,decimals:t})=>{m(e),v(t)}),e.balance(n).then(e=>d(e)),e.allAllowances(n).then(({allowances:e})=>l(e))},[t,c,n,o]);const g=D.Decimal.fromAtomics(f,p).toString(),[b,E]=g.split("."),w=null!==E&&void 0!==E?E:"";return r.a.createElement(ve,null,r.a.createElement(Nt,null,r.a.createElement(Ee,{icon:ut.a,path:"/tokens"}),r.a.createElement(Ut,null,r.a.createElement(Lt,null,"Allowances"),r.a.createElement(qt,null,r.a.createElement(Wt,null,`${b}${w?".":""}`),r.a.createElement(Wt,null,w," ",u),r.a.createElement(Wt,null," tokens"))),r.a.createElement(Ft,null,i.map((t,n)=>{const a=D.Decimal.fromAtomics(t.allowance,p).toString();return r.a.createElement(r.a.Fragment,null,n>0&&r.a.createElement(s.a,null),r.a.createElement(Vt,null,r.a.createElement(Wt,null,t.spender),r.a.createElement(Ht,null,r.a.createElement(Wt,null,a),r.a.createElement("img",{alt:"Edit allowance",src:Mt.a,onClick:()=>{return n=t.spender,void e.push(`/allowances/${c}/edit/${n}`);var n}}))))})),r.a.createElement(h.a,{type:"primary",onClick:function(){e.push(`/allowances/${c}/add`)}},"Add New")))},Gt=n(480),Rt=n.n(Gt);var Jt=function(){return r.a.createElement(Ue,{pathAfterLogin:"/tokens",appName:"CW20 Wallet",appLogo:Rt.a,config:at})},Yt=n(481),Kt=n.n(Yt),Qt=n(482),Xt=n.n(Qt);function Zt(e){e.push("/tokens")}var en=function(){return r.a.createElement(qe,{defaultButtonAction:Zt,successIcon:Xt.a,failIcon:Kt.a})},tn=(n(178),n(110)),nn=n.n(tn),an=n(159);const rn=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:o,...c},i)=>a.createElement(an.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(nn.a,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),o&&o(e)}},c))));rn.Search=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:o,...c},i)=>a.createElement(an.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(nn.a.Search,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),o&&o(e)}},c))));var on=rn.Search;var cn=function({initialAddress:e,setSearchedAddress:t}){return r.a.createElement(rt.c,{initialValues:{address:e},validationSchema:gt,onSubmit:e=>{t(e.address)}},e=>r.a.createElement(ot.a,null,r.a.createElement(ct.a,{name:"address"},r.a.createElement(on,{name:"address",placeholder:"Search",enterButton:!0,onSearch:n=>{e.isValid&&t(n)}}))))};const sn=Object(E.b)(de)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,ln=Object(E.b)(de)`
  & > * {
    --gap: var(--s2);
  }
`,un=E.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,mn=Object(E.b)(de)`
  & > * {
    --gap: var(--s0);
  }
`,fn=E.b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }

  span + span {
    font-family: var(--ff-montserrat);
    font-size: var(--s1);
    font-weight: bolder;
  }
`,{Title:dn,Text:hn}=v.a;var pn=function(){const e=Object(y.g)(),{getClient:t,address:n,config:o}=Z(),{contractAddress:c,allowingAddress:i}=Object(y.h)(),[l,u]=Object(a.useState)(i),[m,f]=Object(a.useState)(),[d,p]=Object(a.useState)(""),[v,g]=Object(a.useState)("0"),[b,E]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=N(t(),o).use(c),a=null!==l&&void 0!==l?l:n;e.tokenInfo().then(({symbol:e,decimals:t})=>{p(e),E(t)}),e.balance(a).then(e=>g(e))},[t,c,l,n,o]);const w=D.Decimal.fromAtomics(v,b).toString(),[j,x]=w.split("."),P=D.Decimal.fromAtomics(m,b).toString(),O=!!m&&"0"!==m,S=!m||"0"!==m,k="0"===v,A=!l;return r.a.createElement(ve,null,r.a.createElement(sn,null,r.a.createElement(Ee,{icon:ut.a,path:"/tokens"}),r.a.createElement(ln,null,r.a.createElement(dn,null,d),r.a.createElement(We,{hideTitle:!0,hideBalance:!0})),r.a.createElement(un,null,r.a.createElement(hn,null,`${j}${x?".":""}`),x&&r.a.createElement(hn,null,x),r.a.createElement(hn,null," tokens")),r.a.createElement(cn,{initialAddress:l,setSearchedAddress:function(e){if(!e)return u(void 0),void f(void 0);u(e),N(t(),o).use(c).allowance(e,n).then(e=>f(e.allowance))}}),O&&r.a.createElement(mn,null,r.a.createElement(s.a,null),r.a.createElement(fn,null,r.a.createElement(hn,null,"Your allowance"),r.a.createElement(hn,null,P))),S&&r.a.createElement(h.a,{type:"primary",onClick:function(){const t=l||"";e.push(`/token/send/${c}/${t}`)},disabled:k},"Send"),A&&r.a.createElement(h.a,{type:"primary",onClick:function(){e.push("/allowances/"+c)}},"My allowances")))};const vn=Object(E.b)(de)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,gn=Object(E.b)(de)`
  & > * {
    --gap: 0;
  }
`,bn=E.b.div`
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
`,En=E.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:yn}=v.a;function wn(e,t){return e.coin.denom<t.coin.denom?-1:e.coin.denom>t.coin.denom?1:0}var jn=function(){const e=Object(y.g)(),{getClient:t,address:n}=Z(),{contracts:o,addContract:c}=$(),[i,s]=Object(a.useState)([]),l=Object(a.useCallback)((async function(e){const{symbol:t,decimals:a}=await e.tokenInfo();return{coin:{denom:t,amount:await e.balance(n)},fractionalDigits:a,address:e.contractAddress}}),[n]);return Object(a.useEffect)(()=>{if(!at.codeId)return;const e=t();e.getContracts(at.codeId).then(t=>{t.forEach(t=>{const n=N(e,at).use(t);c(n)})})},[t,c]),Object(a.useEffect)(()=>{const e=o.map(l);Promise.all(e).then(e=>s(e.sort(wn)))},[o,l]),r.a.createElement(gn,null,i.map(t=>{const n=D.Decimal.fromAtomics(t.coin.amount,t.fractionalDigits).toString();return r.a.createElement(bn,{key:t.address,onClick:()=>{return n=t.address,void e.push("/token/detail/"+n);var n}},r.a.createElement(En,null,r.a.createElement(yn,null,t.coin.denom),r.a.createElement(yn,null,"0"!==n?n:"No tokens")))}))};const{Title:xn}=v.a;var Pn=function(){return r.a.createElement(ve,null,r.a.createElement(vn,null,r.a.createElement(xn,null,"Tokens"),r.a.createElement(jn,null),r.a.createElement(nt.b,{to:"/tokens/add"},r.a.createElement(h.a,{type:"primary"},"Add another")),r.a.createElement(We,{hideBalance:!0})))},On=n(1045);const Sn=Object(E.b)(de)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-transfer {
    width: 100%;

    & > *:first-child {
      width: 100%;
    }

    & > *:not(:first-child) {
      display: none;
    }

    .ant-transfer-list {
      height: auto;
      max-height: 300px;
    }

    .ant-transfer-list-content-item-text {
      text-align: left;
    }
  }
`,kn=Object(E.b)(de)`
  & > * {
    --gap: var(--s4);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,{Title:An}=v.a;var Cn=function(){const{getClient:e,config:t}=Z(),{setError:n}=F(),{addContract:o}=$(),c=Object(y.g)(),[i,s]=Object(a.useState)(),[l,u]=Object(a.useState)([]),[m,f]=Object(a.useState)([]);function d(e){f(e)}function p(e,t){return t.title.toLowerCase().indexOf(e.toLowerCase())>=0}const v=!i,g=!v;return r.a.createElement(ve,null,r.a.createElement(Ee,{icon:ut.a,path:"/tokens"}),r.a.createElement(Sn,null,r.a.createElement(An,null,"Add Other"),v&&r.a.createElement(rt.c,{initialValues:{contract:""},onSubmit:function({contract:a}){const r=!Number.isNaN(Number(a))&&Number(a);if(r){const t=e();t.getContracts(r).then(e=>{const n=[];e.forEach(e=>{n.push(t.getContract(e))}),Promise.all(n).then(e=>{u(e),s(r)})}).catch(n)}else{const n=String(a),r=N(e(),t).use(n);r.tokenInfo().then(()=>o(r)).then(()=>c.push({pathname:"/result",state:{success:!0,message:`"${n}" was successfully added :)`,customButtonText:"Tokens"}})).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:ae(e),customButtonActionPath:"/tokens/add"}}))}},validationSchema:vt},e=>r.a.createElement(ot.a,null,r.a.createElement(kn,null,r.a.createElement(ct.a,{name:"contract"},r.a.createElement(it.a,{name:"contract",placeholder:"Enter a contract address or codeID"})),r.a.createElement(h.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Continue")))),g&&r.a.createElement(rt.c,{initialValues:{},onSubmit:function(){m.forEach(n=>{const a=N(e(),t).use(n);a.tokenInfo().then(()=>o(a)).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:ae(e),customButtonActionPath:"/tokens/add"}}))}),c.push({pathname:"/result",state:{success:!0,message:`"Your CodeID: ${i}" were successfully added :)`,customButtonText:"Tokens"}})}},e=>r.a.createElement(ot.a,null,r.a.createElement(kn,null,r.a.createElement(ct.a,{name:"contracts"},r.a.createElement(On.a,{name:"contracts",showSearch:!0,filterOption:p,dataSource:l.map(e=>({key:e.address,title:e.label})),onSelectChange:d,listStyle:{listStyle:"none"},render:e=>e.title})),r.a.createElement(h.a,{type:"primary",onClick:e.submitForm,disabled:!m.length},"Continue"))))))};const Tn=Object(E.b)(de)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,In=E.b.div`
  display: flex;
  align-items: baseline;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-form-item {
    flex-grow: 1;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`,{Text:Dn}=v.a;function Bn({tokenName:e,maxAmount:t,sendTokensAction:n}){const a=mt.c().shape({amount:pt.max(t.toFloatApproximation(),"Amount cannot be greater than "+t.toString())}).concat(bt);return r.a.createElement(rt.c,{initialValues:{amount:"",address:""},onSubmit:n,validationSchema:a},t=>r.a.createElement(ot.a,null,r.a.createElement(Tn,null,r.a.createElement(In,null,r.a.createElement(Dn,null,"Send"),r.a.createElement(ct.a,{name:"amount"},r.a.createElement(it.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(Dn,null,e)),r.a.createElement(In,null,r.a.createElement(Dn,null,"to"),r.a.createElement(ct.a,{name:"address"},r.a.createElement(it.a,{name:"address",placeholder:"Enter address"}))),r.a.createElement(h.a,{type:"primary",onClick:t.submitForm,disabled:!(t.isValid&&t.dirty)},"Send"))))}const zn=Object(E.b)(de)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,$n=Object(E.b)(de)`
  & > * {
    --gap: var(--s2);
  }
`,Mn=E.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:Nn,Text:Un}=v.a;var qn=function(){const[e,t]=Object(a.useState)(!1),n=Object(y.g)(),{getClient:o,address:c,refreshBalance:i,config:s}=Z(),{contractAddress:l,allowingAddress:u}=Object(y.h)(),m=`/token/detail/${l}/${null!==u&&void 0!==u?u:""}`,[f,d]=Object(a.useState)(""),[h,p]=Object(a.useState)("0"),[v,g]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=N(o(),s).use(l),t=null!==u&&void 0!==u?u:c;e.tokenInfo().then(({symbol:e,decimals:t})=>{d(e),g(t)}),u?e.allowance(u,c).then(e=>p(e.allowance)):e.balance(t).then(e=>p(e))},[o,l,u,c,s]);const b=D.Decimal.fromAtomics(h,v).toString(),[E,w]=b.split("."),j=D.Decimal.fromAtomics(h,v);return e&&r.a.createElement(xe,{loadingText:`Sending ${f}...`})||!e&&r.a.createElement(ve,null,r.a.createElement(zn,null,r.a.createElement(Ee,{icon:ut.a,path:"/tokens"}),r.a.createElement($n,null,r.a.createElement(Nn,null,f),r.a.createElement(We,{hideTitle:!0,hideBalance:!0})),r.a.createElement(Mn,null,r.a.createElement(Un,null,`${E}${w?".":""}`),w&&r.a.createElement(Un,null,w),r.a.createElement(Un,null," tokens")),r.a.createElement(Bn,{tokenName:f,maxAmount:j,sendTokensAction:e=>{t(!0);const{address:a,amount:r}=e,d=D.Decimal.fromUserInput(r,v).atomics,h=N(o(),s).use(l);try{u?h.transferFrom(c,u,a,d).then(e=>{if(!e)return Promise.reject("Transfer from failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${f} successfully sent to ${a} with allowance from ${u}`,customButtonText:"Token detail",customButtonActionPath:m}})}):h.transfer(c,a,d).then(e=>{if(!e)return Promise.reject("Transfer failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${f} successfully sent to ${a}`,customButtonText:"Token detail",customButtonActionPath:m}})})}catch(p){console.error(p),n.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:ae(p),customButtonActionPath:m}})}}})))};var Fn=function(){return r.a.createElement(V,null,r.a.createElement(ee,{config:at},r.a.createElement(M,null,r.a.createElement(tt,null),r.a.createElement(nt.a,{basename:"/cw20-wallet"},r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/",component:Jt}),r.a.createElement(y.b,{exact:!0,path:"/login",component:Jt}),r.a.createElement(te,{authPath:"/login"},r.a.createElement(y.b,{exact:!0,path:"/tokens",component:Pn}),r.a.createElement(y.b,{exact:!0,path:"/tokens/add/:codeId?",component:Cn}),r.a.createElement(y.b,{exact:!0,path:"/token/detail/:contractAddress/:allowingAddress?",component:pn}),r.a.createElement(y.b,{exact:!0,path:"/token/send/:contractAddress/:allowingAddress?",component:qn}),r.a.createElement(y.b,{exact:!0,path:"/allowances/:contractAddress",component:_t}),r.a.createElement(y.b,{exact:!0,path:"/allowances/:contractAddress/add",component:kt}),r.a.createElement(y.b,{exact:!0,path:"/allowances/:contractAddress/edit/:spenderAddress",component:zt}),r.a.createElement(y.b,{exact:!0,path:"/result",component:en})))))))};n(1034);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fn,null)),document.getElementById("root"))},322:function(e,t){},479:function(e,t,n){e.exports=n.p+"static/media/edit.c0e94f7b.svg"},480:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.4939303a.svg"},481:function(e,t,n){e.exports=n.p+"static/media/failIcon.fc124c19.svg"},482:function(e,t,n){e.exports=n.p+"static/media/successIcon.13d3bd8e.svg"},488:function(e,t,n){e.exports=n(1035)},515:function(e,t){},517:function(e,t){},527:function(e,t){},529:function(e,t){},574:function(e,t){},575:function(e,t){},580:function(e,t){},582:function(e,t){},606:function(e,t){},70:function(e,t,n){e.exports=n.p+"static/media/backArrow.526bf197.svg"}},[[488,1,2]]]);