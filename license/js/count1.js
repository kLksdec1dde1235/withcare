$(function() {
    var targetDate = new Date(2023, 7, 20, 23, 59, 59); // 월은 0부터 시작하므로 7은 8월을 나타냅니다.
    var year = targetDate.getFullYear();
    var month = targetDate.getMonth() + 1;
    var day = targetDate.getDate();

    var weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    var dayOfWeek = weekdays[targetDate.getDay()];

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get current time
        var now = new Date().getTime();
      
        // Find the distance between now and the countdown date
        var distance = targetDate - now;
      
        // Calculate time units
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
        var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");
      
        // Output the result in an element with id="countdown"
        document.getElementById("day").innerHTML = year + ". " + month + ". " + day;
        document.getElementById("countdown").innerHTML = days + "일 " + hours + "시 " + minutes + "분 " + seconds + "초 남음 ";

        document.getElementById("day1").innerHTML = year + ". " + month + ". " + day;
        document.getElementById("countdown1").innerHTML = days + "일 " + hours + "시 " + minutes + "분 " + seconds + "초 남음 ";

        document.getElementById("day2").innerHTML = year + "년 " + month + "월 " + day + "일 (" + dayOfWeek + ") ";
      
        // If the countdown is finished, clear the interval
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "카운트 다운 종료";
            document.getElementById("countdown1").innerHTML = "카운트 다운 종료";
            $(".form-box-inner").hide();
            $(".form-top-title").text("신청이 마감 되었습니다.").css({"margin-bottom":"70px"});
        }
    }, 1000);
});
