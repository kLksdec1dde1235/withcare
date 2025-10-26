const template = document.getElementById('headerTemplate');
template.innerHTML = `
<header>
<nav class="top">
    <a class="logo"  target="_self" href="./index.html">
      <!-- <p class="logo-font">J A M C L A S S</p> -->
      <img alt="" src="img/jamclass-logo.png" >
    
    </a>    
    
    <div class="menu-btn">

        <!-- <button class="Event_Menu">Event</button> -->
        <button class="total_menu">프로그램</button>
    </div>
</nav>


<div class="ham-con" data-depth="1"><!-- 메뉴 -->
    <div class="bg"></div>
    <div class="container-box">

        <div class="top">
            <div>
                <button class="back">
                    <svg fill="none" viewBox="0 0 24 24" preserveAspectRatio="xMinYMid" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-db _SN-od"><path d="M5 9l7 7 7 -7" stroke="currentColor" data-autoid="chevron:90" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"></path></svg>
                </button>
                
                <p class="txt-cg">학생</p>
                
                <a class="logo"  target="_self" href="">
                  <!-- <p>J A M C L A S S</p>   -->
                  <img alt="" src="img/jamclass-logo.png" >
                </a>
                <p class="close-btn ham-close-btn"><svg viewBox="0 0 24 24" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-da _SN-db"><path stroke="currentColor" d="M4.222 4.222l15.556 15.556M4.222 19.778L19.778 4.222"></path></svg></p>
            </div>
        </div>

        <div class="wrap">
            <div class="menu con-01"><!-- 메뉴 1depth-->

              
                <div class="middle">
                    <ul class="left">
                        <li><p><a target="_self" href="./index.html">메인</a></p></li>
                        <li class="tab02" data-rel="menu-01" data-tit="행복한 아이"><p>행복한 아이</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>
                        <li class="tab02" data-rel="menu-02" data-tit="소통하는 부모"><p>소통하는 부모</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>
                        <li class="tab02" data-rel="menu-03" data-tit="여유로운 나"><p>여유로운 나</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>
                        <li class="tab02" data-rel="menu-04" data-tit="입시/학습법"><p>입시/학습법</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>
                        <li class="tab02" data-rel="menu-05" data-tit="EBS 자격증"><p>EBS 자격증</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>                        
                    </ul>
                </div>
                <!-- <div class="bottom">
                  
                  
                </div> -->
            </div>
            <div class="menu02"><!-- 메뉴 2depth-->
                <div class="menu-01">
                 <div class="set-con">
                         <p>행복한 아이</p>
                        <ul class="top">
                            <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=955">마술사 제니의 과학마술클래스</a></li>
                            <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1114">똑똑하마 유초등 핵심 과학원리</a></li>
                            <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=956">집에서 할 수 있는 놀이체육</a></li>
                            <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=962">집에서 도전하는 플립박스 직업체험</a></li>
                            <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=972">MONEY 독서 영재 스쿨</a></li>
                            <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1115">임창정의 예스아이엠 보컬 트레이닝</a></li>
                            <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=969">아이피칭 아카데미 어린이 피칭교육</a></li>
                        </ul>
                    </div>
                    <!-- <div class="set-con">
                        <p>재능 및 적성 탐색</p>
                        <ul class="bottom">
                            <li><a target="_self" href="./potential-test.html">흥미 및 적성 검사</a></li>
                        </ul>
                    </div>
                    <div class="set-con">
                        <p>대인관계</p>
                        <ul class="bottom">
                            <li><a target="_self" href="./potential-test.html">트라우마, 정서 검사</a></li>
                        </ul>
                    </div>
                    <div class="set-con">
                      <p>학습법</p>
                      <ul class="bottom">
                          <li><a target="_self" href="./howtostudy.html">나만의 학습법 찾기</a></li>
                          <li><a target="_self" href="./burnout-test.html">공부 번아웃 검사</a></li>
                      </ul>
                  </div> -->
                </div>

                <div class="menu-02">
                <div class="set-con">
                <p>소통하는 부모</p>
               <ul class="top">
                   <li><a target="_self" href="https://m.expert.naver.com/mobile/events/21604125725">연세대심리상담센터 [우리아이 보물 찾기]</a></li>
                   <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1064">라라스쿨 내 아이를 위한<br>학부모 성교육 Class</a></li>
                   <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1080">미쉘티쳐와 함께하는<br>뮤직앤아트 태교 Season 1</a></li>
                   <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1124">미쉘티쳐와 함께하는<br>뮤직앤아트 태교 Season 2</a></li>
                   <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1173">평생 공부머리 키워주는 엄마의 언어 습관</a></li>
                   <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1169">행복한 육아를 위한 엄마교과서</a></li>
               </ul>
           </div>
                </div>


                <div class="menu-03">
                <div class="set-con">
                        <p>여유로운 나</p>
                        <ul class="top">
                        <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1112">바리스타가 알려주는<br>커알못을 위한 커피 가이드.zip</a></li>
                        <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=953">집에서 할 수 있는 취미 끝판왕!<Br>DIY키트 만들기</a></li>
                        <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1179">비즈니스 컨설팅 윈윈 협상</a></li>
                      
                    </ul>
                   </div>
                  <!-- <div class="set-con">
                       <p>재능 및 적성 탐색</p>
                       <ul class="bottom">
                           <li><a target="_self" href="./potential-test.html">흥미 및 적성 검사</a></li>
                       </ul>
                   </div>
                   <div class="set-con">
                       <p>대인관계</p>
                       <ul class="bottom">
                           <li><a target="_self" href="./potential-test.html">트라우마, 정서 검사</a></li>
                       </ul>
                   </div>
                   <div class="set-con">
                     <p>학습법</p>
                     <ul class="bottom">
                         <li><a target="_self" href="./howtostudy.html">나만의 학습법 찾기</a></li>
                         <li><a target="_self" href="./burnout-test.html">공부 번아웃 검사</a></li>
                     </ul>
                 </div> -->
               </div>
                
                <div class="menu-04">
                    <div class="set-con">
                    <p>입시/학습법</p>
                    <ul class="top">
                    <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1167">엄마표영어 맘스쿨 BASIC 프로그램</a></li>
                    <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1170">[엄마표 인문학교육]<br>꿈을 이루며 성장하는 엄마로</a></li>
                    <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1171">[EBS슬기로운 중고생활TIP]<br>내신부터 수능까지 통하는 학습법</a></li>
                    <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1174">EBS 선생님이 알려주는<br>중학생 미리하는 입시 교육법</a></li>                    
                    <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1180">[2023년 예비중]<br>EBS선생님께 무엇이든 물어봐!</a></li>                    
                    <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1181">EBS 입시전문 스타 강사의<br>대학 입시선택 노하우</a></li>                    
                    <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1172">EBS선생님들이 알려주는<br>수능에서 내신까지 특급 입시정보</a></li>                  
                </ul>
                    </div>
                </div>


                <div class="menu-05">
                <div class="set-con">
                <p>EBS 자격증</p>
                <ul class="top">
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1111">[EBS 컴퓨터활용능력]1급 2급 필기/실기<br>22년 모의고사 패키지</a></li>
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1106">[EBS공인중개사] 부동산학개론 계산문제특강</a></li>
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1105">[EBS공인중개사] 단원별 기출문제특강<br>- 부동산세법</a></li>
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1104">[EBS 공인중개사] 단원별 기출문제 특강<br>- 부동산공시법</a></li>                              
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1103">[EBS 공인중개사] 단원별 기출문제특강<br>- 민법 및 민사특별법(1)</a></li>                    
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1102">[EBS 공인중개사] 단원별 기출문제특강<br>- 민법 및 민사특별법(2)</a></li>          
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1101">[EBS 공인중개사] 단원별 기출문제특강<br>- 공인중개사법령 및 중개실무</a></li>
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1100">[EBS 공인중개사] 단원별 기출문제특강<br>- 부동산학개론</a></li>
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1095">[EBS 공무원] 노범석 선생님의<br>多담은 한국사 연표 1</a></li>
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1096">[EBS 공무원] 노범석 선생님의<br>多담은 한국사 연표 2</a></li>
                <li><a target="_self" href="https://m.expert.naver.com/mobile/expert/class/curriculum/detail?curriculumId=1094">[EBS 공무원] 김영국 교수의<br>영어 쌩기초 문법</a></li>
                                  
            </ul>
                   </div>
                  
               </div>
              
            </div>
        
        </div>
    </div>
</div>


</header>

`;

document.body.appendChild(template.content);

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


    $('.total_menu').click(function(){//메뉴열기//
        $('.ham-con').show();
		$('body').css('overflow-y','hidden');	
        setTimeout(function() {
            $('header .ham-con').addClass("on")
        }, 100);
    })
    
    $('.ham-close-btn').click(function(){ //메뉴 닫기// 
        $('.wrap').stop().animate({'margin-left' : '0%'})
        $('header .ham-con').removeClass("on");
		$('body').css('overflow-y','scroll');	
        $('header .ham-con .container-box > .top').removeClass('on')
        setTimeout(function() {
            $('.ham-con').hide();
        }, 300); 
    })

    $('.bg').click(function(){//메뉴 컨텐츠 외 클릭시 닫힘
        $('.wrap').stop().animate({'margin-left' : '0%'})
		$('body').css('overflow-y','scroll');	
        $('header .ham-con .container-box > .top').removeClass('on')
        $('header .ham-con').removeClass("on");
        setTimeout(function() {
            $('.ham-con').hide();
        }, 300); 
    })

    $('.min-show .title').on('click',function(){ //모바일에서만 보이는 메뉴
        $(this).next('.min-con').slideToggle()
        $(this).toggleClass("on")
        // $(this).parents().find('header .ham-con .menu').toggleClass("on");
        // if($('.min-show .title').hasClass('on') == length < 1){
        //     $('.min-show .car-box,.bottom li,.middle ul li').addClass('on')
        // }else if($('.min-show .title').hasClass('on') == length < 0) {
        //     $('.min-show .car-box,.bottom li,.middle ul li').removeClass('on')
        // }
    })

    $('.Event_Menu').click(function(){//메뉴 열기//
        $('.our-con').slideToggle(400);
        $('.our-con').toggleClass("on");
		var our_con_check = $('.our-con').hasClass('on');
		if(our_con_check == true){
			$('body').css('overflow-y','hidden');	
		}else{
			$('body').css('overflow-y','scroll');						
		}

    })

    $('.out-close-btn').click(function(){//메뉴 닫기//
        $('.our-con').slideUp(400);
        $('.our-con').removeClass("on");
		$('body').css('overflow-y','scroll');	
    })

    $('.bg02').click(function(){//our-con 컨텐츠 외 클릭시 닫힘
        $('.our-con').slideUp(400);
        $('.our-con').removeClass("on");
		$('body').css('overflow-y','scroll');	
    })
    
    $('.left li').on('click',function(){ //메뉴 1depth//
        var data = $(this).attr('data-rel');
        var $content = $('.' + data);
        $(this).addClass("on").siblings().removeClass("on")
        $content.show().siblings().hide()
    })

    $(".tab02").on('click',function(){//메뉴 2depth// 
        var title = $(this).data('tit'); 
        $(".txt-cg").text(title);
        $(this).parents('.wrap').stop().animate({'margin-left' : '-100%'})
        $('header .ham-con .container-box > .top').addClass("on");
        $('.ham-con').attr("data-depth", 2);
    })

    $(".tab03").on('click',function(){ //메뉴 3depth//
        var title = $(this).data('tit');
        $(".txt-cg").text(title);
        $(this).parents('.wrap').stop().animate({'margin-left' : '-200%'})
        $('.ham-con').attr("data-depth", 3);
    })

    $(".back").on('click',function(){ //메뉴 돌아가기//
        var depth = Number($('.ham-con').attr("data-depth"));
        var left = (depth - 2) * -100;
        $('.wrap').stop().animate({'margin-left' : left+'%'})
        if (0 == left) {
            $('header .ham-con .container-box > .top').removeClass("on");
        }

        $('.ham-con').attr("data-depth", (depth - 1)); 
    })