const data = [
  {
    title:
      "认认真真编程，踏踏实实做人；静坐常思己过，闲谈不论人非；希望使用vue-admin-beautiful框架的每个人，无论过程怎样，结局都是美好的。。。",
    closable: false,
    type: "success",
  },
  {
    title:
      "作者寄语：感谢Star，感恩相遇，愿世间美好与我们环环相扣，加油！屏幕前的我们，打破桎梏，坚守初心。其实人生改变命运的机会并没有太多，我们并不是不优秀，我们也并不是一无是处，我们也希望驻足山巅被众人仰望，也许我们缺少的只是一个机会，缺少的只是生命中的导师，我希望这个框架帮助到更多的人，希望有一天，我们面试的时候不再胆怯，希望有一天别人看到的不仅仅是你的努力，还有你的功成名就，出人头地。",
    closable: false,
    type: "warning",
  },
  {
    title:
      "鸣谢：尤雨溪、蒋豪群、element-ui、唐金州、花裤衩、贤心、iView、uView的开源项目给我带来的很多的灵感，弱小的人才习惯嘲讽与否定，内心强大的人从不吝啬赞美与鼓励，人生在世，得到每个人的认可几乎是痴心妄想，我也只是一条略懂前端的咸鱼，可我仍一直怀揣着改变世界的梦想，希望我们每个人，不管过程怎样，结局都是美好的。",
    closable: false,
    type: "success",
  },
  {
    title:
      "随笔：我一直在寻找开源的真谛，我一直再想什么是开源，我一开始觉得免费就是开源，好像又不是。我理解的开源是：你也开源，我也开源，大家一起贡献，相互帮助。我最担心的事情是：我一个小人物，去伺候一众的伸手党，我想，这不是开源该有的氛围。我还太年轻，不懂什么是格局，我只知道，无私的帮助他人，能给我带来快乐，却不能给我带来收入，当然，有时候，快乐对我来说就已经足够了。可惜我是一个人，没有精力帮助到每一个人，可惜这个世界需要赚钱，才能过上平凡的生活，可惜了我的梦想，这个物欲横流的时代，理想主义的我们，即使内心坚决如铁，也似乎寸步难行。",
    closable: false,
    type: "success",
  },
];

export default [
  {
    url: "/notice/getList",
    type: "post",
    response: () => {
      return {
        code: 200,
        msg: "success",
        data,
      };
    },
  },
];