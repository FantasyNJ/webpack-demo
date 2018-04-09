import * as _ from 'lodash'


import(/* webpackChunkName: 'subPageA' */ './subPageA' ).then( (result) => {
    console.log(result)
} )

import(/* webpackChunkName: 'subPageB' */ './subPageB' ).then( (result) => {
    console.log(result)
} )

export default 'pageB'