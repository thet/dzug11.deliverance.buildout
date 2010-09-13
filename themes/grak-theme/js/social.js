/*
* Social Bookmark Script
* @ Version 2.8
* @ Copyright (C) 2006-2009 by Alexander Hadj Hassine - All rights reserved
* @ Website http://www.social-bookmark-script.de/
* @
* @ Bei Nutzung des Scripts muessen alle unsere Copyright-Hinweise und Links in dem Script selbst,
* @ sowie in der Anzeige/Ausgabe unveraendert bleiben!
* @
* @ D.h., sie duerfen nicht entfernt, umgewandelt, versteckt oder unsichtbar gemacht werden,
* @ es sei den Sie verlinken http://www.social-bookmark-script.de/ mindestens 1 mal
* @ "suchmaschinenfreundlich" von Ihrer Startseite!
-->
*/

function Social_Load() {
var d=document; if(d.images){ if(!d.Social) d.Social=new Array();
var i,j=d.Social.length,a=Social_Load.arguments; for(i=0; i<a.length; i++)
if (a[i].indexOf("#")!=0){ d.Social[j]=new Image; d.Social[j++].src=a[i];}}
}
Social_Load('http://www.social-bookmark-script.de/img/bookmarks/wong_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/webnews_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/oneview_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/folkd_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/yigg_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/newskick_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/linksilo_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/readster_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/favit_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/digg_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/del_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/facebook_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/reddit_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/stumbleupon_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/newsvine_ani.gif','http://www.social-bookmark-script.de/img/bookmarks/what_ani.gif','http://www.social-bookmark-script.de/load.gif')
function schnipp() {
var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function schnupp(n, d) {
  var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
  d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=schnupp(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
  }
function schnapp() {
  var i,j=0,x,a=schnapp.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
  if ((x=schnupp(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
  }
