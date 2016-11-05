Handlebars.registerHelper('encode', function (string) {
  return encodeURIComponent(string);
});

$(function () {
	var rentalTemplate = $('#rentals-template').html();
	var compiledRentalTemplate = Handlebars.compile(rentalTemplate);
	var compiledRentalHTML = compiledRentalTemplate(json);

	$('#rentals').html(compiledRentalHTML);
});
