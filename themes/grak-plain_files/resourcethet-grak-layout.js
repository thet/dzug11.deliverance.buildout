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
		jQuery("div.grak-nav1-sub").css("display","none");
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
		}
	});

	jQuery("#grak-nav1 > li").mouseout(function() {
		nav_timeout_id = window.setTimeout(
			grakRestoreDefaultMenu,
			nav_timeout_delay
		);
	});

	jQuery("div.grak-nav1-sub").mouseover(function() {
		if (nav_timeout_id) window.clearTimeout(nav_timeout_id);
	});

	jQuery("div.grak-nav1-sub").mouseout(function() {
		nav_timeout_id = window.setTimeout(
			grakRestoreDefaultMenu,
			nav_timeout_delay
		);
	});

}

function grakRebindNewsletter(){
	jQuery("#grak-nl-subscribe").toggle (
		function (){
		    jQuery("#subscription").fadeIn("slow");
			jQuery("#nl_inputs_unsub").hide();
			jQuery("#nl_inputs_sub").show();
			jQuery("#grak-nl-unsubscribe").removeClass("selected");
			jQuery("#grak-nl-subscribe").addClass("selected");
		},
		function (){
		    jQuery("#subscription").fadeOut("slow");
			jQuery("#grak-nl-unsubscribe").removeClass("selected");
			jQuery("#grak-nl-subscribe").removeClass("selected");
		}
	);
	jQuery("#grak-nl-unsubscribe").toggle (
		function (){
		    jQuery("#subscription").fadeIn("slow");
			jQuery("#nl_inputs_sub").hide();
			jQuery("#nl_inputs_unsub").show();
			jQuery("#grak-nl-unsubscribe").addClass("selected");
			jQuery("#grak-nl-subscribe").removeClass("selected");
		},
		function (){
		    jQuery("#subscription").fadeOut("slow");
			jQuery("#grak-nl-unsubscribe").removeClass("selected");
			jQuery("#grak-nl-subscribe").removeClass("selected");
		}
	);
}

jQuery(document).ready(function(){
	jQuery("#subscription").hide();
	grakRebindMenu();
	grakRebindNewsletter();
});
