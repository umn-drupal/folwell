(function ($, Drupal) {

    Drupal.behaviors.folwellResponsiveTables = {
        attach: function() {
            $.extend({
                responsiveTables: function (breakpoint) {
                    breakpoint = breakpoint || '800px';
                    if ($('table').length > 0) {
                        $('table').each(function (i) {
                            i++;
                            var className = 'jrt-instance-' + i;
                            var $this = $(this);
                            $this.addClass('jrt');
                            $this.addClass(className);
          
                            var respondHtml = '<style type="text/css">\n';
                            respondHtml += '@media only screen and (max-width:' + breakpoint + ')  {\n';
                            var arrHeaderText = [];
                            $this.find('thead th').each(function (i, $text) {
                                $text = $(this).text();
                                i++;
                                arrHeaderText.push($text);
                                respondHtml += '\t.' + className + '>tbody>tr>td.jrt-cell-' + i + ':before { content: "' + $text + '"; }\n';
                            });
                            $this.find('tbody > tr').each(function (i) {
                                var $this = $(this);
                                i++;
                                var arrColspan = [];
                                var modIndex = [];
                                $this.find('td').each(function (i, c, m) {
                                    var $this = $(this);
                                    i++;
                                    if (modIndex > 0) {
                                        modIndex[0];
                                        i++;
                                    }
                                    if (arrColspan > 0) {
                                        m = (i + arrColspan.shift() - 1);
                                        modIndex.splice(0, 1);
                                        modIndex.push(m);
                                        i = m;
                                    }
                                    if ($this.is('[colspan]')) {
                                        c = parseInt($(this).prop('colspan'), 10);
                                        arrColspan.push(c);
                                    }
                                    $this.addClass('jrt-cell-' + i);
                                });
                            });
                            respondHtml += '}\n';
                            respondHtml += '</style>';
                            $this.before(respondHtml);
                        });
                    }
                }
            });
            var table = $('table');
            table.find('thead th').attr({'scope': 'col', 'tabindex': '0' });
            table.find('td').attr('tabindex', '0');
            table.find('tbody th').attr({'scope': 'row', 'tabindex': '0' });
            $.responsiveTables();
        }
    }

}(jQuery, Drupal));
