window.CategoryEditController = function($http, $scope, $location, $routeParams){
    var apiUrl = 'http://localhost:3000/genres';
    var idGenre = $routeParams.id;

    $scope.getGenreByID = function() {
        $http.get(`${apiUrl}/${idGenre}`).then(response=>{
            if(response.status == 200) {
                $scope.value = response.data;
            }
        })
    }

    $scope.getGenreByID();

    $scope.onUpdateGenre = function(id) {

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
            let updateGenre = {
                ...$scope.value
            }
            $http.put(`${apiUrl}/${id}`, updateGenre).then(response=>{
                if(response.status == 200) {
                    alert('Sửa thành công');
                    $location.path('/');
                }
            })
        }
    }
}