import React, { Component } from 'react';

class DecideActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      error: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude
        });
      },
      (err) => {
        console.log(err);
        this.setState({
          error: 'Kullanici lokasyon bilgisini paylasmadi.'
        });
      }
    );
  }

 
  //state her yenilemeden sonra sıfırla
  componentWillUnmount() {
    this.setState({
      latitude: 0
    });
  }

  //mevsimi al,activity belirle
  decideActivity(lat) {
    //mevsimi al
    const currentMonth = new Date().getMonth();
    const summer = {
      text: 'Yuzme zamani',
      iconName: 'sun'
    };
    const winter = {
      text: 'Snowboard\'a gidebilirsin.',
      iconName: 'snowflake'
    };

    if (lat < 0) {//lat 0dan küçükse güney yarım kürede
      //Guney yarimkure
      return currentMonth > 5 && currentMonth < 8 ? winter : summer;
    } else {
      //kuzey yarim kure
      return currentMonth > 8 || currentMonth < 5 ? winter : summer
    }
  }

  render() {
    const { latitude, error } = this.state;
    //hata yok
    if (latitude && !error) {
      //fonksiyondan çıkan değeri buraya atıyoz. winter,summer
      const activity = this.decideActivity(latitude);
      return (
        
          <h2 className="ui header">
            <i className={`${activity.iconName} outline icon`}></i>
            <div className="content">
              {activity.text}
            </div>
          </h2>
       
      )//hata var
    } else if (!latitude && error) {
      return (
        <div>
          Hata: {error}
        </div>
      )
    }
    //üstte hiç bir duruma girmezse buraya giricek
    return (
     <div>
		 Load....
	 </div>
    )
  }
}

export default DecideActivity;
