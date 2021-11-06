$(function () {
    //$('#foo').rainbow({ animate: true, animateInterval: 1000, colors: ['#FF0000', '#f26522', '#fff200', '#00a651', '#28abe2', '#2e3192', '#6868ff'] });
    //$('#bar').rainbow({ animate: true, animateInterval: 50, pauseLength: 500, pad: true, colors: ['rgb(153, 204, 255);', 'rgb(173, 224, 255);', 'rgb(193, 244, 255);', 'rgb(213, 264, 255);', 'rgb(193, 244, 255);', 'rgb(173, 224, 255);', 'rgb(153, 204, 255);'] });
    //$('#baz').rainbow({ animate: true, animateInterval: 10, colors: ['#FF0000', '#f26522', '#fff200', '#00a651', '#28abe2', '#2e3192', '#6868ff'] });
     

});



$(document).ready(function () {
    $('#txt-slide-a').rainbow({
        animate: true, animateInterval: 50, pauseLength: 10, pad: true,
        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffe6e6', '#ffe6e6', '#ffcccc', '#ffcccc', '#ffb3b3', '#ffb3b3', '#ff8f8f', '#ff8f8f', '#ff7878', '#ff7878', '#fc5d5d', '#fc5d5d', '#ff4747', '#ff4747', '#ff2929', '#ff2929', '#ff0000', '#ff0000', '#000000', '#ffffff']
    });
    $('#txt-slide-b').rainbow({
        animate: true, animateInterval: 50, pauseLength: 10, pad: true,
        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffe6e6', '#ffe6e6', '#ffcccc', '#ffcccc', '#ffb3b3', '#ffb3b3', '#ff8f8f', '#ff8f8f', '#ff7878', '#ff7878', '#fc5d5d', '#fc5d5d', '#ff4747', '#ff4747', '#ff2929', '#ff2929', '#ff0000', '#ff0000', '#000000', '#ffffff']
    });
    $('#txt-slide-c').rainbow({
        animate: true, animateInterval: 50, pauseLength: 10, pad: true,
        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffe6e6', '#ffe6e6', '#ffcccc', '#ffcccc', '#ffb3b3', '#ffb3b3', '#ff8f8f', '#ff8f8f', '#ff7878', '#ff7878', '#fc5d5d', '#fc5d5d', '#ff4747', '#ff4747', '#ff2929', '#ff2929', '#ff0000', '#ff0000', '#000000', '#ffffff']
    });
    $('#txt-slide-d').rainbow({
        animate: true, animateInterval: 50, pauseLength: 10, pad: true,
        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffe6e6', '#ffe6e6', '#ffcccc', '#ffcccc', '#ffb3b3', '#ffb3b3', '#ff8f8f', '#ff8f8f', '#ff7878', '#ff7878', '#fc5d5d', '#fc5d5d', '#ff4747', '#ff4747', '#ff2929', '#ff2929', '#ff0000', '#ff0000', '#000000', '#ffffff']
    });
    var sss = document.getElementsByName("test");
    $(sss[1]).rainbow({
        animate: true, animateInterval: 50, pauseLength: 1000, pad: true,
        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffe6e6', '#ffe6e6', '#ffcccc', '#ffcccc', '#ffb3b3', '#ffb3b3', '#ff8f8f', '#ff8f8f', '#ff7878', '#ff7878', '#fc5d5d', '#fc5d5d', '#ff4747', '#ff4747', '#ff2929', '#ff2929', '#ff0000', '#ff0000', '#000000', '#ffffff']
    });
});
