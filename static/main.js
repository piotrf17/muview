function main() {
    $.get('/muview', {}, function(data) {
	    var scrobs = data.data;

	    var h = scrobs.length*50 + 25;
	    var w = 100;

	    var svg = d3.select("body")
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	    var circs = svg.selectAll("circle")
		.data(scrobs)
		.enter().append("svg:circle")
		.attr("cx", 50)
		.attr("cy", function(d, i) {
			return 50*i;
		    })
		.attr("r", function(d) {
			return 10;
		    })
		.attr("fill", "red")
		.on('click', function() {
			var song = d3.select(this).data();
			console.log(song[0].track.name);
		    });
      });
}