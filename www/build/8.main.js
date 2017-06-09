webpackJsonp([8],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comics__ = __webpack_require__(278);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsPageModule", function() { return ComicsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComicsPageModule = (function () {
    function ComicsPageModule() {
    }
    return ComicsPageModule;
}());
ComicsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comics__["a" /* ComicsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comics__["a" /* ComicsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comics__["a" /* ComicsPage */]
        ]
    })
], ComicsPageModule);

//# sourceMappingURL=comics.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicsPage = (function () {
    function ComicsPage(navCtrl, navParams, pubilcService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pubilcService = pubilcService;
        this.name = '';
        this.uptime = '-';
        this.banner = '';
        this.url = '';
        this.len = '-';
        this.cod = '0';
        this.iclass = [];
        this.dec = '';
        this.data = {
            'pages': []
        };
        this.name = this.navParams.get('name');
        this.banner = this.navParams.get('banner');
        this.url = this.navParams.get('url');
        this.pubilcService.presentLoadingDefault();
    }
    ComicsPage.prototype.openpage = function (url) {
        this.navCtrl.push('SeePage', {
            url: url + '?p=1'
        });
    };
    ComicsPage.prototype.ionViewDidLoad = function () {
        var _thst = this;
        var link = $("<iframe/>");
        link.attr('id', 'ikmfs');
        link.attr('src', this.url);
        link.appendTo('body');
        var oframe = $("#ikmfs");
        var pages = [];
        oframe[0].onload = function () {
            var ifobj = oframe.contents();
            oframe[0].src = 'about:blank';
            oframe.remove();
            var ele = ifobj.find(".chapter-list li a");
            _thst.banner = ifobj.find(".thumb img").attr('src');
            _thst.dec = ifobj.find("#bookIntro").text();
            _thst.len = ifobj.find("dd").eq(5).text();
            _thst.cod = ifobj.find("dd").eq(4).text();
            _thst.uptime = ifobj.find("dd").eq(6).text();
            _thst.iclass = ifobj.find("dd").eq(3).text().split('/');
            ele.each(function () {
                var iobj = {}, ot = $(this);
                iobj['ititle'] = ot.attr('title');
                iobj['ihref'] = ot.attr('href');
                pages.push(iobj);
            });
            _thst.data['pages'] = pages;
            _thst.pubilcService.presentLoadingDismiss();
        };
    };
    ComicsPage.prototype.ionViewWillLeave = function () {
        var ifs = $("#ikmfs");
        ifs[0].src = 'about:blank';
        ifs.remove();
    };
    //点击到顶部
    ComicsPage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    return ComicsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Content */])
], ComicsPage.prototype, "content", void 0);
ComicsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-comics',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/comics/comics.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n\n    <ion-navbar color="hebar">\n        <ion-title>{{name}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section class="comics-top">\n        <div class="comics-top-bar">\n            <h2 class="fr grade">{{cod}}</h2>\n        </div>\n        <img [src]="banner" />\n        <div class="basics">\n            <p class="title">{{name}}</p>\n            <p>更新至{{len}}</p>\n            <p>更新于{{uptime}}</p>\n            <div class="btm">\n                <div class="btms coll">收藏</div>\n                <div class="btms read">开始阅读</div>\n            </div>\n        </div>\n\n    </section>\n    <div class="wrap">\n        <p class="dec">{{dec}}</p>\n\n        <div class="tag-wrap">\n            <span class="tag" *ngFor="let ic of iclass">{{ic}}</span>\n        </div>\n    </div>\n\n    <div class="wrap">\n\n        <div class="piece-title">\n            <p class="fl">连载(话)</p>\n            <p class="fr">{{uptime}}</p>\n        </div>\n\n        <div class="piece" *ngFor="let item of data[\'pages\']" (click)="openpage(item.ihref);">{{item.ititle}}</div>\n\n    </div>\n    <!--<iframe id="ikmfs" src="http://m.57mh.com/"></iframe>-->\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/comics/comics.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */]])
], ComicsPage);

//# sourceMappingURL=comics.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map