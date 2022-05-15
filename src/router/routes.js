export default [
  {
    path: "/",
    component: "/",
  },
  {
    path: "/home",
    component: "Home",
    children: [
      {
        path: "a",
        component: "A",
      },
    ],
  },
];
