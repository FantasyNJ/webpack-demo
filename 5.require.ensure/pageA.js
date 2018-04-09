// import './subPageA'
// import './subPageB'

require.include('./moduleA')

require.ensure(['./subPageA'], function(){
    var subPageA = require('./subPageA')
}, 'subPageA')

require.ensure(['./subPageB'], function(){
    var subPageB = require('./subPageB')
}, 'subPageB')

require.ensure( ['lodash'], function(){
    var _ = require('lodash')
    _.join([1,2], 3)
}, 'vendor')



export default 'pageA'