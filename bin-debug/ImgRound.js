var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ImgRound = (function (_super) {
    __extends(ImgRound, _super);
    function ImgRound() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ImgRound.prototype.onAddToStage = function (event) {
        var imgLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, this.imgLoadHandler, this);
        imgLoader.load("resource/man.jpg");
    };
    ImgRound.prototype.imgLoadHandler = function (evt) {
        var bmd = evt.currentTarget.data;
        /*** 本示例关键代码段开始 ***/
        /// 将已加载完成的图像显示出来
        var bird = new egret.Bitmap(bmd);
        bird.x = 100;
        bird.y = 100;
        this.addChild(bird);
        /*** 本示例关键代码段结束 ***/
        /// 为定位设置基准点(即锚点)
        bird.anchorOffsetX = bmd.width / 2;
        bird.anchorOffsetY = bmd.height / 2;
        bird.x = this.stage.stageWidth * .5;
        bird.y = this.stage.stageHeight * .5;
        /// 提示信息
        this._txInfo = new egret.TextField;
        this.addChild(this._txInfo);
        this._txInfo.size = 28;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        this._txInfo.text =
            "轻触屏幕调整显示对象位置";
        this._bgInfo = new egret.Shape;
        this.addChildAt(this._bgInfo, this.numChildren - 1);
        this._bgInfo.x = this._txInfo.x;
        this._bgInfo.y = this._txInfo.y;
        this._bgInfo.graphics.clear();
        this._bgInfo.graphics.beginFill(0xffffff, .5);
        this._bgInfo.graphics.drawRect(0, 0, this._txInfo.width, this._txInfo.height);
        this._bgInfo.graphics.endFill();
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            bird.x = evt.localX;
            bird.y = evt.localY;
        }, this);
    };
    return ImgRound;
}(egret.DisplayObjectContainer));
__reflect(ImgRound.prototype, "ImgRound");
