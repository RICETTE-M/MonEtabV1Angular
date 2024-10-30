export const environmentProd={

  baseUrls: "http://localhost:8080/api",
  endPoint: {
    login:"authenticate",
    student: {
      getAll: "students",
      getOne: "students",
      create: "students",
      delete: "students"
    },
    teacher: {
      getAll: "teachers",
      getOne: "teachers",
      create: "teachers",
      delete: "teachers"
    },
    user: {
      getAll: "users",
      getOne: "users",
      create: "users",
      delete: "users"
    },
  }

  /*baseUrls: "http://localhost:8080/api",
  endPoint:{
    students:{
      getAll:"students",
      getBySlug:"students/slug",
      getOne:"students",
      create:"students",
      update:"students",
      delete:"students",
    },

    teachers:{
      getAll:"teachers",
      getBySlug:"teachers/slug",
      getOne:"teachers",
      create:"teachers",
      update:"teachers",
      delete:"teachers",
    },
    users:{
      getAll:"users",
      getBySlug:"users/slug",
      getOne:"users",
      create:"users",
      update:"users",
      delete:"users",
    },

  }*/
}



