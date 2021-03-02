// This is a JavaScript file

  $(function() {

    $('#dialog').dialog({
      modal: true,
      autoOpen: false
    }).siblings('div.ui-dialog-titlebar').detach();

    $('#dialog2').dialog({
      modal: true,
      autoOpen: false,
      buttons: [ {
        text: "OK",
        click: function() {
          $( this ).dialog( "close" );
        }
      }
    ]
    }).siblings('div.ui-dialog-titlebar').remove();

    //「投稿内容を表示する」ボタンをクリックしたときの処理。
    $('#button').click(function(event) {

      //前回の入力した内容を入力欄から消す処理。
      $("#textId").val('');

      //モーダルのフォーム画面を表示する。
      $('#dialog').dialog('open');
    });

    //「送信」ボタンをクリックしたときの処理。
    $('#myForm').submit(function(event) {
      event.preventDefault();

      //モーダルのフォーム画面を閉じる。
      $('#dialog').dialog('close');

      //投稿結果を示すモーダルを開く。
      $('#dialog2').dialog('open');

      return false;
    });

  });
