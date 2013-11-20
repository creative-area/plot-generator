# Plot Generator

jQuery plugin to generate a plot with as many sub-level as you want. Each plot level can be regenerated with a simple click.

A Big Thanks to [Modiphius](http://www.modiphius.com/) for the Achthung! Cthulhu data!

To generate a plot, just do:

	$('#plot').generatePlot( plotData, [ 'table_key', 'another_table_key', ... ] );

This will display a random plot based on `plotData`. The tables displayed are  listed on the second argument. Other tables can be used for sub-levels (see __Sub level__).

## Plot Data

The data need to be formated like this:

	plotData = {
		'table_key': { /* table options */ },
		'another_table_key': { /* table options */ },
		...
	}

Each table can be a __data table__ (with a `roll` option) or a __group of tables__ (with a `group` option). Each type of table can have an optional `label` option.

__ Data table __

	'table_key': {
		'label': 'Label display before the roll text (optional)',
		'roll': [
			'A plot description',
			'Or a character',
			'Or a place',
			'Or what you want!',
			'Has many you want',
			'Cthulhu',
			...
		]
	}

__ Group Table __

	'another_table_key': {
		'label': 'Another Label (optional)',
		'group': [ 'table_key', 'table_key_grouped', ... ]
	},

## Sub level and value options

You can add a sub level on a roll like this:

	'table_key': {
		'label': 'Label',
		'roll': [
			'A plot',
			['Roll a sub level label', 'subroll', 'table_key_for_subroll'],
			'Cthulhu',
			...
		]
	}

On last data, you can add `['Escalation', 'twice']` or `[ 'Appears to be', 'appear' ]`. Both make 2 rolls (and exclude them). The only difference is on render.