function WhatIsTheTime(timeInMirror)

{
    var t = timeInMirror.split(':');
    var h = parseInt(t[0]);
    var m = parseInt(t[1]);

    var hours = 12 - h === 0 ? 12 : 12 - h; // if 12 - h === 0, hours = 12, else hours = 12 - h;
    var minutes = 60 - m === 60 ? 0 : 60 - m; //if 60 - m is 60, m = 00, else m = 60 - m;
    var hours = minutes !== 0 ? hours - 1 : hours; // if minutes is not 0, hours is hours-1, else hours is hours.
    if(hours == '0'){hours = 12};
    var res = [hours, minutes].map(function(a){
      if(a < 10) {return a = "0"+a} else {return ''+a}
      }).join(':');
    return res;
            // Trying to figure out the "algorithm".
            // if 6, = 6
            // if 7, 5
            // if 8 , 4
            // 9 , 3
            // 10, 2
            // 11, 1
            // 12, 0
            // For minutes its: minutes = 60 - inputMinutes;

            // For hours its 12 - inputHours = hours. Also need to account for 12 - 12, which has to be 12.



            // if 6, = 6
            // if 7, 5
            //if 8 , 4
            // 9 , 3
            //10, 2
            //11, 1
            // 12, 0

}


WhatIsTheTime("11:59");
