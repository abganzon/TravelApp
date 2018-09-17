import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { HttpService } from '../../providers/http-service';
import { Storage } from '@ionic/storage';

import { ImagesProvider } from '../../providers/images/images';
import { ResizePage } from '../../pages/resize/resize';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { GlobalProvider} from '../../providers/global/global';
import { HomePage } from '../home/home';
import { App } from 'ionic-angular';
import { OperatorControlPanelPage } from '../operator-control-panel/operator-control-panel';

@IonicPage()
@Component({
	selector: 'page-add',
	templateUrl: 'add.html',
})


export class AddPage {

	loggedinuser: 			any	= '';
	loggedinuserid: 		any	= '';
	user_id: 				any	= '';
	imageURI: 				any;
	imageFileName:			any;
	isAuthenticated:		any;

	bigImg = null;
	bigSize = '0';
  
	smallImg = null;
	smallSize = '0';


	/**
	* @name image
	* @type String
	* @public
	* @description              Will store the selected image file data (in the form of a base64 data URI)
	*/
	public image : string;



	/**
	* @name isSelected
	* @type Boolean
	* @public
	* @description              Used to switch DOM elements on/off depending on whether an image has been selected
	*/
	public isSelected : boolean 		=	false;



	/**
	* @name _SUFFIX
	* @type String
	* @private
	* @description              Will store the selected image's MimeType
	*/
	private _SUFFIX : string;	
	
	constructor(
		public navCtrl: 			NavController,
		public navParams: 			NavParams,
		public http: 				HttpService,
		private storage: 			Storage,
		private _ALERT: 			AlertController,
		private _IMAGES: 			ImagesProvider,
		private camera: 			Camera,
    public globalProvider:		GlobalProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public appCtrl: App
	){

	}




	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPage');
	    this.loggedinuser = this.globalProvider.getLoggedInUser();
	    this.loggedinuserid = this.globalProvider.getLoggedInUserId();
	    this.user_id = this.globalProvider.getLoggedInUserId();
	    this.isAuthenticated = this.globalProvider.getIsAuthenticated();
  }
  
  
  logout()
  {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.appCtrl.getRootNav().push(HomePage);
            console.log('Close clicked');
            
            let toast = this.toastCtrl.create({
              message: 'Successfully Logout',
              duration: 2000,
              position: 'middle'
            });
        
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
        
            toast.present();

          }
        }
      ]
    });
    alert.present();
  }


	saveTour(f: NgForm) {

		let url = 'http://rides.iothings.asia/public';

		this.http.post(url + '/api/addTourPart', f.value)
			.subscribe(
				data => {
				}, err => console.log('error in post')
		);
		//this.navCtrl.pop();
		//this.navCtrl.setRoot(OperatorControlPanelPage);
	}


	 /**
	* @public
	* @method selectFileToUpload
	* @param event  {any}     	The DOM event that we are capturing from the File input field
	* @description    					Handles the selection of image files from the user's computer,
	*                 					validates they are of the correct file type and displays the
	*									selected image in the component template along with an upload
	* 									button
	* @return {none}
	*/
	 selectFileToUpload(event) : void
	 {
			this._IMAGES
			.handleImageSelection(event)
			.subscribe((res) =>
			{

				 // Retrieve the file type from the base64 data URI string
				 this._SUFFIX 			= res.split(':')[1].split('/')[1].split(";")[0];


				 // Do we have correct file type?
				 if(this._IMAGES.isCorrectFileType(this._SUFFIX))
				 {
					// Hide the file input field, display the image in the component template
					// and display an upload button
					this.isSelected 	= true
					this.image 			= res;
					this.bigImg			= res;
					this.createThumbnail();
					this.image 			= this.smallImg;
				 }

				 // If we don't alert the user
				 else
				 {
					this.displayAlert('You need to select an image file with one of the following types: jpg, gif or png');
				 }
			},
			(error) =>
			{
				 console.dir(error);
				 this.displayAlert(error.message);
			});
	 }



	 /**
		* @public
		* @method uploadFile
		* @description    			Handles uploading the selected image to the remote PHP script
		* @return {none}
		*/
	 uploadFile() : void
	 {
			this.imageFileName = Date.now() + '.' + this._SUFFIX;
			this._IMAGES
			.uploadImageSelection(this.imageFileName, this.smallImg, this._SUFFIX)
			.subscribe((res) =>
			{
				console.log('uploaded image: ' + this.smallImg); 
				this.displayAlert(res.message);
			},
			(error : any) =>
			{
				 console.dir(error);
				 this.displayAlert(error.message);
			});
	 }


	 /**
		* @public
		* @method displayAlert
		* @param message  {string}  The message to be displayed to the user
		* @description    			Use the Ionic AlertController API to provide user feedback
		* @return {none}
		*/
	 displayAlert(message : string) : void
	 {
			let alert : any   = this._ALERT.create({
				 title 		: 'Look4Rides',
				 subTitle 	: message,
				 buttons 	: ['Ok']
			});
			alert.present();
	 }


	showResize(){
		this.navCtrl.push(ResizePage);
	}



	loadImage() {
		const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
		  correctOrientation: true,
		  allowEdit: false
		};

	
		this.camera.getPicture(options).then(imageData => {
		  let base64data = 'data:image/jpeg;base64,' + imageData;
		  this.bigImg = base64data;
		  this.bigSize = this.getImageSize(this.bigImg);
		  this.createThumbnail();
		}, err => {
		  console.log('gallery error: ', err);
		});
	  }
	
	  createThumbnail() {
		this.generateFromImage(this.bigImg, 434, 434, 0.9, data => {
		  this.smallImg = data;
		  this.smallSize = this.getImageSize(this.smallImg);
		});
	  }
	
	  generateFromImage(img, MAX_WIDTH: number = 700, MAX_HEIGHT: number = 434, quality: number = 1, callback) {
		var canvas: any = document.createElement("canvas");
		var image = new Image();
	
		image.onload = () => {
		  var width = image.width;
		  var height = image.height;
	
		  if (width > height) {
			if (width > MAX_WIDTH) {
			  height *= MAX_WIDTH / width;
			  width = MAX_WIDTH;
			}
		  } else {
			if (height > MAX_HEIGHT) {
			  width *= MAX_HEIGHT / height;
			  height = MAX_HEIGHT;
			}
		  }
		  canvas.width = width;
		  canvas.height = height;
		  var ctx = canvas.getContext("2d");
	
		  ctx.drawImage(image, 0, 0, width, height);
	
		  // IMPORTANT: 'jpeg' NOT 'jpg'
		  var dataUrl = canvas.toDataURL('image/jpeg', quality);
	
		  callback(dataUrl)
		}
		image.src = img;
	  }
	
	  getImageSize(data_url) {
		var head = 'data:image/jpeg;base64,';
		return ((data_url.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
	  }
}
