(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{324:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Le}));var i,r,o,a,l,c,s,d,u,f,j,b,h,p,x,g,y,O,m,v,w,k,S,I,P,T,C,D,z,L,M,N=n(0),R=n(173),U=n(2),E=n(12),A=n(66),G=n(35),X=n.n(G),F=n(10),W=n(81),B=n(37),H=n(153),K=n(36),q=n.n(K),J=n(58),V=n(24),Q=n(75),Y=n(38),Z=n(106),$=n(190),_=Object($.createSlice)({name:"nav",initialState:{origin:null,destination:null,travelTimeInformation:null},reducers:{setOrigin:function(e,t){e.origin=t.payload},setDestination:function(e,t){e.destination=t.payload},setTravelTimeInformation:function(e,t){e.travelTimeInformation=t.payload}}}),ee=_.actions,te=ee.setOrigin,ne=ee.setDestination,ie=ee.setTravelTimeInformation,re=function(e){return e.nav.origin},oe=function(e){return e.nav.destination},ae=function(e){return e.nav.travelTimeInformation},le=_.reducer,ce=n(1),se=[{id:"123",title:"Get a ride ",image:"https://links.papareact.com/3pn",screen:"MapScreen"},{id:"456",title:"Ordre Food ",image:"https://links.papareact.com/28w",screen:"EatScreen"}],de=function(){var e=Object(J.useNavigation)(),t=Object(A.useSelector)(re);return Object(ce.jsx)(Q.default,{data:se,horizontal:!0,keyExtractor:function(e){return e.id},renderItem:function(n){var l=n.item;return Object(ce.jsx)(Y.default,{onPress:function(){return e.navigate(l.screen)},style:q()(i||(i=X()(["p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"]))),disabled:!t,children:Object(ce.jsxs)(F.default,{style:q()(r||(r=X()(["",""])),!t&&"opacity-20"),children:[Object(ce.jsx)(B.default,{style:{width:120,height:120,resizeMode:"contain"},source:{uri:l.image}}),Object(ce.jsx)(V.default,{style:q()(o||(o=X()(["mt-2 text-lg font-semibold"]))),children:l.title}),Object(ce.jsx)(Z.Icon,{style:q()(a||(a=X()(["p-2 bg-black rounded-full w-10 mt-4"]))),name:"arrowright",color:"white",type:"antdesign"})]})})}})},ue=[{id:"123",icon:"home",location:"Home",destination:"afarsek 3 ashdod israel"},{id:"456",icon:"briefcase",location:"Work",destination:"London Eye, London, UK"}],fe=function(){var e=Object(A.useDispatch)(),t=Object(J.useNavigation)(),n=null;return Object(ce.jsx)(Q.default,{data:ue,keyExtractor:function(e){return e.id},ItemSeparatorComponent:function(){return Object(ce.jsx)(F.default,{style:[q()(l||(l=X()(["bg-gray-200"]))),{height:.5}]})},renderItem:function(i){var r=i.item,o=r.location,a=r.destination,l=r.icon;return Object(ce.jsxs)(Y.default,{onPress:function(i){fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+a+"&key="+void 0+"&language=en").then((function(e){return e.json()})).then((function(e){n={lat:e.results[0].geometry.location.lat,lng:e.results[0].geometry.location.lng}})),e(ne({location:n,description:a})),t.navigate("RideOptionsCard")},style:q()(c||(c=X()(["flex-row items-center p-5"]))),children:[Object(ce.jsx)(Z.Icon,{style:q()(s||(s=X()(["mr-4 rounded-full bg-gray-400 p-3"]))),name:l,type:"ionicon",color:"white",size:18}),Object(ce.jsxs)(F.default,{children:[Object(ce.jsx)(V.default,{style:q()(d||(d=X()(["font-semibold text-lg"]))),children:o}),Object(ce.jsx)(V.default,{style:q()(u||(u=X()(["text-gray-500"]))),children:a})]})]})}})},je=(U.default.create({}),function(){var e=Object(A.useDispatch)();return Object(ce.jsx)(W.default,{style:q()(f||(f=X()(["bg-white h-full"]))),children:Object(ce.jsxs)(F.default,{children:[Object(ce.jsx)(B.default,{style:{width:100,height:100,marginLeft:10,resizeMode:"contain"},source:{uri:"https://links.papareact.com/gzs"}}),Object(ce.jsx)(H.GooglePlacesAutocomplete,{placeholder:"Where From?",styles:{container:{flex:0},textInput:{fontSize:18}},onPress:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e(te({location:n.geometry.location,description:t.description})),e(ne(null))},fetchDetails:!0,returnKeyType:"search",enablePoweredByContainer:!1,minLength:2,query:{key:void 0,language:"en"},nearbyPlacesAPI:"GooglePlacesSearch",debounce:400}),Object(ce.jsx)(de,{}),Object(ce.jsx)(fe,{})]})})}),be=(U.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),Object($.configureStore)({reducer:{nav:le}})),he=n(120),pe=n(108),xe=n(504),ge=n(503),ye=n(22),Oe=n.n(ye),me=n(129),ve=n.n(me),we=n(326),ke=function(){var e=Object(A.useSelector)(re),t=Object(A.useSelector)(oe),n=Object(N.useRef)(null),i=Object(A.useDispatch)();return Object(N.useEffect)((function(){e&&t&&n.current.fitToSuppliedMarkers(["origin","destination"],{edgePadding:{top:50,right:50,buttom:50,left:50}})}),[e,t]),Object(N.useEffect)((function(){if(e&&t){Oe.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins="+e.description+"&destinations="+t.description+"&key="+void 0+"&language=en").then((function(e){return e.json()})).then((function(e){i(ie(e.rows[0].elements[0]))}));case 1:case"end":return n.stop()}}),null,null,null,Promise)}}),[e,t,void 0]),Object(ce.jsxs)(ve.a,{ref:n,style:q()(j||(j=X()(["flex-1"]))),mapType:"mutedStandard",initialRegion:{latitude:e.location.lat,longitude:e.location.lng,latitudeDelta:.005,longitudeDelta:.005},children:[e&&t&&Object(ce.jsx)(we.default,{origin:e.description,destination:t.description,apikey:void 0,strokeWidth:3,strokeColor:"black"}),(null==e?void 0:e.location)&&Object(ce.jsx)(me.Marker,{coordinate:{latitude:e.location.lat,longitude:e.location.lng},title:"Origin",description:e.description,identifier:"origin"}),(null==t?void 0:t.location)&&Object(ce.jsx)(me.Marker,{coordinate:{latitude:t.location.lat,longitude:t.location.lng},title:"Destination",description:t.description,identifier:"destination"})]})},Se=(U.default.create({}),function(){var e=Object(A.useDispatch)(),t=Object(J.useNavigation)();return Object(ce.jsxs)(W.default,{style:q()(b||(b=X()(["bg-white flex-1"]))),children:[Object(ce.jsx)(V.default,{style:q()(h||(h=X()(["text-center py-5 text-xl"]))),children:"Good Morning"}),Object(ce.jsxs)(F.default,{style:q()(p||(p=X()(["border-t border-gray-200 flex-shrink"]))),children:[Object(ce.jsx)(F.default,{children:Object(ce.jsx)(H.GooglePlacesAutocomplete,{placeholder:"Where to?",styles:Ie,fetchDetails:!0,returnKeyType:"search",minLength:2,onPress:function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e(ne({location:i.geometry.location,description:n.description})),t.navigate("RideOptionsCard")},enablePoweredByContainer:!1,query:{key:void 0,language:"en"},nearbyPlacesAPI:"GooglePlacesSearch",debounce:400})}),Object(ce.jsx)(fe,{})]}),Object(ce.jsxs)(F.default,{style:q()(x||(x=X()(["flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100"]))),children:[Object(ce.jsxs)(pe.TouchableOpacity,{onPress:function(){return t.navigate("RideOptionsCard")},style:q()(g||(g=X()(["flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"]))),children:[Object(ce.jsx)(Z.Icon,{name:"car",type:"font-awesome",color:"white",size:16}),Object(ce.jsx)(V.default,{style:q()(y||(y=X()(["text-white text-center"]))),children:"Rides"})]}),Object(ce.jsxs)(pe.TouchableOpacity,{style:q()(O||(O=X()(["flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"]))),children:[Object(ce.jsx)(Z.Icon,{name:"car",type:"font-awesome",color:"white",size:16}),Object(ce.jsx)(V.default,{style:q()(m||(m=X()(["text-white text-center"]))),children:"Eats"})]})]})]})}),Ie=U.default.create({container:{backgroundColor:"white",paddingTop:20,flex:0},textInput:{backgroundColor:"#DDDDDF",borderRadius:0,fontSize:18},textInputContainer:{paddingHorizontal:20,paddingBottom:0}}),Pe=n(13),Te=n.n(Pe),Ce=[{id:"Uber-X-123",title:"UberX",multiplier:1,image:"https://links.papareact.com/3pn"},{id:"Uber-XL-456",title:"UberXL",multiplier:1.2,image:"https://links.papareact.com/5w8"},{id:"Uber-LUX-789",title:"Uber LUX",multiplier:1.75,image:"https://links.papareact.com/7pf"}],De=function(){var e=Object(J.useNavigation)(),t=Object(N.useState)(null),n=Te()(t,2),i=n[0],r=n[1],o=Object(A.useSelector)(ae);return Object(ce.jsxs)(W.default,{style:q()(v||(v=X()(["bg-white flex-grow"]))),children:[Object(ce.jsxs)(F.default,{children:[Object(ce.jsx)(pe.TouchableOpacity,{onPress:function(){return e.navigate("NavigateCard")},style:q()(w||(w=X()(["absolute top-1 left-5 z-50 p-3 rounded-full"]))),children:Object(ce.jsx)(Z.Icon,{name:"chevron-left",type:"fontawesome"})}),Object(ce.jsxs)(V.default,{style:q()(k||(k=X()(["text-center py-3 text-xl"]))),children:["Select A Ride - ",null==o?void 0:o.distance.text," "]})]}),Object(ce.jsx)(pe.FlatList,{data:Ce,keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item,n=t.id,a=t.title,l=t.multiplier,c=t.image,s=e.item;return Object(ce.jsxs)(pe.TouchableOpacity,{onPress:function(){return r(s)},style:q()(S||(S=X()(["flex-row justify-between items-center px-10 ",""])),n===(null==i?void 0:i.id)&&"bg-gray-200"),children:[Object(ce.jsx)(B.default,{style:{width:100,height:100,resizeMode:"contain"},source:{uri:c}}),Object(ce.jsxs)(F.default,{style:q()(I||(I=X()(["-ml-6"]))),children:[Object(ce.jsx)(V.default,{style:q()(P||(P=X()(["text-xl font-semibold"]))),children:a}),Object(ce.jsxs)(V.default,{children:[null==o?void 0:o.duration.text," Travel Time"]})]}),Object(ce.jsx)(V.default,{style:q()(T||(T=X()(["text-xl"]))),children:new Intl.NumberFormat("il-IL",{style:"currency",currency:"ILS"}).format(1.5*(null==o?void 0:o.duration.value)*l/100)})]})}}),Object(ce.jsx)(F.default,{children:Object(ce.jsx)(pe.TouchableOpacity,{onPress:function(){return console.log(1.5)},style:q()(C||(C=X()(["bg-black py-3 m-3 ",""])),!i&&"bg-gray-300"),children:Object(ce.jsxs)(V.default,{style:q()(D||(D=X()(["text-center text-white text-xl"]))),children:["Choose ",null==i?void 0:i.title," "]})})})]})},ze=(U.default.create({}),function(){var e=Object(ge.default)();return Object(ce.jsx)(W.default,{style:q()(z||(z=X()(["bg-white h-full"]))),children:Object(ce.jsxs)(F.default,{children:[Object(ce.jsx)(F.default,{style:q()(L||(L=X()(["h-1/2"]))),children:Object(ce.jsx)(ke,{})}),Object(ce.jsx)(F.default,{style:q()(M||(M=X()(["h-1/2"]))),children:Object(ce.jsxs)(e.Navigator,{children:[Object(ce.jsx)(e.Screen,{name:"NavigateCard",component:Se,options:{headerShown:!1}}),Object(ce.jsx)(e.Screen,{name:"RideOptionsCard",component:De,options:{headerShown:!1}})]})})]})})});U.default.create({});function Le(){var e=Object(ge.default)();return Object(ce.jsx)(A.Provider,{store:be,children:Object(ce.jsx)(xe.default,{children:Object(ce.jsx)(he.SafeAreaProvider,{children:Object(ce.jsx)(R.default,{behavior:"ios"===E.default.OS?"padding":"height",style:{flex:1},keyboardVerticalOffset:"ios"===E.default.os?-64:0,children:Object(ce.jsxs)(e.Navigator,{children:[Object(ce.jsx)(e.Screen,{name:"HomeScreen",component:je,options:{headerShown:!1}}),Object(ce.jsx)(e.Screen,{name:"MapScreen",component:ze,options:{headerShown:!1}})]})})})})})}U.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},332:function(e,t,n){e.exports=n(480)}},[[332,1,2]]]);
//# sourceMappingURL=app.7eeed300.chunk.js.map