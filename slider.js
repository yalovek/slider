(function () {
  'use strict';

  var Slider = function () {
    this.initialize.apply(this, arguments);
  };

  Slider.prototype = {
    initialize: function (slider) {
      this.slider = slider;
      this.ul = this.slider.children[0];
      this.li = this.ul.children;
      this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';
      this.currentIndex = 0;
      this.setBtnPrev();
      this.setBtnNext();
    },

    goTo: function (index) {
      if (index < 0) {
        index = this.li.length - 1
      }
      else if (index > this.li.length - 1) {
        index = 0;
      }

      this.ul.style.left = '-' + (100 * index) + '%';
      this.currentIndex = index;
    },

    goToPrev: function () {
      this.goTo(this.currentIndex - 1);
    },

    goToNext: function () {
      this.goTo(this.currentIndex + 1);
    },

    setBtnPrev: function () {
      var self = this;

      this.slider.getElementsByClassName('prev')[0].addEventListener('click', function (e) {
        e.preventDefault();
        self.goToPrev();
      });
    },

    setBtnNext: function () {
      var self = this;

      this.slider.getElementsByClassName('next')[0].addEventListener('click', function (e) {
        e.preventDefault();
        self.goToNext();
      });
    }
  };

  var el = document.getElementsByClassName('slider')[0],
      slider = new Slider(el);
})();
