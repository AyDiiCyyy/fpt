window.CategoryListController = function ($scope, $location, $http) {
    var apiUrlGenres = "http://localhost:3000/genres/";

    $scope.getData = function () {
        $http.get(apiUrlGenres).then(response => {
            $scope.genres = response.data;
        });
    };

    $scope.getData();

    $scope.onDeleteGenre = function (id) {
        let confirm = window.confirm('Bạn có muốn xóa không?');
        if (confirm) {
            $http.delete(`${apiUrlGenres}${id}`).then(function (response) {
                if (response.status == 200) {
                    $scope.getData();
                    alert('Xóa thành công');
                }
            })
        }
    }

    $scope.onAddGenre = function() {
        $location.path('/category/add');
    }
    $scope.onDetailGenre = function(id) {
        $location.path(`/category/detail/${id}`);
    }
    $scope.onEditGenre = function(id) {
        $location.path(`/category/edit/${id}`);
    }
}   