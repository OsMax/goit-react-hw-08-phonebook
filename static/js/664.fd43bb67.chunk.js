"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[664],{664:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var r=n(791),a=n(855),c=n(58),i="NOT_FOUND";var o=function(t,e){return t===e};function u(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?o:r,c=n.maxSize,u=void 0===c?1:c,s=n.resultEqualityCheck,l=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),f=1===u?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:i},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return i}return{get:r,put:function(e,a){r(e)===i&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(u,l);function m(){var e=f.get(arguments);if(e===i){if(e=t.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(t){return s(t.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return m.clearCache=function(){return f.clear()},m}function s(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function l(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var c,i=0,o={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(o=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=o,f=l.memoizeOptions,m=void 0===f?n:f,p=Array.isArray(m)?m:[m],d=s(r),v=t.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(p)),h=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return c=v.apply(null,t)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:v,dependencies:d,lastResult:function(){return c},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var f=l(u),m=function(t){return t.phones.contacts.items},p=f([m,function(t){return t.filter.filter}],(function(t,e){return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))})),d="ContactForm_form__dhl+T",v="ContactForm_submitBtn__lg06P",h="ContactForm_label__-cVXI",_="ContactForm_labelText__JB4h1",y="ContactForm_input__Bl93P",x=n(329),j=function(){var t=(0,a.I0)(),e=(0,a.v9)(m);return(0,x.jsxs)("form",{className:d,onSubmit:function(n){n.preventDefault();var r=n.target,a=n.target.elements.name.value,i=n.target.elements.number.value;if(a.trim()&&i.trim()){if(e.some((function(t){return t.name===a})))return alert("".concat(a," is already in contacts"));if(e.some((function(t){return t.phone===i})))return alert("".concat(i," is already in contacts"));t((0,c.Z1)({name:a,number:i})),console.log({name:a,number:i}),r.reset()}else alert("Please complete all fields")},children:[(0,x.jsxs)("label",{className:h,children:[(0,x.jsx)("span",{className:_,children:"Name"}),(0,x.jsx)("input",{className:y,name:"name",type:"text",value:e.name,pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]{2,}[ ][A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]{2,}",placeholder:"Name Surname (min 2 symbols for each)"})]}),(0,x.jsxs)("label",{className:h,children:[(0,x.jsx)("span",{className:_,children:"Number"}),(0,x.jsx)("input",{className:y,name:"number",type:"text",value:e.number,pattern:"\\d{3}[\\-]\\d{3}[\\-]\\d{4}",placeholder:"111-111-1111"})]}),(0,x.jsx)("button",{className:v,type:"submit",children:"Add contact"})]})},b="Filter_filterContainer__8G57N",C="Filter_textFind__TVE2v",N="Filter_inputFind__JfA1G",g=n(334),F=function(){var t=(0,a.I0)();return(0,x.jsxs)("div",{className:b,children:[(0,x.jsx)("input",{className:N,type:"text",onInput:function(e){t((0,g.T)(e.target.value))}}),(0,x.jsx)("span",{className:C,children:"Find contacts by name"})]})},k={listContainer:"ContactList_listContainer__et1ya",contactList:"ContactList_contactList__UFVCg",listItem:"ContactList_listItem__SptUx",contactInfo:"ContactList_contactInfo__Sgq6p",deletButton:"ContactList_deletButton__WeU4f"},I=function(){var t=(0,a.I0)(),e=(0,a.v9)(p);return(0,x.jsx)("div",{className:k.listContainer,children:(0,x.jsx)("ul",{className:k.contactList,children:e.map((function(e){return(0,x.jsxs)("li",{className:k.listItem,children:[(0,x.jsxs)("div",{className:k.contactInfo,children:[(0,x.jsxs)("span",{className:k.contactName,children:[e.name,": "]}),(0,x.jsx)("span",{className:k.contactNumber,children:e.number})]}),(0,x.jsx)("button",{className:k.deletButton,onClick:function(){return n=e.id,t((0,c.qj)(n));var n},children:"X"})]},e.id)}))})})},w="Contacts_appContainer__64XIb",L=function(){var t=(0,a.I0)();return(0,r.useEffect)((function(){t((0,c.sq)())}),[t]),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("h2",{children:"Add contacts"}),(0,x.jsx)(j,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(F,{}),(0,x.jsx)(I,{})]})}}}]);
//# sourceMappingURL=664.fd43bb67.chunk.js.map