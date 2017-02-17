import { Component } from '@angular/core';

declare var ymaps: any;

@Component({
	moduleId: module.id,
	selector: 'YaMap',
	templateUrl: 'yamap.component.html'
})
export class YaMapComponent {
	addressA: string;
	addressB: string;
	coordA: any;
	coordB: any;
	myMap: any;
	multiRoute: any;
	constructor(){
		this.addressA = "";
		this.addressB = "";
		this.coordA;
		this.coordB;
		this.myMap;
		this.multiRoute;
		ymaps.ready(this.init.bind(this));
	}

	setAddress(addressA:any, addressB:any, event:any){
		if(addressA && addressB) {
			event.preventDefault();
			console.log(addressA, addressB)

			ymaps.geocode(addressA).then((res:any)=> {
				this.coordA = res.geoObjects.get(0).geometry.getCoordinates()
			})
			ymaps.geocode(addressB).then((res:any)=> {
				this.coordB = res.geoObjects.get(0).geometry.getCoordinates()
			})

			this.myMap.geoObjects.remove(this.multiRoute)
			this.multiRoute = new ymaps.multiRouter.MultiRoute(
				{
					// Описание опорных точек мультимаршрута.
					referencePoints: [addressA, addressB],
					//referencePoints: [coordA, coordB],
					//referencePoints: [[55.743553, 52.39582], [55.798551, 49.106324]],
					params: {results: 2}
				},
				{boundsAutoApply: true}
			)
			this.myMap.geoObjects.add(this.multiRoute)
		}
		return false;
	}

	init() {
		// Создаем карту
		this.myMap = new ymaps.Map('map', {
			center: [55.750625, 37.626],
			zoom: 7,
			controls: []
		}, {
				buttonMaxWidth: 300
		});
		//this.myMap.geoObjects.events.add('boundschange', this.someF.bind(this))
	}

	// someF(){
	// 	console.log("boundschange")
	// 	this.coordA = this.myMap.geoObjects.get(0).properties.get('waypoints')[0].coordinates.concat([]).reverse();
	// 	this.coordB = this.myMap.geoObjects.get(0).properties.get('waypoints')[1].coordinates.concat([]).reverse();

	// 	console.log(this.coordA)
	// 	console.log(this.coordB)
	// 	console.log(this.myMap.geoObjects.getBounds())
	// }
}
