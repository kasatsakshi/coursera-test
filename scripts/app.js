(function()
{
    'use strict';
    angular.module('appModule',[])
    .controller('lunchController',lunchController);
    lunchController.$inject = ['$scope'];

    function lunchController($scope)
    {
        $scope.lunch='';
        $scope.isMuch=function()
        {
            if($scope.lunch.toString()=='')
            {
                $scope.result='Please enter some data';
            }
            else
            {
                var lunchArray=$scope.lunch.toString().split(',');
                var lunchCount = lunchArray.length;
                if(lunchArray.length>3)
                {
                    if(trimmedCount(lunchArray)>3)
                    {
                        $scope.result="Too much!";
                    }
                    else
                    {
                        $scope.result="Enjoy"
                    }
                }
                else
                {
                    $scope.result="Enjoy"
                }
            }   
        };
    };

    //returns the actual lunch count after checking for empty strings
    function trimmedCount(lunchArray)
    {
        var lunchCount=lunchArray.length;
        for(var itr=0;itr<lunchArray.length;itr++)
        {
            var tempString=lunchArray[itr].trim();
            if(tempString=='')
            {
                lunchCount--;
            }
        }
        return lunchCount;
    }
})();

//minified javascript code
//!function(){"use strict";function a(a){a.lunch="",a.isMuch=function(){if(""==a.lunch.toString())a.result="Please enter some data";else{var c=a.lunch.toString().split(",");c.length;c.length>3&&b(c)>3?a.result="Too much!":a.result="Enjoy"}}}function b(a){for(var b=a.length,c=0;c<a.length;c++){var d=a[c].trim();""==d&&b--}return b}angular.module("appModule",[]).controller("lunchController",a),a.$inject=["$scope"]}();