// JavaScript Document

//상단 배너 슬라이드//

$(function() {
    $('#v_simg').ulslide({
     statusbar: true,
     width: 2000,    //슬라이드배너 가로사이즈
     height: 559,     //슬라이드배너 세로사이즈
     affect: 'slide',   //'fade'로 변경시 이미지가 투명하게 사라지면서 다음이미지가 보여짐
     axis: 'x',        //슬라이드 방향 x=가로, y=세로
     navigator: '#v_sbtn a',  //페이지네이션
     duration: 400,
     autoslide: 3000,
     nextButton: '.v_next',
     prevButton: '.v_prev'
    });
   });
  
  //상단배너 슬라이드 끝//
  
  
  //이벤트 슬라이드//
   $(function() {
    $('#e_simg').ulslide({
     statusbar: true,
     width: 1000,    //슬라이드배너 가로사이즈
     height: 226,     //슬라이드배너 세로사이즈
     affect: 'fade',   //'fade'로 변경시 이미지가 투명하게 사라지면서 다음이미지가 보여짐
     axis: 'x',        //슬라이드 방향 x=가로, y=세로
     navigator: '#e_sbtn a',  //페이지네이션
     duration: 700, 
     autoslide: 2000,
     nextButton: '.e_next',
     prevButton: '.e_prev'
    });
   });
  //이벤트 슬라이드 끝//
  
  
  // 탭 메뉴 
  function tab_menu(num){	
      var f = $('.menu_tab').find('li');
      for ( var i = 0; i < f.length; i++ ) {			
          if ( i == num) {			
              f.eq(i).addClass('active');	
              $('.menu_tab0' + i ).show();
          } else {
              f.eq(i).removeClass('active');					
              $('.menu_tab0' + i ).hide();
          }
      }
  }
  function tab_menu2(num){	
      var f = $('.menu_tab2').find('li');
      for ( var i = 0; i < f.length; i++ ) {			
          if ( i == num) {			
              f.eq(i).addClass('active');	
              $('.menu_tab00' + i ).show();
          } else {
              f.eq(i).removeClass('active');					
              $('.menu_tab00' + i ).hide();
          }
      }
  }
  
  //전체메뉴보기
  function allMenuAc(){
      var obj = jQuery(".total_menu");
      var objClose = jQuery(".allMenu_close");
  }
  function allMenuAc_view(){
      var obj = jQuery(".total_menu");
      obj.show().css({"top":"-400px","height":"390px"}).animate(
              {top:0}
              ,1000
      );
  }
  function allMenuAc_hide(){
      var obj = jQuery(".total_menu");
      obj.animate(
              {top:-400}
              ,1000
              ,function(){
                  obj.hide().css({"height":"0"});
              }
      );
  }
  
  
  
  
  