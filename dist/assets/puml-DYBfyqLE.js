function e(n){switch(n){case"index":return`@startuml
title "Landscape view"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<System>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Пользователь" <<User>> as User
rectangle "==Система" <<System>> as System

User .[#8D8D8D,thickness=2].> System : "<color:#8D8D8D>HTTPS: пользовательские запросы<color:#8D8D8D>"
@enduml
`;case"system":return`@startuml
title "Система"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<SystemUi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Пользователь" <<User>> as User
rectangle "Система" <<System>> as System {
  skinparam RectangleBorderColor<<System>> #3b82f6
  skinparam RectangleFontColor<<System>> #3b82f6
  skinparam RectangleBorderStyle<<System>> dashed

  rectangle "==Пользовательский интерфейс" <<SystemUi>> as SystemUi
}

User .[#8D8D8D,thickness=2].> SystemUi : "<color:#8D8D8D>HTTPS: пользовательские запросы<color:#8D8D8D>"
@enduml
`;default:throw new Error("Unknown viewId: "+n)}}export{e as pumlSource};
