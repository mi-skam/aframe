AFRAME.registerComponent('animation', {
  init: function () {
    var self = this;
    this.time = 0;
    this.animation = AFRAME.ANIME({
      targets: [{ x: -Math.PI / 2, y: 0, z: 0 }],
      x: -Math.PI / 2,
      y: 0,
      z: 2 * Math.PI,
      autoplay: false,
      duration: 20000,
      easing: 'linear',
      loop: true,
      round: false,
      update: function (animation) {
        let value = animation.animatables[0].target;
        self.el.object3D.rotation.set(value.x, value.y, value.z);
      },
    });
    this.animation.began = true;
  },
  tick: function (t, dt) {
    this.time += dt;
    this.animation.tick(this.time);
  },
});
