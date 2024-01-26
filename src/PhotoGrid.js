import React, { Component } from 'react'
import PhotoModal from './PhotoModal'
import Button from './Button'


class PhotoGrid extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log("From PhotoGrid", this.props.imgData)
    const imgData = this.props.imgData
    const photoItems = imgData.map((item) =>
      <div className="w3-display-container w3-third" id={item.id} key={item.id}>
        <div className="w3-display-container w3-text-white">
          <img
            onClick={() => {
              console.log(item.url)
              document.getElementById("img01").src = item.url
              document.getElementById("modal01").style.display = "block"
            }}
            src={item.url} alt={''}
          />
          {this.props.authUser && <div className="w3-button w3-display-topright">&times;</div>}
        </div>
      </div>
    )

    return (
      <div className="w3-display-container w3-row">
        {photoItems}
        <PhotoModal />
      </div>
    )
  }
}

export default PhotoGrid
