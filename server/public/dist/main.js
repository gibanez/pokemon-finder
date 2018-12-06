(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  flex: 1 1 auto;\n}\n\n\n.header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n\nmat-sidenav {\n  width: 100%;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCOzs7QUFHRDtFQUNFLG9GQUFvRjtFQUNwRix1QkFBdUI7Q0FDeEI7OztBQUVEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cblxuLmhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"push\" [(opened)]=\"opened\" position=\"end\">\n  \t<mat-toolbar color=\"primary\" class=\"mat-elevation-z2\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>arrow_back</mat-icon>\n      </button>\n\t\tDetail\n  \t</mat-toolbar>\n    \n    <app-pokemon-detail [pokemon]=\"pokemon\"></app-pokemon-detail>\n\n    \n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n<mat-toolbar color=\"primary\" class=\"mat-elevation-z8\">\n  <mat-toolbar-row>\n    <span>Pokemon finder</span>\n  </mat-toolbar-row>\n\n\t  <mat-toolbar-row>\n\t    <mat-form-field style=\"width: 100%;\">\n\t\t<mat-label>Search</mat-label>\n\t\t<input matInput placeholder=\"Enter pokemon name...\" [(ngModel)]=\"filter\" (keyup.enter)=\"search()\">\n\t\t</mat-form-field> \n  </mat-toolbar-row>\n\n</mat-toolbar>\n\n<app-pokemon-list \n  [pokemons]=\"pokemons\" \n  [length]=\"total\" \n  (onPokemonSelected)=\"detail($event)\"\n  (onPage)=\"paginate($event)\"\n></app-pokemon-list>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/pokemon.service */ "./src/app/service/pokemon.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(pokemonService) {
        this.pokemonService = pokemonService;
        this.title = 'client';
        this.opened = false;
        this.total = 0;
        this.perPage = 10;
        this.filter = null;
    }
    AppComponent.prototype.detail = function (pokemon) {
        var _this = this;
        this.opened = true;
        this.pokemon = null;
        this.pokemonService.detail(pokemon).subscribe(function (response) {
            console.info(response);
            _this.pokemon = response;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.search();
        //this.listPokemon(0, this.perPage, this.filter)
    };
    AppComponent.prototype.listPokemon = function (page, limit, filter) {
        var _this = this;
        this.pokemonService.search(filter, page, limit).subscribe(function (response) {
            var data = response.data, page = response.page, perPage = response.perPage, total = response.total;
            _this.pokemons = data;
            _this.total = total;
            _this.perPage = perPage;
        });
    };
    AppComponent.prototype.search = function () {
        this.listPokemon(1, this.perPage, this.filter);
    };
    AppComponent.prototype.paginate = function (event) {
        console.info(event);
        this.listPokemon(event.pageIndex + 1, this.perPage, this.filter);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"]])
    ], AppComponent);
    return AppComponent;
}());

/*
  

  detail(pokemon)
  {
    //alert(123)
    this.opened = true;
    this.pokemonService.detail(pokemon).subscribe((response:any) => {
      console.info(response);
      this.pokemon = response;
    })
  }

  */


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/pokemon-list/pokemon-list.component */ "./src/app/component/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var _component_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/pokemon-detail/pokemon-detail.component */ "./src/app/component/pokemon-detail/pokemon-detail.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _component_pokemon_list_pokemon_list_component__WEBPACK_IMPORTED_MODULE_8__["PokemonListComponent"],
                _component_pokemon_detail_pokemon_detail_component__WEBPACK_IMPORTED_MODULE_9__["PokemonDetailComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/pokemon-detail/pokemon-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/pokemon-detail/pokemon-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n\tpadding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Bva2Vtb24tZGV0YWlsL3Bva2Vtb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcG9rZW1vbi1kZXRhaWwvcG9rZW1vbi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcblx0cGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/pokemon-detail/pokemon-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/pokemon-detail/pokemon-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pokemon\">\n\t<mat-tab-group>\n\t  <mat-tab label=\"Info\">\n\t  \t<div class=\"content\">\n\t\t\t<h1>{{pokemon.info.name}}</h1>\n\t\t\t<mat-grid-list cols=\"2\" rowHeight=\"3:1\">\n\t\t\t  <mat-grid-tile><img src=\"{{pokemon.sprites.front}}\"/></mat-grid-tile>\n\t\t\t  <mat-grid-tile>\n\t\t\t  \t<p>height: {{pokemon.info.height}}</p>\n\t\t\t  \t\n\t\t\t\t</mat-grid-tile>\n\t\t\t  <mat-grid-tile><img src=\"{{pokemon.sprites.back}}\"/></mat-grid-tile>\n\t\t\t  <mat-grid-tile>\n\t\t\t  \t<p>weight: {{pokemon.info.weight}}</p>\n\t\t\t  </mat-grid-tile>\n\t\t\t</mat-grid-list>\n\t\t</div>\n\t  </mat-tab>\n\t  <mat-tab label=\"Stats\">\n\t  \t<div class=\"content\">\n\t\t  \t<p *ngFor=\"let stat of pokemon.stats\">\n\t\t\t  <span [matBadge]=\"stat.value\" matBadgeOverlap=\"false\">{{stat.name}}</span>\n\t\t\t</p>\n\t\t</div>\n\t  </mat-tab>\n\t  <mat-tab label=\"Moves\">\n\t  \t<div class=\"content\">\n\t\t\t\n\t\t  \t<mat-chip-list>\n\t  \t\t\t<mat-chip *ngFor=\"let move of pokemon.moves\">{{move}}</mat-chip>\n\t\t\t</mat-chip-list>\n\t  \t</div>\n\t  </mat-tab>\n\t</mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/component/pokemon-detail/pokemon-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/pokemon-detail/pokemon-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: PokemonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailComponent", function() { return PokemonDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PokemonDetailComponent = /** @class */ (function () {
    function PokemonDetailComponent() {
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PokemonDetailComponent.prototype, "pokemon", void 0);
    PokemonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-detail',
            template: __webpack_require__(/*! ./pokemon-detail.component.html */ "./src/app/component/pokemon-detail/pokemon-detail.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-detail.component.css */ "./src/app/component/pokemon-detail/pokemon-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());



/***/ }),

/***/ "./src/app/component/pokemon-list/pokemon-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/pokemon-list/pokemon-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nmat-list-item:hover {\n  background-color: #CCC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Bva2Vtb24tbGlzdC9wb2tlbW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcG9rZW1vbi1saXN0L3Bva2Vtb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/pokemon-list/pokemon-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/pokemon-list/pokemon-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n    <mat-list-item *ngFor=\"let pokemon of pokemons\" role=\"option\" (click)=\"pokemonSelected(pokemon)\">\n      <img matListAvatar src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{pokemon.reference_id}}.png\" alt=\"...\">\n      <h3 matLine> {{pokemon.name}} </h3>\n    </mat-list-item>\n  </mat-list>\n\n<mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"paginate($event)\">\n</mat-paginator>"

/***/ }),

/***/ "./src/app/component/pokemon-list/pokemon-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/pokemon-list/pokemon-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent() {
        this.length = 0;
        this.pageSize = 10;
        this.onPokemonSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PokemonListComponent.prototype.ngOnInit = function () { };
    PokemonListComponent.prototype.pokemonSelected = function (pokemon) {
        this.onPokemonSelected.emit(pokemon);
    };
    PokemonListComponent.prototype.paginate = function (event) {
        this.onPage.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PokemonListComponent.prototype, "pokemons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PokemonListComponent.prototype, "length", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PokemonListComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PokemonListComponent.prototype, "onPokemonSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PokemonListComponent.prototype, "onPage", void 0);
    PokemonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pokemon-list',
            template: __webpack_require__(/*! ./pokemon-list.component.html */ "./src/app/component/pokemon-list/pokemon-list.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-list.component.css */ "./src/app/component/pokemon-list/pokemon-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PokemonListComponent);
    return PokemonListComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                MODULES
            ],
            exports: [
                MODULES
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/service/pokemon.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/pokemon.service.ts ***!
  \********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.url = '';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    PokemonService.prototype.search = function (term, offset, limit) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        if (term) {
            params = params.append('q', term);
        }
        return this.http.get(this.url + '/pokemon', { params: params });
    };
    PokemonService.prototype.detail = function (pokemon) {
        return this.http.get(this.url + '/pokemon/' + pokemon.id);
    };
    PokemonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PokemonService);
    return PokemonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://127.0.0.1:3333'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gibanez/node-projects/pokemon-finder/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map