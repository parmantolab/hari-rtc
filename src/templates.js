angular.module("hariRtc").run(["$templateCache", function($templateCache) {$templateCache.put("views/call.html","<ion-content on-scroll=\"updateVideoPosition()\" on-scroll-complete=\"updateVideoPosition()\">\n    <div class=\"calling-container\" ng-if=\"isCalling && !callInProgress\">\n      <p>Calling to <span class=\"balanced\">{{ contactName }}</span>...</p>\n\n      <button class=\"button button-assertive\" ng-click=\"ignore()\">\n        Nevermind\n      </button>\n    </div>\n\n    <div class=\"calling-container\" ng-if=\"!isCalling && !callInProgress\">\n      <p><span class=\"balanced\">{{ contactName }}</span> is calling you</p>\n\n      <button class=\"button button-positive\" ng-click=\"answer()\">\n        Answer\n      </button>\n\n      <button class=\"button button-assertive\" ng-click=\"ignore()\">\n        Ignore\n      </button>\n    </div>\n\n    <div class=\"calling-container\" ng-if=\"callInProgress\">\n      <p>\n        Call in progress...\n      </p>\n\n      <button class=\"button button-assertive\" ng-click=\"end()\">\n        End\n      </button>\n    </div>\n\n    <video-view></video-view>\n\n  </ion-content>");
$templateCache.put("views/select_contact.html","<ion-modal-view>\n  <ion-header-bar class=\"bar-positive\">\n    <h1 class=\"title\">Add Contact to Call</h1>\n      <button class=\"button button-clear\" ng-click=\"closeSelectContactModal()\">\n        Close\n      </button>\n  </ion-header-bar>\n  <ion-content>\n    <ul class=\"list\">\n      <li class=\"item item-button-right\"\n          ng-repeat=\"contact in allContacts | filter:hideCurrentUsers()\">\n        <i class=\"icon ion-record\" style=\"color: green\"></i>\n        {{ contact }}\n        <button class=\"button button-positive\" \n                ng-click=\"addContact(contact)\">\n          <i class=\"icon ion-ios7-telephone\"></i>\n        </button>\n      </li>\n    </ul>\n  </ion-content>\n</ion-modal-view>");}]);