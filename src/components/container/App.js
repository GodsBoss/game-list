import Container from '../presentational/App'
import { connect } from 'react-redux'

const App = connect((state) => state)(Container)

export default App
