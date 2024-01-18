"use strict";loaded_1_16(function(_){var window=this;
_.m("uveYne");
var Qzm=function(a,b){_.Pzm.oa.set(a,b)},Rzm=new function(){this.cache=new Set};_.Szm=!0;_.D7=function(a){_.fi.call(this,a.Oa);this.Ia=!1;this.Cj=a.model.card;this.oa=_.jD(a.model.card);this.rl=a.service.rl;this.Fa=_.Szm};_.D(_.D7,_.fi);_.D7.Ja=function(){return{model:{card:_.hD},service:{rl:_.bD,PBa:_.Vhg}}};_.h=_.D7.prototype;
_.h.Hvc=function(a){this.BGa();var b=this.getRoot().Bb();Qzm(this.oa,this.Hzb());Rzm.cache.has(this.oa)?b.style.animation="none":(Rzm.cache.add(this.oa),b.addEventListener("animationend",function(){b.style.animation="none"}),b.addEventListener("animationcancel",function(){b.style.animation="none"}));a.data.Xxc&&_.Qnc(this.rl,this.oa)};
_.h.Hzb=function(){var a={},b=_.kw(_.lw(this.getRoot(),"N9Xkfe"));b=_.Zb(b);for(var c=b.next();!c.done;c=b.next()){var d=c.value;c=d.dataset.ved;d=d.dataset.tbnid;c&&d&&(a[d]=c)}return a};_.h.F0b=function(a){_.Whg(a.targetElement)};_.h.aYa=function(){};_.h.ksc=function(){this.BGa()};_.h.VXa=function(){};
_.h.BGa=function(){var a=this,b,c,d,e,f;return _.Gh(function(g){switch(g.oa){case 1:return a.Aa()||null===a.Cj.oa||a.Ia?g.return():(b=a.Cj.active&&26===a.Cj.oa)&&a.Fa?_.Jh(g,a.Ovb(),2):g.return();case 2:c=g.Aa;if(!c)return g.return();d=c.getBoundingClientRect().height;return _.Jh(g,_.dpc(a.Cj),3);case 3:return e=g.Aa.height,f=d/2+e/3,_.Jh(g,_.Tzm(a,c,f),4);case 4:a.Ia=!0,_.si(g)}})};
_.h.Ovb=function(){var a=this,b,c;return _.Gh(function(d){if(1==d.oa)return(b=_.zpm.cache[a.oa])?_.Jh(d,a.Cj.getRoot(),2):d.return(null);c=d.Aa;return d.return(_.$q(c,'[data-tbnid="'+b+'"]').el())})};_.Tzm=function(a,b,c){var d,e;return _.Gh(function(f){if(1==f.oa)return d=b.getBoundingClientRect(),_.Jh(f,_.iD(a.Cj),2);e=f.Aa;e.el().scrollTop+=d.top-c;_.si(f)})};_.D7.prototype.Aa=function(){return!1};_.U(_.D7.prototype,"BzPF1b",function(){return this.Aa});_.U(_.D7.prototype,"GZkSib",function(){return this.Ovb});
_.U(_.D7.prototype,"aro39b",function(){return this.BGa});_.U(_.D7.prototype,"iVkncb",function(){return this.VXa});_.U(_.D7.prototype,"H1soXd",function(){return this.ksc});_.U(_.D7.prototype,"NMdhcc",function(){return this.aYa});_.U(_.D7.prototype,"SjNcmb",function(){return this.F0b});_.U(_.D7.prototype,"Rq6fF",function(){return this.Hzb});_.U(_.D7.prototype,"DmdRif",function(){return this.Hvc});_.vw(_.xab,_.D7);
_.p();
_.m("uVB85");
_.ypm=function(a,b,c,d){if(_.Xg(b.oa(),10)&&(b=a.Mb("sTFXNd").el())){var e,f=null==(e=d.vs)?void 0:e.call(d,c);f?(a=_.ep(a.getRoot().getData("ved"),"")||"",_.nq(f,"ved",a),_.nq(f,"vet",_.Jdb(a)),_.Cb(b,_.eb(f.toString()))):b.removeAttribute("href");_.vq(b,"navigation","server")}};
_.p();
_.m("dPOyed");
_.Apm=function(a){var b,c,d;return null!=(d=null==(b=a.getScope((0,_.K2b)(1)))?void 0:null==(c=b.vCd)?void 0:c.Oi())?d:null};_.Bpm=function(a){var b=a.Td,c=a.soy,d=a.Hd;this.oAa=a.oAa;this.Td=b;this.soy=c;this.Hd=d};_.h=_.Bpm.prototype;_.h.GBa=function(){return _.Gh(function(a){return a.return(!0)})};_.h.URa=function(){};_.h.hza=function(){};_.h.Mb=function(a){return _.asb(this.oAa,a)};_.h.Ua=function(a){return this.Mb(a).first()};
_.h.Od=function(a){var b=this,c=_.Bh(this.oAa,3);return this.Hd.Od(function(){return a(b.soy)},{Bd:c})};_.Cpm=function(){};
_.q7=function(a){_.fi.call(this,a.Oa);this.Aa=!0;this.Jr=null;this.Fa=a.model.Td;this.Na=a.model.Xr;this.Wl=a.service.config;this.oa=a.service.vp;this.Qa=a.service.dna;this.kq=a.service.iN;this.Re=a.service.Re;this.Jf=a.service.component;this.HB=a.service.HB;this.Ib=a.service.Ib;this.Hd=a.service.Ed;this.Sb=a.Jb.Sb;this.Bm=a.service.history;this.Ia=a.service.h4a;this.Og=_.rpc(a.service.window.get());this.Ma=new _.Bpm({oAa:this.getRoot().el(),Td:this.Fa.qg(),soy:this.Sb,Hd:this.Hd});a=this.Wl;var b=
this.Re.kQ();_.ypm(this,a,b,this.Fa)};_.D(_.q7,_.fi);_.q7.Ja=function(){return{Jb:{Sb:_.nu},model:{Td:_.Hdl,Xr:_.zdl},service:{config:_.gD,vp:_.Sv,dna:_.l7,Goa:_.UTb,component:_.Yv,iN:_.w2,Re:_.Jy,history:_.Kmc,window:_.Bw,HB:_.Ky,Ib:_.Uw,Ed:_.Zw,h4a:_.e7}}};_.h=_.q7.prototype;_.h.qg=function(){return this.Fa.qg()};
_.h.T2a=function(a){a.event.preventDefault();a=_.wh(this.getRoot().el(),3,_.ie(this.getRoot().getData("ictx"),-1));var b=this.qg().Cc(),c=_.n_c(b),d=_.Bh(this.getRoot().el(),3),e=new Map,f=this.Re.XL();f&&e.set("bmtq",f);this.Re.dKb();a={Lp:this.pwa(),fZ:b.getUniqueId(),IF:this.Na.oa().id(),lT:_.ep(this.getRoot().getData("deckid"),""),wd:a,Bd:d,zr:c,Zea:e};_.Cpm(a);this.yGb(a);this.hAb(_.jp(this.oa.get("nlFNmb")));return!0};_.h.hYa=function(){};_.h.hAb=function(){_.Gh(function(a){_.si(a)})};
_.h.Hkc=function(){var a=this;return _.Gh(function(b){return b.return(a.Ma.GBa())})};_.h.Pgc=function(){this.Ma.URa()};_.h.N8a=function(){};_.h.yGb=function(a){a.lT&&(_.zpm.cache[a.lT]=a.fZ||"");this.Re.mIb();this.Re.Fm(a)};_.h.Ywb=function(){return this.pwa().getBoundingClientRect()};_.h.wJ=function(){};_.h.Jma=function(a){_.dpm(this.Qa,a,{B7:!0})};_.h.Ppa=function(){};_.h.pwa=function(){return this.Ua("sTFXNd").el()};
_.Dpm=function(a,b){var c,d,e,f,g;return _.Gh(function(k){if(1==k.oa)return c=a.Ia.o2(b,{eL:_.Apm(a.HB),hjc:!0,J2:a.kq.AB(a.getRoot().el()).width,SCb:a.oa?_.hw(a.oa.get("bNlkmb")):!1,Voa:2*_.jp(a.oa.get("qd4G6b"))}),_.Hh(k,2),_.Jh(k,a.Ia.Jba(c).then(function(l){return null==l?void 0:l.Aa}),4);if(2!=k.oa)return(d=k.Aa)?k.return(null!=(f=null==(e=_.T2b(d))?void 0:e.scope(b.getId()))?f:null):k.return(null);g=_.Kh(k);_.qb(g);return k.return(null)})};_.U(_.q7.prototype,"PIddz",function(){return this.pwa});
_.U(_.q7.prototype,"C1G1Ce",function(){return this.Ppa});_.U(_.q7.prototype,"s370ud",function(){return this.Jma});_.U(_.q7.prototype,"geL4Eb",function(){return this.wJ});_.U(_.q7.prototype,"C9WJgd",function(){return this.Ywb});_.U(_.q7.prototype,"cJhY7b",function(){return this.N8a});_.U(_.q7.prototype,"PMavFd",function(){return this.Pgc});_.U(_.q7.prototype,"U9PlK",function(){return this.Hkc});_.U(_.q7.prototype,"LW2zqd",function(){return this.hYa});_.U(_.q7.prototype,"J9iaEb",function(){return this.T2a});
_.U(_.q7.prototype,"qVMRKd",function(){return this.qg});_.vw(_.Sbb,_.q7);






_.p();
});
// Google Inc.
