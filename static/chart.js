var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scale.linear()
        .range([margin.left, width]);
var y = d3.scale.linear().range([height, 0]);

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });
tip.html(function(d) {
    return "<span class='label label-default'>" + d._id + ':' + d.total + "</span>"
})
svg.call(tip)

d3.json("/chartdata", function(error, response) {
    var data = response.data;
    y.domain([0, d3.max(data, function(d) { return d.total; })]);
    x.domain([0, data.length]);

    svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "steelblue")
      .attr("x", function(d, i) {return x(i); })
      .attr("width", 20)
      .attr("y", function(d) { return y(d.total);})
      .attr("height", function(d) { return height - y(d.total);})
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
});