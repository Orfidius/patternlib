//Dependancies
import 'bootstrap';
import '../vendor/pikabu.min.js';
import '../vendor/navAccordion.js';

// Jquery Plugins
import './newsSlice.js';
import 'bxslider';

class imodFrontCore {
    
    
       mobileInit() {
            /* Initialize Pikabu mobile menu
             ********************************************/
            // creates new left nav panel at 70% wide
            var pikabu = new Pikabu({
                widths: { left: '70%' },
                //add class to fix the fixed height on resize
                onInit: function() { jQuery('html').addClass('m-pikabu-closed'); },
                onOpened: function() { jQuery('html').removeClass('m-pikabu-closed'); },
                onClosed: function() { jQuery('html').addClass('m-pikabu-closed'); }
            });
            // close nav panel when window is resized only if nav is open
            if (!pikabu.device.isAndroid) {
                jQuery(window).resize(function() {
                    if (pikabu.activeSidebar) {
                        pikabu.closeSidebars();
                    }
                });
            }
            //Close Button
            jQuery('#nav-close-btn').on('click', function(e) {
                e.preventDefault();
                pikabu.closeSidebars();
            });
            //Mobile Nav Accordion
            jQuery('.m-pikabu-sidebar .mainNav').navAccordion({
                expandButtonText: '<div class="fa fa-plus"><span class="sr-only">Expand</span></div>', //Text inside of Expand button - this can be a Font Awesome Icon
                collapseButtonText: '<div class="fa fa-minus"><span class="sr-only">Collapse</span></div>' //Text inside of Collapse button - this can be a Font Awesome Icon
            });
        }
    
        dropDownInit() {
    
            /* Dropdown Nav
             ********************************************/
            jQuery('.desktopNav li').on('mouseenter', function(e) {
                jQuery(this).addClass('sfHover');
            });
            jQuery('.desktopNav li').on('mouseleave', function(e) {
                jQuery(this).removeClass('sfHover');
            });
    
            // fix to trigger dropdown menus on focus, not just on hover
            jQuery('.desktopNav li').focusin(function(e) {
                jQuery(this).addClass('sfHover');
            });
            jQuery('.desktopNav li').focusout(function(e) {
                jQuery(this).removeClass('sfHover');
            });
            //Touch
            jQuery('.touch .desktopNavInner > ul > li:has(ul) > a').on('click', function(e) {
                if (!jQuery(this).hasClass('open')) {
                    e.preventDefault();
                    jQuery('.desktopNav .open').removeClass('open');
                    jQuery(this).addClass('open');
                }
            });
            if (jQuery('html').hasClass('touch')) {
                jQuery(document).on('click', function(e) {
                    if (!jQuery(e.target).hasClass('open')) {
                        jQuery('.desktopNav .open').removeClass('open');
                    }
                });
            }
        }
    
        loggedInAdd() {
            //Logged in
            if (jQuery("#CmsMasterMenu").length > 0) {
                jQuery('html').addClass('loggedin');
            }
        }
    
        houseKeeping() {
            //Remove Empty space from subtitle
            jQuery('.PageSubTitleHeader').each(function() {
                if (jQuery(this).text().trim().replace(/\&nbsp\;/g, '').length === 0) {
                    jQuery(this).parent().css('display', 'none');
                    jQuery(this).parent().next('br').css('display', 'none');
                }
            });
        }
    
        fixes() {
            //Fix background images if messed up by Chrome
            jQuery('div[style*="background-image"].thumb').each(function() {
                var style = jQuery(this).attr('style');
                style = style.replace(/(\s)/g, '').replace(/(background-image:url\('?"?)(http:\/\/[^\)]*?\/\/)/g, '$1/');
                jQuery(this).attr('style', style);
            });
    
            /* Smooth Scrolling - CSS Tricks 
            http://css-tricks.com/snippets/jquery/smooth-scrolling/
            ********************************************/
            jQuery(function() {
                jQuery('a[href*=#]:not([href=#]):not([class="tabLink"])').click(function() {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = jQuery(this.hash);
                        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            jQuery('html,body').animate({
                                scrollTop: target.offset().top
                            }, 400);
                            return false;
                        }
                    }
                });
            });
        }
    
        searchSetUp() {
            //Search Accessibility
            jQuery('img[id$="_imgbtnSearch"]').attr({ 'role': 'button', 'tabindex': '0' });
            //Search Placeholder
            jQuery('.search input[type="text"], .mobileSearch input[type="text"]').attr('placeholder', 'Search');
        }
    
        removeTable(element) {
            jQuery(element).closest('table')
                .find('td > div').unwrap().unwrap().unwrap().unwrap();
        }
    
        constructor(runOnReady) {
            jQuery((function($) {
              this.mobileInit();  
              this.dropDownInit();  
              this.loggedInAdd();  
              this.searchSetUp();  
              this.houseKeeping();  
              this.fixes();  

              runOnReady();
    
            }).bind(this));
        }
    
    
        /*  Remove Table Function
         *
         *  USAGE EXAMPLE: 
         *  removeTable('.className')
         */
    
    
    }
    
    export default imodFrontCore;