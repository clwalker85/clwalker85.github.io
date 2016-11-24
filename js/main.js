$(function () {
	var rentalTemplate = $('#rentals-template').html();
	var rentalPreviewTemplate = $('#rental-previews-template').html();
	var compiledRentalTemplate = Handlebars.compile(rentalTemplate);
	var compiledRentalPreviewTemplate = Handlebars.compile(rentalPreviewTemplate);
	var compiledRentalHTML = compiledRentalTemplate(json);
	var compiledRentalPreviewHTML = compiledRentalPreviewTemplate(json);

	$('#rentals').html(compiledRentalHTML);
	$('#rental-previews').html(compiledRentalPreviewHTML);
});
