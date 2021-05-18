import { connect } from 'react-redux';
import News from './News';
import { addNewsAC } from '../../redux/news-reducer';


let mapStateToProps = (state) => {
  return {
    newsData: state.newsPage.newsData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNews: () => {
      dispatch(addNewsAC())
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (News);