window.CategoryAddController = function($scope, $http, $location) {

    var apiUrlGenre = "http://localhost:3000/genres/";

    $scope.onAddGenreForm = function() {

        $scope.checkData = {
            genre_name: false,
            status: false
        }

        let flag = false;

        if(!$scope.value || !$scope.value.genre_name) {
            $scope.checkData.genre_name = true;
            flag = true;
        }

        if(!$scope.value || !$scope.value.status) {
            $scope.checkData.status = true;
            flag = true;
        }

        if(!flag) {
            let newGenre = {
                ...$scope.value
            }
            
            $http.post(
                apiUrlGenre,
                newGenre
                ).then(response=>{
                if(response.status == 201) {
                    alert('Thêm thành công');
                    $location.path('/');
                }
            })
        }
    }
}