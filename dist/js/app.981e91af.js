(function(e){function t(t){for(var s,n,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)n=o[u],r[n]&&f.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0cfb":function(e,t,a){},1628:function(e,t,a){"use strict";var s=a("247a"),r=a.n(s);r.a},"1a3b":function(e,t,a){"use strict";var s=a("7910"),r=a.n(s);r.a},"247a":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=a("bc3a"),i=a.n(r),n=a("9f7b"),o=a("716b"),l=a.n(o),c=a("a7c6"),d=a.n(c),u=a("7bb1"),f=a("bd86"),m=(a("7f7f"),a("768b")),v=(a("c5f6"),function(e){var t=["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"],a=1024;e=Number(e)*a;var s=0===e?0:Math.floor(Math.log(e)/Math.log(a));return"".concat(1*(e/Math.pow(a,s)).toFixed(2)," ").concat(t[s])}),_=function(){return"undefined"!==typeof VeeValidate},p={_default:function(e){return"O valor inválido."},after:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo deve estar depois do campo ".concat(s,".")},alpha:function(e){return"O valor deste campo deve conter somente letras."},alpha_dash:function(e){return"O valor deste campo deve conter letras, números e traços."},alpha_num:function(e){return"O valor deste campo deve conter somente letras e números."},alpha_spaces:function(e){return"O valor deste campo só pode conter caracteres alfabéticos e espaços."},before:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo deve estar antes do campo ".concat(s,".")},between:function(e,t){var a=Object(m["a"])(t,2),s=a[0],r=a[1];return"O valor deste campo deve estar entre ".concat(s," e ").concat(r,".")},confirmed:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"Os campos ".concat(e," e ").concat(s," devem ser iguais.")},credit_card:function(e){return"O valor deste campo é inválido."},date_between:function(e,t){var a=Object(m["a"])(t,2),s=a[0],r=a[1];return"O valor deste campo deve estar entre ".concat(s," e ").concat(r,".")},date_format:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo deve estar no formato ".concat(s,".")},decimal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(m["a"])(t,1),s=a[0],r=void 0===s?"*":s;return"O valor deste campo deve ser numérico e deve conter ".concat(r&&"*"!==r?r:""," casas decimais.")},digits:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo deve ser numérico e ter exatamente ".concat(s," dígitos.")},dimensions:function(e,t){var a=Object(m["a"])(t,2),s=a[0],r=a[1];return"O valor deste campo deve ter ".concat(s," pixels de largura por ").concat(r," pixels de altura.")},email:function(e){return"O valor deste campo deve ser um email válido."},excluded:function(e){return"O valor deste campo deve ser um valor válido."},ext:function(e){return"O valor deste campo deve ser um arquivo válido."},image:function(e){return"O valor deste campo deve ser uma imagem."},included:function(e){return"O valor deste campo deve ter um valor válido."},integer:function(e){return"O valor deste campo deve ser um número inteiro."},ip:function(e){return"O valor deste campo deve ser um endereço IP válido."},length:function(e,t){var a=Object(m["a"])(t,2),s=a[0],r=a[1];return r?"O tamanho deste campo está entre ".concat(s," e ").concat(r,"."):"O tamanho deste campo deve ser ".concat(s,".")},max:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo não deve ter mais que ".concat(s," caracteres.")},max_value:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo precisa ser ".concat(s," ou menor.")},mimes:function(e){return"O valor deste campo deve ser um tipo de arquivo válido."},min:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo deve conter pelo menos ".concat(s," caracteres.")},min_value:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo precisa ser ".concat(s," ou maior.")},numeric:function(e){return"O valor deste campo deve conter apenas números"},regex:function(e){return"O valor deste campo possui um formato inválido."},required:function(e){return"O valor deste campo é obrigatório."},size:function(e,t){var a=Object(m["a"])(t,1),s=a[0];return"O valor deste campo deve ser menor que ".concat(v(s),".")},url:function(e){return"O valor deste campo não é uma URL válida."}},b={name:"pt_BR",messages:p,attributes:{}};_()&&VeeValidate.Validator.localize(Object(f["a"])({},b.name,b));var g=b,h=a("8c4f"),C=a("f499"),y=a.n(C),w=a("2f62");navigator.userAgent.indexOf("PhantomJS")>-1&&window.localStorage.clear();var x={login:function(e,t){e.currentUser=t},logout:function(e){e.currentUser=void 0},addTodo:function(e,t){e.todos.push(t)},removeTodo:function(e,t){e.todos.splice(e.todos.indexOf(t),1)},editTodo:function(e,t){var a=t.todo,s=t.text,r=void 0===s?a.text:s,i=t.done,n=void 0===i?a.done:i;a.text=r,a.done=n}},k=(a("ac6a"),{login:function(e,t){var a=e.commit;a("login",t)},logout:function(e){var t=e.commit;t("logout")},addTodo:function(e,t){var a=e.commit;a("addTodo",{text:t,done:!1})},removeTodo:function(e,t){var a=e.commit;a("removeTodo",t)},toggleTodo:function(e,t){var a=e.commit;a("editTodo",{todo:t,done:!t.done})},editTodo:function(e,t){var a=e.commit,s=t.todo,r=t.value;a("editTodo",{todo:s,text:r})},toggleAll:function(e,t){var a=e.state,s=e.commit;a.todos.forEach(function(e){s("editTodo",{todo:e,done:t})})},clearCompleted:function(e){var t=e.state,a=e.commit;t.todos.filter(function(e){return e.done}).forEach(function(e){a("removeTodo",e)})}});s["a"].use(w["a"]);var O=new w["a"].Store({state:{currentUser:JSON.parse(window.localStorage.getItem("currentUser"))},actions:k,mutations:x}),E={login:function(e,t,a){i.a.post("user/login?_format=json",{name:e,pass:t},{headers:{Authorization:null}}).then(function(e){localStorage.setItem("currentUser",y()(e.data)),O.dispatch("login",e.data),a({authenticated:!0,currentUser:e.data})}).catch(function(e){a({authenticated:!1,error:"Usuário ou senha inválidos",errorObject:e})})},getToken:function(){return localStorage.getItem("currentUser")},logout:function(e){localStorage.removeItem("currentUser"),O.dispatch("login",null),e&&e(),this.onChange(!1)},loggedIn:function(){return O.state.currentUser},onChange:function(){}},$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],S=a("2877"),T={},U=Object(S["a"])(T,$,j,!1,null,null,null);U.options.__file="About.vue";var R=U.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("div",{staticClass:"content"},[e._m(0),e.$route.query.redirect?a("p",[e._v("\n      Você precisa entrar com seus dados para acessar.\n    ")]):e._e(),a("form",{staticClass:"form-auth-small",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label sr-only",attrs:{for:"signin-email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",id:"signin-email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label sr-only",attrs:{for:"signin-password"}},[e._v("Senha")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],staticClass:"form-control",attrs:{type:"password",id:"signin-password",placeholder:"Senha"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}})]),e.error?a("b-alert",{attrs:{variant:"danger",show:""}},[e._v(e._s(e.error))]):e._e(),e.loading?a("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" Fazendo login...")]):e._e(),a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[e._v("ENTRAR")])],1)])])},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"brand"},[a("h1",{staticClass:"logo"},[a("a",{attrs:{href:"/"}},[a("span",[e._v("REDE")]),e._v(" de "),a("strong",[e._v("sementes")])])])])}],q=(a("a481"),{created:function(){this.$store.state.currentUser&&this.$router.replace("/sementes")},data:function(){return{email:"terra krya",pass:"eusou",error:!1,loading:!1}},methods:{login:function(){var e=this;this.error=!1,this.loading=!0,E.login(this.email,this.pass,function(t){t.authenticated?e.$router.replace(e.$route.query.redirect||"/sementes"):e.error=t.error,e.loading=!1})}}}),B=q,D=(a("1628"),Object(S["a"])(B,N,P,!1,null,null,null));D.options.__file="Login.vue";var A=D.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"active"},[e._v("Painel do gestor")])]),a("div",{staticClass:"panel panel-headline data-list"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"info-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[e._v("\n\t\t\t\t\t\t\t\tAqui serão apresentados gráficos e relatorios mais úteis e mais acessados\n\t\t\t\t\t\t\t")])])])])])])])])}],F={name:"Dashboard"},M=F,V=Object(S["a"])(M,I,L,!1,null,null,null);V.options.__file="Dashboard.vue";var z=V.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("ol",{staticClass:"breadcrumb"},[a("li",[a("router-link",{attrs:{to:"/painel"}},[e._v("Painel do gestor")])],1),a("li",{staticClass:"active"},[e._v("Sementes")])]),a("div",{staticClass:"panel panel-headline data-list"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("h1",[e._v("\n\t\t\t\t\t\tSementes \n\t\t\t\t\t\t"),a("router-link",{attrs:{to:"/cadastrar-semente"}},[e._v("+ Cadastrar semente")])],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"info-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[e.error?a("b-alert",{attrs:{variant:"danger",show:""}},[e._v(e._s(e.error))]):e._e(),e.seeds||e.error?e._e():a("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" Carregando lista de sementes...")]),e.seeds?a("div",[a("b-form-input",{attrs:{placeholder:"Buscar"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("br"),a("b-table",{attrs:{fields:e.tableFields,items:e.seeds,"sort-by":"title",filter:e.filter},scopedSlots:e._u([{key:"title",fn:function(t){return[a("router-link",{attrs:{to:"/semente/"+t.item.product_id}},[e._v(e._s(t.item.title))])]}},{key:"compensation_collect",fn:function(t){return[e._v("\n\t\t\t\t\t\t\t\t\t\t\t"+e._s(e._f("currency")(t.item.compensation_collect,"R$ ",2,{decimalSeparator:","}))+"\n\t\t\t\t\t\t\t\t\t\t")]}},{key:"actions",fn:function(t){return[a("router-link",{staticClass:"btn btn-primary btn-xs",attrs:{to:"/editar-semente/"+t.item.product_id}},[e._v("Editar")]),a("a",{staticClass:"btn btn-danger btn-xs",on:{click:function(a){e.remove(t.item.product_id)}}},[e._v("Excluir")])]}}])})],1):e._e()],1)])])])])])])])},W=[],Z={name:"Seeds",data:function(){return{error:!1,filter:null,tableFields:[{key:"title",label:"Semente",sortable:!0},{key:"scientific_name",label:"Nome científico",sortable:!0},{key:"compensation_collect",label:"Remuneração",sortable:!0},{key:"actions",label:"Ações",class:"actions"}],seeds:null}},created:function(){this.list()},methods:{list:function(){var e=this;i.a.get("rest/seeds-list?_format=json").then(function(t){e.seeds=t.data.map(function(e){return{product_id:e.product_id[0].value,title:e.title[0].value,scientific_name:e.field_scientific_name[0].value,compensation_collect:e.field_compensation_collect[0].number}})}).catch(function(t){e.error=t})},remove:function(e){var t=this;confirm("Tem certeza que deseja excluír?")&&i.a.delete("product/"+e+"?_format=json").then(function(){t.list()}).catch(function(e){t.error=e})}}},J=Z,K=Object(S["a"])(J,G,W,!1,null,null,null);K.options.__file="Seeds.vue";var Q=K.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("ol",{staticClass:"breadcrumb"},[a("li",[a("router-link",{attrs:{to:"/painel"}},[e._v("Painel do gestor")])],1),a("li",[a("router-link",{attrs:{to:"/sementes"}},[e._v("Sementes")])],1),a("li",{staticClass:"active"},[e._v(e._s(e.isEditing()?"Editar":"Cadastrar")+" semente")])]),a("div",{staticClass:"panel panel-headline data-list"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("h1",[e._v("\n\t\t\t\t\t\t"+e._s(e.isEditing()?"Editar":"Cadastrar")+" semente\n\t\t\t\t\t")])])]),e.loading?a("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" Carregando dados do formulário...")]):e._e(),e.loading?e._e():a("b-form",{on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("b-form-group",{attrs:{label:"Nome da espécie *"}},[a("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"title"},model:{value:e.form.title[0].value,callback:function(t){e.$set(e.form.title[0],"value",t)},expression:"form.title[0].value"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("title")))])],1)],1),a("div",{staticClass:"col-md-6"},[a("b-form-group",{attrs:{label:"Nome científico *"}},[a("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"field_scientific_name"},model:{value:e.form.field_scientific_name[0].value,callback:function(t){e.$set(e.form.field_scientific_name[0],"value",t)},expression:"form.field_scientific_name[0].value"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("field_scientific_name"),expression:"errors.has('field_scientific_name')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("field_scientific_name")))])],1)],1)]),a("div",{staticClass:"row gray"},[a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{label:"Nome(s) regional(is) *",description:"Escreva todos os nome regionais que essa semente possa ter separado por virgula."}},[a("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"field_local_name"},model:{value:e.form.field_local_name[0].value,callback:function(t){e.$set(e.form.field_local_name[0],"value",t)},expression:"form.field_local_name[0].value"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("field_local_name"),expression:"errors.has('field_local_name')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("field_local_name")))])],1)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{label:"Descrição da semente"}},[a("b-form-textarea",{attrs:{rows:3},model:{value:e.form.body[0].value,callback:function(t){e.$set(e.form.body[0],"value",t)},expression:"form.body[0].value"}})],1)],1)]),a("div",{staticClass:"row gray"},[a("div",{staticClass:"col-md-3"},[a("b-form-group",{attrs:{label:"Preço *"}},[a("money",{model:{value:e.variations_form.price[0].number,callback:function(t){e.$set(e.variations_form.price[0],"number",t)},expression:"variations_form.price[0].number"}})],1)],1),a("div",{staticClass:"col-md-3"},[a("b-form-group",{attrs:{label:"Preço no atacado *"}},[a("money",{model:{value:e.variations_form.field_wholesale_price[0].number,callback:function(t){e.$set(e.variations_form.field_wholesale_price[0],"number",t)},expression:"variations_form.field_wholesale_price[0].number"}})],1)],1),a("div",{staticClass:"col-md-3"},[a("b-form-group",{attrs:{label:"Remuneração do coletor *"}},[a("money",{model:{value:e.form.field_compensation_collect[0].number,callback:function(t){e.$set(e.form.field_compensation_collect[0],"number",t)},expression:"form.field_compensation_collect[0].number"}})],1)],1),a("div",{staticClass:"col-md-3"},[a("b-form-group",{attrs:{label:"Quantidade em estoque"}},[a("b-form-input",{attrs:{type:"number"},model:{value:e.variations_form.field_stock[0].value,callback:function(t){e.$set(e.variations_form.field_stock[0],"value",t)},expression:"variations_form.field_stock[0].value"}})],1)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("b-form-group",{attrs:{label:"Qtd. de sementes / Kg *",description:e.form.field_seeds_kg[0].value>0?e.form.field_seeds_kg[0].value+" sementes / Kg":""}},[a("b-form-input",{attrs:{type:"number"},model:{value:e.form.field_seeds_kg[0].value,callback:function(t){e.$set(e.form.field_seeds_kg[0],"value",t)},expression:"form.field_seeds_kg[0].value"}})],1)],1),a("div",{staticClass:"col-md-4"},[a("b-form-group",{attrs:{label:"Taxa de viabilidade *",description:(e.form.field_viability_rate[0].value||0)+"% de viabilidade"}},[a("b-form-input",{attrs:{type:"range"},model:{value:e.form.field_viability_rate[0].value,callback:function(t){e.$set(e.form.field_viability_rate[0],"value",t)},expression:"form.field_viability_rate[0].value"}})],1)],1),a("div",{staticClass:"col-md-4"},[a("b-form-group",{attrs:{label:"Limite de peso por lote",description:e.form.field_lot_limit[0].value>0?"Limite de "+e.form.field_lot_limit[0].value+" kg por lote":""}},[a("b-form-input",{attrs:{type:"number"},model:{value:e.form.field_lot_limit[0].value,callback:function(t){e.$set(e.form.field_lot_limit[0],"value",t)},expression:"form.field_lot_limit[0].value"}})],1)],1)]),a("div",{staticClass:"row gray"},[a("div",{staticClass:"col-md-6"},[e.ecosystem_options?e._e():a("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" Carregando lista de ecossistemas...")]),e.ecosystem_options?a("b-form-group",{attrs:{label:"Ecossistema *"}},[a("b-form-checkbox-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:e.ecosystem_options,name:"field_ecosystem"},model:{value:e.form.field_ecosystem,callback:function(t){e.$set(e.form,"field_ecosystem",t)},expression:"form.field_ecosystem"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("field_ecosystem"),expression:"errors.has('field_ecosystem')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("field_ecosystem")))])],1):e._e()],1),a("div",{staticClass:"col-md-6"},[e.fruiting_season_options?e._e():a("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" Carregando lista de meses...")]),e.fruiting_season_options?a("b-form-group",{attrs:{label:"Época da frutificação *"}},[a("b-form-checkbox-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{options:e.fruiting_season_options,name:"field_fruiting_season"},model:{value:e.form.field_fruiting_season,callback:function(t){e.$set(e.form,"field_fruiting_season",t)},expression:"form.field_fruiting_season"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("field_fruiting_season"),expression:"errors.has('field_fruiting_season')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("field_fruiting_season")))])],1):e._e()],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{label:"Fotos",description:"Tipos permetidos: PNG, GIF, JPG e JPEG. Tamanho máximo 32 MB."}},[a("b-form-file",{ref:"files",attrs:{id:"files",multiple:"",accept:"image/*"},on:{change:e.uploadImages}})],1),e.images_preview.length>0?a("div",{staticClass:"row images_preview"},e._l(e.images_preview,function(t,s){return a("div",{key:s,staticClass:"col-md-4"},[a("b-img",{attrs:{src:t.uri?e.baseURL()+t.uri[0].url:t.url,fluid:"",thumbnail:""}}),a("br"),a("br"),a("p",{staticClass:"text-center"},[a("a",{staticClass:"btn btn-default btn-small",on:{click:function(t){e.deleteImage(s)}}},[a("i",{staticClass:"fa fa-trash"})])])],1)}),0):e._e()],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[e.error?a("b-alert",{attrs:{variant:"danger",show:""}},[e._v(e._s(e.error))]):e._e(),e.errors&&e.errors.items.length?a("b-alert",{attrs:{variant:"danger",show:""}},[e._v("Verifique os erros acima para continuar")]):e._e(),a("div",{staticClass:"btn-group"},[e.sending?a("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" Enviando dados...")]):e._e(),e.sending?e._e():a("button",{staticClass:"btn btn-primary btn-lg fa fa-save",attrs:{role:"button"}},[e._v(" Salvar")])])],1)])])],1)])])},H=[],X=a("0a0d"),ee=a.n(X),te=a("a4bb"),ae=a.n(te),se=a("1439"),re=a.n(se),ie={name:"SeedForm",data:function(){return{error:!1,form:{type:[{target_id:"seed"}],title:[{value:""}],field_scientific_name:[{value:""}],field_local_name:[{value:""}],body:[{value:""}],field_seeds_kg:[{value:0}],field_viability_rate:[{value:50}],field_lot_limit:[{value:0}],field_compensation_collect:[{number:0,currency_code:"BRL"}],field_ecosystem:[],field_fruiting_season:[],stores:[{target_id:1}],variations:[{target_id:null}],field_images:[]},variations_form:{type:[{target_id:"default"}],price:[{number:0,currency_code:"BRL"}],field_wholesale_price:[{number:0,currency_code:"BRL"}],field_stock:[{value:0}],sku:[{value:0}],product_id:[{target_id:0}]},showSkuInput:!1,ecosystem_options:null,fruiting_season_options:null,images_preview:[],loading:!1,sending:!1}},created:function(){var e=this;i.a.get("entity/field_storage_config/commerce_product.field_ecosystem?_format=json").then(function(t){var a=t.data.settings.allowed_values;e.ecosystem_options=ae()(a).map(function(e){return{text:a[e],value:{value:e}}})}).catch(function(t){e.error=t}),i.a.get("entity/field_storage_config/commerce_product.field_fruiting_season?_format=json").then(function(t){var a=t.data.settings.allowed_values;e.fruiting_season_options=ae()(a).map(function(e){return{text:a[e],value:{value:e}}})}).catch(function(t){e.error=t}),this.isEditing()&&this.edit(this.$route.params.id)},methods:{edit:function(e){var t=this;this.loading=!0,i.a.get("product/"+e+"?_format=json").then(function(e){var a=e.data;t.apiDataToForm(t.form,a),a&&a.variations&&i.a.get("entity/commerce_product_variation/"+a.variations[0].target_id+"?_format=json").then(function(e){t.apiDataToForm(t.variations_form,e.data),t.images_preview=a.field_images,t.loading=!1}).catch(function(e){t.error=e,t.loading=!1})}).catch(function(e){t.error=e,t.loading=!1})},save:function(){var e=this;this.$validator.validate().then(function(t){t&&(e.sending=!0,e.error=!1,e.isEditing()?e.variations_form.sku=void 0:e.variations_form.sku[0].value=re()(e.form.title[0].value.toLowerCase())+"-"+ee()(),e.form.uid=[{target_id:e.currentUser.current_user.uid}],e.variations_form.uid=[{target_id:e.currentUser.current_user.uid}],i()({method:e.isEditing()?"PATCH":"POST",url:"entity/commerce_product_variation"+(e.isEditing()?"/"+e.form.variations[0].target_id:"")+"?_format=json",data:e.variations_form}).then(function(t){e.form.variations=[{target_id:t.data.variation_id[0].value}],i()({method:e.isEditing()?"PATCH":"POST",url:(e.isEditing()?"product/"+e.$route.params.id:"entity/commerce_product")+"?_format=json",data:e.form}).then(function(t){var a=t.data;a&&a.product_id&&e.$router.replace("/semente/"+a.product_id[0].value),e.sending=!1}).catch(function(t){e.error=t.response.data.message,e.sending=!1})}).catch(function(t){e.error=t,e.sending=!1}))})},uploadImages:function(e){for(var t=this,a=e.target.files||e.dataTransfer.files,s=0;s<a.length;s++){var r=new FileReader,n=a[s];r.onloadend=function(){i()({method:"POST",url:"file/upload/commerce_product/seed/field_images?_format=json",headers:{"Content-Type":"application/octet-stream","Content-Disposition":'file; filename="'+n.name+'"',Authorization:"Basic c2VtZW50ZXMtYWRtaW46bjNqdWtqZjk4NG4=","X-CSRF-Token":t.currentUser.csrf_token},data:r.result}).then(function(e){t.images_preview.push(e.data),t.form.field_images.push({target_id:e.data.fid[0].value})}).catch(function(){t.error="Ocorreu um erro ao enviar: "+n.name})},r.readAsArrayBuffer(a[s])}},deleteImage:function(e){this.$delete(this.images_preview,e),this.$delete(this.form.field_images,e)},baseURL:function(){return i.a.defaults.baseURL},isEditing:function(){return!!this.$route.params.id},apiDataToForm:function(e,t){ae()(e).map(function(a){var s=t[a];s&&s.length&&(e[a]=s.map(function(e){return e.value?{value:e.value}:e.number?{number:Number(e.number),currency_code:"BRL"}:e.target_id?{target_id:e.target_id}:void 0}))})}},computed:{currentUser:function(){return this.$store.state.currentUser}}},ne=ie,oe=Object(S["a"])(ne,Y,H,!1,null,null,null);oe.options.__file="SeedForm.vue";var le=oe.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[a("ol",{staticClass:"breadcrumb"},[a("li",[a("router-link",{attrs:{to:"/painel"}},[e._v("Painel do gestor")])],1),a("li",[a("router-link",{attrs:{to:"/sementes"}},[e._v("Sementes")])],1),a("li",{staticClass:"active"},[e._v("Dados da semente")])]),a("div",{staticClass:"panel panel-headline data-list"},[a("div",{staticClass:"panel-body"},[e.error?a("b-alert",{attrs:{variant:"danger",show:""}},[e._v(e._s(e.error))]):e._e(),e.loading?a("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" Carregando dados da semente...")]):e._e(),e.seed&&!e.loading?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"item-title"},[e.seed.field_images&&e.seed.field_images.length?a("div",{staticClass:"fish-img"},[a("img",{attrs:{src:e.seed.field_images[0].url}})]):e._e(),a("h1",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.seed.title[0].value)+"\n\t\t\t\t\t\t")]),a("p",[a("span",[e._v(e._s(e.seed.field_scientific_name[0].value))]),e._v(" • "),a("span",[e._v(e._s(e.seed.field_local_name[0].value))])]),a("router-link",{staticClass:"btn btn-default btn-xs",attrs:{to:"/editar-semente/"+e.seed.product_id[0].value}},[a("i",{staticClass:"fa fa-edit",attrs:{"aria-hidden":"true"}}),e._v("\n\t\t\t\t\t\t\tEditar semente\n\t\t\t\t\t\t")])],1)]),a("div",{staticClass:"col-md-12"},[a("hr"),a("div",{staticClass:"row"},[e.seed_variation.price&&e.seed_variation.price.length?a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"weekly-summary text-center"},[a("span",{staticClass:"info-label"},[e._v("Preço")]),a("span",{staticClass:"number"},[e._v(e._s(e._f("currency")(e.seed_variation.price[0].number,"R$ ",2,{decimalSeparator:","})))])])]):e._e(),e.seed_variation.field_wholesale_price&&e.seed_variation.field_wholesale_price.length?a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"weekly-summary text-center"},[a("span",{staticClass:"info-label"},[e._v("Preço no atacado")]),a("span",{staticClass:"number"},[e._v(e._s(e._f("currency")(e.seed_variation.field_wholesale_price[0].number,"R$ ",2,{decimalSeparator:","})))])])]):e._e(),e.seed.field_compensation_collect&&e.seed.field_compensation_collect.length?a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"weekly-summary text-center"},[a("span",{staticClass:"info-label"},[e._v("Remuneração do coletor")]),a("span",{staticClass:"number"},[e._v(e._s(e._f("currency")(e.seed.field_compensation_collect[0].number,"R$ ",2,{decimalSeparator:","})))])])]):e._e(),e.seed_variation.field_stock&&e.seed_variation.field_stock.length?a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"weekly-summary text-center"},[a("span",{staticClass:"info-label"},[e._v("Quantidade em estoque")]),a("span",{staticClass:"number"},[e._v(e._s(e._f("currency")(e.seed_variation.field_stock[0].value,"",0)))])])]):e._e()]),a("table",{staticClass:"resume-table"},[a("caption",[e._v("\n\t\t\t\t\t\t\tDetalhes\n\t\t\t\t\t\t")]),e.seed.body&&e.seed.body.length?a("tr",[a("td",{staticClass:"details",attrs:{colspan:"2"},domProps:{innerHTML:e._s(e.seed.body[0].processed)}})]):e._e(),a("tr",[a("td",{attrs:{width:"50%",valign:"top"}},[a("dl",[a("dt",[e._v("Qtd. de sementes / Kg")]),a("dd",[e._v(e._s(e._f("currency")(e.seed.field_seeds_kg[0].value,"",0))+" sementes / Kg")])]),a("dl",[a("dt",[e._v("Taxa de viabilidade")]),a("dd",[e._v(e._s(e._f("currency")(e.seed.field_viability_rate[0].value,"",0))+" % de viabilidade")])]),a("dl",[a("dt",[e._v("Limite de peso por lote")]),a("dd",[e._v(e._s(e._f("currency")(e.seed.field_lot_limit[0].value,"",0))+" kg por lote")])])]),a("td",{attrs:{width:"50%",valign:"top"}},[e.ecosystem_options?a("dl",{staticClass:"ecosystem"},[a("dt",[e._v("Ecossistemas")]),a("dd",e._l(e.seed.field_ecosystem,function(t,s){return a("b-badge",{key:s,class:t.value},[e._v(e._s(e.ecosystem_options[t.value]))])}),1)]):e._e(),e.fruiting_season_options?a("dl",{staticClass:"fruiting_season"},[a("dt",[e._v("Época da frutificação")]),a("dd",e._l(e.fruiting_season_options,function(t,s){return a("b-badge",{key:s,class:{"btn-success":!!e.seed.field_fruiting_season.find(function(e){return e.value==s})}},[e._v(e._s(t))])}),1)]):e._e()])]),e.seed.field_images&&e.seed.field_images.length?a("tr",[a("td",{attrs:{width:"100%",colspan:"2",valign:"top"}},e._l(e.seed.field_images,function(e,t){return a("b-img",{key:t,attrs:{src:e.url,fluid:"",thumbnail:""}})}),1)]):e._e()])])]):e._e()],1)])])},de=[],ue={name:"Seed",data:function(){return{seed:null,seed_variation:null,ecosystem_options:null,fruiting_season_options:null,error:!1,loading:!1}},created:function(){var e=this;this.loading=!0,i.a.get("product/"+this.$route.params.id+"?_format=json").then(function(t){e.seed=t.data,i.a.get("entity/commerce_product_variation/"+e.seed.variations[0].target_id+"?_format=json").then(function(t){e.seed_variation=t.data,e.loading=!1,i.a.get("entity/field_storage_config/commerce_product.field_ecosystem?_format=json").then(function(t){e.ecosystem_options=t.data.settings.allowed_values}).catch(function(t){e.error=t}),i.a.get("entity/field_storage_config/commerce_product.field_fruiting_season?_format=json").then(function(t){e.fruiting_season_options=t.data.settings.allowed_values}).catch(function(t){e.error=t})}).catch(function(t){e.error=t,e.loading=!1})}).catch(function(t){e.error=t,e.loading=!1})}},fe=ue,me=Object(S["a"])(fe,ce,de,!1,null,null,null);me.options.__file="Seed.vue";var ve=me.exports;function _e(e,t,a){E.loggedIn()?a():a({path:"/login",query:{redirect:e.fullPath}})}s["a"].use(h["a"]);var pe=new h["a"]({routes:[{path:"/",name:"home",component:A},{path:"/about",component:R},{path:"/login",component:A},{path:"/logout",beforeEnter:function(e,t,a){E.logout(function(){O.dispatch("logout"),a("/")})}},{path:"/painel",component:z,beforeEnter:_e},{path:"/sementes",component:Q,beforeEnter:_e},{path:"/cadastrar-semente",component:le,beforeEnter:_e},{path:"/editar-semente/:id",component:le,beforeEnter:_e},{path:"/semente/:id",component:ve,beforeEnter:_e}]}),be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"wrapper"}},[a("Navbar"),e.currentUser?a("div",{staticClass:"row-fluid"},[a("Sidebar"),a("div",{staticClass:"main"},[a("div",{staticClass:"main-content"},[a("div",{staticClass:"container-fluid"},[e.$route.matched.length?[a("router-view")]:[a("p",[e._v("You are logged "+e._s(e.currentUser?"in":"out"))])]],2)])])],1):e._e(),e.currentUser?e._e():a("div",{staticClass:"vertical-align-wrap"},[a("div",{staticClass:"vertical-align-middle"},[a("div",{staticClass:"auth-box"},[a("router-view")],1)])]),a("div",{staticClass:"clearfix"})],1)])},ge=[],he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.currentUser?a("nav",{staticClass:"navbar navbar-default"},[e._m(0),a("div",{staticClass:"container-fluid"},[e._m(1),e._m(2),a("div",{attrs:{id:"navbar-menu"}},[a("ul",{staticClass:"nav navbar-nav navbar-right"},[a("li",{staticClass:"dropdown",class:{open:e.userDropdown}},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"},on:{click:function(t){e.toggleUserDropdown()}}},[a("i",{staticClass:"fa fa-user"}),e._v("   "),a("span",[e._v(e._s(e.currentUser.current_user.name))]),e._v("  "),a("i",{staticClass:"icon-submenu fa fa-chevron-down"})]),a("ul",{staticClass:"dropdown-menu"},[a("li",[e.currentUser?a("router-link",{attrs:{to:"/logout"}},[a("i",{staticClass:"lnr lnr-exit"}),a("span",[e._v("Sair")])]):e._e()],1)])])])])])]):e._e()},Ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"brand"},[a("h1",{staticClass:"logo"},[a("a",{attrs:{href:"/"}},[a("span",[e._v("REDE")]),e._v(" de "),a("strong",[e._v("sementes")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-btn"},[a("button",{staticClass:"btn-toggle-fullwidth",attrs:{type:"button"}},[a("i",{staticClass:"lnr lnr-arrow-left-circle"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-btn"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"",title:"Nova pesca"}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),a("span",[e._v("NOVA PESCA")])]),a("a",{staticClass:"btn btn-primary",attrs:{href:"",title:"Criar grupo"}},[a("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}}),a("span",[e._v("CRIAR GRUPO")])])])}],ye={name:"Navbar",data:function(){return{userDropdown:!1}},computed:{currentUser:function(){return this.$store.state.currentUser}},methods:{toggleUserDropdown:function(e){this.userDropdown=!this.userDropdown}}},we=ye,xe=(a("1a3b"),Object(S["a"])(we,he,Ce,!1,null,null,null));xe.options.__file="Navbar.vue";var ke=xe.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar",attrs:{id:"sidebar-nav"}},[a("div",{staticClass:"sidebar-scroll"},[a("nav",[a("ul",{staticClass:"nav"},[a("li",[a("router-link",{attrs:{to:"/painel"}},[a("i",{staticClass:"fa fa-home"}),a("span",[e._v("Início")])])],1),a("li",[e._m(0),a("ul",{staticClass:"nav"},[a("li",[a("router-link",{attrs:{to:"/sementes"}},[a("span",[e._v("Sementes")])])],1),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5)])]),e._m(6)])])]),a("div",{staticClass:"clearfix"})])},Ee=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",[a("i",{staticClass:"fa fa-list-alt"}),a("span",[e._v("Cadastros")]),a("i",{staticClass:"fa fa-chevron-down"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[a("span",[e._v("Grupos de coletores")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[a("span",[e._v("Casas de Sementes")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[a("span",[e._v("Redes de Sementes")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[a("span",[e._v("Área de Coleta")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[a("span",[e._v("Matrizes de Sementes")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",[a("i",{staticClass:"fa fa-cogs"}),a("span",[e._v("Operacional")]),a("i",{staticClass:"fa fa-chevron-down"})]),a("ul",{staticClass:"nav"},[a("li",[a("a",{attrs:{href:"#"}},[a("span",[e._v("Pedidos para Coletores")])])]),a("li",[a("a",{attrs:{href:"#"}},[a("span",[e._v("Estoque")])])]),a("li",[a("a",{attrs:{href:"#"}},[a("span",[e._v("Relatórios")])])])])])}],$e={name:"Sidebar"},je=$e,Se=Object(S["a"])(je,Oe,Ee,!1,null,null,null);Se.options.__file="Sidebar.vue";var Te=Se.exports,Ue={computed:{currentUser:function(){return this.$store.state.currentUser}},components:{Navbar:ke,Sidebar:Te}},Re=Ue,Ne=(a("cf25"),Object(S["a"])(Re,be,ge,!1,null,null,null));Ne.options.__file="App.vue";var Pe=Ne.exports;s["a"].config.productionTip=!1,i.a.defaults.baseURL="http://adminsementes.nyx.tc/",i.a.defaults.headers.common["Authorization"]="Basic c2VtZW50ZXMtYWRtaW46bjNqdWtqZjk4NG4=",i.a.defaults.headers.common["Content-Type"]="application/json",s["a"].use(n["a"]),s["a"].use(l.a,{prefix:"R$ ",decimal:",",thousands:"",masked:!1}),s["a"].use(d.a),s["a"].use(u["b"],{locale:"pt_BR",fieldsBagName:"veeFields"}),u["a"].localize("pt_BR",g),new s["a"]({router:pe,store:O,render:function(e){return e(Pe)}}).$mount("#app")},7910:function(e,t,a){},cf25:function(e,t,a){"use strict";var s=a("0cfb"),r=a.n(s);r.a}});
//# sourceMappingURL=app.981e91af.js.map