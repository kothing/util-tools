
# CanvasToimage #
a tool of saving or converting canvas to images

## Demo ##
[CanvasToImage](https://missra-kit.github.io/CanvasToImage/)

## Code ##
you can just use it like this  
filename is optional, default is Date.now()
    
    CanvasToImage.saveAsImage(canvasObj, width, height, type, fileName)
    CanvasToImage.saveAsPNG(canvasObj, width, height, fileName)
    CanvasToImage.saveAsJPEG(canvasObj, width, height, fileName)
    CanvasToImage.saveAsGIF(canvasObj, width, height, fileName)
    CanvasToImage.saveAsBMP(canvasObj, width, height, fileName)
    
    CanvasToImage.convertToImage(canvasObj, width, height, type)
    CanvasToImage.convertToPNG(canvasObj, width, height)
    CanvasToImage.convertToJPEG(canvasObj, width, height)
    CanvasToImage.convertToGIF(canvasObj, width, height)
    CanvasToImage.convertToBMP(canvasObj, width, height)
    
## License
MIT
