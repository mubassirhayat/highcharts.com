$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "et-be",
            "value": 0
        },
        {
            "hc-key": "et-2837",
            "value": 1
        },
        {
            "hc-key": "et-ha",
            "value": 2
        },
        {
            "hc-key": "et-ti",
            "value": 3
        },
        {
            "hc-key": "et-af",
            "value": 4
        },
        {
            "hc-key": "et-am",
            "value": 5
        },
        {
            "hc-key": "et-sn",
            "value": 6
        },
        {
            "hc-key": "et-ga",
            "value": 7
        },
        {
            "hc-key": "et-aa",
            "value": 8
        },
        {
            "hc-key": "et-so",
            "value": 9
        },
        {
            "hc-key": "et-dd",
            "value": 10
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/et/et-all.js">Ethiopia</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/et/et-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
