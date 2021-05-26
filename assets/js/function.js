/*===========================================================*/
/*　openbtn→g-nav　*/
/*===========================================================*/

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});




/*===========================================================*/
/*　footer accordion */
/*===========================================================*/
$('.c-footer-heading').on('click', function() {//タイトル要素をクリックしたら
	$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	let findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
  
});


/*===========================================================*/
/*　page-top */
/*===========================================================*/
function PageTopAnime() {
	let scroll = $(window).scrollTop();
	if (scroll >= 250){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


/*===========================================================*/
/*　アニメーション */
/*===========================================================*/
// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
  // 左からタイトルアニメ
	
	$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
		}else{
			$(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
		}
	});	
    $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
		}else{
			$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
		}
	});
}

// fadeup
function fadeUp() {
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
		let elemPos = $(this).offset().top-50;//要素より、50px上の
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		}else{
		$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});
}

	// flip
function flipLeft() {
  $('.flipLeftTrigger').each(function(){ //flipLeftTriggerというクラス名が
		let elemPos = $(this).offset().top-50;//要素より、50px上の
		let scroll = $(window).scrollTop();
		let windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('flipLeft');// 画面内に入ったらflipLeftというクラス名を追記
		}else{
		$(this).removeClass('flipLeft');// 画面外に出たらflipLeftというクラス名を外す
		}
		});
}

/*===========================================================*/
/*ニュースティッカー*/
/*===========================================================*/

let slider;
let sliderFlag = false;
let breakpoint = 768;//768px以下の場合
  
function sliderSet() {
        let windowWidth = window.innerWidth;
        if (windowWidth >= breakpoint && !sliderFlag) {//768px以上は1行でスライダー表示
            slider = $('.slider').bxSlider({
			      mode: 'vertical',//縦スライド指定
			      controls: false,//前後のコントロールを表示させない。
			      auto: 'true',//自動的にスライド
			      pager: false//ページ送り無効化
		    });
            sliderFlag = true;
        } else if (windowWidth < breakpoint && sliderFlag) {
            slider.destroySlider();//bxSliderのOptionであるdestroySliderを使用してスライダーの動きを除去
            sliderFlag = false;
        }
    }







/*===========================================================*/
/* 制御 */
/*===========================================================*/
//制御splashの後に動かしたい機能
    $(window).on('load',function(){
      $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
      //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
      $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
      
          $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
          sliderSet();//ニュースティッカー
      });
    });

    //制御スクロールしたら動かしたい機能
    $(window).scroll(function () {
      //フェードアップ&flip
      fadeUp();
      flipLeft();
      fadeAnime();
      PageTopAnime();
    });

    $('.splashbg').on('animationend', function() {        
      fadeAnime();
  }); 

  
/*===========================================================*/
/* particle.js */
/*===========================================================*/ 
  particlesJS("particles-js", {
	"particles":{
	  "number":{
		"value":346,//この数値を変更すると星の数が増減できる
		"density":{
		  "enable":true,
		  "value_area":800
		}
	  },
	  "color":{
		"value":"#ffffff"
	  },
	  "shape":{
		"type":"circle",//形状はcircleを指定
		"stroke":{
		  "width":0
		},
		},
	  "opacity":{
		"value":1,//シェイプの透明度
		"random":true,//シェイプの透明度をランダムにする
		"anim":{
		  "enable":true,//シェイプの透明度をアニメーションさせる
		  "speed":3,//シェイプの透明度をアニメーションさせる
		  "opacity_min":0,//透明度の最小値０
		  "sync":false//全てを同時にアニメーションさせない
		}
	  },
	  "size":{
		"value":2,
		"random":true,
		"anim":{
		  "enable":false,
		  "speed":4,
		  "size_min":0.3,
		  "sync":false
		}
	  },
	  "line_linked":{
		"enable":false,
	  },
	  "move":{
		"enable":true,
		"speed":120,//この数値を小さくするとゆっくりな動きになる
	  "direction":"none",//方向指定なし
	  "random":true,//動きはランダムに
	  "straight":true,//動きをとどめる
		"out_mode":"out",
		"bounce":false,
		"attract":{
		  "enable":false,
		  "rotateX":600,
		  "rotateY":600
		}
	  }
	},
	"interactivity":{
	  "detect_on":"canvas",
	  "events":{
		"onhover":{
		  "enable":false,
		},
		"onclick":{
		  "enable":false,
		},
		"resize":true
	  }
	},
	"retina_detect":true
  });