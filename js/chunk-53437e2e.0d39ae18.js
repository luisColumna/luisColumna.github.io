(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53437e2e"],{"01e3":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("2b0e"),r=n("b42e"),c=n("c637"),i=n("a723"),o=n("9b76"),s=n("365c"),u=n("cf75");function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(u["d"])({label:Object(u["c"])(i["r"]),role:Object(u["c"])(i["r"],"status"),small:Object(u["c"])(i["f"],!1),tag:Object(u["c"])(i["r"],"span"),type:Object(u["c"])(i["r"],"border"),variant:Object(u["c"])(i["r"])},c["hb"]),d=a["default"].extend({name:c["hb"],functional:!0,props:p,render:function(t,e){var n,a=e.props,c=e.data,i=e.slots,u=e.scopedSlots,p=i(),d=u||{},h=Object(s["b"])(o["t"],{},d,p)||a.label;return h&&(h=t("span",{staticClass:"sr-only"},h)),t(a.tag,Object(r["a"])(c,{attrs:{role:h?a.role||"status":null,"aria-hidden":h?null:"true"},class:(n={},l(n,"spinner-".concat(a.type),a.type),l(n,"spinner-".concat(a.type,"-sm"),a.small),l(n,"text-".concat(a.variant),a.variant),n)}),[h||t()])}})},"0615":function(t,e,n){"use strict";var a=n("c7eb"),r=n("5530"),c=n("15fd"),i=n("1da1"),o=(n("a4d3"),n("e01a"),n("d81d"),n("b0c0"),n("04b0")),s=n("223c"),u=n("f0e2"),l=n("ed09"),p=["id","units"],d=["id","units"],h=function(){var t=Object(o["useToast"])(),e=Object(l["ref"])(!1),n=Object(l["ref"])(!1),h={id:"",name:"",description:"",units:[],status:!0},f=Object(l["reactive"])({name:{isInvalid:!1,message:""}}),b=Object(l["ref"])(!1),v=Object(l["reactive"])(h),m=function(){v.id="",v.name="",v.description="",v.status=!0,v.units=[],f.name.isInvalid=!1,f.name.message=""},g=function(){var n=Object(i["a"])(Object(a["a"])().mark((function n(){var i,o,l;return Object(a["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.value=!0,n.prev=1,v.id,i=v.units,o=Object(c["a"])(v,p),l=i.map((function(t){return t.id})),n.next=6,u["a"].create(Object(r["a"])(Object(r["a"])({},o),{},{units:l}));case 6:return e.value=!1,b.value=!1,setTimeout((function(){m()}),2e3),t({component:s["a"],props:{title:"Registrado correctamente!!",icon:"CheckCircleIcon",variant:"success"}}),n.abrupt("return",!0);case 13:throw n.prev=13,n.t0=n["catch"](1),e.value=!1,400===n.t0.response.data.statusCode&&(f.name.isInvalid=!0,f.name.message=n.t0.response.data.message),t({component:s["a"],props:{title:"Error al Actualizar",icon:"AlertTriangleIcon",variant:"danger"}}),n.t0;case 19:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(){return n.apply(this,arguments)}}(),O=function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(r){var c,i,o,l,p,d;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.value=!0,e.prev=1,e.next=4,u["a"].getById(r);case 4:c=e.sent,i=c.data,o=i.name,l=i.description,p=i.status,d=i.units,v.id=c.data.id,v.name=o,v.description=l,v.status=p,v.units=d,n.value=!1,b.value=!0,e.next=20;break;case 15:throw e.prev=15,e.t0=e["catch"](1),n.value=!1,t({component:s["a"],props:{title:"Error al Consultar registro",icon:"AlertTriangleIcon",variant:"danger"}}),e.t0;case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var n=Object(i["a"])(Object(a["a"])().mark((function n(){var i,o,l;return Object(a["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.value=!0,n.prev=1,v.id,i=v.units,o=Object(c["a"])(v,d),l=i.map((function(t){return t.id})),n.next=6,u["a"].update(v.id,Object(r["a"])({units:l},o));case 6:e.value=!1,b.value=!1,setTimeout((function(){m()}),2e3),t({component:s["a"],props:{title:"Actualizado Correctamente!",icon:"CheckCircleIcon",variant:"success"}}),n.next=18;break;case 12:throw n.prev=12,n.t0=n["catch"](1),e.value=!1,400===n.t0.response.data.statusCode&&(f.name.isInvalid=!0,f.name.message=n.t0.response.data.message),t({component:s["a"],props:{title:"Error al Actualizar",icon:"AlertTriangleIcon",variant:"danger"}}),n.t0;case 18:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(){return n.apply(this,arguments)}}(),y=function(){var t=Object(i["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===v.id){t.next=5;break}return t.next=3,j();case 3:t.next=7;break;case 5:return t.next=7,g();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{isSaving:e,isSidebarActive:b,states:f,team:v,save:y,resetData:m,edit:O,update:j}};e["a"]=h},2525:function(t,e,n){"use strict";n("99af"),n("d3b7"),n("ac1f"),n("841c");var a=n("3f4a"),r="v1/driver",c="v1/files/driver";e["a"]={fetchList:function(t){var e=t.take,n=t.page,c=t.order,i=t.search;return a["a"].get("".concat(r),{params:{take:e,page:n,order:c,search:i}})},create:function(t){return a["a"].post("".concat(r),t)},getById:function(t){return a["a"].get("".concat(r,"/").concat(t))},update:function(t,e){return a["a"].patch("".concat(r,"/").concat(t),e)},uploadPhoto:function(t){var e={headers:{"Content-Type":"multipart/form-data"}};return a["a"].post("".concat(c),t,e)},fetchAllActivesWhithouthUnit:function(){return a["a"].get("".concat(r,"/all/activesWhithouthUnit"))},fetchAllActivesWhithouthUnitExceptDriver:function(t){return a["a"].get("".concat(r,"/all/activesWhithouthUnitExcept/").concat(t))}}},2532:function(t,e,n){"use strict";var a=n("23e7"),r=n("5a34"),c=n("1d80"),i=n("ab13");a({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(c(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"2a3d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-overlay",{attrs:{show:t.isLoading,variant:t.variant,opacity:t.opacity,"spinner-variant":"primary","spinner-type":"grow","spinner-small":"",rounded:"sm"}},[n("b-card",{staticClass:"mb-0",attrs:{title:t.team.name,"aria-hidden":"true"}},[n("b-card-text",[t._v(t._s(t.team.description))]),n("b-card-sub-title",[t._v("Unidades")]),n("b-row",{staticClass:"mt-2"},t._l(t.unitsList,(function(e){return n("b-col",{key:e.id,attrs:{cols:"6",sm:"4",md:"3",lg:"2",xl:"2"}},[n("b-form-checkbox",{staticClass:"custom-control-primary",attrs:{value:e.id},on:{change:function(){return t.checked(e.id)}},model:{value:t.unitsSelected,callback:function(e){t.unitsSelected=e},expression:"unitsSelected"}},[t._v(" "+t._s(e.plate)+" ")])],1)})),1)],1)],1)},r=[],c=(n("caad"),n("2532"),n("ed09")),i=n("205f"),o=n("d6e4"),s=n("ba06"),u=n("9b03"),l=n("a15b7"),p=n("b28b"),d=n("c3e6"),h=n("43dd"),f=n("0615"),b={components:{BCard:i["a"],BCardText:o["a"],BCardSubTitle:s["a"],BOverlay:u["a"],BRow:l["a"],BCol:p["a"],BFormCheckbox:d["a"]},setup:function(t,e){var n=e.root.$route.params.id,a=Object(f["a"])(e),r=a.isLoading,i=a.getTeamWithUnits,o=a.team,s=a.unitsSelected,u=a.addUnit,l=a.removeUnit,p=Object(h["a"])(),d=p.unitsList,b=p.getUnitsReadyToUse,v=Object(c["ref"])("light"),m=Object(c["ref"])(.8),g=function(t){var e=s.value.includes(t);e?u(t):l(t)};return b(),i(n),{isLoading:r,team:o,unitsList:d,unitsSelected:s,checked:g,variant:v,opacity:m}}},v=b,m=n("2877"),g=Object(m["a"])(v,a,r,!1,null,null,null);e["default"]=g.exports},"43dd":function(t,e,n){"use strict";var a=n("c7eb"),r=n("1da1"),c=n("04b0"),i=n("223c"),o=n("ed09"),s=n("6b71"),u=n("5c04"),l=n("2525"),p=n("761e"),d=n("f0e2"),h=n("fba6"),f=n("d30a"),b=function(){var t=Object(c["useToast"])(),e=Object(o["ref"])([]),n=Object(o["ref"])([]),b=Object(o["ref"])([]),v=Object(o["ref"])([]),m=Object(o["ref"])([]),g=Object(o["ref"])([]),O=Object(o["ref"])([]),j=function(){var n=Object(r["a"])(Object(a["a"])().mark((function n(){var r;return Object(a["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s["a"].fetchAll();case 3:r=n.sent,e.value=r.data,n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),t({component:i["a"],props:{title:"Error al cargar Catálogo de marcas",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),y=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].fetchAllActivesWhithouthUnit();case 3:r=e.sent,n.value=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Dispositivos",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(r){var c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].fetchAllActivesWhithouthUnitExceptDevice(r);case 3:c=e.sent,n.value=c.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Dispositivos",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].fetchAllActivesWhithouthUnit();case 3:n=e.sent,b.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar   Conductores",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(n){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].fetchAllActivesWhithouthUnitExceptDriver(n);case 3:r=e.sent,b.value=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar   Conductores",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p["a"].fetchAll();case 3:n=e.sent,v.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar  Modelos",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].fetchAllActives();case 3:n=e.sent,g.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Equipos",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].fetchAllActivesWithUnits();case 3:n=e.sent,g.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Equipos",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h["a"].fetchAll();case 3:n=e.sent,m.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Catálogo de tipos de dispositivos",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f["a"].fetchAllActivesWithDriverDevices();case 3:n=e.sent,O.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Catálogo de Unidades",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f["a"].fetchAllActivesReadyToUse();case 3:n=e.sent,O.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Catálogo de Unidades",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f["a"].findAllWithoutTeam();case 3:n=e.sent,O.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Catálogo de Unidades",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(n){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f["a"].findAllWithoutTeamExcept(n);case 3:r=e.sent,O.value=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Catálogo de Unidades",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f["a"].fetchAll();case 3:n=e.sent,O.value=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t({component:i["a"],props:{title:"Error al cargar Catálogo de Unidades",icon:"AlertTriangleIcon",variant:"danger"}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return{devicesList:n,getDevices:y,getDevicesExcept:k,brandsList:e,getBrands:j,driversList:b,getDrivers:x,getDriversExcept:w,modelsList:v,getModels:C,typeDevicesList:m,getTypeDevices:I,teamsList:g,getTeamsWithUnits:T,getTeams:A,unitsList:O,getUnits:G,getUnitsWithDriverDevices:E,getUnitsReadyToUse:U,getUnitsWithoutTeam:D,getUnitsWithoutTeamExcept:L}};e["a"]=b},"44e7":function(t,e,n){var a=n("861d"),r=n("c6b6"),c=n("b622"),i=c("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5c04":function(t,e,n){"use strict";n("99af"),n("d3b7"),n("ac1f"),n("841c");var a=n("3f4a"),r="v1/device";e["a"]={fetchList:function(t){var e=t.take,n=t.page,c=t.order,i=t.search;return a["a"].get("".concat(r),{params:{take:e,page:n,order:c,search:i}})},create:function(t){return a["a"].post("".concat(r),t)},getById:function(t){return a["a"].get("".concat(r,"/").concat(t))},update:function(t,e){return a["a"].patch("".concat(r,"/").concat(t),e)},fetchAllActivesWhithouthUnit:function(){return a["a"].get("".concat(r,"/all/activesWhithouthUnit"))},fetchAllActivesWhithouthUnitExceptDevice:function(t){return a["a"].get("".concat(r,"/all/activesWhithouthUnitExcept/").concat(t))}}},"6b71":function(t,e,n){"use strict";n("99af"),n("d3b7"),n("ac1f"),n("841c");var a=n("3f4a"),r="v1/brand";e["a"]={fetchList:function(t){var e=t.take,n=t.page,c=t.order,i=t.search;return a["a"].get("".concat(r),{params:{take:e,page:n,order:c,search:i}})},create:function(t){return a["a"].post("".concat(r),t)},getById:function(t){return a["a"].get("".concat(r,"/").concat(t))},update:function(t,e){return a["a"].patch("".concat(r,"/").concat(t),e)},fetchAll:function(){return a["a"].get("".concat(r,"/list/all"))}}},"761e":function(t,e,n){"use strict";n("99af"),n("d3b7"),n("ac1f"),n("841c");var a=n("3f4a"),r="v1/model";e["a"]={fetchList:function(t){var e=t.take,n=t.page,c=t.order,i=t.search;return a["a"].get("".concat(r),{params:{take:e,page:n,order:c,search:i}})},create:function(t){return a["a"].post("".concat(r),t)},getById:function(t){return a["a"].get("".concat(r,"/").concat(t))},update:function(t,e){return a["a"].patch("".concat(r,"/").concat(t),e)},fetchAll:function(){return a["a"].get("".concat(r,"/list/all"))}}},"9b03":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var a=n("2b0e"),r=n("c637"),c=n("0056"),i=n("a723"),o=n("9b76"),s=n("3a58"),u=n("8c18"),l=n("cf75"),p=n("01e3"),d=n("ce2a");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={top:0,left:0,bottom:0,right:0},m=Object(l["d"])({bgColor:Object(l["c"])(i["r"]),blur:Object(l["c"])(i["r"],"2px"),fixed:Object(l["c"])(i["f"],!1),noCenter:Object(l["c"])(i["f"],!1),noFade:Object(l["c"])(i["f"],!1),noWrap:Object(l["c"])(i["f"],!1),opacity:Object(l["c"])(i["m"],.85,(function(t){var e=Object(s["a"])(t,0);return e>=0&&e<=1})),overlayTag:Object(l["c"])(i["r"],"div"),rounded:Object(l["c"])(i["i"],!1),show:Object(l["c"])(i["f"],!1),spinnerSmall:Object(l["c"])(i["f"],!1),spinnerType:Object(l["c"])(i["r"],"border"),spinnerVariant:Object(l["c"])(i["r"]),variant:Object(l["c"])(i["r"],"light"),wrapTag:Object(l["c"])(i["r"],"div"),zIndex:Object(l["c"])(i["m"],10)},r["cb"]),g=a["default"].extend({name:r["cb"],mixins:[u["a"]],props:m,computed:{computedRounded:function(){var t=this.rounded;return!0===t||""===t?"rounded":t?"rounded-".concat(t):""},computedVariant:function(){var t=this.variant;return t&&!this.bgColor?"bg-".concat(t):""},slotScope:function(){return{spinnerType:this.spinnerType||null,spinnerVariant:this.spinnerVariant||null,spinnerSmall:this.spinnerSmall}}},methods:{defaultOverlayFn:function(t){var e=t.spinnerType,n=t.spinnerVariant,a=t.spinnerSmall;return this.$createElement(p["a"],{props:{type:e,variant:n,small:a}})}},render:function(t){var e=this,n=this.show,a=this.fixed,r=this.noFade,i=this.noWrap,s=this.slotScope,u=t();if(n){var l=t("div",{staticClass:"position-absolute",class:[this.computedVariant,this.computedRounded],style:f(f({},v),{},{opacity:this.opacity,backgroundColor:this.bgColor||null,backdropFilter:this.blur?"blur(".concat(this.blur,")"):null})}),p=t("div",{staticClass:"position-absolute",style:this.noCenter?f({},v):{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[this.normalizeSlot(o["D"],s)||this.defaultOverlayFn(s)]);u=t(this.overlayTag,{staticClass:"b-overlay",class:{"position-absolute":!i||i&&!a,"position-fixed":i&&a},style:f(f({},v),{},{zIndex:this.zIndex||10}),on:{click:function(t){return e.$emit(c["d"],t)}},key:"overlay"},[l,p])}return u=t(d["a"],{props:{noFade:r,appear:!0},on:{"after-enter":function(){return e.$emit(c["K"])},"after-leave":function(){return e.$emit(c["r"])}}},[u]),i?u:t(this.wrapTag,{staticClass:"b-overlay-wrap position-relative",attrs:{"aria-busy":n?"true":null}},i?[u]:[this.normalizeSlot(),u])}})},ab13:function(t,e,n){var a=n("b622"),r=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(a){}}return!1}},c3e6:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a,r=n("2b0e"),c=n("c637"),i=n("0056"),o=n("a723"),s=n("7b1e"),u=n("3c21"),l=function(t,e){for(var n=0;n<t.length;n++)if(Object(u["a"])(t[n],e))return n;return-1},p=n("d82f"),d=n("cf75"),h=n("d3cb");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m="indeterminate",g=i["S"]+m,O=Object(d["d"])(Object(p["m"])(b(b({},h["c"]),{},(a={},v(a,m,Object(d["c"])(o["f"],!1)),v(a,"switch",Object(d["c"])(o["f"],!1)),v(a,"uncheckedValue",Object(d["c"])(o["a"],!1)),v(a,"value",Object(d["c"])(o["a"],!0)),a))),c["x"]),j=r["default"].extend({name:c["x"],mixins:[h["b"]],inject:{bvGroup:{from:"bvCheckGroup",default:null}},props:O,computed:{isChecked:function(){var t=this.value,e=this.computedLocalChecked;return Object(s["a"])(e)?l(e,t)>-1:Object(u["a"])(e,t)},isRadio:function(){return!1}},watch:v({},m,(function(t,e){Object(u["a"])(t,e)||this.setIndeterminate(t)})),mounted:function(){this.setIndeterminate(this[m])},methods:{computedLocalCheckedWatcher:function(t,e){if(!Object(u["a"])(t,e)){this.$emit(h["a"],t);var n=this.$refs.input;n&&this.$emit(g,n.indeterminate)}},handleChange:function(t){var e=this,n=t.target,a=n.checked,r=n.indeterminate,c=this.value,o=this.uncheckedValue,u=this.computedLocalChecked;if(Object(s["a"])(u)){var p=l(u,c);a&&p<0?u=u.concat(c):!a&&p>-1&&(u=u.slice(0,p).concat(u.slice(p+1)))}else u=a?c:o;this.computedLocalChecked=u,this.$nextTick((function(){e.$emit(i["c"],u),e.isGroup&&e.bvGroup.$emit(i["c"],u),e.$emit(g,r)}))},setIndeterminate:function(t){Object(s["a"])(this.computedLocalChecked)&&(t=!1);var e=this.$refs.input;e&&(e.indeterminate=t,this.$emit(g,t))}}})},caad:function(t,e,n){"use strict";var a=n("23e7"),r=n("4d64").includes,c=n("44d2"),i=n("ae40"),o=i("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!o},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")},d30a:function(t,e,n){"use strict";n("99af"),n("d3b7"),n("ac1f"),n("841c");var a=n("3f4a"),r="v1/unit";e["a"]={fetchList:function(t){var e=t.take,n=t.page,c=t.order,i=t.search;return a["a"].get("".concat(r),{params:{take:e,page:n,order:c,search:i}})},create:function(t){return a["a"].post("".concat(r),t)},getById:function(t){return a["a"].get("".concat(r,"/").concat(t))},update:function(t,e){return a["a"].patch("".concat(r,"/").concat(t),e)},getWithLastTrackingById:function(t,e){return a["a"].get("".concat(r,"/withLastTracking/").concat(t,"/").concat(e))},fetchAllActivesWithDriverDevices:function(){return a["a"].get("".concat(r,"/all/activesWhithDriverDevices"))},fetchAll:function(){return a["a"].get("".concat(r,"/list/all"))},fetchAllActivesReadyToUse:function(){return a["a"].get("".concat(r,"/all/activesReadyToUse"))},findAllWithoutTeam:function(){return a["a"].get("".concat(r,"/all/withoutTeam"))},findAllWithoutTeamExcept:function(t){return a["a"].get("".concat(r,"/all/withoutTeamExcept/").concat(t))},findTrackingsByUnitId:function(t){return a["a"].get("".concat(r,"/all/trackingsByUnitsIdsAndDates"),{params:t})}}},d3cb:function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"c",(function(){return U})),n.d(e,"b",(function(){return D}));var a,r,c=n("2b0e"),i=n("a723"),o=n("0056"),s=n("906c"),u=n("7b1e"),l=n("3c21"),p=n("58f2"),d=n("d82f"),h=n("cf75"),f=n("493b"),b=n("dde7"),v=Object(h["d"])({plain:Object(h["c"])(i["f"],!1)},"formControls"),m=c["default"].extend({props:v,computed:{custom:function(){return!this.plain}}}),g=n("ad47"),O=n("d520"),j=n("90ef"),y=n("8c18");function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=Object(p["a"])("checked",{defaultValue:null}),A=C.mixin,T=C.props,I=C.prop,E=C.event,U=Object(h["d"])(Object(d["m"])(x(x(x(x(x(x(x({},j["b"]),T),b["b"]),g["b"]),O["b"]),v),{},{ariaLabel:Object(h["c"])(i["r"]),ariaLabelledby:Object(h["c"])(i["r"]),button:Object(h["c"])(i["f"],!1),buttonVariant:Object(h["c"])(i["r"]),inline:Object(h["c"])(i["f"],!1),value:Object(h["c"])(i["a"])})),"formRadioCheckControls"),D=c["default"].extend({mixins:[f["a"],j["a"],A,y["a"],b["a"],g["a"],O["a"],m],inheritAttrs:!1,props:U,data:function(){return{localChecked:this.isGroup?this.bvGroup[I]:this[I],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(l["a"])(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(u["b"])(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},w(t,"btn-".concat(e),e),w(t,"disabled",this.isDisabled),w(t,"active",this.isChecked),w(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return x(x({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(a={},w(a,I,(function(){this["".concat(I,"Watcher")].apply(this,arguments)})),w(a,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),a),methods:(r={},w(r,"".concat(I,"Watcher"),(function(t){Object(l["a"])(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),w(r,"computedLocalCheckedWatcher",(function(t,e){Object(l["a"])(t,e)||this.$emit(E,t)})),w(r,"handleChange",(function(t){var e=this,n=t.target.checked,a=this.value,r=n?a:null;this.computedLocalChecked=a,this.$nextTick((function(){e.$emit(o["c"],r),e.isGroup&&e.bvGroup.$emit(o["c"],r)}))})),w(r,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),w(r,"focus",(function(){this.isDisabled||Object(s["d"])(this.$refs.input)})),w(r,"blur",(function(){this.isDisabled||Object(s["c"])(this.$refs.input)})),r),render:function(t){var e=this.isRadio,n=this.isBtnMode,a=this.isPlain,r=this.isCustom,c=this.isInline,i=this.isSwitch,o=this.computedSize,s=this.bvAttrs,u=this.normalizeSlot(),l=t("input",{class:[{"form-check-input":a,"custom-control-input":r,"position-static":a&&!u},n?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:x({change:this.handleChange},n?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(n){var p=t("label",{class:this.buttonClasses},[l,u]);return this.isGroup||(p=t("div",{class:["btn-group-toggle","d-inline-block"]},[p])),p}var d=t();return a&&!u||(d=t("label",{class:{"form-check-label":a,"custom-control-label":r},attrs:{for:this.safeId()}},u)),t("div",{class:[w({"form-check":a,"form-check-inline":a&&c,"custom-control":r,"custom-control-inline":r&&c,"custom-checkbox":r&&!e&&!i,"custom-switch":i,"custom-radio":r&&e},"b-custom-control-".concat(o),o&&!n),s.class],style:s.style},[l,d])}})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("2b0e"),r=n("b42e"),c=n("c637"),i=n("a723"),o=n("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(i["r"],"p")},c["o"]),u=a["default"].extend({name:c["o"],functional:!0,props:s,render:function(t,e){var n=e.props,a=e.data,c=e.children;return t(n.textTag,Object(r["a"])(a,{staticClass:"card-text"}),c)}})},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,c=n("1dde"),i=n("ae40"),o=c("map"),s=i("map");a({target:"Array",proto:!0,forced:!o||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},f0e2:function(t,e,n){"use strict";n("99af"),n("d3b7"),n("ac1f"),n("841c");var a=n("3f4a"),r="v1/team";e["a"]={fetchList:function(t){var e=t.take,n=t.page,c=t.order,i=t.search;return a["a"].get("".concat(r),{params:{take:e,page:n,order:c,search:i}})},create:function(t){return a["a"].post("".concat(r),t)},getById:function(t){return a["a"].get("".concat(r,"/").concat(t))},getByIdWithUnits:function(t){return a["a"].get("".concat(r,"/").concat(t,"/units"))},update:function(t,e){return a["a"].patch("".concat(r,"/").concat(t),e)},fetchAllActives:function(){return a["a"].get("".concat(r,"/all/actives"))},fetchAllActivesWithUnits:function(){return a["a"].get("".concat(r,"/all/activesWithUnits"))},addUnit:function(t){return a["a"].post("".concat(r,"/add/unit"),t)},removeUnit:function(t){return a["a"].post("".concat(r,"/remove/unit"),t)}}},fba6:function(t,e,n){"use strict";n("99af"),n("d3b7"),n("ac1f"),n("841c");var a=n("3f4a"),r="v1/type-device";e["a"]={fetchList:function(t){var e=t.take,n=t.page,c=t.order,i=t.search;return a["a"].get("".concat(r),{params:{take:e,page:n,order:c,search:i}})},create:function(t){return a["a"].post("".concat(r),t)},getById:function(t){return a["a"].get("".concat(r,"/").concat(t))},update:function(t,e){return a["a"].patch("".concat(r,"/").concat(t),e)},fetchAll:function(){return a["a"].get("".concat(r,"/list/all"))}}}}]);
//# sourceMappingURL=chunk-53437e2e.0d39ae18.js.map