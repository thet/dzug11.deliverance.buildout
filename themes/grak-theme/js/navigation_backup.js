var nav_timeout_id = 0;
var nav_timeout_delay = 200;

function getBaseId(fullId, substr) {
	/* Return a string with substring chopped from the left. */
	return fullId.substring(substr.length,fullId.length);
}
function grakRebindMenu(){

	var active_menu_config = {};
	active_menu_config.id = null;
	active_menu_config.baseId = null;

	var active_menu = jQuery("#grak-nav1 > li.selected");
	if (active_menu.length) {
		active_menu_config.id = active_menu.attr("id");
		active_menu_config.baseId = getBaseId(
			active_menu_config.id, "grak-navitem-"
		);
	}

	function grakClearAll() {
		jQuery("#grak-nav1 > li").not(".selected").removeClass("navpoint");
		jQuery("#grak-nav1 ul").css("display","none");
		/* IF NAVBALKEN EXIST - exists only in end-user theme */
		jQuery(".grak-navbalken1spaltig").css("display","none");
		jQuery(".grak-navbalken2spaltig").css("display","none");
	}

	function grakClearActiveMenuBG() {
		jQuery("#grak-nav1 > li.selected").removeClass("navpoint");
	}

	function grakRestoreDefaultMenu() {
		grakClearAll();
		if (active_menu_config.id) {
			jQuery("#grak-nav1 > li.selected").addClass("navpoint");
			var submenu = jQuery("#grak-sub-" + active_menu_config.baseId);
			if (submenu.length) {
				submenu.css("display","block");
				jQuery(".grak-navbalken1spaltig").css("display","block");
				if (active_menu_config.baseId == 'themen') {
					jQuery(".grak-navbalken2spaltig").css("display","block");
				}
			}
		}
		jQuery("#grak-nav1 > li").not(".selected").removeClass("navpoint");
	}

	jQuery("#grak-nav1 > li").mouseover(function() {
		if (nav_timeout_id) window.clearTimeout(nav_timeout_id);
		var this_id = jQuery(this).attr("id");
		if (active_menu_config.id) {
			if (active_menu_config.id != this_id) {
				grakClearActiveMenuBG();
			}
		}
		grakClearAll();
		jQuery(this).addClass("navpoint");
		var baseId = getBaseId(this_id, "grak-navitem-");
		var submenu = jQuery("#grak-sub-" + baseId);
		if (submenu.length) {
			submenu.css("display","block");
			jQuery(".grak-navbalken1spaltig").css("display","block");
			if (baseId == 'themen') {
				jQuery(".grak-navbalken2spaltig").css("display","block");
			}
		}

	});

	jQuery("#grak-nav1 > li").mouseout(function() {
		nav_timeout_id = window.setTimeout(
			grakRestoreDefaultMenu,
			nav_timeout_delay
		);
	});

	jQuery("#grak-nav1 ul").mouseover(function() {
		if (nav_timeout_id) window.clearTimeout(nav_timeout_id);
	});

	jQuery("#grak-nav1 ul").mouseout(function() {
		nav_timeout_id = window.setTimeout(
			grakRestoreDefaultMenu,
			nav_timeout_delay
		);
	});

}

function grakRebindNewsletter(){
	jQuery("#grak-nl-subscribe").toggle (
		function (){jQuery("#subscription").fadeIn("slow");},
		function (){jQuery("#subscription").fadeOut("slow");}
	);
	jQuery("#grak-nl-unsubscribe").toggle (
		function (){jQuery("#subscription").fadeIn("slow");},
		function (){jQuery("#subscription").fadeOut("slow");}
	);
}

jQuery(document).ready(function(){
	$("#subscription").hide();
	grakRebindMenu();
	grakRebindNewsletter();
});


/*
$(document).ready(function() {
$("#grak-nav1sub1").hide();
$("#grak-nav1sub2").hide();
$("#grak-nav1sub3").hide();
$("#grak-nav1sub4").hide();
$("#grak-nav1sub5").hide();
$("#grak-nav1sub6").hide();
$(".grak-navbalken1spaltig").hide();
$(".grak-navbalken2spaltig").hide();

$("#subscription").hide();




$(".veranstaltungenSub").hover (
	function(){
		$("#grak-nav1sub1").fadeIn().show();
		$(".veranstaltungenSub").addClass("navpoint");
		$(".grak-navbalken1spaltig").show();
		},
	function(){
		$("#grak-nav1sub1").hide();
		$(".veranstaltungenSub").removeClass("navpoint");
		$(".grak-navbalken1spaltig").fadeOut("slow").hide

		}
	);

$(".themenSub").hover (
	function(){
		$("#grak-nav1sub2").show();
		$(".themenSub").addClass("navpoint");
		$(".navpointVeranstaltungen").show();
		},
	function(){
		$("#grak-nav1sub2").hide();
		$(".themenSub").removeClass("navpoint");
		delay:400
		}
	);

$(".publikationenSub").hover (
	function(){
		$("#grak-nav1sub3").show();
		$(".publikationenSub a").addClass("linkSub");

		},
	function(){
		$("#grak-nav1sub3").hide();
		$(".publikationenSub a").removeClass("linkSub");
		delay:400
		}
	);

$(".archivSub").hover (
	function(){
		$("#grak-nav1sub4").show();
		$(".archivSub a").addClass("linkSub");

		},
	function(){
		$("#grak-nav1sub4").hide();
		$(".archivSub a").removeClass("linkSub");
		delay:400
		}
	);

$(".ueberUnsSub").hover (
	function(){
		$("#grak-nav1sub5").show();
		$(".ueberUnsSub a").addClass("linkSub");

		},
	function(){
		$("#grak-nav1sub5").hide();
		$(".ueberUnsSub a").removeClass("linkSub");
		delay:400
		}
	);

$(".kontaktSub").hover (
	function(){
		$("#grak-nav1sub6").show();
		$(".kontaktSub a").addClass("linkSub");

		},
	function(){
		$("#grak-nav1sub6").hide();
		$(".kontaktSub a").removeClass("linkSub");
		delay:400
		}
	);

$(".anmButton").toggle (
	function (){
		$("#subscription").fadeIn("slow");
	},
	function (){
		$("#subscription").fadeOut("slow");
	}
);

});
*/
