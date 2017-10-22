var app = angular.module('sellapp',[]);

app.controller('sellController',function($scope,$http,$window){
    $scope.sellList = {};
    $scope.sellList = {
        "product": 
        [{
            "image": "100g.jpg",
            "name": "Emas 100g",
            "harga":"100000",
            "jumlah":"0"
        }, {
            "image": "50g.jpg",
            "name": "Emas 50g",
            "harga":"50000",
            "jumlah":"0"
        }, {
            "image": "25g.jpg",
            "name": "Emas 25g",
            "harga":"25000",
            "jumlah":"0"
        }, {
            "image": "10g.jpg",
            "name": "Emas 10g",
            "harga":"10000",
            "jumlah":"0"
        }, {
            "image": "5g.jpg",
            "name": "Emas 5g",
            "harga":"5000",
            "jumlah":"0"
        }, {
            "image": "4g.jpg",
            "name": "Emas 4g",
            "harga":"4000",
            "jumlah":"0"
        }, {
            "image": "3g.jpg",
            "name": "Emas 3g",
            "harga":"3000",
            "jumlah":"0"
        }, {
            "image": "2g.jpg",
            "name": "Emas 2g",
            "harga":"2000",
            "jumlah":"0"
        }, {
            "image": "1g.jpg",
            "name": "Emas 1g",
            "harga":"1000",
            "jumlah":"0"
        }
    ]
    };

    $scope.kurang = function(barang){
        if(barang.jumlah==0){
            alert('Limit')
        }
        else{
            barang.jumlah--
        }
    }

    $scope.tambah = function(barang){
        barang.jumlah++
    }

    $scope.price = 0

});