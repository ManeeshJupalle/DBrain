(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+MHw":function(e,t,n){"use strict";var c=n("ERkP"),o=n.n(c);t.a=function FillerElement(){return o.a.createElement("div",{"aria-hidden":!0,"aria-label":"exiting drift widget",role:"button",tabIndex:0})}},"3y+j":function(e,t,n){},"BA/U":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var c=function onKeyDownSubmit(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){(function isEnter(e){return"Enter"===e.key||13===e.keyCode}(n)||t&&function isSpace(e){return"Space"===e.key||32===e.keyCode}(n))&&(n.preventDefault(),e())}}},BY8A:function(e,t,n){"use strict";var c=n("s8DI"),o=n("QtlZ"),a=n("Hvhg"),i=n("ERkP"),r=n.n(i),s=n("rTkt");n("zoZM");t.a=function ThemeStyleSheets(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],l=t[1],d=Object(a.b)(Object(o.b)());return Object(i.useEffect)(function(){n||(Object(s.a)(d),Object(s.b)(d),l(!0))},[d,n]),r.a.createElement("div",{className:"drift-widget-preload-fonts","aria-hidden":"true"},r.a.createElement("span",null,"A"),r.a.createElement("strong",null,"B"))}},NJR1:function(e,t,n){},"ab+K":function(e,t,n){"use strict";var c=n("/UYI"),o=n("nQD+"),a=n("Za8o"),i=n("LwEI"),r=n("ERkP"),s=n.n(r);n("NJR1");t.a=function MessageCloseButton(e){var t=e.onClick,n=e.shouldFocus,l=void 0!==n&&n,d=Object(i.a)(),u=Object(r.useRef)(null);Object(a.a)(u,l);return s.a.createElement(o.a,{onClick:function handleOnClick(e){(null===u||void 0===u?void 0:u.current)&&(null===u||void 0===u||u.current.blur()),t(e)},ref:u,className:"drift-widget-message-close-button drift-widget-close-button--align-".concat(d),"aria-label":"Close Drift Widget messenger preview overlay"},s.a.createElement(c.a,{width:10,height:10}))}},dT9Q:function(e,t,n){"use strict";var c=n("s8DI"),o=n("BA/U"),a=n("ab+K"),i=n("7oh4"),r=n("nedb"),s=n("Erxq"),l=n("fJrp"),d=n("58kB"),u=n("hEj5"),b=n("IJKc"),f=n("LwEI"),O=n("SsZN"),j=n("vjCh"),g=n("ILQF"),v=n("qixE"),m=n("xwTo"),p=n("da4L"),h=n("+f1A"),E=n("X9/c"),C=n("g6eD"),w=n("2XY6"),k=n("i9gz"),I=n("RhEL"),S=n("LVcX"),A=n("ERkP"),_=n.n(A),R=n("uDfI"),y=n("vTYT"),D=n("y0on"),L=n("4c+F");n("pUpc");t.a=function MessagePreview(){var e=Object(u.a)(),t=Object(c.a)(e,2),n=t[0],N=t[1],M=Object(R.b)(),T=Object(A.useState)(null),J=Object(c.a)(T,2),P=J[0],U=J[1],x=Object(R.c)(function(e){return e.conversations}).activeConversation,B=Object(R.c)(function(e){return e.session.gdpr}),W=Object(b.a)(),F=Object(r.a)(),H=Object(R.c)(w.g),Z=Object(R.c)(h.g),K=Object(R.c)(m.d),V=Object(R.c)(h.j),Q=Object(R.c)(h.n),G=Object(R.c)(function(e){return e.view.chatOpen}),X=!G&&!H,z=Object(f.a)(),Y=Object(d.a)(P?P.authorId:null).recipient,q=Object(A.useMemo)(function(){return!(B.declinedConsent||!P||!P.body||G||X)},[B.declinedConsent,P,G,X]);Object(A.useEffect)(function setLatestMessageFromConvo(){if(Object(k.a)(W))U(null);else{var e=W.pop()||{};P&&Object(I.a)(e.id,P.id)||U(Object(p.t)(e,100))}},[W]),Object(A.useLayoutEffect)(function(){if(q&&n){var e=n?n.width:0,t=n?n.height:0,c=e+i.b+40,o=t+36;Object(E.c)(o,c)}},[n,q]);var $=Object(s.a)(P),ee=Object(p.b)(P),te=Object(l.a)(ee),ne=Object(D.a)(Y.name,ee);!G&&ee&&te!==ee&&Object(g.a)({topic:"sc::render-conversation-preview",message:{messagePreviewText:ee}});var ce=function dismiss(){P&&(Object(v.d)(x),U({}),Object(E.b)(),oe())},oe=function dismissPlaybookIfNotInteracted(){if(!Object(m.l)()){var e=Object(S.a)(null,["attributes","playbookId"],F);if(Object(O.o)(P),Object(j.k)(F.id,e),!K){var t=V===Q;Object(L.c)("Playbook Dismissed",{campaignId:F.id,playbookId:e,endUserId:Z,isEndUserFirstVisit:t,isInEngagementEAP:!1,clickedElement:"preview"})}}},ae=function openChat(){if(Object(E.b)(),$){var e=Object(S.a)(null,["attributes","playbookId"],F);if(Object(O.n)(P),Object(j.k)(F.id,e),!K){var t=V===Q;Object(L.c)("Playbook Clicked",{campaignId:F.id,playbookId:e,endUserId:Z,isEndUserFirstVisit:t,isInEngagementEAP:!1,clickedElement:"preview"})}}M(Object(C.h)({chatOpen:!0}))};return q&&H?_.a.createElement("div",{className:"drift-widget-message-preview-wrapper",key:"".concat(P.id,"-preview-box")},_.a.createElement("div",{className:"drift-widget-message-preview drift-widget-message-preview--align-".concat(z)},z===y.b.RIGHT&&_.a.createElement(a.a,{onClick:ce}),_.a.createElement("div",{onClick:ae,onKeyDown:Object(o.a)(ae),className:"drift-widget-message-preview-text drift-widget-message-preview-text--align-".concat(z),"aria-label":"".concat(ne?ne+" - ":"","Open chat"),"aria-live":"polite",tabIndex:0,role:"button"},_.a.createElement("span",{ref:N},ee)),z===y.b.LEFT&&_.a.createElement(a.a,{onClick:ce}))):null}},g3yi:function(e,t,n){"use strict";var c=n("nfbA"),o=n("efbE"),a=n("LeJ0"),i=function getDefaultAuthParams(e){return{embed_id:e,client_id:a.a.CLIENT_ID,consent_id:"has_consent"}};n.d(t,"b",function(){return r}),n.d(t,"a",function(){return s});var r=function executeWidgetBootstrapForMode(e,t){switch(e){case"LANDING_PAGE":return d(t);case"CHAT":default:return l(t)}},s=function executeBootstrapPing(e){return o.b.post("widget_bootstrap/ping/v2",{data:{ping_context:e}})},l=function widgetBootstrap(e){var t=i(e.embed_id);return o.b.post("widget_bootstrap",{data:Object(c.a)(Object(c.a)({},t),e)})},d=function landingPageBootstrap(e){var t=i(e.embed_id);return o.b.post("widget_bootstrap/landing_page",{data:Object(c.a)(Object(c.a)({},t),e)})}},pUpc:function(e,t,n){},xKh3:function(e,t,n){"use strict";n.d(t,"b",function(){return E}),n.d(t,"a",function(){return C});var c=n("mj2O"),o=n.n(c),a=n("7SM1"),i=n("uIJS"),r=n("wQh9"),s=n("LeJ0"),l=n("QtlZ"),d=n("xwTo"),u=n("mJgV"),b=n("qwiD"),f=n("NsjZ"),O=n("ADGC"),j=n("+D5C"),g=n("0lfv"),v=n("76KI"),m=n("l+Xe"),p=n("JelZ"),h=new(function(){function RefetchMessagesState(){Object(i.a)(this,RefetchMessagesState),this.isJoinAfterConnectionLost=void 0,this.reconnectAttempts=void 0,this.rejoinAttempts=void 0,this.closeCode=void 0,this.isJoinAfterConnectionLost=!1,this.reconnectAttempts=0,this.rejoinAttempts=0,this.closeCode=0}return Object(r.a)(RefetchMessagesState,[{key:"shouldRefetchMessagesOnChannelJoin",value:function shouldRefetchMessagesOnChannelJoin(){return this.isJoinAfterConnectionLost}},{key:"onSocketDisconnect",value:function onSocketDisconnect(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e>999&&(this.closeCode=e),this.isJoinAfterConnectionLost=!0}},{key:"resetStateOnJoin",value:function resetStateOnJoin(){this.isJoinAfterConnectionLost=!1,this.reconnectAttempts=0,this.rejoinAttempts=0,this.closeCode=0}},{key:"setAttempt",value:function setAttempt(e,t){"rejoin"===e?this.rejoinAttempts=t:"reconnect"===e&&(this.reconnectAttempts=t)}}]),RefetchMessagesState}()),E=function OpenSocket(e){var t=e.session_token,n=e.org_id,c=e.socketCluster,o=e.ip,a="is_mobile_".concat(Object(O.c)(!0)),i=s.a.WS_PROTOCOL,r="LOCAL"===s.a.WS_USER_ENV?"":"".concat(n,"-"),d=Object(u.a)(l.a.getState()),b=Object(p.a)(n),m=d.includes(b.toString()),E=Object(v.a)("has_socket_long_polling"),C=m||E,k=w(n,r,c),I="".concat(i,"://").concat(k,"/ws"),S=new f.b(I,{params:{session_token:t,remote_ip:o},timeout:1e4,reconnectAfterMs:function reconnectAfterMs(e){return h.setAttempt("reconnect",e),[1e3,2e3,5e3,1e4][e-1]||1e4},rejoinAfterMs:function rejoinAfterMs(e){return h.setAttempt("rejoin",e),[1e3,2e3,5e3][e-1]||1e4}});return S.connect(),S.onError(function(e,t,a){var i=!1,r=!1;C&&t===WebSocket&&h.reconnectAttempts>4?(S.replaceTransport(f.a),S.connect(),i=!0):C&&t===f.a&&(S.replaceTransport(WebSocket),S.connect(),r=!0),c===j.c.CHAT&&(E&&Object(g.n)({data:["ERROR - chat cluster disconnected on org: ".concat(n,", on IP: ").concat(o),"is_mobile_".concat(Object(O.c)(!0)),"Used Long Poll Transport: ".concat(i),"Used Round Robin back to WS Transport: ".concat(r),"establishedConnections: ".concat(a),"Attempts to Rejoin: ".concat(h.rejoinAttempts),"Attempts to Reconnect: ".concat(h.reconnectAttempts),"Close Code: ".concat(h.closeCode),"Is Join After Connection Lost: ".concat(h.isJoinAfterConnectionLost)],internal:!0}),h.onSocketDisconnect())}),S.onClose(function(e){var t=null===e||void 0===e?void 0:e.code;c===j.c.CHAT&&(E&&Object(g.n)({data:["CLOSE - chat cluster closed on org: ".concat(n,", on IP: ").concat(o),"Close Code: ".concat(t),a],internal:!0}),h.onSocketDisconnect(t),S.isConnected()&&"closed"!==S.connectionState()&&1e3!==t||(Object(g.n)({data:["WS Reconnect - attempting to reconnect to chat cluster ".concat(n,", IP: ").concat(o," after close code ").concat(t),"Socket Status: isConnected: ".concat(S.isConnected(),", connectionState: ").concat(S.connectionState()),a],internal:!0}),h.setAttempt("reconnect",1),S.connect()))}),S},C=function(){var e=Object(a.a)(o.a.mark(function _callee2(e){var t,n,c,i;return o.a.wrap(function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return t=e.channelName,n=e.socket,c=e.events,i=new Promise(function(){var e=Object(a.a)(o.a.mark(function _callee(e,a){var i;return o.a.wrap(function _callee$(o){for(;;)switch(o.prev=o.next){case 0:i=n.channel(t),c.forEach(function(e){var t=e.topic,n=e.event;i.on(t,n)}),i.join().receive("ok",function(){if(Object(d.l)()&&h.shouldRefetchMessagesOnChannelJoin()&&t.startsWith(j.b.USER)){var n=Object(v.a)("messages_refetch");Object(g.n)({data:["Joined user channel ".concat(t," after disconnect and user interacted with active conversation"),"Is_mobile_".concat(Object(O.c)(!0)),"Close Code: ".concat(h.closeCode),"Has Refetch Gate: ".concat(n),"Is Join After Connection Lost: ".concat(h.isJoinAfterConnectionLost)],internal:!0});var c=n||1e3===h.closeCode;l.a.dispatch(Object(b.x)({channel:j.b.USER,shouldRefetchMessagesForActiveConversation:c})),h.resetStateOnJoin()}e({channel:i})}).receive("error",function(e){Object(g.n)({data:["Error connecting to channel: ".concat(t)]}),a(e)}).receive("timeout",function(e){Object(g.n)({data:["Joining the ".concat(t," channel timed out. ")]})});case 3:case"end":return o.stop()}},_callee)}));return function(t,n){return e.apply(this,arguments)}}()),r.abrupt("return",i);case 3:case"end":return r.stop()}},_callee2)}));return function JoinChannel(t){return e.apply(this,arguments)}}(),w=function _resolveSocketBaseForType(e,t,n){switch(n){case j.c.CHAT:return"".concat(Object(m.d)(e));case j.c.USER:return s.a.WS_USER_BASE;case j.c.PRESENCE:return"".concat(t).concat(Object(m.c)(e));case j.c.VISITOR_PRESENCE:return s.a.WS_VISITOR_PRESENCE_BASE;default:return""}}},yXOZ:function(e,t,n){"use strict";var c=n("s8DI"),o=n("BA/U"),a=n("O94r"),i=n.n(a),r=n("+Kbs"),s=n("yEsl"),l=n("hSLT"),d=n("nedb"),u=n("mZ4K"),b=n("UvQv"),f=n("fL0f"),O=n("Za8o"),j=n("Erxq"),g=n("tLIi"),v=n("hhdZ"),m=n("58kB"),p=n("lE29"),h=n("cwuI"),E=n("IJKc"),C=n("LwEI"),w=n("Hnjx"),k=n("SsZN"),I=n("vjCh"),S=n("ILQF"),A=n("xwTo"),_=n("+f1A"),R=n("g6eD"),y=n("2XY6"),D=n("LVcX"),L=n("i9gz"),N=n("0B8E"),M=n("ERkP"),T=n.n(M),J=n("Tr4L"),P=n("uDfI"),U=n("ADGC"),x=n("MFhO"),B=n("4c+F"),W=n("1kux"),F=(n("3y+j"),"SENDER"),H="MEGAPHONE",Z="THEME_ICON";t.a=function WidgetIcon(){var e=Object(M.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],K=Object(M.useRef)(null);Object(O.a)(K,n);var V=Object(b.a)(),Q=V.isDisabled,G=V.setIsDisabled,X=Object(P.b)(),z=Object(J.a)().t,Y=Object(P.c)(function(e){return e.view.chatOpen}),q=Object(P.c)(function(e){return e.session.gdpr}),$=Object(P.c)(y.g),ee=!$&&!Y,te=Object(P.c)(function(e){return!!e.conversations.activeConversation}),ne=Object(C.a)(),ce=Object(d.a)(),oe=Object(P.c)(_.g),ae=Object(P.c)(A.d),ie=Object(P.c)(_.j),re=Object(P.c)(_.n),se=Object(P.c)(function(e){return Object(D.a)(!1,["embed","configuration","theme"],e)}).unreadBadgeEnabled,le=Object(E.a)(),de=Object(P.c)(function(e){return e.view.isChatTakeover}),ue=Object(P.c)(function(e){return e.conversations}).activeConversation,be=Object(v.a)(ue),fe=Object(g.a)(),Oe=Object(L.a)(fe)?be:fe,je=Object(j.a)(Oe),ge=Object(p.a)(),ve=ge.backgroundStyles,me=ge.widgetSecondaryColor,pe=Object(h.a)(),he=pe.Icon,Ee=pe.customIcon,Ce=pe.hasCustomIcon,we=Object(u.a)(),ke=Object(l.a)().type,Ie=we||Object(D.a)(void 0,["authorId"],Oe),Se=Object(m.a)(Ie).recipient,Ae=le?Object(N.a)(le).length:0,_e=ke===x.a.SLIDER,Re=Ie&&(_e||Ae>0),ye=Object(f.a)(["titleNotificationEnabled"]),De=Object(c.a)(ye,1)[0],Le=void 0!==De&&De,Ne=Object(M.useMemo)(function(){return Re?F:_e&&!Ie?H:Z},[Ie,_e,Re]),Me=Object(w.a)();Object(M.useEffect)(function(){Le&&Object(S.a)({topic:"page-notification-update",message:{totalUnreadMessages:Ae,pageTitleNotificationMsg:z("titleNotifier.newMessageNotification")}})},[Ae,Le,z,ee]),Object(M.useEffect)(function(){se&&Object(S.a)({topic:"sc::send-total-unread-messages-count",message:{totalUnreadMessages:Ae}})},[Ae,se]),Object(M.useEffect)(function(){Q&&!_e&&G(!1)},[Q,_e,G]),Object(M.useEffect)(function(){ee||Object(S.a)({topic:"toggle-widget-controller",message:{isChatTakeover:de,chatOpen:Y,hasActiveConversation:te&&q.hasConsent}})},[Y,q,te,de,ee]),Object(M.useEffect)(function(){le&&le.length>0&&!ee&&Object(W.a)()},[ee,le]),Object(M.useEffect)(function(){Object(S.c)({topic:"CONDUCTOR:focusWidgetIcon",handler:function handler(){return a(!0)}})},[]);var Te=function onToggleChat(){if(!Y&&Ae>0&&je){var e=Object(D.a)(null,["attributes","playbookId"],ce);if(Object(I.k)(ce.id,e),Object(k.n)(Oe),Object(k.p)(Oe),!ae){var t=ie===re;Object(B.c)("Playbook Clicked",{campaignId:ce.id,playbookId:e,endUserId:oe,isEndUserFirstVisit:t,isInEngagementEAP:!1,clickedElement:"icon"})}}!function toggle(e){if(_e)Object(S.a)({topic:"slider:showDetails",message:{}}),G(!0);else{var t=!q.hasConsent&&!q.declinedConsent;X(Object(R.h)({chatOpen:e,gdprDismissed:t}))}e&&Object(S.a)({topic:"reset-controller-size"})}(!Y)},Je=Object(M.useMemo)(function(){return!Ce||Re||Y?null:Ee},[Ee,Re,Y,Ce]),Pe=Object(M.useMemo)(function(){if(Y)return Se.name!==z("agent")?"Close chat with ".concat(Se.name," in the Drift Widget messenger"):"Close Drift Widget messenger";var e=Se.name!==z("agent")?"Open chat with ".concat(Se.name," in the Drift Widget messenger"):"Open Drift Widget messenger";return se&&Ae>0?"".concat(e," - Unread messages: ").concat(Ae):e},[Y,Se.name,z,se,Ae]);return $?T.a.createElement(T.a.Fragment,null,T.a.createElement("style",null,"\n          :root {\n            --bgColor:".concat(ve.background,";\n            --bgColorHover:").concat(ve.backgroundOnHover,";\n          }\n        ")),T.a.createElement("div",{className:i()("drift-widget-controller drift-widget-controller--align-".concat(ne),[Me],{"drift-widget-controller--closed":!Object(U.c)()&&Y,"drift-widget-controller--custom-icon":Ce,"drift-widget-controller--avatar":Re,"drift-widget-controller--hide":de,"drift-widget-controller--disabled":Q}),onClick:Te,"aria-label":Pe,"aria-disabled":Q,"aria-hidden":Q,role:"button",tabIndex:Q?-1:0,onKeyDown:Object(o.a)(Te),ref:K},T.a.createElement("div",{className:i()("drift-widget-controller-icon",[Me],{"drift-widget-controller-icon--default":Ce&&!Re&&!Y}),style:Je},T.a.createElement("div",{className:"drift-controller-icon--active"},Ne===H&&T.a.createElement(r.n,{fill:me}),Ne===F&&T.a.createElement(s.a,{className:i()([Me],"drift-controller-icon--avatar"),avatarClassName:i()([Me],"drift-controller-icon--avatar-avatar"),id:Ie}),Ne===Z&&!Ce&&he),T.a.createElement("div",{className:"drift-controller-icon--close",style:{backgroundColor:me}})),se&&Ae>0&&T.a.createElement("div",{className:"drift-controller-icon-unread"},Math.min(Ae,99)))):null}},zoZM:function(e,t,n){}}]);