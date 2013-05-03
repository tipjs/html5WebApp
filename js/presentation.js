var activePageId; 

$(document).on("impress:stepenter", function(){
    console.log("impress:stepenter:" + window.location.hash);
    activePageId = window.location.hash.replace("#/","");
    executePageHandler( activePageId );
})

$(document).on("impress:stepleave", function(){
    console.log("impress:stepleave:" + +window.location.hash);
})

function executePageHandler( pageName ){
    var handler = pageAnimationHandler.getHandler( pageName );
    if( typeof handler === "function" ){
        handler();
    }
}

//page animation handler를 관리하는 object
var pageAnimationHandler = {
    handlers: [],
    getHandler: function( name ){
        return this.handlers[ name ];
    },
    setHandler: function( name, handler ){
        this.handlers[ name ] = handler;
    },
    init: function( handlerObj ){
        for( a in handlerObj ){
            this.handlers[ a ] = handlerObj[a];
        }
    }
}

//page 별 animation hanlder를 기술 후 일괄 등
pageAnimationHandler.init({
    tstore30: function(){
        $('#tstore30 iframe').each( function( index, elem ){
            $(this).attr( "src", $( this ).attr( 'data-src') );
        });
    },
    linkedinIssue: function(){
        $('#linkedinIssue img').off().on('click', function(){
            alert("제대로 된 Tool이 없어요!");
        });
    },
    timeline: function(){
        $('#timeline .timelineImg').off().on('click', function(){
            $(this).toggleClass('moveUp');
        });
    },
    continuousPainting: function(){
        $('#continuousPainting .contImg').off().on('click', function(){
            $('#continuousPainting .contImg2').toggleClass('moveUp');
        });
    },
    useTransitionbyInspector: function(){
        $('#useTransitionbyInspector .leftImg').off().on('click', function(){
            $('#useTransitionbyInspector .leftImg').toggleClass('scaleUp2x');
        });
        $('#useTransitionbyInspector .rightImg').off().on('click', function(){
            $('#useTransitionbyInspector .rightImg').toggleClass('scaleUp2x');
        });
    },
    paintingPath: function(){
        $('#paintingPath .helloWorld').off().on('click', function(){
            $('#paintingPath .helloWorld').toggleClass('rotateImg');
        });
    }
});

//display clock
new imageclock.display()