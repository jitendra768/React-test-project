let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "black",
        "type": "snake mastang",
        "registration": new Date('2019-03-03'),
        "capacity": 2
    },
    {
        "color": "white",
        "type": "bmw",
        "registration": new Date('2020-04-03'),
        "capacity": 4
    }
  ]

  let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
  }


//   To add an object at the first position, use Array.unshift.
cars.unshift(car)  

// To add an object at the last position, use Array.push
cars.push(car)
console.log("🚀 ~ cars:", cars)
