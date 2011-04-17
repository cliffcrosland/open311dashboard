
/**
 * Base Widget for Sparklines with Google Charts
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget('Open311.neighborhoodsTrends', $.Open311.base, {
  /**
   * Default options for the widget.  We need some way
   * of communicating the data source across all widgets.
   */
  options: {
    title: 'Neighborhoods SC trends'
  },
  
  /**
   * Init functions for all barchart google widgets.
   */
  _init: function() {
    this.updateTitle();
    this.loading();
    $(this.element).addClass('open311-neighborhoods-sc-trends');
  }
});

})( jQuery );
