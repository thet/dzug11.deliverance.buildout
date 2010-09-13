(function($) {
function showHelp() {
	$(this).siblings('.formHelp').text($(this).find('option:selected').attr('title') || '\u00A0');
};
var cache = {}
function selectField() {
	var field = $(this).val()
	if (cache[field] == undefined)
		$.getJSON('@@jsoncriteria', { field: field }, 
			function(data) { 
				cache[field] = data; 
				updateCriterionType(data) 
			});
	else updateCriterionType(cache[field]);
};
function updateCriterionType(data) {
  $('#criterion_type').empty().html(
	  $.map(data, function(entry) {
		  return '<option value="' + entry.value + '">' + entry.label + '<' +
				 '/option>';
	  }).join('')
  ).change();
};
$(function() {
	$('#field, #sortfield').change(showHelp);
	$('#field').change(selectField).change();
})
})(jQuery);