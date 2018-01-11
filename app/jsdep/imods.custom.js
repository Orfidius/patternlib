
/* On Document Ready
********************************************/
jQuery(function($){ 

    //Add section classes to HTML tag - to help with theme/general styling based on section selection
	//Ideally this will move to the grunt.js build file instead of firing per page load
	jQuery('*[data-sectionName]').each(function() {
		var value=jQuery(this).attr('data-sectionName');
		jQuery('html').addClass(value);
	});

	//Add class to HTML tag if ESK warning is present
	if(jQuery("#ContentWarning").contents().length > 0) {
		jQuery('html').addClass('warningPresent');
	}

	/* Dropdown Nav
	********************************************/
	jQuery('.desktopNav li').on( 'mouseenter', function(e){
		jQuery(this).addClass('sfHover');
	});
	jQuery('.desktopNav li').on( 'mouseleave', function(e){
		jQuery(this).removeClass('sfHover');
	});
		//Touch
		jQuery('.touch .desktopNavInner > ul > li:has(ul) > a').on('click', function(e){
			if(!jQuery(this).hasClass('open')){
				e.preventDefault();
				jQuery('.desktopNav .open').removeClass('open');
				jQuery(this).addClass('open');
			}
		});
		if(jQuery('html').hasClass('touch')) {
			jQuery(document).on('click', function(e){
				if (!jQuery(e.target).hasClass('open')) {
					jQuery('.desktopNav .open').removeClass('open');
				}
			});
		}
	
	/* fade in "go to top" button */
	// Show or hide the sticky footer button (TOP button)
	jQuery('.go-top').hide();
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > 200) {
			jQuery('.go-top').fadeIn(200);
		} else {
			jQuery('.go-top').fadeOut(200);
		}

		var footerHeight = jQuery('footer').outerHeight();
		if(jQuery(window).scrollTop() + jQuery(window).height() == jQuery(document).height()) {
			jQuery('.go-top').css('bottom', footerHeight);
		}else {
			jQuery('.go-top').css('bottom', '4em');
		}
			
	});
	
	// Animate the scroll to top
	jQuery('.go-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, 300);
	});
	
	//Logged in
	if (jQuery("#CmsMasterMenu").length > 0){
		jQuery('html').addClass('loggedin');
	}
	
	//Remove Empty space from subtitle
	jQuery ('.PageSubTitleHeader').each(function() {
		if(jQuery(this).text().trim().replace(/\&nbsp\;/g, '').length === 0) {
			jQuery(this).parent().css('display', 'none');
			jQuery(this).parent().next('br').css('display', 'none');
		}
	});
	
	//Search Accessibility
	jQuery('img[id$="_imgbtnSearch"]').attr({'role' : 'button', 'tabindex' : '0'});
	//Search Placeholder
	jQuery('.search input[type="text"], .mobileSearch input[type="text"]').attr('placeholder', 'Search');

	// add bottom margin if area has content
	if(jQuery(".emptyCollapse-bottom").contents().length > 0) {
		jQuery(".emptyCollapse-bottom").addClass('spacer-bottom');
	}

	// add bottom margin if area has content
	if(jQuery(".emptyCollapse-top").contents().length > 0) {
		jQuery(".emptyCollapse-top").addClass('spacer-top');
	}


	//expanding/collapsing news layout
	jQuery('.panelCollapse.collapseItem').newsItemSlice({
		containerWrapper: '<div class="accordion"></div>'
	});

   var accordionPanelCount = 1;
   var accordionCount = 1;

    jQuery(".imodcmscalendar").each(function() {
      jQuery(this).find(".panelCollapse").wrapAll("<div class='accordion panel-group' id='accordion" + accordionCount + "'></div>");
      accordionCount++;
    });

    jQuery(".panelCollapse").each(function() {
	  var currAccordID = jQuery(this).parent().attr('id');
      jQuery(this).find("a.accordionToggle").attr('href','#panel' + accordionPanelCount).attr('data-parent','#'+currAccordID).wrap('<div class="panel-heading"></div>');
      jQuery(this).find(".panel-collapse").attr('id','panel' + accordionPanelCount);
	  jQuery(this).find('.accordionPanelWrap').addClass('panel-body');
      accordionPanelCount++;
    });

	jQuery(".accordion .collapseItem a.accordionToggle").click(function() {
    	jQuery(this).toggleClass("open");
		jQuery(this).find('.fa').toggleClass("fa-angle-down fa-angle-up");
        jQuery(this).parent().parent().toggleClass("open");
        var panelId = jQuery(this).attr('href');
  	});


	// sticky nav 
	var stickyNavTop = jQuery('.structHead').offset().top; 
    var stickyNavHeight = jQuery('.structHead').height();
    var isStuck = false;
      
    var stickyNav = function(){  
        var scrollTop = jQuery(window).scrollTop();  
        
            if (scrollTop > (stickyNavTop+stickyNavHeight+35)) {   
                if(isStuck === false) {   
                    jQuery('.structHead').addClass('sticky').animate({top:"0"});
                }
                jQuery("#main").css('margin-top',stickyNavHeight + "px");
                isStuck = true;
            } else {  
                jQuery('.structHead').css('top','').removeClass('sticky');
                jQuery("#main").css('margin-top', "0");  
                isStuck = false; 
            }
       
    };  

	if(jQuery('body').hasClass('stickyHeader')) {
		stickyNav();  

		jQuery(window).scroll(function() {  
				stickyNav();  
		}); 
	}

	// feature hero images
  	if (jQuery("#CmsMasterMenu").length > 0){
  		// if logged in, do nothing
    } else {
        var imgBKGD = jQuery(".fullImg img").attr("src");
        jQuery(".fullImg").css("background-image","url(" + imgBKGD + ")");
        jQuery(".fullImg > img").addClass('invisible');
    }

	// applying classes for the giving form
	if(jQuery('.designationButtons').length > 0) {
		jQuery("table[id$='rblAdvancedDesignations']").find('tbody').addClass('equal-height desWrap');
		jQuery("table[id$='rblAdvancedDesignations']").find('tr').addClass('equal-height-item desItem');
		jQuery("table[id$='rblAdvancedDesignations']").find('td').addClass('equal-height-item-inner desItemWrap');
	}
	jQuery('#main table[id*="rblAdvancedDesignations"] .desItem input').each(function() {
		if(jQuery(this).is(':checked')) {
			jQuery(this).closest('.desItem').addClass('active');
		}
	});
	jQuery('#main table[id*="rblAdvancedDesignations"] .desItem label').on('click',function() {
		jQuery('#main table[id*="rblAdvancedDesignations"] .desItem').removeClass('active');
		jQuery(this).closest('.desItem').addClass('active');
	});

	/* form breadcrumb fixes */
	jQuery(".idbmsBreadcrumbSeparator").remove(); // remove seperators 
	
	// add step count to mobile breadcrumbs
	var stepTotal = jQuery('div[id*="pnlBreadcrumbs"]').children().length;
	var stepCount = 1;

	jQuery('div[id*="pnlBreadcrumbs"]').children().each(function() {
	jQuery(this).prepend('<span class="stepTxt visible-xs-inline-block">Step '+ stepCount + ' of '+ stepTotal +': </span>');
	stepCount++;
	});

	jQuery('.desktopNavInner > ul > li:has(ul)').addClass('hasSub');
	
});



/* Global Functions
********************************************/

	/*  News Item Slicer
	 *
	 *  USAGE EXAMPLE:
	 *  jQuery('.bx_slide').newsItemSlice({
	 *  	containerWrapper: '<div class="bx_slider"></div>'
	 *  	//rowWrapper: '<div class="row"></div>'
	 *  	//countPerRow: 3	
	 *  });
	 */
	(function($) { $.fn.newsItemSlice = function(options){ var items = $(this), selector = items.selector, containerWrapper = options.containerWrapper, rowWrapper = options.rowWrapper, countPerRow = options.countPerRow; for(var i=0; i < items.length;) { var wrap = items.eq(i).nextUntil(':not(' + selector + ')').addBack().wrapAll(containerWrapper); i += wrap.length; if (countPerRow !== undefined) { for(var b = 0; b < wrap.length; b+=countPerRow) { wrap.slice(b, b+countPerRow).wrapAll(rowWrapper); } } } }; }(jQuery));
	
	
	/*  Remove Table Function
	 *
	 *  USAGE EXAMPLE: 
	 *  removeTable('.className')
	 */
	function removeTable(element){
		jQuery(element).closest('table')
			.find('td > div').unwrap().unwrap().unwrap().unwrap();
	}



/* Smooth Scrolling - CSS Tricks 
http://css-tricks.com/snippets/jquery/smooth-scrolling/
********************************************/
jQuery(function() {
  jQuery('a[href*=#]:not([href=#]):not([class="tabLink"],.accordionToggle,.quote-nav a)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});