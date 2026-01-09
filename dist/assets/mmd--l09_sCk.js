function e(n){switch(n){case"index":return`---
title: "Landscape view"
---
graph TB
  User[Пользователь]
  System[Система]
  User -. "HTTPS: пользовательские запросы" .-> System
`;case"system":return`---
title: "Система"
---
graph TB
  User[Пользователь]
  subgraph System["Система"]
    System.Ui[Пользовательский интерфейс]
  end
  User -. "HTTPS: пользовательские запросы" .-> System.Ui
`;default:throw new Error("Unknown viewId: "+n)}}export{e as mmdSource};
