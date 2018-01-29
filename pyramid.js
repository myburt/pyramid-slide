var rangeInput = document.getElementById("rangeInput"),
rangeVal = document.getElementById("rangeVal"),
symbolSelect = document.getElementById("symbolSelect");

rangeVal.innerText = rangeInput.value;
drawPyramid(rangeInput.value, symbolSelect.value)

//event listners.
rangeInput.addEventListener("input", rangeChange);
symbolSelect.addEventListener("change", symbolChange);

function rangeChange()
{
    rangeVal.innerText = rangeInput.value;
    drawPyramid(rangeInput.value, symbolSelect.value);
}

function symbolChange(e)
{
    drawPyramid(rangeInput.value, symbolSelect.value)
}
/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 * with a specified symbol.
 */
function drawPyramid(height, drawSymbol) 
{
    // first, clear the old content
    document.getElementById("pyramidArea").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += drawSymbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        rowElem.className += "text-right";
        document.getElementById("pyramidArea").appendChild(rowElem);
    }
}