import React, { Component } from 'react'
import firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader'
// import 'w3-css/w3.css'

class ImageUploadForm extends Component {
  state = {
    imageFile: '',
    isUploading: false,
    progress: 0,
    imageFileURL: ''
  }

  handleUploadStart = () => this.setState({isUploading: true, progress: 0})

  handleProgress = (progress) => this.setState({progress});

  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    const d = new Date()
    const uploadedAt = d.getTime()
    this.setState({imageFile: filename, progress: 100, isUploading: false});
    firebase.storage().ref('images').child(filename).getDownloadURL()
      .then(url => {
        const imgPayload = {// maybe get rid of this
          url,
          uploadedAt
        }
        this.setState({imageFileURL: url})

        const myRef = firebase.database().ref('imageURLs').push(imgPayload)

        const imgDatum = {
          id: myRef.key,
          url,
          uploadedAt
        }

        this.props.updateImages(imgDatum)
      })
      .catch((error) => {

      })

  }

  render() {
    return (
      <div>
        <form>
          <label>
            <p className='w3-btn w3-deep-orange'>Add an image</p>
            {this.state.isUploading &&
              <p>Progress: {this.state.progress}</p>
            }
            {/* this.state.imageFileURL &&
              <img src={this.state.imageFileURL} />
            */}
            <FileUploader
              hidden
              accept="image/*"
              name="imageFile"
              randomizeFilename
              storageRef={firebase.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </label>

        </form>
      </div>
    )
  }
}

export default ImageUploadForm
