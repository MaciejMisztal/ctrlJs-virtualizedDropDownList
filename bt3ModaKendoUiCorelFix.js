/*
* Fix for interaction Kendo UI Core with Bootstrap3 modal.
* Source: http://www.telerik.com/forums/dropdownlist-closes-when-setting-filter-option
*/
(function ($, kendo) {

    var  _init = kendo.ui.Popup.fn.init;

    var Popup = kendo.ui.Popup.extend({
        init: function (element, options) {
            // Only set appendTo if nothing was manually set in the options.
            if (options.appendTo === undefined) {
                // Find the nearest parent bootstrap modal, if any.
                var parentModal = $(options.anchor).closest('.modal');

                // Found one!
                if (parentModal.length > 0) {
                    options.appendTo = parentModal[0];
                }
            }

            // Call the base constructor.
            _init.call(this, element, options);
        }
    });

    kendo.ui.plugin(Popup);
}(window.kendo.jQuery, window.kendo));