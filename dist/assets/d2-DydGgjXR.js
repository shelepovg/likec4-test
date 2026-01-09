function e(n){switch(n){case"index":return`direction: down

User: {
  label: "Пользователь"
}
System: {
  label: "Система"
}

User -> System: "HTTPS: пользовательские запросы"
`;case"system":return`direction: down

User: {
  label: "Пользователь"
}
System: {
  label: "Система"

  Ui: {
    label: "Пользовательский интерфейс"
  }
}

User -> System.Ui: "HTTPS: пользовательские запросы"
`;default:throw new Error("Unknown viewId: "+n)}}export{e as d2Source};
