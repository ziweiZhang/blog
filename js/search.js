var searchFunc=function(path,search_id,content_id){"use strict";$.ajax({url:path,dataType:"xml",success:function(xmlResponse){var datas=$("entry",xmlResponse).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),$input=document.getElementById(search_id),$resultContent=document.getElementById(content_id);$input.addEventListener("input",function(){var str='<ul class="search-result-list">',keywords=this.value.trim().toLowerCase().split(/[\s\-]+/);$resultContent.innerHTML="",this.value.trim().length<=0||(datas.forEach(function(data){var isMatch=!0,data_title=data.title.trim().toLowerCase(),data_content=data.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),data_url=data.url,index_title=-1,index_content=-1,first_occur=-1;if(""!=data_title&&""!=data_content&&keywords.forEach(function(keyword,i){index_title=data_title.indexOf(keyword),index_content=data_content.indexOf(keyword),index_title<0&&index_content<0?isMatch=!1:(index_content<0&&(index_content=0),0==i&&(first_occur=index_content))}),isMatch){str+="<li><a href='"+data_url+"' class='search-result-title'>"+data_title+"</a>";var content=data.content.trim().replace(/<[^>]+>/g,"");if(0<=first_occur){var start=first_occur-30,outLength=78;start<0&&(start=0),start+outLength>content.length&&(content.length<outLength?outLength=content.length-start:start=content.length-outLength);var match_content=content.substr(start,outLength);keywords.forEach(function(keyword){var regS=new RegExp(keyword,"gi");match_content=match_content.replace(regS,'<em class="search-keyword">'+keyword+"</em>")}),str+='<p class="search-result">'+match_content+"...</p>"}str+="</li>"}}),str+="</ul>",$resultContent.innerHTML=str)})}})};