var app = angular.module('myApp', [])


app.controller('AlbumCtrl', function($scope) {
  $scope.images = [
    {category : 'High', image : 'images/image1.jpg', description : 'Milky Way Galaxy', stars : '4/5'},
    {category : 'Medium', image : 'images/image2.jpg', description : 'Vibrant Nebulous', stars : '3/5'},
    {category : 'Medium', image : 'images/image3.jpg', description : 'Comet Exposed to Atmosphere', stars : '3/5'},
    {category : 'High', image : 'images/image4.jpg', description : 'Uranus and its Moons', stars : '5/5'},
    {category : 'Low', image : 'images/image5.jpg', description : 'RIngs of Saturn', stars : '1/5'},

  ];
  
  $scope.currentImage = _.first($scope.images);
  
  $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category'));
    
  $scope.setCurrentImage = function(image) {
    $scope.currentImage = image;
  };



});
app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});