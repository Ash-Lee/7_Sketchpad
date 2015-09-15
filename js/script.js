// 7_Sketchpad
// JavaScript + jQuery

var headerBoxes = 12,
    boxes = 16,
    mainTitle = {
        name: "mainTitle",
        hg1:[43, 44, 45, 46, 48, 55, 67, 68, 69, 70, 79, 91, 103, 104, 105, 106],
        hg2:[37, 38, 40, 41, 42, 43, 45, 48, 49, 52, 57, 60, 61, 64, 69, 70, 71, 72, 73, 76, 81, 84, 85, 88, 93, 96, 97, 100, 101, 102, 103, 105, 108],
        hg3:[42, 43, 44, 45, 54, 57, 62, 63, 64, 66, 67, 68, 69, 71, 72, 78, 81, 90, 93, 102, 105],
        hg4:[39, 40, 41, 42, 44, 47, 51, 56, 58, 61, 63, 64, 65, 66, 68, 69, 78, 80, 81, 90, 92, 94, 99, 100, 101, 102, 104, 107],
        hg5:[37, 38, 39, 40, 42, 43, 44, 46, 47, 48, 49, 55, 58, 61, 62, 63, 64, 67, 70, 73, 79, 82, 85, 91, 94, 97, 98, 99, 100, 103, 106, 107, 108],
        hg6:[37, 39, 42, 51, 54, 63, 64, 65, 66, 75, 78, 87, 90, 97, 99, 102]
    },
    randomTitle = {
        name: "randomTitle",
        hg2:[46, 47, 48, 58, 70, 71, 72, 82, 83, 94, 96, 106],
        hg3:[37, 39, 40, 41, 42, 44, 45, 46, 47, 49, 51, 54, 56, 59, 61, 63, 64, 65, 66, 68, 71, 75, 78, 80, 83, 87, 90, 92, 95, 97, 99, 102, 104, 107],
        hg4:[37, 38, 39, 42, 43, 44, 45, 47, 48, 49, 52, 54, 57, 59, 61, 64, 66, 69, 71, 73, 76, 78, 81, 83, 85, 88, 90, 93, 95, 97, 98, 99, 102, 103, 104, 105, 107],
        hg5:[37, 38, 39, 49, 51, 61, 63, 73, 75, 85, 87, 97, 99],
    },
    fadeTitle = {
        name: "fadeTitle",
        hg3:[39, 40, 41, 42, 44, 45, 46, 47, 51, 56, 59, 63, 64, 65, 66, 68, 69, 70, 71, 75, 80, 83, 87, 92, 95, 99, 104, 107],
        hg4:[37, 38, 39, 40, 43, 44, 45, 46, 49, 53, 55, 61, 65, 67, 68, 69, 70, 73, 77, 79, 85, 89, 91, 97, 98, 99, 100, 103, 104, 105, 106],
    },
    eraseTitle = {
        name: "eraseTitle",
        hg3:[37, 38, 39, 40, 42, 43, 44, 45, 47, 48, 49, 54, 57, 59, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 78, 79, 83, 85, 90, 92, 95, 97, 98, 99, 100, 102, 105, 107],
        hg4:[37, 38, 40, 41, 42, 43, 45, 46, 47, 48, 50, 52, 57, 61, 62, 64, 65, 66, 67, 69, 70, 71, 72, 74, 79, 81, 86, 91, 93, 98, 100, 101, 102, 103, 105, 106, 107, 108],
    },
    mouseDown = false,
    colour = "#605B56",
    fadeMode = false;


$(document).ready( function() {

    // Create initial header grid
    createGrid(headerBoxes, '.header-grid', '.header-grid-box', 'header-grid-box');
    createTitle(mainTitle.name, colour);

    
    // Create initial main grid
    createGrid(boxes, '.grid', '.grid-box', 'grid-box');


    // Paint only when mouse is down (true) 
    $('.grid').on('mousedown', '.grid-box', function() {
        mouseDown = true;
        $(this).css("background-color", colour);
        if (fadeMode) {
            $(this).css("opacity", "-=0.1");
        } else if (fadeMode === false) {
            $(this).css("opacity", "1");
        }
    })
    .on('mouseup', '.grid-box', function() {
        mouseDown = false;
    });
    // paint process
    $('.grid').on('mouseover', '.grid-box', function() {
        if (mouseDown) {
            $(this).css("background-color", colour);
            if (fadeMode) {
                $(this).css("opacity", "-=0.1");
            } else if (fadeMode === false) {
            $(this).css("opacity", "1");
            }
        }
    });
    // Enforce mouse down requirement even if cursor leaves paint area
    $('.main-header, .main-section').mouseup( function() {
        mouseDown = false;
    });


    // New Grid
    $('.new-grid').click( function() {
        boxes = $('input[name="boxes"]').val();
        
        if (boxes === "") {
            boxes = 16
        } else if (boxes < 10) {
            alert('Minimum grid size is 10');
            boxes = 10;
        } else if (boxes > 60) {
            alert('Maximum grid size is 60');
            boxes = 60;
        }

        $('.grid').empty();
        $('.grid-box').css("opacity", "1"); //Reset fade function
        createGrid(boxes, '.grid', '.grid-box', 'grid-box');
        createTitle(mainTitle.name, colour);
    });


    // Colour selection
    $(document).on('click', '.grey', function() {
        colour = "#605B56";
        createTitle(mainTitle.name, colour);
    })
    .on('click', '.blue', function() {
        colour = "#4281A4";
        createTitle(mainTitle.name, colour);
    })
    .on('click', '.green', function() {
        colour = "#96CEB4";
        createTitle(mainTitle.name, colour);
    })
    .on('click', '.red', function() {
        colour = "#FF6F69";
        createTitle(mainTitle.name, colour);
    })
    .on('click', '.orange', function() {
        colour = "#FFBA49";
        createTitle(mainTitle.name, colour);
    })
    .on('click', '.lilac', function() {
        colour = "#E0B5C8";
        createTitle(mainTitle.name, colour);
    });


    // Random hover effect
    $('.random').hover(
        function() {
            var randColour = Math.floor(Math.random() * 5 + 1);
            switch(randColour) {
                case 1:
                    $(this).addClass('blue');
                    break;
                case 2:
                    $(this).addClass('green');
                    break;
                case 3:
                    $(this).addClass('red');
                    break;
                case 4:
                    $(this).addClass('orange');
                    break;
                case 5:
                    $(this).addClass('lilac');
                    break;
            }
        },
        function() {
            $(this).removeClass('blue green red orange lilac');
        }
    );
    // Random
    $(document).on('click', '.random', function() {
        createTitle(randomTitle.name, colour);
        $('.grid-box').addClass('random-effect');

        $('.grid').on('mouseenter', '.random-effect', function() {
            colour = randomColour();
        });
    });


    // Fade
    $(document).on('click', '.fade', function() {
        if (colour === "#F0F0F0") {
            createTitle(fadeTitle.name, "#FFF");
        } else {
            createTitle(fadeTitle.name, colour);
        }
        fadeMode = true;
    });


    // Erase
    $('.erase').click( function() {
        createTitle(eraseTitle.name, "#FFF");
        eraseMode()
    });


    // Turn Random, Fade and Erase off
    $(document).on('click', '.new-grid, .colours, .random, .erase', function() {
        fadeMode = false;
    })
    .on('click', '.new-grid, .colours, .fade, .erase', function() {
        $('.grid-box').removeClass('random-effect');
    })
    .on('click', '.new-grid, .colours, .random, .fade', function() {
        $('.grid-box').removeClass('erase-effect');
    })
    .on('click', '.new-grid, .colours', function() {
        createTitle(mainTitle.name, colour);
    });

}); // (document).ready end



// Functions
function createTitle(title, colour) {
    $('.header-grid-box').css("background-color", "#F0F0F0");   // Reset all boxes in header grid
    for (var square in this[title].hg1) { $('.hg1 div:nth-of-type(' + this[title].hg1[square] + ')').css('background-color', colour); };
    for (var square in this[title].hg2) { $('.hg2 div:nth-of-type(' + this[title].hg2[square] + ')').css('background-color', colour); };
    for (var square in this[title].hg3) { $('.hg3 div:nth-of-type(' + this[title].hg3[square] + ')').css('background-color', colour); };
    for (var square in this[title].hg4) { $('.hg4 div:nth-of-type(' + this[title].hg4[square] + ')').css('background-color', colour); };
    for (var square in this[title].hg5) { $('.hg5 div:nth-of-type(' + this[title].hg5[square] + ')').css('background-color', colour); };
    for (var square in this[title].hg6) { $('.hg6 div:nth-of-type(' + this[title].hg6[square] + ')').css('background-color', colour); };
};


function createGrid(boxes, grid, gridBox, gridBoxClass) {
    // Calculate square grid dimensions
    colour = "#605B56";

    var gridWidth = $(grid).width(),
        gridArea = gridWidth * gridWidth,

        // Number of boxes - pixels
        boxSizePx = gridWidth / boxes,
        boxArea = boxSizePx * boxSizePx,
        boxesTotal = gridArea / boxArea,
    
        // Size of each box as a % (avoids pixel rounding errors)
        boxSizePercent = ((boxSizePx / gridWidth ) * 100) + '%';

    // Set height and width of each box
    // returns null if setTimeout not included
    setTimeout( function() {
        $(gridBox).css({'height': boxSizePercent, 'width': boxSizePercent});
    }, 1);

    // Create grid
    for (var i=0; i<boxesTotal; i+=1) {
        $(grid).append("<div class=\'" + gridBoxClass + "\'></div>");
    }
};


function randomColour() {
    randCol = 'rgb(' + Math.floor(Math.random() * 255 + 1) + ',' + Math.floor(Math.random() * 255 + 1) + ',' + Math.floor(Math.random() * 255 + 1) + ')';
    return randCol; 
};


function eraseMode() {
    colour = "#F0F0F0";
    $('.grid-box').addClass('erase-effect');
    
    $(document).on('mouseenter', '.erase-effect', function() {
        $(this).fadeTo('0', 0.4);
    })
    .on('mouseleave', '.erase-effect', function() {
        $(this).fadeTo('0', 1);
    });
};