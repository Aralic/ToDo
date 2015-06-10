define(['min$', 'util'], function($, _) {
    if (_.isMobile()) {
         window.location.hash = 'type';

         var oldHash = location.hash;
         _.event.addEvent(window, 'hashchange', function() {
             var newHash = location.hash;
             var oldEle = $('.' + oldHash.substr(1));
             var newEle = $('.' + newHash.substr(1));
             if ((oldHash == '#type' && newHash == '#task') || (oldHash == '#task' && newHash == '#details') ) {

                 newEle.style.display = 'block';
                 _.addClass(oldEle, 'slide out');
             
                 _.addClass(newEle, 'slide in');

                 setTimeout(function() {
                     oldEle.className = oldEle.className.replace(/\s+slide\s+out/, '')

                     newEle.className = newEle.className.replace(/\s+slide\s+in/, '')

                     oldEle.style.display = 'none';
                 }, 1000);
                 
                 
             }
             else if ((oldHash == '#task' && newHash == '#type') || (oldHash == '#details' && newHash == '#task')) {
                 newEle.style.display = 'block';
                 _.addClass(oldEle, 'slide reverse out');
                 
                 _.addClass(newEle, 'slide reverse in');

                 setTimeout(function() {
                     oldEle.className = oldEle.className.replace(/\s+slide\s+reverse\s+out/, '')

                     newEle.className = oldEle.className.replace(/\s+slide\s+reverse\s+in/, '')

                     oldEle.style.display = 'none';
                 }, 1000);
             }
             oldHash = newHash;
         });
    }
    
});
   
        

       
            
            

            
