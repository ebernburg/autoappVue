const car = (name, year, owner, phone, image) => ({
    name, year, owner, phone, image
});

const cars = [
    car('Ford', 2005, 'Max', 111111111, 'images/ford.jpg'),
    car('Subaru', 2015, 'Sergey', 22222222, 'images/subaru.jpg'),
    car('Opel', 2015, 'Igor', 33333333, 'images/opel.jpg'),
    car('Mercedes', 2012, 'Sasha', 444444444, 'images/mercedes.jpg'),
];




new Vue({
    el: '#app',
    data: {
        inputSearch: '',
        car: cars[0],
        cars: cars,
        selectedCarIndex: 0,
        togglePhoneVisibility: false,
        modalVisibility: false,
        logs: [1],
    },
    methods: {
        showDetails:
            function (idx) {
                this.car = cars[idx]
                this.selectedCarIndex = idx
            }
    },
    computed: {
        phoneBtnText() {
            return this.togglePhoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
             return  this.cars.filter(car=> {
                 return  car.name.indexOf(this.inputSearch) > -1

            })
        }
    }
})


