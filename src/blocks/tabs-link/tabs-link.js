$(function() {
	let hahTab = window.location.hash;	
	let tabsLink = $('.tabs-link');
	let tabsmodal = $('.tabs-modal');

	if(hahTab) {		
		let tabActive = $('.tabs-link[href="'+hahTab+'"]').attr('href');

		if(tabActive) {
			chanchgTab(tabActive);
		}
	}

	tabsLink.on('click', function(e) {
		e.preventDefault();	
		chanchgTab($(this).attr('href'));
	});

	function chanchgTab(tabName) {
		let tabs = $('.tabs__item');
		let tabsLink = $('.tabs-link');

		tabs.removeClass('tabs__item--active');
		$(tabName).addClass('tabs__item--active');

		tabsLink.removeClass('menu-tab__link--active');
		$('.tabs-link[href="'+tabName+'"]').addClass('menu-tab__link--active');
	}

	/*tabsmodal.on('click', function(e) {
		e.preventDefault();	
		chanchgTabModal($(this).attr('href'));
	});

	function chanchgTabModal() {
		$('.tabs-modal').toggleClass('menu-tab__link--active');
	}*/
});