// INTERFACE TO SET PROPERTIES FOR THE ADDMARKER METHOD PARAMETER
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(divId) as HTMLElement,
            {
                zoom: 2,
                center: {
                    lat: 0,
                    lng: 0
                }
            }
        );
    }

    addMarker(mappable: Mappable): void {
        // CREATE MARKER
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        // ADD MARKER EVENT LISTENER
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}
