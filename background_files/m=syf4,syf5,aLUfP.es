this._s=this._s||{};(function(_){var window=this;
try{
_.Iqb=function(a){this.Tm=a};
}catch(e){_._DumpException(e)}
try{
var Jqb=function(a){_.ao.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.Tm();this.oa=window.orientation;this.ka=function(){var c=b.Tm(),d=b.xDb()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=_.ab(b.Ne);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new _.Iqb(c);try{e(f)}catch(g){_.ca(g)}}}};this.Ne=new Set;this.window.addEventListener("resize",this.ka);this.xDb()&&this.window.addEventListener("orientationchange",
this.ka)};_.F(Jqb,_.ao);Jqb.nb=_.ao.nb;Jqb.Fa=function(){return{service:{window:_.fo}}};Jqb.prototype.addListener=function(a){this.Ne.add(a)};Jqb.prototype.removeListener=function(a){this.Ne.delete(a)};
Jqb.prototype.Tm=function(){if(Kqb()){var a=_.El(this.window);a=new _.ll(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Vb()||(_.ja()?Kqb():this.window.visualViewport)?_.El(this.window):new _.ll(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};Jqb.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};var Kqb=function(){return _.ja()&&_.cf.pK()&&!navigator.userAgent.includes("GSA")};
Jqb.prototype.Vb=function(){return _.Lqb};Jqb.prototype.xDb=function(){return"orientation"in window};_.Lqb=!1;_.go(_.STa,Jqb);
_.Lqb=!0;
}catch(e){_._DumpException(e)}
try{
_.x("aLUfP");

_.y();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
