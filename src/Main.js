import React, { Component } from 'react'
import ContactSection from './ContactSection'
import ImageUploadForm from './ImageUploadForm'
import PhotoGrid from './PhotoGrid'
import Footer from './Footer'
import About from './About'
import LoginModal from './LoginModal'
import Button from './Button'
import constants from './constants'
import { firebase, auth } from './firebase'
import { db } from './firebase/firebase'
// const {firebaseConfig} = constants

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

console.log("FirebaseAuth",firebase.auth)
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgData: [],
      aboutText: '',
      authUser: null,
    }
    this.updateImages = this.updateImages.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {

      if (authUser)
        {
          this.setState(() => ({ authUser }))
        } else
        {
          this.setState(() => ({ authUser: null }))
        }
    })

    const dataRef = db.ref()

    const imageURLsRef = db.ref('imageURLs').orderByChild('uploadedAt').limitToLast(3)
    // const data = imageURLsRef.once('value')
      const data = dataRef.once('value')
      .then((snapshot) => {
        const data = snapshot.val()
        const imgUrlData = data.imageURLs
        const aboutData = data.about
        console.log('data.about', data.about.text)

        const compare = (a,b) => {
          if (a.uploadedAt < b.uploadedAt)
            return -1
          if (a.uploadedAt > b.uploadedAt)
            return 1
          return 0
        }

        const keyedImgUrlData = Object.keys(imgUrlData).map(key=>Object.assign({'id': key}, {...imgUrlData[key]}))
        console.log('keyedImgUrlData', keyedImgUrlData)

        // Object.assign({}, ...keyedImgUrlData.map(({uploadedAt, name, foo}) => ({[id]: {name, foo}})))

        const sortedImgData = keyedImgUrlData.sort(compare)

        const slicedImgData = sortedImgData.slice(sortedImgData.length-3)

        this.setState({ imgData: slicedImgData, aboutText: data.about.text})
        // let urlArray = []
        // for (let urlKey in data) {
        //   // urlArray.push(urlData)
        //   console.log('urlKey', data[urlKey].url)
        //   urlArray.push(data[urlKey].url)
        // }
        // return urlArray
      })
      .catch(e => console.log('Error', e))
  }

  updateImages(obj) {
    console.log('updateImgages',obj)
    this.setState(prevState => ({
      imgData: [
        ...prevState.imgData.slice(1),
        obj,
      ]
    }))
  }

  handleLoginClick() {
    this.state.authUser ? auth.doSignOut() : document.getElementById("modal02").style.display = "block"
  }

  handleTextChange(text) {
    this.setState({ aboutText: text })
  }

  render() {
    return (
      <div className='w3-main w3-display-container' style={{marginLeft:'300px'}}>
        {/* Push down content on large screens */}
        <div className="w3-hide-large" style={{marginTop:'83px'}}></div>
        {this.state.authUser &&
          <ImageUploadForm className='w3-display-topleft' updateImages={this.updateImages}/>
        }
        <PhotoGrid
          imgData={this.state.imgData}
          authUser={this.state.authUser}
        />
        <About authUser={this.state.authUser} aboutText={this.state.aboutText} handleTextChange={this.handleTextChange}/>
        <ContactSection />
        <Footer />
        <LoginModal />
        <div  onClick={this.handleLoginClick} className="w3-display-bottomleft w3-padding">
          { this.state.authUser ? <i className="fa fa-toggle-on w3-text-teal"></i> : <i className="fa fa-toggle-off"></i> }
          {/* <Button
            className="w3-button w3-teal w3-circle w3-black w3-opacity"
            buttonText={ this.state.authUser ? <i className="fa fa-toggle-on"></i> : <i className="fa fa-toggle-off"></i> }
            onClick={this.handleLoginClick}
            type='button'
          />*/}
        </div>
      </div>
    )
  }
}

export default Main
