window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    function tabSwitching(tab, info, contentTab) {
        let infoHeader = document.querySelector("." + info),
            infoTab = infoHeader.querySelectorAll("." + tab),
            tabContent = document.querySelectorAll("." + contentTab);

        function hideTabContent(a) {
            for (let  i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        function showTabContent(b) {
            for (let i = b; i < tabContent.length; i++) {
                if (tabContent[b].classList.contains('hide')) {
                    tabContent[b].classList.remove('hide');
                    tabContent[b].classList.add('show');
                }
            }
        }

        infoHeader.addEventListener('click', function(evt) {
            let target = evt.target;
            evt.preventDefault();
            if (target && target.classList.contains(tab)) {
                for (let i = 0; i < infoTab.length; i++ ) {
                    if (target == infoTab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
});