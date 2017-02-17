"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var YaMapComponent = (function () {
    function YaMapComponent() {
        this.addressA = "";
        this.addressB = "";
        this.coordA;
        this.coordB;
        this.myMap;
        this.multiRoute;
        ymaps.ready(this.init.bind(this));
    }
    YaMapComponent.prototype.setAddress = function (addressA, addressB, event) {
        var _this = this;
        if (addressA && addressB) {
            event.preventDefault();
            console.log(addressA, addressB);
            ymaps.geocode(addressA).then(function (res) {
                _this.coordA = res.geoObjects.get(0).geometry.getCoordinates();
            });
            ymaps.geocode(addressB).then(function (res) {
                _this.coordB = res.geoObjects.get(0).geometry.getCoordinates();
            });
            this.myMap.geoObjects.remove(this.multiRoute);
            this.multiRoute = new ymaps.multiRouter.MultiRoute({
                // Описание опорных точек мультимаршрута.
                referencePoints: [addressA, addressB],
                //referencePoints: [coordA, coordB],
                //referencePoints: [[55.743553, 52.39582], [55.798551, 49.106324]],
                params: { results: 2 }
            }, { boundsAutoApply: true });
            this.myMap.geoObjects.add(this.multiRoute);
        }
        return false;
    };
    YaMapComponent.prototype.init = function () {
        // Создаем карту
        this.myMap = new ymaps.Map('map', {
            center: [55.750625, 37.626],
            zoom: 7,
            controls: []
        }, {
            buttonMaxWidth: 300
        });
        //this.myMap.geoObjects.events.add('boundschange', this.someF.bind(this))
    };
    YaMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'YaMap',
            templateUrl: 'yamap.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], YaMapComponent);
    return YaMapComponent;
}());
exports.YaMapComponent = YaMapComponent;
//# sourceMappingURL=yamap.component.js.map