/**
* Plot Generator (jQuery plugin)
* Version: 0.1
* Released: 2011-11-30
*
* Copyright (c) 2013 Creative Area
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Require jQuery
* http://jquery.com/
* Copyright 2011, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($){
	$.fn.extend({
		generatePlot: function(data, init) {
			var container = this;
			var plotData = data;

			// generator
			var plotGenerator = {
				getRandomInt: function(min, max) {
					return Math.floor(Math.random() * (max - min + 1) + min);
				},
				roll: function(data, delta) {
					delta = delta || 0;
					var max = data.length - 1 - delta;
					return data[plotGenerator.getRandomInt(0, max)];
				},
				generateItem: function(item, level) {
					var data = plotData[ item ];
					var $div = $('<div class="plot-item">');
					$div.append('<button class="generate-plot-item" data-item="'+item+'" data-level="'+level+'">Change</button> ');
					if ( data.label ) {
						$div.append('<strong>'+data.label+': </strong>');
					}
					var what = plotGenerator.roll(data.roll);
					if ( $.isArray(what) ) {
						switch (what[1]) {
							case 'appear':
								// roll twice: first is real, second is appearance
								var display = plotGenerator.roll(data.roll, 1)+' ('+what[0]+' '+plotGenerator.roll(data.roll, 1)+')';
								$div.append(display);
							break;
							case 'twice':
								// (roll on this table twice, ignoring any further 20s)
								var display = what[0]+': '+plotGenerator.roll(data.roll, 1)+' + '+plotGenerator.roll(data.roll, 1)+'';
								$div.append(display);
							break;
							case 'subroll':
								$div.append(what[0]);
								$div.append(
									$('<blockquote>').append( plotGenerator.generate(what[2], level+1) )
								);
							break;
							default:
								$div.append(what[0]);
							break;
						}
					} else {
						$div.append(what);
					}
					return $div;
				},
				generate: function(item, level) {
					level = level || 2;
					var data = plotData[ item ];
					var $div = $('<div class="plot-item">');
					if ( data.group != undefined ) {
						if ( data.label ) {
							$div.append('<h'+level+'><button class="generate-plot-group" data-item="'+item+'" data-level="'+level+'">Change</button> '+data.label+'</h'+level+'>');
						}
						$.each(data.group, function(index, val) {
							$div.append(plotGenerator.generateItem(this, level));
						});
					} else {
						$div.append(plotGenerator.generateItem(item, level));
					}
					return $div;
				}
			};

			// events
			this.on('click', '.generate-plot-group', function(e){
				e.preventDefault();
				var $this = $(this);
				var data = $this.data();
				$this.closest('.plot-item').html(plotGenerator.generate(data.item, data.level));
			});
			this.on('click', '.generate-plot-item', function(e){
				e.preventDefault();
				var $this = $(this);
				var data = $this.data();
				$this.closest('.plot-item').html(plotGenerator.generateItem(data.item, data.level));
			});

			// generate content
			container.html('');
			$.each(init, function(index, val) {
				container.append(plotGenerator.generate(this));
			});

			return this;
		}
	})
})(jQuery);