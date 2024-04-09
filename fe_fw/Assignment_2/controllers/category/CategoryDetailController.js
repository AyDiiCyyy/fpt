window.CategoryDetailController = function($location, $http, $scope, $routeParams) {
    var apiUrl = 'http://localhost:3000/genres';
    var idGenre = $routeParams.id;

    $http.get(`${apiUrl}/${idGenre}`).then(response=>{
        if(response.status == 200) {
            $scope.genre = response.data;
        }
    })
}