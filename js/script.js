<script>
      window.onload = function () {
         var span = document.getElementsByTagName("span")[0];
         console.log(span);
         var btn = document.getElementsByTagName("a")[0];
         //拿到所有文字
         var str = span.innerHTML;
         //设置一个开关，记录展开和收缩
         var isOn = true;
         //btn添加事件，在事件里修改span文字
         btn.onclick = function () {
            //点击按钮的时候改变开关的值
            isOn = !isOn;
            if (isOn == true) {
               span.innerHTML = str;
               btn.innerHTML = "收缩";
            } else {
               //收缩
               span.innerHTML = str.substring(0, 300) + "...";
               btn.innerHTML = "展开";
            }
         }
      }
