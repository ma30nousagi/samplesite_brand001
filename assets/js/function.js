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
/* particle.js */
/*===========================================================*/ 
  particlesJS("part1", {
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




  $('#wrapper').multiscroll({
	sectionsColor: ['#0f7fa7', '#504237', '#504237','#504237', '#504237', '#504237'],//セクションごとの背景色設定
	anchors: ['area1', 'area2', 'area3','area4','area5','area6'],//セクションとリンクするページ内アンカーになる名前
	menu: '.menu',//上部ナビゲーションのメニュー設定
	navigation: true,//右のナビゲーション出現、非表示は false
	//navigationTooltips:['Area1', 'Area2', 'Area3','Area4','Area5'],//右のナビゲーション現在地時に入るテキスト
	//loopTop: true,//最初のセクションを上にスクロールして最後のセクションまでスクロールするかどうかを定義します。
	loopBottom: true,//最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
    //※以下は今回のプラグインの組み合わせのみで使用。ページの途中でリロードしてもトップのタイピング出現
    afterLoad: function(anchorLink, index){
		if(index == 1){
			TextTypingAnime();
		}	
	}  
});

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
        var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}




/*==================================================
/*関数をまとめる*/
/*===================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TextTypingAnime();//印象編 8-10テキストがタイピング風に出現する関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    
    //機能編 4-1-5 ロゴアウトラインアニメーション
    $("#splash_logo").delay(3000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェードアウト

    
  
    //=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる    
    $("#splash").delay(3000).fadeOut(800,function(){//ローディング画面を3秒（3000ms）待機してからフェードアウト
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与 
	
	let element = $(".TextTyping");
	element.each(function () {
		let text = $(this).html();
		let textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/

}); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
    
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述


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