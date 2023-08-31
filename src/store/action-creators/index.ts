import * as MainActionCreators from './main'
import * as GameActionCreators from './game'

export default {
    ...MainActionCreators,
    ...GameActionCreators
}