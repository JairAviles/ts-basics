import _ from 'lodash'

const data = [
  {
    username: 'javiles',
    role: 'admin'
  },
  {
    username: 'jeusebio',
    role: 'contributor'
  },
  {
    username: 'alinech',
    role: 'admin'
  }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)
